const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET /health
app.get('/health', (req, res) => {
    res.status(200).json({ status: "running" });
});

// POST /message
app.post('/message', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Field 'message' is required" });
    }

    res.status(200).json({ received_message: message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
