import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'changeme';
const JWT_SECRET = process.env.JWT_SECRET || 'superjwtsecret';

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { password } = req.body;
  if (password !== ADMIN_SECRET) {
    return res.status(401).json({ error: 'Mot de passe incorrect' });
  }
  // Génère un token JWT valable 24h
  const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: '24h' });
  res.json({ token });
});

export default router;
