// Helper pour formater la date en français
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Users, 
  Trophy, 
  Heart, 
  PartyPopper, 
  ChevronRight,
  Clock,
  ArrowRight,
  Moon,
  Sun
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { fr } from "date-fns/locale";

// Types
interface Event {
  _id: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  category: "sportif" | "festif" | "inclusif";
  icon: string;
  isNight?: boolean;
  participants?: string;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const formatDateDetails = (dateStr?: string) => {
  if (!dateStr) return { day: "", month: "", full: "", time: "" };
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("fr-FR", { day: "numeric" }),
    month: d.toLocaleDateString("fr-FR", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
    time: d.toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })
  };
};

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const date = formatDateDetails(event.date);
  
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case "sportif": return "bg-orange-100 text-orange-700 border-orange-200";
      case "festif": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "inclusif": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getIcon = (cat: string) => {
    switch(cat) {
      case "sportif": return <Trophy className="w-4 h-4" />;
      case "festif": return <PartyPopper className="w-4 h-4" />;
      case "inclusif": return <Heart className="w-4 h-4" />;
      default: return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const isPast = event.date ? new Date(event.date) < new Date(new Date().setHours(0,0,0,0)) : false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 5) * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full will-change-transform"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110",
          event.category === "sportif" ? "from-orange-400/90 to-red-500/90" : 
          event.category === "inclusif" ? "from-green-400/90 to-emerald-600/90" :
          "from-blue-400/90 to-indigo-600/90"
        )} />
        
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-2 text-center shadow-lg w-16 group-hover:scale-110 transition-transform z-10">
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">{date.month}</span>
          <span className="block text-2xl font-black text-slate-800 leading-none">{date.day}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="secondary" className="gap-2 font-medium capitalize bg-white/90 backdrop-blur text-slate-700 shadow-sm border-0 px-3 py-1">
             {event.icon ? <span className="text-lg leading-none filter drop-shadow-sm">{event.icon}</span> : getIcon(event.category)} 
             <span>{event.category}</span>
          </Badge>
        </div>

        {/* Bottom Title in Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent pt-12">
           <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-orange-200 transition-colors">
            {event.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
          <div className="flex items-center gap-1.5">
             <Clock className="w-4 h-4 text-orange-500" />
             <span>{date.full}</span>
          </div>
          {event.isNight && (
             <div className="flex items-center gap-1.5 text-indigo-500 font-medium">
               <Moon className="w-4 h-4" />
               <span>Nocturne</span>
             </div>
          )}
        </div>

        <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
          {event.location && (
            <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded-md">
              <MapPin className="w-3.5 h-3.5" />
              <span className="truncate max-w-[140px]">{event.location}</span>
            </div>
          )}
          {!isPast && (
            <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-2 hover:px-3 transition-all gap-1 font-semibold group/btn">
              S'inscrire 
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ... existing code ...
const Evenements = () => {
    // State management
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState<Date | undefined>(undefined); // Selection du calendrier
    const [filter, setFilter] = useState<"all" | "upcoming" | "past">("upcoming");

    // Fetch API
    useEffect(() => {
        setLoading(true);
        axios.get(`${API_URL}/events`)
        .then(res => {
            setEvents(res.data);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, []);

    // Logic de filtrage
    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date || "");
        const now = new Date();
        
        // Si une date est sélectionnée dans le calendrier
        if (date) {
            const isSameDay = eventDate.getDate() === date.getDate() &&
                            eventDate.getMonth() === date.getMonth() &&
                            eventDate.getFullYear() === date.getFullYear();
            if (isSameDay) return true;
            return false;
        }
        
        // Sinon, filtres classiques "A venir" / "Passés"
        if (filter === "upcoming") return eventDate >= now;
        if (filter === "past") return eventDate < now;
        return true;
    }).sort((a, b) => new Date(a.date || "").getTime() - new Date(b.date || "").getTime());

    // Jours ayant des événements (pour les modifiers du calendrier)
    const upcomingEventDays = events
        .filter(e => {
            const d = new Date(e.date || "");
            const today = new Date();
            today.setHours(0,0,0,0);
            return d >= today;
        })
        .map(e => new Date(e.date || ""));

    const pastEventDays = events
        .filter(e => {
            const d = new Date(e.date || "");
            const today = new Date();
            today.setHours(0,0,0,0);
            return d < today;
        })
        .map(e => new Date(e.date || ""));

    return (
        <div className="min-h-screen bg-background font-body relative">
         {/* Grain overlay texture for the whole page */}
        <div className="fixed inset-0 pointer-events-none opacity-40 z-50 mix-blend-multiply grain-overlay"></div>
        
        <Header />
        
        {/* Nouveau Hero Section - Thème Nature/Papier */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-earth/10">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-[#fdfbf7] z-0">
               <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
               <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-nature/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />
            </div>
            
            <div className="relative container mx-auto max-w-5xl text-center z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-earth/10 shadow-sm text-earth text-sm font-semibold tracking-wide uppercase mb-8">
                    <Trophy className="w-4 h-4 text-orange" />
                    <span>Saison 2026</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-display tracking-tight text-earth leading-[0.9]">
                L'Aventure 
                <span className="relative inline-block px-4 mx-2">
                    <span className="absolute inset-0 bg-orange/20 -skew-y-3 rounded-lg transform"></span>
                    <span className="relative text-orange">Ryz'Ôm</span>
                </span>
                </h1>
                
                <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
                Retrouvez toutes les dates de nos sorties joëlettes, courses solidaires et événements festifs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-earth hover:bg-earth/90 text-white rounded-full px-8 text-lg h-14 font-display tracking-wide shadow-lg hover:shadow-xl transition-all w-full sm:w-auto" onClick={() => document.getElementById('calendar-view')?.scrollIntoView({ behavior: 'smooth' })}>
                        Voir le calendrier
                    </Button>
                    <div className="w-full sm:w-auto">
                        <Button asChild size="lg" variant="outline" className="w-full border-2 border-earth/20 text-earth hover:bg-earth/5 rounded-full px-8 text-lg h-14 bg-transparent font-display tracking-wide">
                            <a href="/contact?subject=Proposer%20un%20défi">Proposer un défi</a>
                        </Button>
                    </div>
                </div>
            </motion.div>
            </div>
        </section>

        {/* Section Principale: Calendrier & Liste */}
        <section id="calendar-view" className="container mx-auto max-w-7xl px-4 py-16 relative z-20">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Sidebar Sticky (Desktop) / Collapsible (Mobile) */}
            <div className="lg:col-span-4 order-1 lg:order-none">
                <div className="sticky top-28 space-y-6">
                    {/* Mobile Filters Toggle (Only visible on small screens) */}
                    <div className="lg:hidden mb-4">
                       {/* Simplified mobile controls could go here if needed, keeping it standard for now */}
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-soft border border-earth/10 relative overflow-hidden">
                        {/* Decorative top strip */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange to-nature" />
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-orange/10 w-12 h-12 flex items-center justify-center rounded-2xl text-orange">
                                <CalendarIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-earth text-xl font-display">Agenda</h3>
                                <p className="text-muted-foreground text-sm font-body italic">Filtrez par date</p>
                            </div>
                        </div>

                        {/* Composant Calendrier */}
                        <div className="flex justify-center mb-6 bg-cream/50 rounded-2xl p-4 md:p-6">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            locale={fr}
                            className="p-0 w-full flex justify-center"
                            modifiers={{
                                upcoming: upcomingEventDays,
                                past: pastEventDays
                            }}
                            modifiersStyles={{
                                upcoming: { 
                                    color: "hsl(var(--orange))", 
                                    fontWeight: "900",
                                    border: "2px solid hsl(var(--orange))",
                                    borderRadius: "100%",
                                },
                                past: {
                                    textDecoration: "line-through",
                                    opacity: 0.5,
                                    textDecorationColor: "hsl(var(--muted-foreground))"
                                }
                            }}
                            classNames={{
                                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
                                month: "space-y-6 w-full",
                                caption: "flex justify-center pt-1 relative items-center mb-4",
                                caption_label: "text-lg font-display font-medium text-earth",
                                nav: "space-x-1 flex items-center",
                                nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-earth/10 rounded-full transition-colors flex items-center justify-center",
                                nav_button_previous: "absolute left-1",
                                nav_button_next: "absolute right-1",
                                table: "w-full border-collapse space-y-1 mx-auto max-w-[320px] md:max-w-none",
                                head_row: "flex w-full justify-between mb-2",
                                head_cell: "text-muted-foreground rounded-md w-10 md:w-12 font-normal text-[0.9rem] uppercase tracking-wider",
                                row: "flex w-full mt-2 justify-between",
                                cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-transparent",
                                day: "h-10 w-10 md:h-12 md:w-12 p-0 font-body aria-selected:opacity-100 hover:bg-orange/10 rounded-full transition-all duration-200 text-base font-medium",
                                day_selected: "!bg-orange !text-white hover:bg-orange hover:text-white shadow-lg scale-110",
                                day_today: "bg-earth/5 text-earth font-bold ring-2 ring-earth/20",
                                day_outside: "text-muted-foreground opacity-30",
                                day_disabled: "text-muted-foreground opacity-30",
                                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                                day_hidden: "invisible",
                            }}
                            />
                        </div>

                        <div className="space-y-3">
                            <h4 className="font-bold text-earth text-sm uppercase tracking-wider mb-3">Affichage</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <Button 
                                    variant={filter === "upcoming" && !date ? "default" : "outline"} 
                                    onClick={() => { setFilter("upcoming"); setDate(undefined); }}
                                    className={cn("h-auto py-3 px-4 flex-col gap-2 rounded-xl transition-all border-2", 
                                        filter === "upcoming" && !date 
                                            ? "bg-earth border-earth text-white shadow-md" 
                                            : "bg-transparent border-earth/10 text-earth hover:border-earth/30 hover:bg-transparent"
                                    )}
                                >
                                    <Sun className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase">À venir</span>
                                </Button>
                                <Button 
                                    variant={filter === "past" && !date ? "default" : "outline"}
                                    onClick={() => { setFilter("past"); setDate(undefined); }}
                                    className={cn("h-auto py-3 px-4 flex-col gap-2 rounded-xl transition-all border-2", 
                                        filter === "past" && !date 
                                            ? "bg-earth border-earth text-white shadow-md" 
                                            : "bg-transparent border-earth/10 text-earth hover:border-earth/30 hover:bg-transparent"
                                    )}
                                >
                                     <Clock className="w-5 h-5" />
                                     <span className="text-xs font-bold uppercase">Passés</span>
                                </Button>
                            </div>
                            
                            {date && (
                                <Button 
                                    variant="ghost" 
                                    onClick={() => { setDate(undefined); setFilter("upcoming"); }}
                                    className="w-full text-orange hover:text-orange/80 hover:bg-orange/5 text-sm"
                                >
                                    × Effacer la date selectionnée
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Grid Area */}
            <div className="lg:col-span-8 order-2 lg:order-none">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-dashed border-earth/10 gap-4">
                    <div>
                         <span className="text-orange font-bold uppercase tracking-widest text-xs mb-2 block font-display">Résultats</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-earth font-display">
                            {date ? `Le ${date.toLocaleDateString("fr-FR", { day: 'numeric', month: 'long', year: 'numeric' })}` : (filter === "upcoming" ? "Prochains Événements" : "Archives des courses")}
                        </h2>
                    </div>
                    <Badge variant="outline" className="w-fit border-earth/20 text-earth bg-cream px-4 py-1 text-sm rounded-full font-bold shadow-sm">
                        {filteredEvents.length} aventure{filteredEvents.length !== 1 ? 's' : ''}
                    </Badge>
                </div>

                {loading ? (
                <div className="grid md:grid-cols-2 gap-6 animate-pulse">
                    {[1,2,3,4].map(n => (
                    <div key={n} className="h-80 bg-black/5 rounded-3xl" />
                    ))}
                </div>
                ) : filteredEvents.length > 0 ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                    {filteredEvents.map((event, i) => (
                        <EventCard key={event._id} event={event} index={i} />
                    ))}
                    </AnimatePresence>
                </div>
                ) : (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center bg-white rounded-[2rem] p-12 text-center shadow-soft border-2 border-dashed border-earth/10"
                >
                    <div className="bg-cream w-24 h-24 rounded-full flex items-center justify-center mb-6 text-earth/40">
                         <MapPin className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-earth mb-3 font-display">Aucune aventure ce jour-là</h3>
                    <p className="text-muted-foreground mb-8 max-w-md font-body">
                        Nos joëlettes se reposent peut-être ? Jetez un œil aux autres dates !
                    </p>
                    <Button onClick={() => { setDate(undefined); setFilter("upcoming"); }} className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 py-6 font-display text-xl">
                        Voir tout le calendrier
                    </Button>
                </motion.div>
                )}
            </div>
            </div>
        </section>

        {/* Banner bénévole avec nouveau style */}
        <section className="py-20 container mx-auto px-4">
            <div className="bg-nature rounded-[3rem] p-8 md:p-14 relative overflow-hidden text-center md:text-left shadow-xl">
                {/* Texture overlay */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                 
                <div className="absolute top-0 right-0 opacity-20 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
                    <div className="w-96 h-96 rounded-full bg-cream blur-3xl" />
                </div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-white/20">
                            Rejoignez la meute
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                            "Courir seul c'est bien,<br/> courir ensemble c'est mieux."
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed mb-0 font-body max-w-2xl">
                            Intégrez notre grande famille de sportifs solidaires. Pas besoin d'être un athlète olympique, votre sourire et votre énergie suffisent !
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-auto">
                         <Button asChild size="lg" className="w-full lg:w-auto bg-cream text-earth hover:bg-white h-16 px-10 rounded-full text-xl shadow-lg font-display tracking-wide transform hover:-translate-y-1 transition-transform">
                             <a href="/contact">Devenir Pilote</a>
                         </Button>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer />
        </div>
    );
};

export default Evenements;
