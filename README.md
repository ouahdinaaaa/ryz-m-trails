# 🏃‍♂️ RYZ'ÔM - Site Web de l'Association

Site web officiel de l'association RYZ'ÔM, dédié à la promotion de la course à pied inclusive via la joëlette.

## 🌐 Architecture

- **Frontend** : React + TypeScript + Vite + TailwindCSS
- **Backend** : Node.js + Express + MongoDB
- **Images** : Cloudinary (stockage cloud)
- **Déploiement** : Vercel (frontend) + Koyeb (backend)

## 🚀 Démarrage rapide

### Frontend

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env

# Lancer en mode développement
npm run dev
```

### Backend

```bash
cd backend

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env
# ⚠️ Édite le fichier .env avec tes vraies valeurs

# Lancer le serveur
npm run dev
```

## 📦 Déploiement en Production

**📖 Voir le guide complet** : [DEPLOYMENT.md](./DEPLOYMENT.md)

Ce guide explique comment déployer gratuitement :
- ✅ Backend sur **Koyeb** (instance qui ne s'endort jamais)
- ✅ Base de données sur **MongoDB Atlas** (gratuit à vie)
- ✅ Images sur **Cloudinary** (optimisation automatique)
- ✅ Frontend sur **Vercel** (CDN mondial + HTTPS)

## 📁 Structure du projet

```
ryz-m-trails_2/
├── src/                    # Code source frontend (React)
│   ├── components/         # Composants réutilisables
│   ├── pages/              # Pages de l'application
│   └── lib/                # Utilitaires
├── backend/                # API Node.js
│   └── src/
│       ├── routes/         # Routes API
│       ├── models/         # Modèles MongoDB
│       ├── config/         # Configuration (Cloudinary, etc.)
│       └── utils/          # Utilitaires backend
├── DEPLOYMENT.md           # Guide de déploiement complet
└── README.md               # Ce fichier
```

## 🔑 Variables d'environnement

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:4000/api
```

### Backend (`backend/.env`)
```env
MONGO_URI=mongodb+srv://...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
FRONTEND_URL=http://localhost:5173
```

Voir `.env.example` et `backend/.env.example` pour les détails.

## 🛠️ Scripts disponibles

### Frontend
- `npm run dev` - Lancer en développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build

### Backend
- `npm run dev` - Lancer avec nodemon
- `npm start` - Lancer en production

## 📞 Support & Documentation

- **Koyeb** : https://www.koyeb.com/docs
- **MongoDB Atlas** : https://www.mongodb.com/docs/atlas/
- **Cloudinary** : https://cloudinary.com/documentation
- **Vercel** : https://vercel.com/docs

## 📄 Licence

Projet de l'association RYZ'ÔM - 2026
