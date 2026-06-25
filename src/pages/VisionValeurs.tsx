import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterQuote } from "@/components/TypewriterQuote";

import { AnimatedKeyword } from "@/components/AnimatedKeyword";
import { WordReveal } from "@/components/WordReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Heart, Users, Lightbulb, Mountain, Sparkles, Handshake, Flame, Target } from "lucide-react";

const visionSocietale = [
  { word: "Passion", icon: Flame },
  { word: "Engagement", icon: Target },
  { word: "Aide", icon: Handshake },
  { word: "Présence locale", icon: Users },
  { word: "Intégration", icon: Heart },
];

const valeursCles = [
  { word: "Solidarité", variant: "highlight" as const },
  { word: "Associatif", variant: "nature" as const },
  { word: "Persévérance", variant: "orange" as const },
];

const adnRyzom = [
  { word: "Brassage", description: "Mélanger les horizons, les capacités, les âges" },
  { word: "Partage", description: "Donner et recevoir à parts égales" },
  { word: "Essaimage", description: "Répandre l'inclusion partout" },
  { word: "Émotions", description: "Vivre intensément chaque instant" },
];

const verbesFondateurs = [
  { verbe: "Relier", icon: "🔗", description: "Créer des ponts entre les mondes" },
  { verbe: "Inclure", icon: "🤝", description: "Ne laisser personne sur le bord" },
  { verbe: "Innover", icon: "💡", description: "Inventer de nouvelles façons de faire" },
  { verbe: "Se dépasser", icon: "🏔️", description: "Repousser toutes les limites" },
];

const VisionValeurs = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 paper-vintage opacity-80" />
      </div>
      <Header />
      
      {/* Hero immersif */}
      <section className="pt-32 pb-24 relative overflow-hidden grain-overlay">
        <ParallaxSection speed={0.1} className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-nature/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-6">
              Vision & Valeurs
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              <WordReveal 
                text="Ce qui nous anime, ce qui nous rassemble, ce qui nous rend uniques."
                delayBetweenWords={80}
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Sociétale */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-earth/10 rounded-full font-display text-earth text-lg mb-4">
                Notre Vision
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-earth">
                Vision Sociétale
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {visionSocietale.map((item, index) => (
              <ScrollReveal key={item.word} delay={index * 100} direction="scale">
                <div className="group flex items-center gap-3 px-6 py-4 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center group-hover:bg-orange/30 transition-colors">
                    <item.icon className="text-orange" size={24} />
                  </div>
                  <span className="font-display text-xl md:text-2xl text-foreground">
                    {item.word}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs Clés */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-nature/10 rounded-full font-display text-nature text-lg mb-4">
                Nos Piliers
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-earth mb-6">
                Valeurs Clés
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Trois mots qui guident chacune de nos actions
              </p>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
            {valeursCles.map((item, index) => (
              <AnimatedKeyword 
                key={item.word}
                word={item.word}
                variant={item.variant}
                delay={index * 200}
                className="text-2xl md:text-3xl px-8 py-4"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADN RYZ'ÔM */}
      <section className="py-24 bg-earth text-primary-foreground relative overflow-hidden">
        <ParallaxSection speed={0.08} className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-20 w-40 h-40 border border-primary-foreground/20 rounded-full" />
            <div className="absolute bottom-20 left-10 w-60 h-60 border border-primary-foreground/10 rounded-full" />
          </div>
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Sparkles className="mx-auto mb-4 text-orange" size={48} />
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                ADN RYZ'ÔM
              </h2>
              <p className="font-body text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Ce qui coule dans nos veines
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {adnRyzom.map((item, index) => (
              <ScrollReveal key={item.word} delay={index * 150}>
                <div
                  className="text-center p-6 group bg-cream/95 border border-cream/40"
                  style={{
                    borderRadius: "5px",
                    transform: `rotate(${index % 2 === 0 ? "-0.8deg" : "0.8deg"})`,
                    boxShadow: "3px 3px 0 hsl(var(--earth) / 0.25)",
                  }}
                >
                  <h3 className="font-marker text-3xl md:text-4xl text-orange mb-3 group-hover:scale-110 transition-transform">
                    {item.word}
                  </h3>
                  <p className="font-body text-earth/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* Verbes Fondateurs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-orange/10 rounded-full font-display text-orange text-lg mb-4">
                Notre Action
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-earth mb-6">
                Verbes Fondateurs
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Les actions qui nous définissent
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {verbesFondateurs.map((item, index) => (
              <ScrollReveal key={item.verbe} delay={index * 100} direction="scale">
                <div className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-3 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-nature/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-500">
                      {item.icon}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-earth mb-3">
                      {item.verbe}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Citation finale - typewriter */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <TypewriterQuote
            text="Ensemble, nous transformons l'impossible en souvenirs inoubliables."
            author="L'équipe RYZ'ÔM"
            className="!text-3xl md:!text-4xl max-w-4xl"
          />
        </div>
      </section>


      <Footer />
    </main>
  );
};

export default VisionValeurs;
