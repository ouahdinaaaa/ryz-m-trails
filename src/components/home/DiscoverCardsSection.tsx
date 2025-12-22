// DiscoverCardsSection.jsx (Avec CSS inclus et casté)

import React from 'react'; // Assurez-vous d'importer React
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/card1.png";
import storyImage from "@/assets/card2.png";
import portraitImage from "@/assets/card3.png";

// Mise à jour des données
const cards = [
  {
    title: "DÉCOUVRIR<br>NOTRE HISTOIRE",
    image: heroImage,
    link: "/association",
    colorClass: "red-brush",
  },
  {
    title: "LA JOËLETTE<br>EN ACTION",
    image: storyImage,
    link: "/joelette",
    colorClass: "brown-brush",
  },
  {
    title: "REJOINDRE<br>L'AVENTURE",
    image: portraitImage,
    link: "/engager",
    colorClass: "blue-brush",
  },
];

// Le bloc CSS complet transformé en chaîne de caractères JavaScript
const componentStyles = `
/* CSS de base */
.feature-container {
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 15px;
    margin-left: auto;
    margin-right: auto;
}

/* --- CARTE (LIEN) --- */
.feature-card-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1 1 32%;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s ease; 
}

/* HOVER: Soulèvement de la carte */
.feature-card-link:hover {
    transform: translateY(-8px); 
}

/* --- IMAGE WRAPPER (Style unifié) --- */
.image-wrapper {
    width: 100%;
    overflow: hidden;
    /* Forme organique unifiée */
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    box-shadow: inset 0 0 20px rgba(244, 241, 234, 0.5);
}

.watercolor-img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3; 
    object-fit: cover;
    /* Masque pour les bords fondus */
    -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    mask-image: radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    transition: transform 0.5s ease; 
}

/* HOVER: Zoom sur l'image */
.feature-card-link:hover .watercolor-img {
    transform: scale(1.06);
}

/* --- TEXTES FLUIDES ET TACHES --- */
.brush-stroke {
    margin-top: -3.5vw; 
    padding: 0.8vw 1vw;
    color: white;
    text-align: center;
    z-index: 10;
    width: 95%;
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    transition: transform 0.4s ease; 
}

.brush-stroke h2 {
    font-family: 'Oswald', sans-serif;
    margin: 0;
    line-height: 1.1;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    font-size: clamp(0.5rem, 1.2vw + 0.1rem, 1rem);
    overflow-wrap: break-word;
}

/* Couleurs et TRANSFORMATIONS DE BASE */
.red-brush { background-color: #a63e26; transform: rotate(-1deg); }
.brown-brush { background-color: #5d4037; transform: rotate(1deg); }
.blue-brush { background-color: #455a64; transform: rotate(-2deg); }

/* HOVER : DÉPLACEMENT DES TACHES */
.feature-card-link:hover .red-brush {
    transform: rotate(1deg) translateX(5px); 
}

.feature-card-link:hover .brown-brush {
    transform: rotate(-1deg) translateY(-2px);
}

.feature-card-link:hover .blue-brush {
    transform: rotate(0deg) translateX(-5px);
}

/* Media Queries pour le responsive */
@media (min-width: 900px) {
    .brush-stroke { margin-top: -30px; }
}
@media (max-width: 600px) {
    .feature-container { gap: 5px; }
    .brush-stroke { margin-top: -12px; padding: 4px 2px; }
}
`;


export function DiscoverCardsSection() {
  return (
    <React.Fragment>
      {/* 1. Inclusion du CSS avec dangeroulySetInnerHTML */}
      {/* On utilise 'as any' pour forcer le type et éviter l'erreur TypeScript */}
      <style
        dangerouslySetInnerHTML={{ __html: componentStyles }}
        // @ts-ignore : Utilisé pour éviter l'erreur si la prop 'jsx' est toujours là.
        // Si vous n'avez pas cette prop dans votre code, vous pouvez la supprimer
        // mais gardez le dangerouslySetInnerHTML.
      />

      {/* 2. Le reste de la structure du composant (identique à la version précédente) */}
      <section className="py-20 relative grain-overlay overflow-hidden">
        {/* Vos effets de fond Tailwind sont conservés */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream/40 to-transparent z-10" />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 paper-vintage opacity-80" />
        </div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange/8 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="feature-container">
              {cards.map((card, index) => (
                <ScrollReveal key={card.title} delay={index * 200}>
                  <Link to={card.link} className="feature-card-link">
                    
                    <div className="image-wrapper">
                      <img
                        src={card.image}
                        alt={card.title.replace('<br>', ' ')}
                        className="watercolor-img"
                      />
                    </div>
                    
                    <div className={`brush-stroke ${card.colorClass}`}>
                      <h2>
                        {card.title.split('<br>').map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                                {line}
                                {lineIndex < card.title.split('<br>').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                      </h2>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}