import crypto from 'crypto';

console.log('🔐 Génération d\'un JWT_SECRET sécurisé...\n');

// Génère un secret aléatoire de 64 caractères
const jwtSecret = crypto.randomBytes(32).toString('hex');

console.log('✅ JWT_SECRET généré avec succès !\n');
console.log('Copie cette valeur dans ton fichier .env ou dans Koyeb :\n');
console.log('JWT_SECRET=' + jwtSecret);
console.log('\n⚠️  ATTENTION : Ne partage JAMAIS ce secret !\n');

// Bonus : génère aussi un secret plus court mais lisible pour les tests
const readableSecret = crypto.randomBytes(16).toString('base64');
console.log('Alternative (plus courte, base64) :\n');
console.log('JWT_SECRET=' + readableSecret);
console.log('\n');
