# ✅ Checklist de Déploiement RYZ'ÔM

Utilise cette checklist pour t'assurer que tout est configuré correctement avant le déploiement.

## 📋 Préparation (Avant le Déploiement)

### Backend
- [ ] Le code est sur GitHub (repository public ou privé)
- [ ] Le fichier `backend/.env` est dans `.gitignore` (ne JAMAIS commiter les secrets)
- [ ] Le fichier `backend/.env.example` existe avec toutes les variables nécessaires
- [ ] Le `Dockerfile` est optimisé pour la production

### Frontend
- [ ] Le fichier `.env` est dans `.gitignore`
- [ ] Le fichier `.env.example` existe
- [ ] Le code utilise `import.meta.env.VITE_API_URL` partout où nécessaire
- [ ] `vercel.json` est configuré

---

## 1️⃣ MongoDB Atlas

- [ ] Compte créé sur https://www.mongodb.com/cloud/atlas
- [ ] Cluster gratuit (M0) créé
- [ ] Utilisateur de base de données créé avec mot de passe fort
- [ ] IP `0.0.0.0/0` ajoutée dans **Network Access** (ou IP spécifique de Koyeb)
- [ ] URI de connexion récupéré et testé localement
- [ ] Format de l'URI : `mongodb+srv://user:password@cluster.mongodb.net/ryzom?retryWrites=true&w=majority`

**Test** : 
```bash
cd backend
# Ajoute MONGO_URI dans .env
npm run test:connections
```

---

## 2️⃣ Cloudinary

- [ ] Compte créé sur https://cloudinary.com
- [ ] **Cloud Name** récupéré
- [ ] **API Key** récupéré
- [ ] **API Secret** récupéré
- [ ] Testé localement

**Test** :
```bash
cd backend
# Ajoute CLOUDINARY_* dans .env
npm run test:connections
```

---

## 3️⃣ Backend sur Koyeb

- [ ] Compte créé sur https://www.koyeb.com
- [ ] GitHub connecté à Koyeb
- [ ] Repository sélectionné
- [ ] **Root directory** configuré sur `backend`
- [ ] Builder : Docker
- [ ] Instance type : **Nano** (gratuit)

### Variables d'environnement Koyeb
- [ ] `MONGO_URI` = URI MongoDB Atlas complet
- [ ] `JWT_SECRET` = Une longue chaîne aléatoire (32+ caractères)
- [ ] `CLOUDINARY_CLOUD_NAME` = Ton cloud name
- [ ] `CLOUDINARY_API_KEY` = Ton API key
- [ ] `CLOUDINARY_API_SECRET` = Ton API secret
- [ ] `FRONTEND_URL` = `http://localhost:5173` (temporairement, sera mis à jour après Vercel)
- [ ] `NODE_ENV` = `production`
- [ ] `PORT` = (optionnel, Koyeb le gère automatiquement)

### Déploiement
- [ ] Clique sur "Deploy"
- [ ] Attends 2-3 minutes
- [ ] URL Koyeb reçue (ex: `https://ryzom-backend-xxxxx.koyeb.app`)

**Test** :
```bash
# Remplace par ton URL Koyeb
curl https://ton-backend.koyeb.app/health
# Devrait retourner : {"status":"OK",...}
```

---

## 4️⃣ Frontend sur Vercel

- [ ] Vercel CLI installé : `npm install -g vercel`
- [ ] Connecté : `vercel login`

### Déploiement initial
```bash
# Depuis la racine du projet
vercel
```

- [ ] Projet déployé
- [ ] URL Vercel reçue (ex: `https://ryzom.vercel.app`)

### Variables d'environnement Vercel
- [ ] Va sur https://vercel.com/dashboard
- [ ] Sélectionne ton projet
- [ ] Settings → Environment Variables
- [ ] Ajoute : `VITE_API_URL` = `https://ton-backend.koyeb.app/api` (remplace par ton URL Koyeb)

### Redéploiement avec les variables
```bash
vercel --prod
```

**Test** :
- [ ] Ouvre ton URL Vercel
- [ ] Le site se charge correctement
- [ ] Les événements s'affichent (vérifier la connexion à l'API)

---

## 5️⃣ Configuration CORS Finale

- [ ] Retourne sur Koyeb
- [ ] Settings → Environment Variables
- [ ] Modifie `FRONTEND_URL` = `https://ton-site.vercel.app` (ton URL Vercel EXACTE)
- [ ] Redéploie automatiquement

**Test** :
- [ ] Depuis Vercel, teste l'accès à l'API
- [ ] Pas d'erreur CORS dans la console du navigateur

---

## 6️⃣ Tests Finaux

### Backend
- [ ] `https://ton-backend.koyeb.app/health` retourne `{"status":"OK"}`
- [ ] `https://ton-backend.koyeb.app/api/events` retourne la liste des événements
- [ ] Les logs Koyeb n'affichent pas d'erreurs

### Frontend
- [ ] `https://ton-site.vercel.app` se charge
- [ ] Les pages fonctionnent : Accueil, Événements, Histoires, etc.
- [ ] Les images Cloudinary s'affichent
- [ ] Pas d'erreur dans la console du navigateur (F12)

### Admin
- [ ] Connexion admin fonctionne
- [ ] Upload d'image vers Cloudinary fonctionne
- [ ] Création d'événement/article fonctionne

---

## 🔄 Déploiement Automatique

### Configuration
- [ ] **Koyeb** : Auto-deploy activé sur la branche `main`
- [ ] **Vercel** : Auto-deploy activé sur la branche `main`

**Test** :
```bash
# Fais un petit changement
git add .
git commit -m "test auto-deploy"
git push origin main

# Vérifie sur Koyeb et Vercel que le redéploiement se lance
```

---

## 🐛 Dépannage

### Erreur "Cannot connect to MongoDB"
- [ ] Vérifie que l'URI MongoDB est correct dans Koyeb
- [ ] Vérifie que `0.0.0.0/0` est autorisé dans MongoDB Atlas Network Access
- [ ] Vérifie que le mot de passe ne contient pas de caractères spéciaux non encodés

### Erreur CORS
- [ ] Vérifie que `FRONTEND_URL` dans Koyeb = URL Vercel exacte (sans `/` à la fin)
- [ ] Vérifie dans les logs Koyeb s'il y a des erreurs

### Images ne s'affichent pas
- [ ] Vérifie que les credentials Cloudinary sont corrects dans Koyeb
- [ ] Teste l'upload depuis l'admin
- [ ] Regarde les logs Koyeb pour les erreurs Cloudinary

### Backend inaccessible
- [ ] Vérifie que l'instance Koyeb est bien "Running"
- [ ] Vérifie les logs Koyeb pour des erreurs
- [ ] Vérifie que le port est bien configuré (health check sur `/health`)

---

## 🎉 Félicitations !

Une fois tous les éléments cochés, ton application est :
- ✅ **Déployée en production**
- ✅ **Accessible 24h/24**
- ✅ **Sécurisée (HTTPS automatique)**
- ✅ **Gratuite**
- ✅ **Optimisée (images Cloudinary)**
- ✅ **Mise à jour automatiquement (Git push)**

---

## 📞 Besoin d'Aide ?

- Voir [DEPLOYMENT.md](DEPLOYMENT.md) pour les détails complets
- Voir [QUICKSTART.md](QUICKSTART.md) pour le développement local
- Consulter la documentation officielle :
  - Koyeb : https://www.koyeb.com/docs
  - MongoDB Atlas : https://www.mongodb.com/docs/atlas/
  - Cloudinary : https://cloudinary.com/documentation
  - Vercel : https://vercel.com/docs
