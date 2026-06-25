import express from 'express';
import adminJwtAuth from '../utils/adminJwtAuth.js';
import Article from '../models/Article.js';

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().sort({ _id: -1 });
    return res.json(articles);
  } catch (err) {
    console.error("❌ Get articles error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get single article
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(article);
  } catch (err) {
    console.error("❌ Get article error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Create article (admin only)
router.post('/', adminJwtAuth, async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    return res.status(201).json(article);
  } catch (err) {
    console.error("❌ Create article error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update article (admin only)
router.put('/:id', adminJwtAuth, async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!article) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(article);
  } catch (err) {
    console.error("❌ Update article error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete article (admin only)
router.delete('/:id', adminJwtAuth, async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json({ message: 'Deleted' });
  } catch (err) {
    console.error("❌ Delete article error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;