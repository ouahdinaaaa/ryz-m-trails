import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-joelette.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay vignette-sepia">
      {/* Background with watercolor/painted effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Course inclusive avec joëlette dans la nature"
          className="w-full h-full object-cover"
          style={{ filter: 'sepia(0.15) saturate(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/80" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center flex-1 pt-20 pb-32">
        {/* Logo RYZ'ÔM */}
        <ScrollReveal delay={100}>
          <h1 
            className="font-marker text-7xl md:text-8xl lg:text-9xl text-earth mb-2 tracking-wider"
            style={{ textShadow: '3px 3px 0 hsl(38 75% 48% / 0.3)' }}
          >
            RYZ'ÔM
          </h1>
        </ScrollReveal>

        {/* Sous-titre avec tirets */}
        <ScrollReveal delay={200}>
          <p className="font-camping text-xl md:text-2xl text-earth/80 mb-4 tracking-widest">
            — S'unir pour aller plus loin —
          </p>
        </ScrollReveal>

        {/* Phrase d'accroche principale */}
        <ScrollReveal delay={400}>
          <h2 
            className="font-marker text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
            style={{ textShadow: '2px 2px 0 hsl(38 75% 48% / 0.2)' }}
          >
            Courir. Partager. Inclure.
          </h2>
        </ScrollReveal>

        {/* Sous-titre émotionnel */}
        <ScrollReveal delay={600}>
          <p className="font-camping text-2xl md:text-3xl text-earth/90 mb-8 tracking-wide">
            Ensemble, tout devient possible.
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator - Style camping */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollReveal delay={1000}>
          <div className="scroll-camping">
            <span>Vivez l'expérience</span>
            <ChevronDown className="text-orange w-8 h-8" strokeWidth={3} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
