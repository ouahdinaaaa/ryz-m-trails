# 🌐 Configuration CORS et URLs - Guide de Dépannage

## 🎯 Comprendre le CORS

**CORS** (Cross-Origin Resource Sharing) = Sécurité du navigateur qui empêche un site d'accéder à une API d'un autre domaine.

### Exemples concrets :

✅ **Autorisé** (même origine) :
```
Frontend: https://ryzom.com
Backend:  https://ryzom.com/api
→ Pas besoin de CORS
```

❌ **Bloqué sans CORS** (origines différentes) :
```
Frontend: https://ryzom.vercel.app
Backend:  https://ryzom-backend.koyeb.app
→ Nécessite une configuration CORS
```

## 🔧 Configuration Actuelle

### Backend (`backend/src/utils/corsOptions.js`)

Le backend autorise les requêtes depuis :
- `http://localhost:5173` (dev local Vite)
- `http://localhost:3000` (dev local alternatif)
- La valeur de `process.env.FRONTEND_URL` (production)

### Comment ça marche ?

```javascript
// Liste des origines autorisées
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL  // Ex: https://ryzom.vercel.app
];

// Vérifie si la requête vient d'une origine autorisée
origin: (origin, callback) => {
  if (allowedOrigins.includes(origin)) {
    callback(null, true);  // ✅ Autorisé
  } else {
    callback(new Error('Not allowed by CORS'));  // ❌ Bloqué
  }
}
```

## 🐛 Problèmes CORS et Solutions

### 1. Erreur : "CORS policy: No 'Access-Control-Allow-Origin' header"

**Symptôme** : Dans la console du navigateur, tu vois :
```
Access to fetch at 'https://ton-backend.koyeb.app/api/events' 
from origin 'https://ton-site.vercel.app' has been blocked by CORS policy
```

**Causes possibles** :

#### A. `FRONTEND_URL` n'est pas configuré dans Koyeb
```bash
# Solution : Ajoute dans Koyeb → Environment Variables
FRONTEND_URL=https://ton-site.vercel.app
```

#### B. `FRONTEND_URL` a un `/` à la fin
```bash
# ❌ Mauvais
FRONTEND_URL=https://ton-site.vercel.app/

# ✅ Bon
FRONTEND_URL=https://ton-site.vercel.app
```

#### C. L'URL Vercel a changé
Si tu as redéployé Vercel et que l'URL a changé :
```bash
# 1. Récupère la nouvelle URL Vercel
# 2. Mets à jour FRONTEND_URL dans Koyeb
# 3. Redéploie Koyeb (automatique)
```

### 2. Erreur en développement local

**Symptôme** : Le frontend local ne peut pas accéder à l'API locale

**Solution** :
```bash
# backend/.env
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Le mode `development` autorise automatiquement toutes les origines.

### 3. Tester plusieurs domaines

Si tu veux autoriser plusieurs domaines (ex: domaine custom) :

Modifie [backend/src/utils/corsOptions.js](backend/src/utils/corsOptions.js) :
```javascript
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
  'https://www.ton-domaine-custom.com',  // Ajoute ici
  'https://ton-domaine-custom.com'       // Ajoute ici
].filter(Boolean);
```

## 🔍 Debugging CORS

### Méthode 1 : Utiliser les DevTools du navigateur

1. Ouvre ton site (F12 → Console)
2. Essaye d'accéder à l'API
3. Si erreur CORS, regarde le message d'erreur :

```
Access to fetch at 'https://backend.com/api/events' 
from origin 'https://frontend.com' has been blocked

Request URL: https://backend.com/api/events
Request Method: GET
Origin: https://frontend.com
```

4. Vérifie que `Origin` est bien dans `allowedOrigins`

### Méthode 2 : Tester avec curl

```bash
# Simule une requête depuis ton frontend
curl -H "Origin: https://ton-site.vercel.app" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://ton-backend.koyeb.app/api/events -v

# Si CORS est OK, tu devrais voir :
# < Access-Control-Allow-Origin: https://ton-site.vercel.app
# < Access-Control-Allow-Credentials: true
```

### Méthode 3 : Regarder les logs Koyeb

1. Va sur Koyeb Dashboard
2. Sélectionne ton app
3. Onglet "Logs"
4. Cherche les erreurs liées au CORS

## 📝 URLs à Configurer

### En Développement Local

| Service | Variable | Valeur |
|---------|----------|--------|
| Frontend `.env` | `VITE_API_URL` | `http://localhost:4000/api` |
| Backend `.env` | `FRONTEND_URL` | `http://localhost:5173` |
| Backend `.env` | `NODE_ENV` | `development` |

### En Production

| Service | Variable | Valeur |
|---------|----------|--------|
| Vercel | `VITE_API_URL` | `https://ton-backend.koyeb.app/api` |
| Koyeb | `FRONTEND_URL` | `https://ton-site.vercel.app` |
| Koyeb | `NODE_ENV` | `production` |

## ✅ Checklist CORS

Avant de déployer :

- [ ] `FRONTEND_URL` dans Koyeb = URL Vercel exacte (sans `/`)
- [ ] `VITE_API_URL` dans Vercel = URL Koyeb + `/api`
- [ ] Pas de `http://` mélangé avec `https://`
- [ ] Testé en local d'abord
- [ ] Redéployé après chaque changement de variable

## 🎯 Exemple Complet (Production)

### 1. Déploiement Koyeb

Variables d'environnement Koyeb :
```env
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/ryzom
JWT_SECRET=ton_secret_super_long
CLOUDINARY_CLOUD_NAME=dryzom123
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=abcdefgh
FRONTEND_URL=https://ryzom.vercel.app
NODE_ENV=production
```

URL générée : `https://ryzom-backend-abc123.koyeb.app`

### 2. Déploiement Vercel

Variables d'environnement Vercel :
```env
VITE_API_URL=https://ryzom-backend-abc123.koyeb.app/api
```

URL générée : `https://ryzom.vercel.app`

### 3. Vérification

```bash
# Test backend
curl https://ryzom-backend-abc123.koyeb.app/health
# → {"status":"OK",...}

# Test CORS
curl -H "Origin: https://ryzom.vercel.app" \
     https://ryzom-backend-abc123.koyeb.app/api/events -v
# → Access-Control-Allow-Origin: https://ryzom.vercel.app
```

### 4. Test Frontend

Ouvre https://ryzom.vercel.app
- F12 → Console : pas d'erreur CORS
- Les événements se chargent
- ✅ Tout fonctionne !

## 🚨 Cas Spéciaux

### Domaine Custom

Si tu utilises un domaine custom (ex: `www.ryzom.fr`) :

1. Configure le domaine dans Vercel
2. Mets à jour `FRONTEND_URL` dans Koyeb :
   ```env
   FRONTEND_URL=https://www.ryzom.fr
   ```
3. Redéploie

### Sous-domaine

Si ton backend est sur un sous-domaine (ex: `api.ryzom.fr`) :

1. Configure le domaine custom dans Koyeb
2. Mets à jour `VITE_API_URL` dans Vercel :
   ```env
   VITE_API_URL=https://api.ryzom.fr/api
   ```

### Plusieurs Frontends

Si tu as plusieurs frontends (ex: mobile app) :

Modifie [backend/src/utils/corsOptions.js](backend/src/utils/corsOptions.js) :
```javascript
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL,           // Web
  process.env.FRONTEND_MOBILE_URL,    // Mobile
  process.env.FRONTEND_ADMIN_URL      // Admin
].filter(Boolean);
```

Puis dans Koyeb :
```env
FRONTEND_URL=https://ryzom.vercel.app
FRONTEND_MOBILE_URL=capacitor://localhost
FRONTEND_ADMIN_URL=https://admin.ryzom.fr
```

## 📞 Besoin d'Aide ?

Si tu as toujours des problèmes CORS :

1. Vérifie les logs Koyeb
2. Vérifie la console du navigateur (F12)
3. Utilise curl pour tester
4. Vérifie que les URLs sont EXACTEMENT identiques (pas d'espace, pas de `/` à la fin)

---

**✅ Une fois configuré, tu n'auras plus jamais à y toucher !**
