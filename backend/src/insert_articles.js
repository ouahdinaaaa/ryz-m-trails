// Script d'insertion d'articles pour la base MongoDB
import mongoose from 'mongoose';
import Article from './models/Article.js';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ryz';

const articles = [
  {
    title: "Récit d'une course épique... jusqu'à la ligne d'arrivée!",
    subtitle: "Une aventure inoubliable avec Jules",
    date: "18 avril 2024",
    readTime: "6 minutes de lecture",
    tags: ["Joëlette", "Émotion", "Solidarité"],
    image: "story-course.jpg",
    content: `
      <h2>Un départ explosif plein d'énergie</h2>
      <p class="first-letter">Dès les premières lueurs du matin, l'air était chargé d'une excitation palpable. Notre équipe RYZ'ÔM s'était réunie autour de Jules et de sa joëlette, un sourire jusqu'aux oreilles. Jules, notre jeune aventurier atteint de myopathie, nous fixait sous son casque orange avec des étoiles dans les yeux.</p>
      <p>Le briefing est terminé, la tension monte, et l'heure du départ sonne enfin. 3... 2... 1... C'est parti!</p>
      <blockquote>"Ensemble, nous allons décrocher les étoiles!" - Jules, 8 ans</blockquote>
      <p>L'équipe s'élance. Jules fermement assis dans sa joëlette. On court, on slalome à travers les chemins, les cailloux volent sous nos pieds. Des sourires, des encouragements, et cette énergie collective qui nous porte.</p>
      <h2>Les moments de doute... puis de triomphe</h2>
      <p>À mi-parcours, la fatigue se fait sentir. Les côtes s'enchaînent, le soleil tape fort. Mais à chaque regard échangé avec Jules, notre détermination se renforce. Son rire communicatif efface instantanément toute trace d'épuisement.</p>
      <p>Et puis arrive ce moment magique. La ligne d'arrivée se dessine au loin. La foule nous encourage. Les larmes montent aux yeux.</p>
      <blockquote>"Ce n'est pas moi qui ai franchi la ligne d'arrivée. C'est nous. Tous ensemble." - Marie, bénévole</blockquote>
      <h2>Une victoire partagée</h2>
      <p>Au final, ce n'est pas le chronomètre qui compte. C'est ce lien indéfectible qui s'est tissé entre nous tous. C'est le regard de Jules quand il a compris qu'il avait réalisé son rêve. C'est cette certitude que l'inclusion n'est pas qu'un mot, mais une réalité vivante.</p>
      <p>Rendez-vous à la prochaine course. Ensemble, tout devient possible.</p>
    `,
  },
  {
    title: "Portrait : À la rencontre de Jasmine et Léo",
    subtitle: "L'histoire émouvante d'une maman courageuse",
    date: "5 avril 2024",
    readTime: "5 minutes de lecture",
    tags: ["Portrait", "Témoignage", "Famille"],
    image: "story-portrait.jpg",
    content: `
      <h2>Une rencontre qui change tout</h2>
      <p class="first-letter">Jasmine nous accueille avec un sourire timide mais sincère. À ses côtés, Léo, 15 ans, observe le monde avec une curiosité nouvelle. Leur histoire avec RYZ'ÔM a commencé il y a un an, et depuis, leur vie a pris un tournant inattendu.</p>
      <p>"Avant de rencontrer l'association, Léo restait enfermé. Sa polyarthrite juvénile l'empêchait de suivre ses amis dans leurs aventures. Il se sentait différent, exclu."</p>
      <blockquote>"La première fois que Léo est monté dans la joëlette, j'ai vu ses yeux s'illuminer comme jamais." - Jasmine</blockquote>
      <h2>La montagne comme thérapie</h2>
      <p>Pour Léo, chaque sortie est devenue une victoire. La nature, qu'il ne connaissait qu'à travers les fenêtres, est devenue son terrain de jeu. Les sentiers de montagne ont remplacé les couloirs d'hôpital.</p>
      <p>Jasmine, maman solo, a elle aussi trouvé dans l'association une famille. "Les bénévoles sont devenus nos amis. On partage bien plus que des courses : on partage nos vies, nos joies, nos peines."</p>
      <h2>Un avenir plein d'espoir</h2>
      <p>Aujourd'hui, Léo rêve de devenir "ambassadeur de la joëlette". Il veut montrer aux autres enfants comme lui que le handicap n'est pas une fatalité, mais une différence qui peut se transformer en force.</p>
      <blockquote>"Chaque sommet atteint avec RYZ'ÔM me prouve que je peux tout accomplir." - Léo, 15 ans</blockquote>
    `,
  },
  {
    title: "Le championnat du monde de Joëlette: Notre expérience",
    subtitle: "Retour sur une compétition unique en son genre",
    date: "28 mars 2024",
    readTime: "7 minutes de lecture",
    tags: ["Compétition", "Joëlette", "International"],
    image: "story-championnat.jpg",
    content: `
      <h2>Direction les sommets</h2>
      <p class="first-letter">Participer au championnat du monde de Joëlette, c'était notre rêve fou depuis la création de RYZ'ÔM. Cette année, ce rêve est devenu réalité. Notre équipe s'est envolée pour représenter notre association face aux meilleurs équipages du monde.</p>
      <p>L'excitation était à son comble. Des mois de préparation, d'entraînement, de coordination. Chaque membre de l'équipe connaissait son rôle par cœur.</p>
      <blockquote>"Nous n'étions pas là pour gagner. Nous étions là pour montrer que l'impossible n'existe pas." - Thomas, capitaine d'équipe</blockquote>
      <h2>L'épreuve</h2>
      <p>15 kilomètres de sentiers montagneux. 800 mètres de dénivelé positif. Et surtout, une chaleur écrasante qui mettait notre endurance à rude épreuve.</p>
      <p>Mais l'équipe a tenu bon. Relais après relais, nous avons gravi la montagne. Les encouragements fusaient entre nous, créant une bulle d'énergie positive.</p>
      <h2>Une fierté immense</h2>
      <p>Au final, notre classement importe peu. Ce qui compte, c'est d'avoir été là, ensemble. D'avoir représenté toutes ces personnes qui croient en notre mission. D'avoir prouvé que l'inclusion par le sport n'a pas de frontières.</p>
      <blockquote>"Ce championnat m'a appris que la vraie victoire, c'est de ne jamais abandonner." - Amélie, passagère</blockquote>
      <p>L'année prochaine, nous reviendrons. Plus forts. Plus déterminés. Et toujours aussi unis.</p>
    `,
  },
];

async function insertArticles() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await Article.deleteMany({}); // Optionnel : vide la collection avant insertion
    await Article.insertMany(articles);
    console.log('Articles insérés avec succès !');
    process.exit(0);
  } catch (err) {
    console.error('Erreur lors de l\'insertion :', err);
    process.exit(1);
  }
}

insertArticles();
