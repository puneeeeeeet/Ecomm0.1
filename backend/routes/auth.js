const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Mock user data (replace with database lookup)
  const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "seller@example.com", password: "seller123", role: "seller" },
    { email: "support@example.com", password: "support123", role: "support" },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate a JWT token
  const token = jwt.sign({ email: user.email, role: user.role }, "secretKey", {
    expiresIn: "1h",
  });

  res.json({ token, role: user.role });
});

module.exports = router;
