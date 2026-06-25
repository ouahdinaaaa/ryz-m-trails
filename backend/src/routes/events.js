import express from 'express';
import adminJwtAuth from '../utils/adminJwtAuth.js';
import Event from '../models/Event.js';

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ _id: -1 });
    return res.json(events);
  } catch (err) {
    console.error("❌ Get events error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(event);
  } catch (err) {
    console.error("❌ Get event error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Create event (admin only)
router.post('/', adminJwtAuth, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    return res.status(201).json(event);
  } catch (err) {
    console.error("❌ Create event error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update event (admin only)
router.put('/:id', adminJwtAuth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json(event);
  } catch (err) {
    console.error("❌ Update event error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete event (admin only)
router.delete('/:id', adminJwtAuth, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ error: 'Not found' });
    }

    return res.json({ message: 'Deleted' });
  } catch (err) {
    console.error("❌ Delete event error:", err);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;