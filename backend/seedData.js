import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Event from './src/models/Event.js';
import Article from './src/models/Article.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connecté à MongoDB');

    // --- 1. AJOUT DES ARTICLES ---
    console.log('🧹 Nettoyage des articles existants...');
    await Article.deleteMany({}); // On repart sur une base propre comme demandé (5 par défaut)

    const articlesData = [
      {
        title: "Lancement du projet Team Curie",
        subtitle: "Un partenariat exceptionnel pour vaincre la maladie",
        date: "15 Septembre 2025",
        readTime: "3 min",
        tags: ["Partenariat", "Institut Curie", "Santé"],
        tagIds: ["partenariat", "curie", "sante"],
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2000&auto=format&fit=crop",
        content: `
          <p>La course de la Trifouillette du 14/09 dernier fut le démarrage en grandeur réelle d'un projet mené avec l'Institut Curie, le projet "Team Curie".</p>
          <p>L’idéal est de mettre dans une joëlette un enfant traité à Curie, entouré du personnel soignant, des membres de sa famille et de jeunes camarades de classe formés à la joëlette.</p>
          <p>Cette joëlette métissée, intergénérationnelle, à l’image de notre société sera force de vie et source d'énergie, pour vaincre la maladie… C'est un beau projet et il est en train de se développer fortement tout comme les autres axes innovants que nous promouvons avec Ryz’Ôm.</p>
        `
      },
      {
        title: "Le message d'espoir d'Adam",
        subtitle: "De la joëlette à la course : un parcours inspirant",
        date: "16 Septembre 2025",
        readTime: "4 min",
        tags: ["Témoignage", "Résilience", "Espoir"],
        tagIds: ["temoignage", "resilience", "espoir"],
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop",
        content: `
          <p>Des enfants en traitement qui ont été dans la joëlette et ont découvert le partage de l'effort en étaient ressortis plus que motivés.</p>
          <p>C’est ce que m’a dit Adam, après son premier passage dans la joëlette. Il avait découvert le collectif soudé et le partage de l’effort. Il m’avait alors dit : <strong>« J’ai désormais un but. Je veux sortir de la joëlette et pousser avec vous ! »</strong>.</p>
          <p>Une motivation, un objectif. Et Adam a réussi. Il a couru pour la première fois avec nous sur la Trifouillette. La joëlette comme aide pour un autre futur. C'est magnifique ce qu'il a fait.</p>
        `
      },
      {
        title: "Retour sur la Trifouillette XXL",
        subtitle: "Une édition record avec 4 joëlettes au départ",
        date: "17 Septembre 2025",
        readTime: "2 min",
        tags: ["Course", "Trifouillette", "Record"],
        tagIds: ["course", "trifouillette", "record"],
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2000&auto=format&fit=crop",
        content: `
          <p>La Trifouillette a vraiment été un très grand moment cette année. Des expériences antérieures avaient eu lieu, plus en miniature mais là, on passait en mode XXL.</p>
          <p>Beaucoup de monde, beaucoup de jeunes, de la famille, du personnel de Curie... Et en plus, on a placé <strong>4 joëlettes</strong>, ce qui a été un autre record !!!</p>
          <p>Sur les photos de l'événement, on peut voir Adam tirer Ayoub (aussi traité à Curie). Derrière, une autre joëlette avec Calixte. Adam est devenu l'exemple vivant de ce qu'il est possible de réaliser, de ce que la joëlette avait permis car le collectif pousse, motive et renforce !!!</p>
        `
      },
      {
        title: "La force du collectif Ryz'Ôm",
        subtitle: "Quand l'alchimie humaine dépasse le sport",
        date: "20 Octobre 2025",
        readTime: "3 min",
        tags: ["Collectif", "Famille", "Émotion"],
        tagIds: ["collectif", "famille", "emotion"],
        image: "https://images.unsplash.com/photo-1529156069896-8593a49eaf56?q=80&w=2000&auto=format&fit=crop",
        content: `
          <p>Une des sœurs de Calixte est venue courir avec et pour son frère sur la Trifouillette. Une autre sœur, qui n'était pas à priori fan de course, a décidé de venir avec nous tant il y a eu d’émotions et de joies.</p>
          <p>Cela veut dire que se met réellement en place un collectif autour du pilote cancéreux qui regroupe des pousseurs "ex-malades", des membres des familles, des jeunes, du personnel de Curie. Nous allons aussi intégrer des camarades de classe pour ajouter du lien social.</p>
          <p>On sent bien que cette alchimie qui prend ne peut qu'aider le pilote à se battre. La beauté d'une joëlette « Curie », forte de toutes ces personnes reliées par leur histoire.</p>
        `
      },
      {
        title: "Rendez-vous à la Course des Lumières",
        subtitle: "Une sortie nocturne pour éclairer la recherche",
        date: "05 Novembre 2025",
        readTime: "1 min",
        tags: ["À venir", "Nocturne", "Paris"],
        tagIds: ["avenir", "nocturne", "paris"],
        image: "https://images.unsplash.com/photo-1510255561081-3962635ca6d7?q=80&w=2000&auto=format&fit=crop",
        content: `
          <p>La suite est la <strong>Course des Lumières le 15/11 à Paris</strong> au profit de la recherche de Curie. On va mettre trois joëlettes car on a obtenu le droit de placer des joëlettes pour la première fois sur cette course.</p>
          <p>Il y aura Ayoub et Calixte en pilotes et maintenant Milhan. Vous êtes les bienvenu(e)s à participer. 5km, pas à un grand rythme car on va profiter de la sortie.</p>
          <p>Sortie nocturne, départ 19h30. C'est au profit de Curie et pour sa recherche, mais nous avons obtenu un tarif spécifique. Alors à bientôt sur la ligne de départ !</p>
        `
      }
    ];

    await Article.insertMany(articlesData);
    console.log(`✅ ${articlesData.length} articles créés.`);

    // --- 2. AJOUT DES ÉVÉNEMENTS DU PLANNING ---
    console.log('📅 Ajout des événements du planning...');
    // Note: On n'efface pas forcément les anciens événements pour ne pas perdre l'historique, mais ici on ajoute ceux demandés.
    
    const eventsData = [
      {
        title: "La Trifouillette",
        description: "Course solidaire en collaboration avec l'Institut Curie. Mode XXL avec 4 joëlettes : Adam, Ayoub, Calixte et Milhan au départ !",
        date: "2025-09-14T09:00:00.000Z",
        location: "Igny / Vallée de Chevreuse",
        category: "sportif",
        icon: "🏃",
        isNight: false,
        participants: "4 Joëlettes"
      },
      {
        title: "Course des Lumières",
        description: "Course nocturne de 5km à Paris au profit de la recherche contre le cancer. Ambiance féerique garantie.",
        date: "2025-11-15T19:30:00.000Z",
        location: "Paris",
        category: "inclusif",
        icon: "✨",
        isNight: true,
        participants: "3 Joëlettes"
      },
      {
        title: "Randonnée Solidaire de Printemps",
        description: "Une belle randonnée pour profiter des beaux jours et partager un moment convivial sur les sentiers.",
        date: "2026-04-12T10:00:00.000Z",
        location: "Forêt de Fontainebleau",
        category: "inclusif",
        icon: "🌲",
        isNight: false,
        participants: "Ouvert à tous"
      },
      {
        title: "Mud Run Solidaire",
        description: "Course à obstacles festive et boueuse ! Préparez-vous à salir vos t-shirts pour la bonne cause.",
        date: "2026-06-14T09:00:00.000Z",
        location: "Base de Loisirs des Boucles de Seine",
        category: "festif",
        icon: "🔥",
        isNight: false,
        participants: "Équipe Ryz'Ôm"
      },
      {
        title: "Formation Pilotage Joëlette",
        description: "Journée de formation pour apprendre à piloter et accompagner une joëlette en sécurité. Théorie et pratique.",
        date: "2026-03-22T09:30:00.000Z",
        location: "Parc de Sceaux",
        category: "sportif",
        icon: "🎓",
        isNight: false,
        participants: "15 places"
      }
    ];

    // On utilise insertMany mais on pourrait vérifier les doublons. Ici pour le seed simple on insère.
    await Event.insertMany(eventsData);
    console.log(`✅ ${eventsData.length} événements ajoutés.`);

    console.log('🚀 Base de données mise à jour avec succès !');
    process.exit(0);

  } catch (error) {
    console.error('❌ Erreur lors du seed :', error);
    process.exit(1);
  }
};

seedDatabase();
