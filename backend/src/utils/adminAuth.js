export function adminAuth(req, res, next) {
  try {
    const adminSecret = process.env.ADMIN_SECRET;

    if (!adminSecret) {
      console.error("ADMIN_SECRET missing in env");
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = auth.split(' ')[1];

    if (token !== adminSecret) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    next();

  } catch (err) {
    console.error("adminAuth error:", err);
    return res.status(500).json({ error: 'Internal error' });
  }
}