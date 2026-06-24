# 🚀 RYZ'ÔM - Guide de Déploiement Rapide

## 📌 Vue d'ensemble

Ce projet est maintenant **100% prêt** pour être déployé gratuitement sur :
- ✅ **Koyeb** (Backend - instance qui ne s'endort jamais)
- ✅ **MongoDB Atlas** (Base de données gratuite à vie)
- ✅ **Cloudinary** (Stockage d'images optimisé)
- ✅ **Vercel** (Frontend - CDN mondial)

## 🎯 Ordre de Déploiement

```
1. MongoDB Atlas → 2. Cloudinary → 3. Koyeb → 4. Vercel
```

## 📝 Guides Disponibles

### Pour le Déploiement
| Fichier | Description |
|---------|-------------|
| [**DEPLOYMENT.md**](DEPLOYMENT.md) | 📖 **Guide complet** avec toutes les étapes détaillées |
| [**DEPLOYMENT_CHECKLIST.md**](DEPLOYMENT_CHECKLIST.md) | ✅ Checklist interactive pour ne rien oublier |

### Pour le Développement Local
| Fichier | Description |
|---------|-------------|
| [**QUICKSTART.md**](QUICKSTART.md) | ⚡ Démarrage rapide en local (3 étapes) |
| [**README.md**](README.md) | 📚 Documentation générale du projet |

### Fichiers de Configuration
| Fichier | Usage |
|---------|-------|
| `.env.example` | Template des variables d'environnement (frontend) |
| `backend/.env.example` | Template des variables d'environnement (backend) |
| `.koyeb.yml` | Configuration automatique pour Koyeb |
| `backend/Dockerfile` | Build Docker optimisé pour production |

## ⚡ Démarrage Ultra-Rapide

### 1️⃣ Développement Local (5 minutes)

```bash
# 1. Installe les dépendances
npm install && cd backend && npm install && cd ..

# 2. Configure les variables
cp .env.example .env
cp backend/.env.example backend/.env

# 3. Génère un JWT secret
cd backend && npm run generate:secret

# 4. Édite backend/.env avec :
#    - MONGO_URI (MongoDB Atlas ou local)
#    - JWT_SECRET (copie du résultat ci-dessus)
#    - CLOUDINARY_* (tes identifiants Cloudinary)

# 5. Lance tout
# Terminal 1
cd backend && npm run dev

# Terminal 2
npm run dev
```

✅ Frontend : http://localhost:5173  
✅ Backend : http://localhost:4000

### 2️⃣ Déploiement Production (15 minutes)

**Suis la checklist** : [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

Ou consulte le **guide complet** : [DEPLOYMENT.md](DEPLOYMENT.md)

## 🛠️ Scripts Utiles

### Backend
```bash
cd backend

# Générer un JWT secret sécurisé
npm run generate:secret

# Tester les connexions MongoDB + Cloudinary
npm run test:connections

# Lancer en dev
npm run dev

# Lancer en prod
npm start
```

### Frontend
```bash
# Lancer en dev
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📊 Architecture Finale

```
┌──────────────────────────────────────────────────────────┐
│                      Utilisateur                          │
└───────────────────────┬──────────────────────────────────┘
                        │
        ┌───────────────┴───────────────┐
        │                               │
┌───────▼────────┐            ┌────────▼─────────┐
│     Vercel     │            │      Koyeb       │
│   (Frontend)   │◄──────────►│    (Backend)     │
│  React + Vite  │   CORS     │  Node.js + API   │
└────────────────┘            └────────┬─────────┘
                                       │
                        ┌──────────────┼──────────────┐
                        │              │              │
                 ┌──────▼──────┐ ┌─────▼──────┐      │
                 │  Cloudinary │ │  MongoDB   │      │
                 │   (Images)  │ │   Atlas    │      │
                 └─────────────┘ └────────────┘      │
```

## 🔐 Variables d'Environnement (Résumé)

### Backend (Koyeb)
```env
MONGO_URI=mongodb+srv://...
JWT_SECRET=ton_secret_genere
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
FRONTEND_URL=https://ton-site.vercel.app
NODE_ENV=production
```

### Frontend (Vercel)
```env
VITE_API_URL=https://ton-backend.koyeb.app/api
```

## ✅ Vérification Rapide

### Backend déployé ?
```bash
curl https://ton-backend.koyeb.app/health
# → {"status":"OK",...}
```

### Frontend déployé ?
Ouvre https://ton-site.vercel.app dans ton navigateur

### CORS configuré ?
Ouvre la console du navigateur (F12), il ne doit pas y avoir d'erreur CORS

## 🎓 Ressources

### Documentation des Services
- **Koyeb** : https://www.koyeb.com/docs
- **MongoDB Atlas** : https://www.mongodb.com/docs/atlas/
- **Cloudinary** : https://cloudinary.com/documentation
- **Vercel** : https://vercel.com/docs

### Vidéos/Tutoriels
- MongoDB Atlas : [Getting Started](https://www.mongodb.com/docs/atlas/getting-started/)
- Cloudinary : [Upload Widget](https://cloudinary.com/documentation/upload_widget)
- Koyeb : [Deploy from GitHub](https://www.koyeb.com/docs/deploy-from-github)

## 💡 Conseils Pro

### 🔒 Sécurité
- ✅ Ne JAMAIS commiter `.env`
- ✅ Utiliser des secrets forts (>32 caractères)
- ✅ Activer 2FA sur MongoDB Atlas, Cloudinary, Koyeb, Vercel

### 🚀 Performance
- ✅ Cloudinary optimise automatiquement les images (WebP, compression)
- ✅ Vercel utilise un CDN mondial (site ultra-rapide)
- ✅ MongoDB Atlas est proche de Koyeb (latence faible)

### 💰 Coûts
- ✅ **100% gratuit** avec les tiers gratuits
- ✅ Koyeb Nano : **ne s'endort jamais** (contrairement à Render/Fly.io)
- ✅ Pas de carte bancaire requise

## 🐛 Problèmes Fréquents

| Problème | Solution |
|----------|----------|
| "Cannot connect to MongoDB" | Vérifie l'IP `0.0.0.0/0` dans MongoDB Atlas → Network Access |
| Erreur CORS | `FRONTEND_URL` dans Koyeb doit = URL Vercel exacte (sans `/`) |
| Images ne s'affichent pas | Vérifie les credentials Cloudinary dans Koyeb |
| Backend inaccessible | Regarde les logs Koyeb, vérifie que l'instance est "Running" |

## 📞 Support

**Questions ?** Consulte d'abord :
1. [DEPLOYMENT.md](DEPLOYMENT.md) - Guide détaillé
2. [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Checklist
3. [QUICKSTART.md](QUICKSTART.md) - Dev local

---

## 🎉 Prêt à Déployer !

**Suis simplement ces étapes** :

1. ✅ Lis [DEPLOYMENT.md](DEPLOYMENT.md) (10 min)
2. ✅ Suis [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) (15 min)
3. ✅ Ton site est en ligne ! 🚀

**Bon déploiement !** 🎊
