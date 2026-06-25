import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import corsOptions from './utils/corsOptions.js';
import articlesRouter from './routes/articles.js';
import eventsRouter from './routes/events.js';
import adminRouter from './routes/admin.js';
import uploadRouter from './routes/upload.js';
import adminAuthApi from './routes/adminAuthApi.js';
import adminJwtAuth from './utils/adminJwtAuth.js';

dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/admin', adminAuthApi);

// Routes publiques et protégées (la protection JWT est gérée dans les fichiers de routes)
app.use('/api/articles', articlesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/upload', uploadRouter);
app.use('/admin', express.urlencoded({ extended: true }), adminRouter);

// Route de health check pour Koyeb
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Arrête le serveur si la DB n'est pas accessible
  });
