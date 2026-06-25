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

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/admin', adminAuthApi);
app.use('/api/articles', articlesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/upload', uploadRouter);
app.use('/admin', adminRouter);

// Health check Render
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// sécurité startup
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing");
  process.exit(1);
}

// connexion Mongo non bloquante
mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// serveur démarre toujours (IMPORTANT pour Render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});