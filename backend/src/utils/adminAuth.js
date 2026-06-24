// Middleware d'authentification admin simple (clé secrète dans header Authorization)
export function adminAuth(req, res, next) {
  const adminSecret = process.env.ADMIN_SECRET || 'changeme';
  const auth = req.headers.authorization;
  if (!auth || auth !== `Bearer ${adminSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}
