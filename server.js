require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Confidence Booster index.html'));
});

// Proxy endpoint for Gemini API
app.post('/api/analyze', async (req, res) => {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key not configured on server' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    const systemPrompt = `
        You are the logic engine for a confidence tracking app for men. 
        Analyze the user's input activity.
        Determine if this activity builds confidence (positive) or reduces it (negative).
        
        Rules:
        1. Return ONLY valid JSON. No markdown.
        2. Structure: { "scoreChange": integer (-15 to +15), "feedback": "Short, witty, bro-to-bro style comment (max 10 words)", "category": "Physical" | "Mental" | "Social" }
        3. Be strict. "Doomscrolling" is negative. "Gym" is positive.
    `;

    const payload = {
        contents: [{
            parts: [{ text: systemPrompt + "\n\nUser Input: " + message }]
        }]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.error) {
            console.error("Gemini API Error:", data.error);
            return res.status(500).json({ error: data.error.message });
        }

        // Extract and Clean JSON
        let rawText = data.candidates[0].content.parts[0].text;
        rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        const jsonResult = JSON.parse(rawText);

        res.json(jsonResult);

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            scoreChange: 0,
            feedback: "Server error connecting to Gemini.",
            category: "System"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
