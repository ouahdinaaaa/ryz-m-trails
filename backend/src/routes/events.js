import express from 'express';
import adminJwtAuth from '../utils/adminJwtAuth.js';
import Event from '../models/Event.js';

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find().sort({ date: -1 });
  res.json(events);
});

// Get single event
router.get('/:id', async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ error: 'Not found' });
  res.json(event);
});

// Create event (admin only)
router.post('/', adminJwtAuth, async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});

// Update event (admin only)
router.put('/:id', adminJwtAuth, async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!event) return res.status(404).json({ error: 'Not found' });
  res.json(event);
});

// Delete event (admin only)
router.delete('/:id', adminJwtAuth, async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Deleted' });
});

export default router;
