import express from 'express';
import adminJwtAuth from '../utils/adminJwtAuth.js';
import Article from '../models/Article.js';

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
});

// Get single article
router.get('/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) return res.status(404).json({ error: 'Not found' });
  res.json(article);
});

// Create article (admin only)
router.post('/', adminJwtAuth, async (req, res) => {
  const article = new Article(req.body);
  await article.save();
  res.status(201).json(article);
});

// Update article (admin only)
router.put('/:id', adminJwtAuth, async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!article) return res.status(404).json({ error: 'Not found' });
  res.json(article);
});

// Delete article (admin only)
router.delete('/:id', adminJwtAuth, async (req, res) => {
  const article = await Article.findByIdAndDelete(req.params.id);
  if (!article) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Deleted' });
});

export default router;
