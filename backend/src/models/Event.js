import mongoose from 'mongoose';


const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: String,
  location: String,
  participants: String, // ex: '200+ participants'
  category: { type: String, enum: ['sportif', 'festif', 'inclusif'], required: true },
  icon: String, // emoji ou code unicode
  isNight: Boolean, // true = nuit, false = journée
}, { timestamps: true });

export default mongoose.model('Event', EventSchema);