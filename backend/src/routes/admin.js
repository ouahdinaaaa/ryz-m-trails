import express from 'express';
const router = express.Router();

// Affiche le formulaire de connexion admin
router.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Admin Login</title></head>
      <body>
        <h2>Connexion Admin</h2>
        <form method="POST" action="/admin">
          <input type="password" name="secret" placeholder="Clé admin" required />
          <button type="submit">Se connecter</button>
        </form>
      </body>
    </html>
  `);
});

// Traite la connexion admin
router.post('/', (req, res) => {
  const adminSecret = process.env.ADMIN_SECRET || 'changeme';
  const { secret } = req.body;
  if (secret === adminSecret) {
    // Ici, on pourrait créer une session/cookie, mais on affiche juste un message
    res.send('<h3>Connexion réussie !</h3>');
  } else {
    res.status(401).send('<h3>Clé incorrecte</h3>');
  }
});

export default router;
