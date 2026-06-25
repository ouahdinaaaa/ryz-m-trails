import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default function adminJwtAuth(req, res, next) {
  try {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token manquant' });
    }

    if (!JWT_SECRET) {
      console.error("JWT_SECRET missing in env");
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const token = auth.split(' ')[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded?.admin) {
      return res.status(403).json({ error: 'Accès admin refusé' });
    }

    req.admin = decoded;
    next();

  } catch (err) {
    console.error("JWT auth error:", err.message);
    return res.status(401).json({ error: 'Token invalide' });
  }
}