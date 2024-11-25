require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect("mongodb+srv://blogdb:ecom123@cluster0.b3xhh25.mongodb.net/");
mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

// Routes
app.use("/api", authRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
