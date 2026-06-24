import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'superjwtsecret';

export default function adminJwtAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token manquant' });
  }
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded.admin) throw new Error();
    req.admin = true;
    next();
  } catch {
    return res.status(401).json({ error: 'Token invalide' });
  }
}
