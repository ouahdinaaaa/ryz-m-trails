import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";

const steps = [
  { 
    number: "1", 
    title: "Préparation", 
    description: "L'équipe se réunit, vérifie le matériel et prépare le passager.",
    icon: "🎒"
  },
  { 
    number: "2", 
    title: "Installation", 
    description: "Le passager s'installe confortablement dans la joëlette, solidement attaché.",
    icon: "🪑"
  },
  { 
    number: "3", 
    title: "En route!", 
    description: "Pilotes avant et arrière coordonnent leurs efforts. C'est parti!",
    icon: "🏃"
  },
  { 
    number: "4", 
    title: "L'aventure", 
    description: "Sentiers, montées, descentes... chaque obstacle devient une victoire partagée.",
    icon: "⛰️"
  },
  { 
    number: "5", 
    title: "Arrivée", 
    description: "Sourires, émotions et souvenirs inoubliables à la clé.",
    icon: "🎉"
  },
];

const Joelette = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-4">
              La Joëlette
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-xl text-foreground/80 max-w-2xl mx-auto">
              Un fauteuil tout-terrain qui rend l'aventure accessible à tous
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-earth mb-6">
                  Qu'est-ce qu'une joëlette ?
                </h2>
                <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
                  <p>
                    La joëlette est un fauteuil mono-roue tout-terrain, spécialement conçu 
                    pour permettre aux personnes à mobilité réduite de pratiquer la randonnée 
                    en pleine nature.
                  </p>
                  <p>
                    Imaginée par un moniteur de montagne dans les années 1980, elle est devenue 
                    le symbole de l'inclusion sportive. Portée par deux à huit accompagnateurs, 
                    elle permet de franchir tous les obstacles : sentiers rocailleux, montées 
                    escarpées, passages techniques.
                  </p>
                  <p>
                    <strong className="text-earth">Avec la joëlette, il n'y a plus de chemin impossible.</strong>
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-card transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={heroImage}
                    alt="Joëlette en action"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-nature/20 rounded-full blur-xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth text-center mb-16">
              Comment se déroule une course ?
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-card shadow-card flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange flex items-center justify-center">
                      <span className="font-display font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team roles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth text-center mb-12">
              L'équipe joëlette
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-5xl mb-4">🧭</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Pilote Avant
                </h3>
                <p className="font-body text-muted-foreground">
                  Guide et oriente la joëlette. Il anticipe les obstacles et trace la route.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Le Passager
                </h3>
                <p className="font-body text-muted-foreground">
                  Au cœur de l'aventure. Il vit chaque instant et partage sa joie avec l'équipe.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Pilote Arrière
                </h3>
                <p className="font-body text-muted-foreground">
                  Pousse et stabilise. Il assure la sécurité et la puissance dans les montées.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Joelette;
