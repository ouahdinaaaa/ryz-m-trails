import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden grain-overlay">
      {/* Background with watercolor effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Course collective inclusive"
          className="w-full h-full object-cover opacity-25"
          style={{ filter: 'sepia(0.25) saturate(0.9)' }}
        />
        <div className="absolute inset-0 paper-vintage opacity-85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 
              className="font-marker text-4xl md:text-6xl text-earth mb-6"
              style={{ textShadow: '2px 2px 0 hsl(38 75% 48% / 0.2)' }}
            >
              Ensemble, tout devient possible
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="font-body text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed">
              Que vous souhaitiez courir à nos côtés, partager votre énergie ou simplement nous encourager,
              chaque geste compte. Rejoignez notre aventure humaine.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/engager" className="btn-painted">
                Rejoindre l'aventure
              </Link>
              <Link to="/contact" className="btn-wooden">
                Nous contacter
              </Link>
            </div>
          </ScrollReveal>

          {/* Decorative icons */}
          <div className="flex justify-center gap-12 mt-16">
            <ScrollReveal delay={600}>
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ 
                    background: 'radial-gradient(circle, hsl(var(--orange) / 0.2) 0%, transparent 70%)',
                  }}
                >
                  <span className="text-4xl">🏃</span>
                </div>
                <p className="font-camping text-xl text-earth">Courir</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={700}>
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ 
                    background: 'radial-gradient(circle, hsl(var(--nature) / 0.2) 0%, transparent 70%)',
                  }}
                >
                  <span className="text-4xl">🤝</span>
                </div>
                <p className="font-camping text-xl text-earth">Partager</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={800}>
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ 
                    background: 'radial-gradient(circle, hsl(var(--earth) / 0.15) 0%, transparent 70%)',
                  }}
                >
                  <span className="text-4xl">💚</span>
                </div>
                <p className="font-camping text-xl text-earth">Inclure</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
