import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generateAffirmation", async (req, res) => {
  const { mood } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Give me a unique, short and emotionally resonant affirmation for someone who is feeling ${mood}. Make it poetic but not too abstract. Keep it 2 or 3 sentences. Vary your language and tone every time.`,
          },
        ],
        temperature: 0.9,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const message = response.data.choices[0].message.content;
    res.json({ message });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate affirmation" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
