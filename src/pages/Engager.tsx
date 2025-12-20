import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-joelette.jpg";

const engagements = [
  {
    title: "Devenir bénévole",
    icon: "🏃",
    description: "Rejoignez notre équipe de pilotes et partagez l'aventure. Aucune compétence sportive particulière n'est requise, juste l'envie de donner.",
    cta: "Je veux courir",
    benefits: ["Formation offerte", "Équipement fourni", "Moments inoubliables"],
  },
  {
    title: "Participer à une course",
    icon: "🎯",
    description: "Inscrivez-vous à l'une de nos prochaines courses inclusives. Que vous soyez passager ou accompagnateur, vivez une expérience unique.",
    cta: "Voir le calendrier",
    benefits: ["Courses toute l'année", "Tous niveaux", "Ambiance familiale"],
  },
  {
    title: "Soutenir l'association",
    icon: "💚",
    description: "Votre don nous aide à acquérir de nouvelles joëlettes, à organiser plus de courses et à toucher plus de personnes.",
    cta: "Faire un don",
    benefits: ["Déduction fiscale", "Impact direct", "Suivi transparent"],
  },
];

const Engager = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-4">
              S'engager
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-xl text-foreground/80 max-w-2xl mx-auto">
              Ensemble, rendons l'aventure accessible à tous. 
              Découvrez comment rejoindre notre belle aventure humaine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {engagements.map((engagement, index) => (
              <ScrollReveal key={engagement.title} delay={index * 150}>
                <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-500 h-full flex flex-col group hover:-translate-y-2">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {engagement.icon}
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                    {engagement.title}
                  </h2>
                  <p className="font-body text-muted-foreground mb-6 flex-1">
                    {engagement.description}
                  </p>
                  
                  <ul className="mb-8 space-y-2">
                    {engagement.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 font-body text-sm text-foreground">
                        <span className="text-nature">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="organic" className="w-full" asChild>
                    <Link to="/contact">{engagement.cta}</Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-earth text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="font-display text-3xl md:text-4xl italic mb-6">
                "La première fois que j'ai poussé une joëlette, j'ai compris que je 
                recevais bien plus que ce que je donnais. C'est ça, la magie de RYZ'ÔM."
              </p>
              <footer className="font-body text-primary-foreground/80">
                — Thomas, bénévole depuis 2021
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Bénévoles actifs" },
              { number: "30", label: "Courses par an" },
              { number: "100+", label: "Passagers accompagnés" },
              { number: "1000+", label: "Kilomètres partagés" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="bg-card rounded-xl p-8 shadow-card">
                  <p className="font-display text-5xl font-bold text-orange mb-2">
                    {stat.number}
                  </p>
                  <p className="font-body text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Engager;
