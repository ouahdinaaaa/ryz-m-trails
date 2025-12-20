import { ScrollReveal } from "@/components/ScrollReveal";
import amelieImg from "@/assets/portrait-amelie.jpg";
import julesImg from "@/assets/portrait-jules.jpg";
import leoImg from "@/assets/portrait-leo.jpg";
import jasmineImg from "@/assets/portrait-jasmine.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    description: "Passionné d'aventure, il a la malice dans les yeux. Sa myopathie qui l'empêche de marcher – mais certainement pas de rêver.",
    hoverPhrase: "« Avec mes copains, je suis le pilote le plus rapide ! »",
  },
  {
    name: "Léo",
    age: "15 ans",
    image: leoImg,
    description: "D'abord timide, aujourd'hui le sourire au vent, il découvre la montagne et la vie même – après une polyarthrite juvénile.",
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
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-earth mb-4 flex items-center justify-center gap-4">
              <span className="text-orange">—</span>
              Pour qui
              <span className="text-orange">—</span>
            </h2>
            <p className="font-display text-xl text-muted-foreground">
              RENCONTREZ CEUX QUE NOUS PORTONS
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portraits.map((person, index) => (
            <ScrollReveal key={person.name} delay={index * 100} direction="scale">
              <div className="group relative text-center">
                {/* Portrait Circle */}
                <div className="relative mx-auto w-40 h-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange/20 to-nature/20 transform group-hover:scale-110 transition-transform duration-500" />
                  <img
                    src={person.image}
                    alt={`Portrait de ${person.name}`}
                    className="w-full h-full object-cover rounded-full border-4 border-card shadow-card group-hover:shadow-hover transition-all duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {person.name}, <span className="text-muted-foreground">{person.age}</span>
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {person.description}
                </p>

                {/* Hover Quote */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-earth/95 text-primary-foreground p-4 rounded-lg shadow-hover mx-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-body italic text-sm">{person.hoverPhrase}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Button variant="orange" size="lg" asChild>
              <Link to="/histoires">Voir les témoignages</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
