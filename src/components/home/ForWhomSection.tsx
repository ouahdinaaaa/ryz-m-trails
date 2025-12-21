import { ScrollReveal } from "@/components/ScrollReveal";
import amelieImg from "@/assets/portrait-amelie.jpg";
import julesImg from "@/assets/portrait-jules.jpg";
import leoImg from "@/assets/portrait-leo.jpg";
import jasmineImg from "@/assets/portrait-jasmine.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const portraits = [
  {
    name: "Amélie",
    age: "23 ans",
    image: amelieImg,
    description: "Enthousiaste aux éclats communicatifs, amoureuse de la nature, elle vit avec une infirmité motrice et une synthèse vocale.",
    hoverPhrase: "« La montagne n'a pas de limites, juste des chemins différents. »",
  },
  {
    name: "Jules",
    age: "8 ans",
    image: julesImg,
    description: "Passionné d'aventure, il a la malice dans les yeux. Sa myopathie l'empêche de marcher – mais certainement pas de rêver.",
    hoverPhrase: "« Avec mes copains, je suis le pilote le plus rapide ! »",
  },
  {
    name: "Léo",
    age: "15 ans",
    image: leoImg,
    description: "D'abord timide, aujourd'hui le sourire au vent, il découvre la montagne et la vie après une polyarthrite juvénile.",
    hoverPhrase: "« Chaque sommet atteint, c'est une victoire sur moi-même. »",
  },
  {
    name: "Jasmine",
    age: "maman isolée",
    image: jasmineImg,
    description: "Regard de guerrière chargé de courage, elle s'accroche aux belles opportunités d'inclusion pour son fils et elle.",
    hoverPhrase: "« Voir mon fils sourire en pleine nature, c'est mon plus beau cadeau. »",
  },
];

export function ForWhomSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-sand/30 to-cream/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title - Camping style */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-camping text-5xl md:text-6xl lg:text-7xl font-bold text-earth flex items-center justify-center gap-4">
              <span className="text-orange">—</span>
              <span>Pour qui</span>
              <span className="text-orange">→</span>
            </h2>
            <p className="font-camping text-xl md:text-2xl text-earth/60 mt-4 tracking-widest">
              RENCONTREZ CEUX QUE NOUS PORTONS
            </p>
          </div>
        </ScrollReveal>

        {/* Portraits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {portraits.map((person, index) => (
            <ScrollReveal key={person.name} delay={index * 150} direction="scale">
              <div className="group relative text-center">
                {/* Portrait with watercolor effect */}
                <div className="relative mx-auto w-36 h-36 md:w-44 md:h-44 mb-6">
                  {/* Watercolor ring */}
                  <div 
                    className="absolute inset-[-8px] rounded-full"
                    style={{
                      background: `conic-gradient(from ${index * 90}deg, hsl(var(--orange) / 0.15), hsl(var(--nature) / 0.1), hsl(var(--ochre) / 0.15), hsl(var(--orange) / 0.15))`,
                      filter: 'blur(4px)'
                    }}
                  />
                  
                  <div className="portrait-watercolor w-full h-full">
                    <img
                      src={person.image}
                      alt={`Portrait de ${person.name}`}
                      className="w-full h-full object-cover rounded-full img-vintage"
                    />
                  </div>
                  
                  {/* Hover quote bubble */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <div 
                      className="absolute -inset-4 bg-earth/95 rounded-2xl p-4 transform scale-90 group-hover:scale-100 transition-transform duration-300"
                      style={{ boxShadow: '0 10px 40px hsl(var(--earth) / 0.4)' }}
                    >
                      <p className="font-body italic text-sm text-cream leading-relaxed">
                        {person.hoverPhrase}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-marker text-2xl text-earth mb-1">
                  {person.name}
                  <span className="text-muted-foreground font-camping text-lg ml-2">
                    {person.age}
                  </span>
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed px-2">
                  {person.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button - Wooden sign style */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <Link to="/histoires" className="btn-wooden text-2xl">
              Voir les témoignages
              <ArrowRight size={24} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}