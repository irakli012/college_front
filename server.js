import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config({ path: '.env.local' });

if (!process.env.ADMIN_USER) {
  console.warn('WARNING: ADMIN_USER not found in .env.local');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const SECRET_KEY = process.env.ADMIN_JWT_SECRET || 'fallback_secret';

// Security: Rate limiting to prevent brute force
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login requests per window
  message: { error: 'Too many login attempts, please try again after 15 minutes' }
});

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

// Login Route (Rate limited)
app.post('/api/login', loginLimiter, (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '8h' });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

const LOCALES_DIR = path.join(__dirname, 'src', 'locales');

// Get all keys for a specific language (Protected)
app.get('/api/locales/:lang', authenticate, async (req, res) => {
  try {
    const filePath = path.join(LOCALES_DIR, `${req.params.lang}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to read locale file' });
  }
});

// Save keys for a specific language (Protected)
app.post('/api/locales/:lang', authenticate, async (req, res) => {
  try {
    const filePath = path.join(LOCALES_DIR, `${req.params.lang}.json`);
    const newData = JSON.stringify(req.body, null, 2);
    await fs.writeFile(filePath, newData, 'utf8');
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save locale file' });
  }
});

if (process.env.NODE_ENV === 'production') {
  const BUILD_PATH = path.join(__dirname, 'dist');
  app.use(express.static(BUILD_PATH));

  app.get('*', (req, res) => {
    res.sendFile(path.join(BUILD_PATH, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Admin backend running at http://0.0.0.0:${PORT}`);
});
