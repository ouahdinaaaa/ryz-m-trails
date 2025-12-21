import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";
import storyImage from "@/assets/story-course.jpg";
import portraitImage from "@/assets/portrait-amelie.jpg";

const cards = [
  {
    title: "Découvrir Notre Histoire",
    image: heroImage,
    link: "/association",
    rotation: "-2deg",
  },
  {
    title: "La Joëlette en Action",
    image: storyImage,
    link: "/joelette",
    rotation: "1deg",
  },
  {
    title: "Rejoindre l'Aventure",
    image: portraitImage,
    link: "/engager",
    rotation: "-1deg",
  },
];

export function DiscoverCardsSection() {
  return (
    <section className="py-16 relative grain-overlay">
      {/* Background texture */}
      <div className="absolute inset-0 paper-vintage opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 150}>
              <Link to={card.link} className="block">
                <div 
                  className="card-photo group"
                  style={{ '--rotation': card.rotation } as React.CSSProperties}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'sepia(0.1) saturate(1.05)' }}
                    />
                  </div>
                  
                  {/* Label - Style panneau/peinture */}
                  <div className="mt-3 text-center">
                    <span 
                      className="font-camping text-xl md:text-2xl font-bold text-earth inline-block px-3 py-1 relative"
                      style={{ 
                        background: 'linear-gradient(180deg, hsl(38 45% 75% / 0.6) 0%, hsl(32 40% 65% / 0.4) 100%)',
                        borderRadius: '4px',
                        boxShadow: '2px 2px 0 hsl(28 50% 32% / 0.15)'
                      }}
                    >
                      {card.title}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
