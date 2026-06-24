// Configuration CORS pour autoriser le frontend
import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',  // Dev local Vite
  'http://localhost:3000',  // Dev local alternatif
  process.env.FRONTEND_URL  // URL de production Vercel (ex: https://ryzom.vercel.app)
].filter(Boolean); // Retire les valeurs undefined

const corsOptions = {
  origin: (origin, callback) => {
    // Autorise les requêtes sans origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;


