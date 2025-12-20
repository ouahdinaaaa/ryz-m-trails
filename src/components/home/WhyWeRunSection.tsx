import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";

const reasons = [
  {
    number: "1",
    title: "Pour AIDER",
    description: "Partager la joie du sport avec ceux qui ne peuvent pas courir.",
  },
  {
    number: "2",
    title: "Pour DÉPASSER",
    description: "Repousser ensemble les limites, viser l'inaccessible et y croire.",
  },
  {
    number: "3",
    title: "Pour PARTAGER",
    description: "Partager, respirer, grimper, sourire étape après étape.",
  },
];

export function WhyWeRunSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Reasons */}
          <div>
            <ScrollReveal>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-earth mb-12 flex items-center gap-4">
                <span className="text-orange">→</span>
                Pourquoi on court
                <span className="text-orange">←</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <ScrollReveal key={reason.title} delay={index * 150}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-primary-foreground">
                        {reason.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-semibold text-foreground mb-2">
                        Pour <span className="text-earth">{reason.title.split(" ")[1]}</span>
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <p className="font-display text-2xl text-orange mt-8 flex items-center gap-2">
                ≫ Soufflez
                <svg className="w-16 h-4" viewBox="0 0 60 15">
                  <path
                    d="M5 7.5 Q15 2, 25 7.5 T45 7.5 T55 7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />
                </svg>
                ≪
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Illustration */}
          <ScrollReveal direction="right" delay={300}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={heroImage}
                  alt="Course inclusive avec joëlette"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange rounded-full opacity-60" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-nature rounded-full opacity-40" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
