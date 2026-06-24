# Utilise une image Node officielle optimisée
FROM node:20-alpine

# Dossier de travail
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe uniquement les dépendances de production
RUN npm ci --only=production

# Copie le reste du code
COPY . .

# Expose le port de l'API (Koyeb détecte automatiquement via $PORT)
EXPOSE 4000

# Utilise un utilisateur non-root pour la sécurité
USER node

# Commande de démarrage en production
CMD ["npm", "start"]
