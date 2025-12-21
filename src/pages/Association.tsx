import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-joelette.jpg";

const timeline = [
  { year: "2019", title: "L'idée germe", description: "Une rencontre qui change tout. L'envie de partager l'aventure naît." },
  { year: "2020", title: "Création de RYZ'ÔM", description: "L'association voit le jour. Les premiers bénévoles rejoignent l'aventure." },
  { year: "2021", title: "Première course", description: "Notre premier défi : 20km avec Jules. Une victoire collective inoubliable." },
  { year: "2022", title: "Croissance", description: "50 bénévoles, 15 courses, des dizaines de sourires partagés." },
  { year: "2023", title: "Championnat du monde", description: "RYZ'ÔM représente la France au championnat du monde de Joëlette." },
  { year: "2024", title: "Et demain...", description: "Plus de courses, plus d'inclusion, toujours plus de partage." },
];

const values = [
  { icon: "🤝", title: "Solidarité", description: "Ensemble, nous sommes plus forts. Chaque membre compte." },
  { icon: "💚", title: "Inclusion", description: "L'aventure est pour tous. Sans exception." },
  { icon: "🏔️", title: "Dépassement", description: "Repousser les limites, les nôtres et celles du possible." },
  { icon: "😊", title: "Joie", description: "Le sourire est notre moteur. Le bonheur, notre destination." },
];

const Association = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 paper-vintage opacity-80" />
      </div>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-4">
              L'Association
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-xl text-foreground/80 max-w-2xl mx-auto">
              RYZ'ÔM, c'est une famille qui croit en l'inclusion par le sport. 
              Découvrez notre histoire, nos valeurs, notre mission.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-earth mb-8">
                Notre Mission
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-body text-xl text-foreground leading-relaxed">
                Permettre à toute personne en situation de handicap de vivre l'aventure sportive 
                en pleine nature. Grâce à la joëlette et à l'énergie de nos bénévoles, 
                nous transformons l'impossible en souvenirs inoubliables.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth text-center mb-12">
              Nos Valeurs
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100} direction="scale">
                <div className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth text-center mb-16">
              Notre Histoire
            </h2>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-earth/30 -translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 100}>
                <div className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-card z-10">
                    <span className="font-display text-lg font-bold text-primary-foreground">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
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

export default Association;
