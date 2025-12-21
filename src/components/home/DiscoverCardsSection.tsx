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
    rotation: "-2.5deg",
  },
  {
    title: "La Joëlette en Action",
    image: storyImage,
    link: "/joelette",
    rotation: "1.5deg",
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
    <section className="py-20 relative grain-overlay">
      {/* Background texture */}
      <div className="absolute inset-0 paper-vintage" />
      
      {/* Decorative watercolor blobs */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-nature/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 200}>
              <Link to={card.link} className="block group">
                <div 
                  className="card-watercolor p-3 pb-5"
                  style={{ '--rotation': card.rotation } as React.CSSProperties}
                >
                  {/* Pin decoration */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div 
                      className="w-5 h-5 rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 35% 35%, hsl(28 80% 68%), hsl(22 85% 52%), hsl(18 60% 38%))',
                        boxShadow: 'inset -2px -2px 4px hsl(18 60% 28% / 0.4), inset 1px 1px 2px hsl(38 80% 75% / 0.3), 0 4px 8px hsl(28 50% 32% / 0.4)'
                      }}
                    />
                  </div>
                  
                  {/* Image with vintage treatment */}
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover img-vintage group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Label - Painted sign style */}
                  <div className="mt-4 text-center">
                    <span 
                      className="font-camping text-xl md:text-2xl font-bold text-earth inline-block px-5 py-2 relative"
                      style={{ 
                        background: 'linear-gradient(180deg, hsl(38 48% 78%) 0%, hsl(32 42% 68%) 100%)',
                        borderRadius: '4px',
                        boxShadow: '2px 2px 0 hsl(28 50% 32% / 0.2), inset 0 1px 2px hsl(45 50% 85% / 0.4)'
                      }}
                    >
                      {/* Wood grain texture */}
                      <span 
                        className="absolute inset-0 rounded opacity-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='wood'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03 0.1' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23wood)'/%3E%3C/svg%3E")`,
                          mixBlendMode: 'multiply'
                        }}
                      />
                      <span className="relative">{card.title}</span>
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