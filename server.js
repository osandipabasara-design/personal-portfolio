// server.js — Node.js + Express backend for contact form
// Run: node server.js (or npm run server)

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// ---- Contact Form Route ----
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    // Configure your SMTP transport here
    // Example uses Gmail — set env vars SMTP_USER and SMTP_PASS
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'your_email@gmail.com',
        pass: process.env.SMTP_PASS || 'your_app_password',
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'osandipabasara@gmail.com',
      subject: subject || `Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ffb950;">New Portfolio Message</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #888;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding: 8px; color: #888;">Email</td><td style="padding:8px;">${email}</td></tr>
            <tr><td style="padding: 8px; color: #888;">Subject</td><td style="padding:8px;">${subject || '—'}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="margin:0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
