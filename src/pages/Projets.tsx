import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WordReveal } from "@/components/WordReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Lightbulb, MapPin, Leaf, History, Globe, Waves, Rocket, TreeDeciduous, Heart } from "lucide-react";

const projets = [
  {
    id: "essaimage",
    icon: MapPin,
    title: "Essaimage hors Île-de-France",
    subtitle: "Ancenis (44) et au-delà",
    description: "Étendre notre action à de nouveaux territoires. Créer des antennes locales pour que l'inclusion sportive soit accessible partout.",
    status: "En cours",
    color: "orange"
  },
  {
    id: "balades-thematiques",
    icon: TreeDeciduous,
    title: "Balades Thématiques",
    subtitle: "Écologie, patrimoine, santé",
    description: "Allier découverte et inclusion : randonnées nature, visites patrimoniales accessibles, parcours bien-être et santé.",
    status: "En développement",
    color: "nature"
  },
  {
    id: "memoire-historique",
    icon: History,
    title: "Mémoire Historique",
    subtitle: "Histoire des villages",
    description: "Collecter et transmettre la mémoire locale à travers des parcours inclusifs. Relier les générations par l'histoire.",
    status: "Projet pilote",
    color: "earth"
  },
  {
    id: "international",
    icon: Globe,
    title: "Projets Internationaux",
    subtitle: "Prothèses au Cameroun",
    description: "Exporter notre expertise et notre solidarité. Contribuer à l'accessibilité sportive dans les pays en développement.",
    status: "Partenariat",
    color: "sky"
  },
  {
    id: "joelette-eco",
    icon: Leaf,
    title: "Joëlette Écologique",
    subtitle: "Éco-conception",
    description: "Développer une joëlette fabriquée à partir de matériaux durables et recyclés. L'inclusion au service de la planète.",
    status: "Recherche",
    color: "nature"
  },
  {
    id: "swimboard",
    icon: Waves,
    title: "Joëlette Nautique",
    subtitle: "Swimboard",
    description: "L'inclusion prend le large ! Une joëlette adaptée aux activités nautiques pour vivre l'aventure sur l'eau.",
    status: "Prototype",
    color: "sky"
  },
];

const Projets = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours": return "bg-nature/20 text-nature";
      case "En développement": return "bg-orange/20 text-orange";
      case "Projet pilote": return "bg-earth/20 text-earth";
      case "Partenariat": return "bg-sky/20 text-sky";
      case "Recherche": return "bg-nature/20 text-nature";
      case "Prototype": return "bg-orange/20 text-orange";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getIconBgColor = (color: string) => {
    switch (color) {
      case "orange": return "bg-orange/20 text-orange";
      case "nature": return "bg-nature/20 text-nature";
      case "earth": return "bg-earth/20 text-earth";
      case "sky": return "bg-sky/20 text-sky";
      default: return "bg-muted text-muted-foreground";
    }
  };

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
      <section className="pt-32 pb-24 relative overflow-hidden grain-overlay">
        <ParallaxSection speed={0.1} className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-nature/10 rounded-full blur-3xl" />
        </ParallaxSection>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full mb-6">
              <Rocket className="text-orange" size={20} />
              <span className="font-display text-orange">Laboratoire d'idées</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-6">
              Projets & Innovations
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              <WordReveal 
                text="Imaginer, expérimenter, innover pour une inclusion toujours plus large."
                delayBetweenWords={80}
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Lightbulb className="mx-auto mb-6 text-orange" size={48} />
              <p className="font-body text-xl text-foreground leading-relaxed">
                RYZ'ÔM est un <strong className="text-earth">laboratoire vivant</strong> où 
                chaque idée peut devenir réalité. Nos projets sont le reflet de notre 
                engagement pour une inclusion sans limites, innovante et pérenne.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <ScrollReveal key={projet.id} delay={index * 100} direction="scale">
                <div className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-3 h-full flex flex-col">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-secondary/50 -z-0" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${getIconBgColor(projet.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <projet.icon size={32} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-earth mb-2">
                      {projet.title}
                    </h3>
                    <p className="font-display text-lg text-orange mb-4">
                      {projet.subtitle}
                    </p>
                    <p className="font-body text-muted-foreground leading-relaxed flex-1">
                      {projet.description}
                    </p>
                    
                    {/* Status Badge */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className={`inline-block px-4 py-2 rounded-full font-display text-sm ${getStatusColor(projet.status)}`}>
                        {projet.status}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision section */}
      <section className="py-24 bg-earth text-primary-foreground relative overflow-hidden">
        <ParallaxSection speed={0.05} className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-40 w-48 h-48 border border-primary-foreground/20 rounded-full" />
            <div className="absolute bottom-20 left-20 w-72 h-72 border border-primary-foreground/10 rounded-full" />
          </div>
        </ParallaxSection>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="mx-auto mb-6 text-orange" size={48} />
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Notre Vision
              </h2>
              <p className="font-body text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Chaque projet est une graine d'inclusion. Nous rêvons d'un monde où 
                le handicap n'est plus une barrière à l'aventure, où chaque territoire 
                peut offrir des expériences accessibles, où l'innovation sert l'humain.
              </p>
              <blockquote className="font-display text-3xl md:text-4xl text-orange italic">
                « L'impossible n'existe que jusqu'à ce qu'on l'essaie. »
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth mb-6">
              Vous avez une idée ?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Partagez-la avec nous ! Les meilleures innovations naissent de la collaboration.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-orange text-primary-foreground font-display text-xl rounded-full hover:bg-orange/90 transition-colors shadow-card hover:shadow-hover"
            >
              Proposer un projet
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projets;
