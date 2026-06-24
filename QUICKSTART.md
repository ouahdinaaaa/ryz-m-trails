# 🚀 Guide de Démarrage Rapide - Développement Local

Ce guide t'aide à lancer le projet RYZ'ÔM sur ton ordinateur en quelques minutes.

## 📋 Prérequis

- **Node.js** (version 18 ou supérieur) : [Télécharger ici](https://nodejs.org/)
- **MongoDB** local OU un compte [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (gratuit)

## ⚡ Installation en 3 étapes

### 1️⃣ Cloner et installer les dépendances

```bash
# Depuis la racine du projet
npm install

# Installer les dépendances du backend
cd backend
npm install
cd ..
```

### 2️⃣ Configurer les variables d'environnement

#### Frontend (racine du projet)
```bash
# Copie le fichier exemple
cp .env.example .env

# Le fichier .env devrait contenir :
VITE_API_URL=http://localhost:4000/api
```

#### Backend
```bash
cd backend

# Copie le fichier exemple
cp .env.example .env

# Édite backend/.env avec tes vraies valeurs
```

**Si tu veux tester en LOCAL sans MongoDB Atlas ni Cloudinary** :
```env
# backend/.env (configuration minimale pour dev local)
PORT=4000
MONGO_URI=mongodb://localhost:27017/ryz
JWT_SECRET=dev_secret_key_change_in_production

# Pour Cloudinary (optionnel en dev, mais recommandé)
CLOUDINARY_CLOUD_NAME=ton_cloud_name
CLOUDINARY_API_KEY=ton_api_key
CLOUDINARY_API_SECRET=ton_api_secret

FRONTEND_URL=http://localhost:5173
```

**Pour obtenir gratuitement MongoDB Atlas et Cloudinary** :
- MongoDB Atlas : https://www.mongodb.com/cloud/atlas (voir [DEPLOYMENT.md](DEPLOYMENT.md))
- Cloudinary : https://cloudinary.com/ (voir [DEPLOYMENT.md](DEPLOYMENT.md))

### 3️⃣ Lancer le projet

**Option A : Lancer Frontend ET Backend en même temps**

Terminal 1 (Backend) :
```bash
cd backend
npm run dev
```
✅ Le backend tourne sur http://localhost:4000

Terminal 2 (Frontend) :
```bash
npm run dev
```
✅ Le frontend tourne sur http://localhost:5173

**Option B : Utiliser MongoDB local**

Si tu veux éviter MongoDB Atlas pour le dev :
```bash
# Installe et lance MongoDB localement
# macOS (avec Homebrew)
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Linux (Ubuntu/Debian)
sudo apt-get install mongodb
sudo systemctl start mongodb

# Windows : Télécharge depuis https://www.mongodb.com/try/download/community
```

Puis dans `backend/.env` :
```env
MONGO_URI=mongodb://localhost:27017/ryz
```

## ✅ Vérification

### Teste le Backend
Ouvre http://localhost:4000/health dans ton navigateur.

Tu devrais voir :
```json
{"status":"OK","timestamp":"..."}
```

### Teste la connexion aux services
```bash
cd backend
npm run test:connections
```

Cela vérifie :
- ✅ Connexion MongoDB
- ✅ Connexion Cloudinary

### Teste le Frontend
Ouvre http://localhost:5173 dans ton navigateur.

Le site devrait s'afficher correctement.

## 🐛 Problèmes courants

### "Cannot connect to MongoDB"
- Vérifie que MongoDB est bien lancé localement OU que ton URI MongoDB Atlas est correct
- Dans Atlas, vérifie que l'IP `0.0.0.0/0` est autorisée (Network Access)

### "CORS error"
- Vérifie que `FRONTEND_URL` dans `backend/.env` est bien `http://localhost:5173`
- Vérifie que le backend tourne sur le port 4000

### Images ne s'uploadent pas
- En dev local, tu peux utiliser Cloudinary OU activer le stockage local temporairement
- Vérifie tes identifiants Cloudinary dans `backend/.env`

### Port déjà utilisé
```bash
# Trouve et tue le processus qui utilise le port 4000
# macOS/Linux
lsof -ti:4000 | xargs kill -9

# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

## 🎯 Prochaines étapes

Une fois que tout fonctionne en local :
1. **Développe tes fonctionnalités**
2. **Teste localement**
3. **Déploie en production** → Voir [DEPLOYMENT.md](DEPLOYMENT.md)

## 📞 Besoin d'aide ?

- Problème avec MongoDB Atlas : https://www.mongodb.com/docs/atlas/
- Problème avec Cloudinary : https://cloudinary.com/documentation
- Autres questions : Ouvre une issue GitHub

---

**🎉 Bon développement !**
