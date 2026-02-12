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
  console.log(`📨 Attempting to send email: ${type} for ${name}`);

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

// --- AI SETUP ---
let genAI;
try {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
} catch (e) {
    console.error("❌ Error initializing Gemini:", e);
}

app.post('/chat', async (req, res) => {
    console.log("🤖 AI Request received:", req.body.message);
    
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is missing in .env file");
        }

        // UPDATED: Using a model from your available list
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
        
        const prompt = `You are a helpful study assistant for university students. 
        The student asks: "${req.body.message}". 
        Provide a concise, helpful, and encouraging academic answer.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log("✅ AI Response generated successfully");
        res.json({ reply: text });

    } catch (error) {
        console.error("---------------- AI ERROR DETAILS ----------------");
        console.error("Message:", error.message);
        if (error.response) {
            console.error("Google API Error:", JSON.stringify(error.response, null, 2));
        }
        console.error("--------------------------------------------------");
        
        res.status(500).json({ reply: "Sorry, I'm having trouble thinking right now. Please try again." });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});