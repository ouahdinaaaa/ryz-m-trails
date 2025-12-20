import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WordReveal } from "@/components/WordReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Heart, Users, Lightbulb, Dog, GraduationCap, Eye, PenTool, Anchor, Baby, Shield, Footprints, Accessibility } from "lucide-react";

const actionsInclusion = [
  { icon: Accessibility, title: "Pilotes PMR", description: "Accompagnement personnalisé pour les personnes à mobilité réduite" },
  { icon: Heart, title: "Personnes dépendantes", description: "Offrir des moments d'évasion et de liberté" },
  { icon: Baby, title: "Enfants malades", description: "Créer des souvenirs magiques et des sourires" },
  { icon: Shield, title: "Blessés de guerre", description: "Reconnecter avec la nature et l'effort physique" },
  { icon: Footprints, title: "Courses & marches", description: "Des événements sportifs et festifs ouverts à tous" },
];

const actionsJeunesse = [
  { icon: GraduationCap, title: "Équipages scolaires", description: "Sensibiliser les jeunes à l'inclusion dès l'école" },
  { icon: Users, title: "Centres Éducatifs Fermés", description: "Donner du sens par l'engagement solidaire" },
  { icon: Lightbulb, title: "Formation joëlette", description: "Transmettre les techniques et les valeurs" },
  { icon: Heart, title: "Intergénérationnel", description: "Créer des liens entre les générations" },
];

const actionsInnovation = [
  { icon: Eye, title: "Handicaps invisibles", description: "Reconnaître et accompagner toutes les différences" },
  { icon: Users, title: "Déficients visuels", description: "Intégrer au cœur des équipages" },
  { icon: PenTool, title: "Ateliers créatifs", description: "Écriture, parole, poésie... L'expression sous toutes ses formes" },
  { icon: Footprints, title: "Parcours du combattant", description: "Des défis adaptés et stimulants" },
];

const actionsMediation = [
  { icon: Dog, title: "Chiens de traîneau", description: "Équipages humains/canins uniques" },
  { icon: Heart, title: "Partenariat cynotechnique", description: "La force du lien animal-humain" },
  { icon: Anchor, title: "Axe nautique", description: "L'inclusion prend le large" },
  { icon: Lightbulb, title: "Projets expérimentaux", description: "Toujours explorer de nouvelles voies" },
];

const ActionSection = ({ 
  title, 
  subtitle, 
  actions, 
  bgColor = "bg-transparent",
  index = 0
}: { 
  title: string; 
  subtitle: string; 
  actions: typeof actionsInclusion;
  bgColor?: string;
  index?: number;
}) => (
  <section className={`py-20 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-orange/10 rounded-full font-display text-orange text-lg mb-4">
            Action {index + 1}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-earth mb-4">
            {title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </ScrollReveal>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {actions.map((action, idx) => (
          <ScrollReveal key={action.title} delay={idx * 100}>
            <div className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-nature/20 flex items-center justify-center flex-shrink-0 group-hover:bg-nature/30 transition-colors">
                  <action.icon className="text-nature" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-earth transition-colors">
                    {action.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const Actions = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <ParallaxSection speed={0.1} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-nature/30 rounded-full blur-3xl" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-6">
              Nos Actions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              <WordReveal 
                text="Chaque action est une histoire humaine, chaque rencontre un moment de partage."
                delayBetweenWords={60}
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation des actions */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["Inclusion & Joëlette", "Jeunesse & Formation", "Innovation", "Médiation animale"].map((label, idx) => (
              <a
                key={label}
                href={`#action-${idx + 1}`}
                className="px-4 py-2 bg-card rounded-full font-display text-foreground hover:bg-earth hover:text-primary-foreground transition-all duration-300 shadow-soft"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Action 1 - Inclusion & Joëlette */}
      <div id="action-1">
        <ActionSection 
          title="Inclusion & Joëlette"
          subtitle="Rendre l'aventure accessible à tous, sans exception"
          actions={actionsInclusion}
          index={0}
        />
      </div>

      {/* Action 2 - Jeunesse & Formation */}
      <div id="action-2">
        <ActionSection 
          title="Jeunesse & Formation"
          subtitle="Transmettre les valeurs de solidarité aux nouvelles générations"
          actions={actionsJeunesse}
          bgColor="bg-secondary/30"
          index={1}
        />
      </div>

      {/* Action 3 - Innovation & Inclusion élargie */}
      <div id="action-3">
        <ActionSection 
          title="Innovation & Inclusion Élargie"
          subtitle="Repousser les frontières de ce qui est possible"
          actions={actionsInnovation}
          index={2}
        />
      </div>

      {/* Action 4 - Médiation animale */}
      <div id="action-4">
        <ActionSection 
          title="Médiation Animale & Projets Spécifiques"
          subtitle="Explorer de nouvelles formes de liens et d'aventures"
          actions={actionsMediation}
          bgColor="bg-secondary/30"
          index={3}
        />
      </div>

      {/* CTA */}
      <section className="py-24 bg-earth text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Envie de participer ?
            </h2>
            <p className="font-body text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Chaque action a besoin de bras, de cœurs et d'énergie. 
              Rejoignez-nous pour écrire de nouvelles histoires.
            </p>
            <a 
              href="/engager"
              className="inline-block px-8 py-4 bg-orange text-primary-foreground font-display text-xl rounded-full hover:bg-orange/90 transition-colors shadow-card hover:shadow-hover"
            >
              S'engager maintenant
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Actions;
