const express = require('express');
const router = express.Router();

// Mock user data for demonstration purposes
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' }
];

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login successful!', username });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
