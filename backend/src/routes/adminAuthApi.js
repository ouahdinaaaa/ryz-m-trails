import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const ADMIN_SECRET = process.env.ADMIN_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;

// POST /api/admin/login
router.post('/login', (req, res) => {
  try {
    const { password } = req.body;

    if (!ADMIN_SECRET || !JWT_SECRET) {
      console.error("❌ Missing env vars (ADMIN_SECRET or JWT_SECRET)");
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Password required' });
    }

    if (password !== ADMIN_SECRET) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    const token = jwt.sign(
      { admin: true },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.json({ token });

  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;