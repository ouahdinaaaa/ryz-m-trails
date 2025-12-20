import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WordReveal } from "@/components/WordReveal";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, MapPin, Users, Moon, Sun, Mountain, Trophy, PartyPopper, Heart } from "lucide-react";

type EventCategory = "all" | "sportif" | "festif" | "inclusif";

interface Event {
  id: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  category: "sportif" | "festif" | "inclusif";
  icon: string;
  isNight?: boolean;
  participants?: string;
}

const events: Event[] = [
  {
    id: "trifouillette-jour",
    title: "La Trifouillette - Jour",
    description: "Course inclusive en pleine journée, un moment de partage sous le soleil.",
    date: "Juin 2025",
    location: "Île-de-France",
    category: "sportif",
    icon: "🏃",
    isNight: false,
    participants: "200+ participants"
  },
  {
    id: "trifouillette-nuit",
    title: "La Trifouillette - Nuit",
    description: "L'aventure continue sous les étoiles. Une expérience magique et unique.",
    date: "Juin 2025",
    location: "Île-de-France",
    category: "sportif",
    icon: "🌙",
    isNight: true,
    participants: "100+ participants"
  },
  {
    id: "mud-run",
    title: "Mud Run",
    description: "Course d'obstacles dans la boue. Rires, entraide et souvenirs garantis !",
    date: "Septembre 2025",
    location: "Région parisienne",
    category: "sportif",
    icon: "💪",
    participants: "150+ participants"
  },
  {
    id: "coupe-monde",
    title: "Coupe du Monde de Joëlette",
    description: "L'événement international de référence. RYZ'ÔM représente la France !",
    date: "Octobre 2025",
    location: "International",
    category: "sportif",
    icon: "🏆",
    participants: "Équipe nationale"
  },
  {
    id: "parcourir-montigny",
    title: "Parcourir Montigny",
    description: "Une balade inclusive à travers la ville. Familles et amis bienvenus.",
    date: "Mai 2025",
    location: "Montigny-le-Bretonneux",
    category: "festif",
    icon: "🚶",
    participants: "Ouvert à tous"
  },
  {
    id: "cheptantrail",
    title: "Cheptantrail",
    description: "Trail solidaire où chaque kilomètre compte pour l'inclusion.",
    date: "Avril 2025",
    location: "Chevreuse",
    category: "sportif",
    icon: "⛰️",
    participants: "300+ participants"
  },
  {
    id: "marche-bievre",
    title: "Marche de la Bièvre",
    description: "Suivre la rivière, découvrir la nature, partager un moment ensemble.",
    date: "Mars 2025",
    location: "Vallée de la Bièvre",
    category: "inclusif",
    icon: "🌿",
    participants: "Familles bienvenues"
  },
  {
    id: "orientation",
    title: "Courses d'Orientation",
    description: "Allier réflexion et sport, accessible à tous les niveaux.",
    date: "Toute l'année",
    location: "Divers lieux",
    category: "sportif",
    icon: "🧭",
    participants: "Équipes mixtes"
  },
  {
    id: "sorties-amicales",
    title: "Sorties Amicales",
    description: "Moments de convivialité entre bénévoles, pilotes et passagers.",
    date: "Régulièrement",
    location: "Partout en France",
    category: "festif",
    icon: "🎉",
    participants: "Toute la famille RYZ'ÔM"
  },
];

const filters: { label: string; value: EventCategory; icon: typeof Trophy }[] = [
  { label: "Tous", value: "all", icon: Heart },
  { label: "Sportif", value: "sportif", icon: Trophy },
  { label: "Festif", value: "festif", icon: PartyPopper },
  { label: "Inclusif", value: "inclusif", icon: Heart },
];

const Evenements = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");
  
  const filteredEvents = events.filter(
    event => activeFilter === "all" || event.category === activeFilter
  );

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-nature/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-6">
              Événements
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              <WordReveal 
                text="Des moments uniques où se mêlent sport, solidarité et émotions."
                delayBetweenWords={80}
              />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-display text-lg transition-all duration-300",
                  activeFilter === filter.value
                    ? "bg-earth text-primary-foreground shadow-card"
                    : "bg-card text-foreground hover:bg-earth/10 shadow-soft"
                )}
              >
                <filter.icon size={20} />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <div 
                  className="photo-pinned group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                  style={{ '--rotation': `${(index % 2 === 0 ? -1 : 1) * (1 + index * 0.3)}deg` } as React.CSSProperties}
                >
                  {/* Event Header */}
                  <div className={cn(
                    "p-6 relative overflow-hidden",
                    event.isNight 
                      ? "bg-gradient-to-br from-earth to-earth/80" 
                      : "bg-gradient-to-br from-nature/80 to-nature/60"
                  )}>
                    <div className="absolute top-2 right-2">
                      {event.isNight ? (
                        <Moon className="text-primary-foreground/60" size={24} />
                      ) : (
                        <Sun className="text-primary-foreground/60" size={24} />
                      )}
                    </div>
                    <span className="text-5xl mb-3 block">{event.icon}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                      {event.title}
                    </h3>
                  </div>
                  
                  {/* Event Body */}
                  <div className="p-6">
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 text-sm">
                      {event.date && (
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Calendar size={16} className="text-orange" />
                          <span className="font-body">{event.date}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2 text-foreground/70">
                          <MapPin size={16} className="text-nature" />
                          <span className="font-body">{event.location}</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Users size={16} className="text-earth" />
                          <span className="font-body">{event.participants}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="mt-6">
                      <span className={cn(
                        "inline-block px-3 py-1 rounded-full text-sm font-display",
                        event.category === "sportif" && "bg-orange/20 text-orange",
                        event.category === "festif" && "bg-nature/20 text-nature",
                        event.category === "inclusif" && "bg-earth/20 text-earth"
                      )}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth mb-6">
              Envie de participer ?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Inscrivez-vous à nos événements ou contactez-nous pour en savoir plus.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact"
                className="px-8 py-4 bg-earth text-primary-foreground font-display text-xl rounded-full hover:bg-earth/90 transition-colors shadow-card"
              >
                Nous contacter
              </a>
              <a 
                href="/engager"
                className="px-8 py-4 bg-card text-foreground font-display text-xl rounded-full hover:bg-secondary transition-colors shadow-soft"
              >
                Devenir bénévole
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Evenements;
