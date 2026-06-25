import express from 'express';
import adminJwtAuth from '../utils/adminJwtAuth.js';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post('/', adminJwtAuth, upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'ryzom-events',
        resource_type: 'auto',
        transformation: [
          { width: 1200, height: 800, crop: 'limit' },
          { quality: 'auto' },
          { fetch_format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) {
          console.error('❌ Cloudinary error:', error);
          return res.status(500).json({ error: 'Upload failed' });
        }

        if (!result) {
          return res.status(500).json({ error: 'No result from Cloudinary' });
        }

        return res.status(200).json({
          filename: result.public_id,
          url: result.secure_url,
          thumbnail: result.eager?.[0]?.secure_url || result.secure_url
        });
      }
    );

    // sécurité anti-blocage
    uploadStream.on('error', (err) => {
      console.error('❌ Stream error:', err);
      return res.status(500).json({ error: 'Stream failed' });
    });

    uploadStream.end(req.file.buffer);

  } catch (error) {
    console.error('❌ Upload route error:', error);
    return res.status(500).json({ error: 'Server error during upload' });
  }
});

export default router;