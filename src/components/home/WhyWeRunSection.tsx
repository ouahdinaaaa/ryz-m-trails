import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";

const reasons = [
  {
    number: "1",
    title: "AIDER",
    description: "Partager la joie du sport avec ceux qui ne peuvent pas courir seuls.",
  },
  {
    number: "2",
    title: "DÉPASSER",
    description: "Repousser ensemble les limites, viser l'inaccessible et y croire.",
  },
  {
    number: "3",
    title: "PARTAGER",
    description: "Respirer, grimper, sourire, étape après étape. Ensemble.",
  },
];

export function WhyWeRunSection() {
  return (
    <section className="py-24 relative overflow-hidden grain-overlay">
      {/* Background texture */}
      <div className="absolute inset-0 paper-vintage opacity-95" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title - Camping style */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-camping text-5xl md:text-6xl lg:text-7xl font-bold text-earth flex items-center justify-center gap-4 flex-wrap">
              <span className="text-orange">→</span>
              <span>Pourquoi on court</span>
              <span className="text-orange">←</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Reasons with hand-drawn style */}
          <div className="space-y-10">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.title} delay={index * 200}>
                <div className="flex gap-6 items-start group">
                  {/* Step number with grain */}
                  <div className="flex-shrink-0">
                    <div className="step-number w-14 h-14 text-3xl">
                      {reason.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-marker text-3xl md:text-4xl text-foreground mb-3 group-hover:text-earth transition-colors duration-300">
                      Pour <span className="text-earth">{reason.title}</span>
                    </h3>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
                
                {/* Hand-drawn arrow between steps */}
                {index < reasons.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <svg width="40" height="60" viewBox="0 0 40 60" className="text-earth/40">
                      <path
                        d="M20 5 Q 25 20, 18 35 Q 12 50, 20 55"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M14 48 L 20 55 L 26 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </ScrollReveal>
            ))}

            {/* Breathe indicator */}
            <ScrollReveal delay={700}>
              <div className="flex items-center justify-center gap-4 pt-6">
                <span className="font-camping text-3xl text-orange">≫</span>
                <span className="font-camping text-2xl text-earth/70 tracking-widest">Soufflez</span>
                <svg className="w-20 h-6 text-orange/60" viewBox="0 0 80 24">
                  <path
                    d="M5 12 Q 15 4, 25 12 T 45 12 T 65 12 T 75 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-camping text-3xl text-orange">≪</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Illustration with photo card effect */}
          <ScrollReveal direction="right" delay={300}>
            <div 
              className="card-photo"
              style={{ '--rotation': '2deg' } as React.CSSProperties}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Course inclusive avec joëlette en montagne"
                  className="w-full h-full object-cover img-vintage"
                />
              </div>
              
              {/* Caption like old photo */}
              <div className="mt-4 text-center">
                <span 
                  className="font-camping text-xl text-earth/70 inline-block px-4 py-1"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, hsl(38 45% 80% / 0.5) 100%)'
                  }}
                >
                  L'équipe en action — 2024
                </span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-nature/15 rounded-full blur-xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}