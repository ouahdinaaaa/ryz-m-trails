import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with watercolor effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Course collective inclusive"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-earth mb-6">
              Ensemble, tout devient possible
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-xl text-foreground/80 mb-12 leading-relaxed">
              Que vous souhaitiez courir à nos côtés, partager votre énergie ou simplement nous encourager,
              chaque geste compte. Rejoignez notre aventure humaine.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="organic" size="xl" asChild>
                <Link to="/engager">Rejoindre l'aventure</Link>
              </Button>
              <Button variant="organic-outline" size="xl" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Decorative elements */}
          <div className="flex justify-center gap-8 mt-16">
            <ScrollReveal delay={600}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="font-display text-3xl">🏃</span>
                </div>
                <p className="font-display text-lg text-foreground">Courir</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={700}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-nature/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="font-display text-3xl">🤝</span>
                </div>
                <p className="font-display text-lg text-foreground">Partager</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-earth/20 flex items-center justify-center mb-3 mx-auto">
                  <span className="font-display text-3xl">💚</span>
                </div>
                <p className="font-display text-lg text-foreground">Inclure</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
