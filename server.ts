import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());

  // Helper function to send telegram message
  async function sendTelegramMessage(text: string): Promise<boolean> {
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn("Telegram notification skipped: TELEGRAM_TOKEN or TELEGRAM_CHAT_ID environment variables are missing.");
      console.log("Simulated Message:\n", text);
      return false;
    }

    try {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Telegram API error:", errText);
        return false;
      }

      console.log("Telegram notification sent successfully.");
      return true;
    } catch (err) {
      console.error("Failed to send Telegram message:", err);
      return false;
    }
  }

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ success: false, error: "Please provide a name, email, and message." });
      return;
    }

    const telegramText = `New Contact from Dipita Insura website
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "General Inquiry"}
Message: ${message}`;

    const sent = await sendTelegramMessage(telegramText);

    res.json({
      success: true,
      message: "Your message has been received successfully!",
      telegramSent: sent,
      note: !process.env.TELEGRAM_TOKEN ? "Note: Telegram credentials not configured in environment, logged message to server console." : undefined
    });
  });

  app.post("/api/quote", async (req, res) => {
    const { type, name, age, country, phone, email, details } = req.body;

    if (!type || !name || !email) {
      res.status(400).json({ success: false, error: "Please fill in all required fields." });
      return;
    }

    const coverageDetails = Object.entries(details || {})
      .map(([key, value]) => `- ${key}: ${value}`)
      .join("\n");

    const telegramText = `New Quote Request from Dipita Insura
Insurance Type: ${type}
Personal Details:
- Name: ${name} (Age: ${age || "N/A"})
- Country: ${country || "N/A"}
- Phone: ${phone || "N/A"}
- Email: ${email}

Coverage Details:
${coverageDetails || "None specified"}`;

    const sent = await sendTelegramMessage(telegramText);

    res.json({
      success: true,
      message: "Your quote request has been submitted successfully! We will contact you within 24 hours.",
      telegramSent: sent,
      note: !process.env.TELEGRAM_TOKEN ? "Note: Telegram credentials not configured in environment, logged details to server console." : undefined
    });
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite HMR...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
