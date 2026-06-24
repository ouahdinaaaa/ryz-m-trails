# 🚀 Guide de Déploiement - RYZ'ÔM

Ce guide explique comment déployer l'application RYZ'ÔM sur des services gratuits et fiables.

## 📋 Vue d'ensemble de l'architecture

- **Frontend** : Vercel (déjà configuré avec `vercel.json`)
- **Backend** : Koyeb (instance Nano gratuite qui ne s'endort jamais)
- **Base de données** : MongoDB Atlas (cluster gratuit à vie)
- **Images** : Cloudinary (stockage cloud optimisé)

---

## 1️⃣ Configuration de la Base de Données (MongoDB Atlas)

### Étapes :

1. **Créer un compte** sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. **Créer un cluster gratuit** :
   - Clique sur "Build a Database"
   - Choisis l'option **FREE** (M0 Sandbox)
   - Sélectionne une région proche (par exemple : AWS / Frankfurt ou Paris)
   - Nomme ton cluster (ex: `ryzom-cluster`)

3. **Configurer l'accès** :
   - **Username** : `ryzom_admin` (ou ce que tu veux)
   - **Password** : Génère un mot de passe fort et **sauvegarde-le** !
   - Dans "Network Access" : Clique sur "Add IP Address" → **Allow Access from Anywhere** (0.0.0.0/0)

4. **Récupérer l'URI de connexion** :
   - Retourne sur "Database" → "Connect" → "Connect your application"
   - Copie l'URI qui ressemble à :
     ```
     mongodb+srv://ryzom_admin:<password>@ryzom-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - **Remplace `<password>` par ton vrai mot de passe**
   - Ajoute le nom de ta base de données après `.net/` :
     ```
     mongodb+srv://ryzom_admin:TonMotDePasse@ryzom-cluster.xxxxx.mongodb.net/ryzom?retryWrites=true&w=majority
     ```

5. **Sauvegarde cette URI** — tu en auras besoin pour Koyeb.

---

## 2️⃣ Configuration du Stockage d'Images (Cloudinary)

### Étapes :

1. **Créer un compte** sur [Cloudinary](https://cloudinary.com/)

2. **Récupérer tes identifiants** :
   - Va sur le Dashboard
   - Tu verras 3 informations importantes :
     - **Cloud Name** (ex: `dryzom123`)
     - **API Key** (ex: `123456789012345`)
     - **API Secret** (ex: `AbCdEfGhIjKlMnOpQrStUvWxYz`)

3. **Sauvegarde ces 3 valeurs** — tu en auras besoin pour Koyeb.

---

## 3️⃣ Déploiement du Backend (Koyeb)

### Prérequis :
- Ton code doit être sur **GitHub** (dans un repository public ou privé)

### Étapes :

1. **Créer un compte** sur [Koyeb](https://www.koyeb.com/)

2. **Connecter ton GitHub** :
   - Clique sur "Create App"
   - Sélectionne "GitHub"
   - Autorise Koyeb à accéder à ton repository

3. **Configurer le déploiement** :
   - **Repository** : Sélectionne ton dépôt GitHub
   - **Branch** : `main` ou `master`
   - **Root directory** : `backend` (très important !)
   - **Builder** : Docker (Koyeb détectera automatiquement ton `Dockerfile`)
   - **Port** : `4000` (ou laisse vide, Koyeb détecte automatiquement)

4. **Ajouter les variables d'environnement** :
   
   Clique sur "Environment variables" et ajoute :

   | Nom | Valeur |
   |-----|--------|
   | `MONGO_URI` | Ton URI MongoDB Atlas complet (de l'étape 1) |
   | `JWT_SECRET` | Une longue chaîne aléatoire (ex: `super_secret_key_12345_change_me`) |
   | `CLOUDINARY_CLOUD_NAME` | Ton Cloud Name Cloudinary |
   | `CLOUDINARY_API_KEY` | Ton API Key Cloudinary |
   | `CLOUDINARY_API_SECRET` | Ton API Secret Cloudinary |
   | `FRONTEND_URL` | L'URL de ton frontend Vercel (ex: `https://ryzom.vercel.app`) |
   | `NODE_ENV` | `production` |

5. **Choisir l'instance** :
   - Sélectionne **Nano** (gratuite et ne s'endort jamais !)

6. **Déployer** :
   - Clique sur "Deploy"
   - Attends 2-3 minutes

7. **Récupère l'URL de ton API** :
   - Une fois déployé, Koyeb te donne une URL (ex: `https://ryzom-backend-xxxxx.koyeb.app`)
   - **Sauvegarde cette URL** — tu en auras besoin pour le frontend

---

## 4️⃣ Déploiement du Frontend (Vercel)

### Étapes :

1. **Installer Vercel CLI** (si ce n'est pas déjà fait) :
   ```bash
   npm install -g vercel
   ```

2. **Se connecter à Vercel** :
   ```bash
   vercel login
   ```

3. **Déployer depuis la racine du projet** :
   ```bash
   vercel
   ```

4. **Configurer les variables d'environnement sur Vercel** :
   - Va sur [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sélectionne ton projet
   - Va dans "Settings" → "Environment Variables"
   - Ajoute :
     - `VITE_API_URL` : L'URL de ton backend Koyeb (ex: `https://ryzom-backend-xxxxx.koyeb.app`)

5. **Redéployer** (pour prendre en compte les variables) :
   ```bash
   vercel --prod
   ```

6. **Ton site est en ligne** ! Vercel te donne une URL comme `https://ryzom.vercel.app`

---

## 5️⃣ Configuration du CORS final

Une fois que tu as l'URL Vercel de ton frontend :

1. **Retourne sur Koyeb**
2. **Édite ton app** → "Environment variables"
3. **Modifie `FRONTEND_URL`** avec l'URL exacte de Vercel (ex: `https://ryzom.vercel.app`)
4. **Redéploie** (Koyeb le fera automatiquement)

---

## ✅ Vérification finale

1. **Teste ton API** :
   ```
   https://ton-backend.koyeb.app/health
   ```
   → Tu devrais voir `{"status":"OK",...}`

2. **Teste ton frontend** :
   - Va sur ton URL Vercel
   - Vérifie que les événements se chargent
   - Teste l'upload d'une image depuis l'admin

---

## 🔄 Mises à jour automatiques

### Backend (Koyeb) :
- Chaque fois que tu push sur GitHub (branche `main`), Koyeb redéploie automatiquement

### Frontend (Vercel) :
- Pareil : chaque push sur `main` déclenche un redéploiement automatique

---

## 🐛 Dépannage

### Erreur "Cannot connect to MongoDB"
- Vérifie que l'IP `0.0.0.0/0` est bien autorisée dans MongoDB Atlas (Network Access)
- Vérifie que le mot de passe dans `MONGO_URI` est correct (pas de caractères spéciaux non encodés)

### Erreur CORS
- Vérifie que `FRONTEND_URL` dans Koyeb correspond exactement à l'URL Vercel (sans `/` à la fin)

### Images ne s'affichent pas
- Vérifie que tes clés Cloudinary sont correctes
- Regarde les logs dans le dashboard Koyeb

---

## 📞 Support

- **Koyeb** : https://www.koyeb.com/docs
- **MongoDB Atlas** : https://www.mongodb.com/docs/atlas/
- **Cloudinary** : https://cloudinary.com/documentation
- **Vercel** : https://vercel.com/docs

---

**🎉 Félicitations ! Ton application est maintenant en production avec 0€ de coût !**
