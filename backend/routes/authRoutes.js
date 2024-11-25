const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { authenticateJWT, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, { httpOnly: true });
  res.json({ message: "Logged in successfully" });
});

// Protected routes
router.get("/admin", authenticateJWT, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

router.get("/seller", authenticateJWT, authorizeRoles("seller"), (req, res) => {
  res.json({ message: "Welcome, Seller!" });
});

router.get("/support", authenticateJWT, authorizeRoles("support"), (req, res) => {
  res.json({ message: "Welcome, Support Team!" });
});

module.exports = router;
