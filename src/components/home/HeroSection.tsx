import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-joelette.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Course inclusive avec joëlette dans la nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <ScrollReveal delay={200}>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-earth mb-4 drop-shadow-lg">
            RYZ'ÔM
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="font-display text-xl md:text-2xl text-foreground/80 mb-6">
            — S'unir pour aller plus loin —
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4">
            Courir. Partager. Inclure.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <p className="font-body text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Ensemble, tout devient possible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1000}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="organic" size="xl" asChild>
              <Link to="/association">Découvrir notre histoire</Link>
            </Button>
            <Button variant="organic-outline" size="xl" asChild>
              <Link to="/engager">Rejoindre l'aventure</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
        <span className="font-display text-lg text-foreground/60">Vivez l'expérience</span>
        <ChevronDown className="text-orange" size={32} />
      </div>
    </section>
  );
}
