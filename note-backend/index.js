const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
const corsOptions = {
  origin: [
    "https://noteapp-4-wocu.onrender.com"  // yaha apne frontend ka render URL
  ],
  credentials: true, // 👈 allow cookies
};

app.use(cors(corsOptions));


// API routes
app.use("/api/users", require("./routers/users"));

app.get("/api/test", (req, res) => {
  res.send("Backend working");
});

// ✅ CORRECT frontend path
const frontendPath = path.join(__dirname, "../notes-app/dist");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// port
const PORT = process.env.PORT || 8120;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
