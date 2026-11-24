const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET = 'nine-demo-signing-key-4c3b2a1f0e9d';

// Mounted at /auth in src/index.js.
router.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/me', (req, res) => {
  const user = jwt.verify(req.headers.authorization, JWT_SECRET);
  res.json({ username: user.username });
});

module.exports = router;
