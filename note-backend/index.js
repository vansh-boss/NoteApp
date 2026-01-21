const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
import usersRouter from "./routers/users.js";


const app = express();
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://noteapp-6-mqwv.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.options("*", cors({ origin: allowedOrigins, credentials: true }));


app.use("/auth", usersRouter);

// serve frontend
const frontendPath = path.join(__dirname, "../notes-app/dist");
app.use(express.static(frontendPath));
app.get("*", (req, res) =>
  res.sendFile(path.join(frontendPath, "index.html"))
);

const PORT = process.env.PORT || 8120;
app.listen(PORT, () => console.log("Server running on " + PORT));
