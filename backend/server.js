/**
 * BACKEND SERVER FOR PORTFOLIO
 * Express.js server providing:
 * - Contact form endpoint (/api/contact)
 * - Health check endpoint (/api/health)
 * - Optional static serving for production
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

// Data file for saving incoming messages
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Helper to save messages safely
function saveMessage(entry) {
  let messages = [];
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
      messages = JSON.parse(data || '[]');
    }
  } catch (err) {
    console.error('Error reading messages file:', err);
    messages = [];
  }

  messages.push(entry);

  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing messages file:', err);
  }
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    owner: 'Krishna Verma'
  });
});

// Contact Form Handler
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields: name, email, message.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const messageEntry = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim()
  };

  saveMessage(messageEntry);
  console.log(`[New Message Received] From: ${messageEntry.name} (${messageEntry.email})`);

  res.status(200).json({
    success: true,
    message: 'Thank you! Your message has been received successfully.'
  });
});

// Fallback to frontend index.html for client routing
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(` Krishna Verma Portfolio Server Running!       `);
  console.log(` Local URL: http://localhost:${PORT}           `);
  console.log(` API Endpoint: http://localhost:${PORT}/api/contact `);
  console.log(`===============================================`);
});
