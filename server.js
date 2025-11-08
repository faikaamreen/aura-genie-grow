import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Check if API key exists at startup
if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY is missing in .env!");
  process.exit(1);
}

// POST /chat endpoint
app.post("/chat", async (req, res) => {
  // Log the raw body for debugging
  console.log("📩 Incoming body:", req.body);

  const { message } = req.body || {};

  if (!message) {
    console.error("❌ No message found in request body!");
    return res.status(400).json({ error: "Message is required in request body." });
  }

  console.log("📩 Received message:", message);
  console.log("🔑 API Key exists:", !!process.env.GROQ_API_KEY);
  console.log("🔑 API Key starts with:", process.env.GROQ_API_KEY.substring(0, 10));

  try {
    console.log("🚀 Calling Groq API...");

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are GENIE, a helpful AI tutor. Provide clear, educational answers."
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    console.log("📡 Groq response status:", response.status);

    const data = await response.json();
    console.log("📦 Groq response data (truncated):", JSON.stringify(data).substring(0, 500));

    if (!response.ok) {
      console.error("❌ Groq API returned an error:", data);
      return res.status(response.status).json({ error: data.error?.message || "Groq API error" });
    }

    // Send the AI answer
    const answer = data.choices?.[0]?.message?.content || "No answer received";
    res.json({ answer });

  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ error: err.message || "Something went wrong." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));