import express from 'express';
import adminJwtAuth from '../utils/adminJwtAuth.js';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';

const router = express.Router();

// Configuration multer pour stocker les fichiers en mémoire temporairement
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // Limite de 5MB
});

// POST /api/upload (field: image)
router.post('/', adminJwtAuth, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload vers Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'ryzom-events', // Organise tes images dans un dossier
        resource_type: 'auto',
        transformation: [
          { width: 1200, height: 800, crop: 'limit' }, // Optimise la taille
          { quality: 'auto' }, // Compression automatique
          { fetch_format: 'auto' } // Format optimal (WebP si supporté)
        ]
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Upload failed' });
        }
        
        res.json({ 
          filename: result.public_id,
          url: result.secure_url,
          thumbnail: result.eager?.[0]?.secure_url || result.secure_url
        });
      }
    );

    // Envoie le buffer vers Cloudinary
    uploadStream.end(req.file.buffer);
    
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Server error during upload' });
  }
});

export default router;