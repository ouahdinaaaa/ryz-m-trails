# RYZ'ÔM Backend

Backend Node.js/Express pour la gestion des événements et articles de l'association RYZ'ÔM.

## 🚀 Technologies

- **Node.js** + Express
- **MongoDB** (via Mongoose)
- **Cloudinary** pour le stockage des images
- **JWT** pour l'authentification admin

## 📦 Installation locale

```bash
npm install
cp .env.example .env
# Édite le fichier .env avec tes vraies valeurs
npm run dev
```

## 🌍 Déploiement

Voir le fichier [DEPLOYMENT.md](../DEPLOYMENT.md) à la racine du projet pour les instructions complètes.

## 📝 Routes principales

### Publiques
- `GET /api/events` - Liste des événements
- `GET /api/articles` - Liste des articles
- `GET /health` - Health check

### Protégées (JWT requis)
- `POST /api/upload` - Upload d'image vers Cloudinary
- `POST /api/events` - Créer un événement
- `PUT /api/events/:id` - Modifier un événement
- `DELETE /api/events/:id` - Supprimer un événement
- `POST /api/articles` - Créer un article
- `PUT /api/articles/:id` - Modifier un article
- `DELETE /api/articles/:id` - Supprimer un article

### Authentification
- `POST /api/admin/login` - Connexion admin (retourne un JWT)

Ce projet a été généré automatiquement. Adapter selon vos besoins.
