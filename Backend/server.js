const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- SERVER STARTUP CHECKS ---
console.log("--- SERVER STARTUP CHECKS ---");
if (!process.env.GEMINI_API_KEY) {
    console.error("❌ CRITICAL ERROR: GEMINI_API_KEY is missing from .env file.");
} else {
    console.log("✅ GEMINI_API_KEY found.");
}
console.log("-----------------------------");

// --- EMAIL SETUP ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lethabozwane04@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, studentNumber, course, genre, reason, type } = req.body;
  console.log(`📨 Sending email: ${type} for ${name}`);

  const mailOptions = {
    from: 'lethabozwane04@gmail.com',
    to: 'lethabozwane04@gmail.com',
    subject: `New ${type} from Study Buddy Hub`,
    text: `New Submission Type: ${type}\n\nName: ${name}\nEmail: ${email}\nStudent Number: ${studentNumber}\n${course ? `Course: ${course}\n` : ''}${genre ? `Genre: ${genre}\n` : ''}${reason ? `Message: ${reason}\n` : ''}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Email Error:", error);
      res.status(500).send('Error sending email');
    } else {
      console.log('✅ Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});

// --- SMART AI SETUP ---
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Updated list based on your debug output
const MODEL_FALLBACK_LIST = [
  "gemini-2.0-flash-lite",       // Try Lite first (often has separate quota)
  "gemini-2.0-flash",            // Standard 2.0
  "gemini-flash-latest",         // Alias for the newest Flash
  "gemini-1.5-flash",            // Standard 1.5
  "gemini-pro"                   // Legacy
];

async function generateWithFallback(userMessage) {
  let lastError = null;

  for (const modelName of MODEL_FALLBACK_LIST) {
    try {
      console.log(`🔄 Trying model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      
      const prompt = `You are a helpful study assistant. Student asks: "${userMessage}". Give a short, encouraging answer.`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      
      console.log(`✅ Success! Connected with ${modelName}`);
      return response.text();
    } catch (error) {
      // Improved error logging to see the REAL reason
      let errorMessage = error.message || JSON.stringify(error);
      if (errorMessage.includes("404")) errorMessage = "404 Not Found";
      if (errorMessage.includes("429")) errorMessage = "429 Quota Exceeded";
      
      console.warn(`⚠️ Failed with ${modelName}: ${errorMessage}`);
      lastError = error;
    }
  }
  throw lastError;
}

app.post('/chat', async (req, res) => {
    console.log("🤖 AI Request:", req.body.message);
    try {
        const replyText = await generateWithFallback(req.body.message);
        res.json({ reply: replyText });
    } catch (error) {
        console.error("❌ ALL MODELS FAILED.");
        res.status(500).json({ 
            reply: "I'm having trouble connecting to my brain right now. Please try again later." 
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});