import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRoutes.js";
import connectDB from "./config/db.js";
import { fileURLToPath } from "url";

dotenv.config();
connectDB(); // 👈 VERY IMPORTANT

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(cors({ origin: allowedOrigins, credentials: true }));
app.options("*", cors({ origin: allowedOrigins, credentials: true }));

app.use("/auth", authRouter);


app.use(express.json());
app.use(cookieParser());

// frontend
const frontendPath = path.join(__dirname, "../notes-app/dist");
app.use(express.static(frontendPath));
app.get("*", (req, res) =>
  res.sendFile(path.join(frontendPath, "index.html"))
);

const PORT = process.env.PORT || 8120;
app.listen(PORT, () => console.log("Server running on " + PORT));
