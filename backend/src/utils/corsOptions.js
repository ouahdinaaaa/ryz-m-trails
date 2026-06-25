// Configuration CORS pour autoriser le frontend
import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
]
  .filter(Boolean)
  .map(origin => origin.replace(/\/$/, '')); // enlève slash final

const corsOptions = {
  origin: (origin, callback) => {
    // autorise Postman / mobile apps / curl
    if (!origin) return callback(null, true);

    const cleanOrigin = origin.replace(/\/$/, '');

    if (allowedOrigins.includes(cleanOrigin)) {
      return callback(null, true);
    }

    console.log("❌ CORS blocked origin:", origin);
    return callback(null, false);
  },

  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;

