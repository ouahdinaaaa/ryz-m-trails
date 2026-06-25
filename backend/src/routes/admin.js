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

// IMPORTANT: parse urlencoded ici pour éviter bug prod
router.post(
  '/',
  express.urlencoded({ extended: true }),
  (req, res) => {
    try {
      const adminSecret = process.env.ADMIN_SECRET;

      if (!adminSecret) {
        console.error("❌ ADMIN_SECRET missing");
        return res.status(500).send('<h3>Server misconfigured</h3>');
      }

      const { secret } = req.body;

      if (!secret) {
        return res.status(400).send('<h3>Missing secret</h3>');
      }

      if (secret === adminSecret) {
        return res.send('<h3>Connexion réussie !</h3>');
      }

      return res.status(401).send('<h3>Clé incorrecte</h3>');

    } catch (err) {
      console.error("❌ Admin route error:", err);
      return res.status(500).send('<h3>Server error</h3>');
    }
  }
);

export default router;