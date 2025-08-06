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

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/courses", require("./routes/courseRoutes"));
app.use("/notes", require("./routes/noteRoutes"));
app.use("/rejected", require("./routes/rejectedRoutes"));
app.use("/materials", require("./routes/materialRoutes"));
app.use("/payments", require("./routes/paymentRoutes"));

app.get("/", (req, res) => {
  res.send("Study Server is running");
});

module.exports = app;
