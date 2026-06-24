import mongoose from 'mongoose';


const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: String,
  date: String,
  readTime: String,
  tags: [String], // ex: ['Joëlette', 'Émotion', 'Solidarité']
  tagIds: [String], // ex: ['competition', 'portrait', 'joelette']
  image: String, // URL ou nom de fichier
  content: String, // HTML ou markdown
}, { timestamps: true });

export default mongoose.model('Article', ArticleSchema);