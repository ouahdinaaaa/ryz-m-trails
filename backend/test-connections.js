import mongoose from 'mongoose';
import cloudinary from './src/config/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Test de connexion aux services...\n');

// Test MongoDB
async function testMongoDB() {
  try {
    console.log('📊 Test MongoDB...');
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ryz';
    
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connecté avec succès !');
    console.log(`   URI: ${MONGO_URI.replace(/\/\/.*@/, '//<credentials>@')}\n`);
    
    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ Erreur MongoDB:', error.message);
    console.log('   Vérifie ton MONGO_URI dans le fichier .env\n');
  }
}

// Test Cloudinary
async function testCloudinary() {
  try {
    console.log('☁️  Test Cloudinary...');
    
    const config = cloudinary.config();
    
    if (!config.cloud_name || !config.api_key || !config.api_secret) {
      console.error('❌ Configuration Cloudinary incomplète');
      console.log('   Vérifie CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET dans .env\n');
      return;
    }
    
    // Test simple de ping
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary connecté avec succès !');
    console.log(`   Cloud: ${config.cloud_name}`);
    console.log(`   Status: ${result.status}\n`);
    
  } catch (error) {
    console.error('❌ Erreur Cloudinary:', error.message);
    console.log('   Vérifie tes identifiants Cloudinary dans le fichier .env\n');
  }
}

// Exécution
(async () => {
  await testMongoDB();
  await testCloudinary();
  
  console.log('🎉 Tests terminés !');
  process.exit(0);
})();
