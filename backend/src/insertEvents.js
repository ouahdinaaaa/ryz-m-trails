import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from './models/Event.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const events = [
  {
    title: "La Trifouillette - Jour",
    description: "Course inclusive en pleine journée, un moment de partage sous le soleil.",
    date: "Juin 2025",
    location: "Île-de-France",
    category: "sportif",
    icon: "🏃",
    isNight: false,
    participants: "200+ participants"
  },
  {
    title: "La Trifouillette - Nuit",
    description: "L'aventure continue sous les étoiles. Une expérience magique et unique.",
    date: "Juin 2025",
    location: "Île-de-France",
    category: "sportif",
    icon: "🌙",
    isNight: true,
    participants: "100+ participants"
  },
  {
    title: "Mud Run",
    description: "Course d'obstacles dans la boue. Rires, entraide et souvenirs garantis !",
    date: "Septembre 2025",
    location: "Région parisienne",
    category: "sportif",
    icon: "💪",
    participants: "150+ participants"
  },
  {
    title: "Coupe du Monde de Joëlette",
    description: "L'événement international de référence. RYZ'ÔM représente la France !",
    date: "Octobre 2025",
    location: "International",
    category: "sportif",
    icon: "🏆",
    participants: "Équipe nationale"
  },
  {
    title: "Parcourir Montigny",
    description: "Une balade inclusive à travers la ville. Familles et amis bienvenus.",
    date: "Mai 2025",
    location: "Montigny-le-Bretonneux",
    category: "festif",
    icon: "🚶",
    participants: "Ouvert à tous"
  },
  {
    title: "Cheptantrail",
    description: "Trail solidaire où chaque kilomètre compte pour l'inclusion.",
    date: "Avril 2025",
    location: "Chevreuse",
    category: "sportif",
    icon: "⛰️",
    participants: "300+ participants"
  },
  {
    title: "Marche de la Bièvre",
    description: "Suivre la rivière, découvrir la nature, partager un moment ensemble.",
    date: "Mars 2025",
    location: "Vallée de la Bièvre",
    category: "inclusif",
    icon: "🌿",
    participants: "Familles bienvenues"
  },
  {
    title: "Courses d'Orientation",
    description: "Allier réflexion et sport, accessible à tous les niveaux.",
    date: "Toute l'année",
    location: "Divers lieux",
    category: "sportif",
    icon: "🧭",
    participants: "Équipes mixtes"
  },
  {
    title: "Sorties Amicales",
    description: "Moments de convivialité entre bénévoles, pilotes et passagers.",
    date: "Régulièrement",
    location: "Partout en France",
    category: "festif",
    icon: "🎉",
    participants: "Toute la famille RYZ'ÔM"
  }
];

async function insertEvents() {
  try {
    if (!MONGO_URI) {
      throw new Error("❌ MONGO_URI is missing");
    }

    console.log("🔌 Connecting to MongoDB...");

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ Connected to MongoDB");

    await Event.deleteMany({});
    console.log("🧹 Old events cleared");

    await Event.insertMany(events);
    console.log("🚀 Events inserted successfully");

  } catch (err) {
    console.error("❌ Error inserting events:", err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

insertEvents();