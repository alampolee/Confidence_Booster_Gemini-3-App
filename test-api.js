require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

console.log("Current Directory:", process.cwd());
console.log("Checking for .env file...");

// Check if .env loads
if (!process.env.GEMINI_API_KEY) {
    console.error("FAIL: GEMINI_API_KEY not found in process.env.");
    console.log("Debug: Full process.env keys:", Object.keys(process.env));
} else {
    const key = process.env.GEMINI_API_KEY;
    console.log(`PASS: GEMINI_API_KEY found. Length: ${key.length}`);
    console.log(`PASS: Key starts with: ${key.substring(0, 5)}...`);

    // Check for whitespace
    if (key.trim() !== key) {
        console.warn("WARNING: API Key has leading/trailing whitespace!");
    }
}

async function test() {
    console.log("\nTesting Gemini API connection...");

    if (!process.env.GEMINI_API_KEY) return;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY.trim()}`;
    const payload = {
        contents: [{ parts: [{ text: "Hello" }] }]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        console.log(`API Response Status: ${response.status} ${response.statusText}`);

        const data = await response.json();

        if (data.error) {
            console.error("FAIL: API returned error object:", JSON.stringify(data.error, null, 2));
        } else if (data.candidates && data.candidates.length > 0) {
            console.log("PASS: API returned candidates.");
            console.log("Response Preview:", data.candidates[0].content.parts[0].text.substring(0, 50));
        } else {
            console.error("FAIL: Unexpected response structure:", JSON.stringify(data, null, 2));
        }

    } catch (e) {
        console.error("FAIL: Exception during fetch:", e);
    }
}

test();
