require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const { connectDB } = require("./config/db");
require("./config/firebase"); // Firebase init

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// // Routes
app.use("/users", require("./routes/userRoutes"));
// app.use("/api/courses", require("./routes/courseRoutes"));
// app.use("/api/notes", require("./routes/noteRoutes"));
// app.use("/api/rejected", require("./routes/rejectedRoutes"));
// app.use("/api/materials", require("./routes/materialRoutes"));
// app.use("/api/payments", require("./routes/paymentRoutes"));
// app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Study Server is running");
});

module.exports = app;
