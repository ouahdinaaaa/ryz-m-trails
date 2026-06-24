import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { toast } from "sonner";
import storyCourse from "@/assets/story-course.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import storyChampionnat from "@/assets/story-championnat.jpg";
import defaultJoelette from "@/assets/hero-joelette.jpg";
import defaultNature from "@/assets/why.png";
import defaultGeneral from "@/assets/acceuil.png";

const imageMap: Record<string, string> = {
  "story-course.jpg": storyCourse,
  "story-portrait.jpg": storyPortrait,
  "story-championnat.jpg": storyChampionnat,
};

const CATEGORY_MAPPING: Record<string, string> = {
  "joëlette": "Joëlette",
  "joelette": "Joëlette",
  "handicap": "Joëlette",
  "compétition": "Course inclusive",
  "competition": "Course inclusive",
  "course": "Course inclusive",
  "sport": "Course inclusive",
  "trail": "Course inclusive",
  "portrait": "Histoires et témoignages",
  "témoignage": "Histoires et témoignages",
  "temoignage": "Histoires et témoignages",
  "émotion": "Histoires et témoignages",
  "emotion": "Histoires et témoignages",
  "famille": "Histoires et témoignages",
  "solidarité": "Vie associative",
  "solidarite": "Vie associative",
  "bénévoles": "Vie associative",
  "benevoles": "Vie associative",
  "international": "Vie associative",
  "vie associative": "Vie associative",
  "association": "Vie associative"
};

// Helper to parse French dates like "18 avril 2024"
const parseFrenchDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  const months: Record<string, number> = {
    "janvier": 0, "fevrier": 1, "février": 1, "mars": 2, "avril": 3, "mai": 4, "juin": 5,
    "juillet": 6, "aout": 7, "août": 7, "septembre": 8, "octobre": 9, "novembre": 10, "decembre": 11, "décembre": 11
  };
  
  try {
    const parts = dateStr.toLowerCase().split(' ');
    if (parts.length >= 3) {
      const day = parseInt(parts[0]);
      const month = months[parts[1]] ?? 0;
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    }
  } catch (e) {
    console.warn("Date parsing error:", e);
  }
  
  // Fallback to standard parsing
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? null : d;
};

// Smart default image based on tags
const getSmartDefaultImage = (tags: string[] = []): string => {
  const lowerTags = tags.map(t => t.toLowerCase());
  
  if (lowerTags.some(t => t.includes('joëlette') || t.includes('joelette') || t.includes('handicap'))) {
    return defaultJoelette;
  }
  if (lowerTags.some(t => t.includes('nature') || t.includes('montagne') || t.includes('trail'))) {
    return defaultNature;
  }
  if (lowerTags.some(t => t.includes('course') || t.includes('sport') || t.includes('championnat'))) {
    return storyCourse;
  }
  if (lowerTags.some(t => t.includes('portrait') || t.includes('témoignage') || t.includes('famille'))) {
    return storyPortrait;
  }
  
  return defaultGeneral;
};

// Utilisation d'une variable d'environnement pour l'API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const Histoires = () => {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate dynamic categories from actual story content
  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    const processedStories = new Set(); // To avoid double counting contextually if needed

    stories.forEach(story => {
      // Collect tags
      const allTags = [...(story.tags || []), ...(story.tagIds || [])];
      
      // Determine unique categories for this story to avoid double counting the SAME category for one story
      // (e.g. tags "Portrait" and "Famille" both map to "Histoires et témoignages" -> count only once per story)
      const storyCategories = new Set<string>();

      allTags.forEach(tag => {
        if (!tag) return;
        const lowerTag = tag.toLowerCase().trim();
        const mappedCat = CATEGORY_MAPPING[lowerTag];
        
        if (mappedCat) {
          storyCategories.add(mappedCat);
        } else {
          // Fallback: capitalize if not mapped, or ignore? 
          // Ignoring unmapped tags to keep list clean as per user request "pas n'importe quoi"
        }
      });

      // Increment counts
      storyCategories.forEach(cat => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });

    // Convert to array and sort by count desc
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [stories]);

  useEffect(() => {
    axios.get(`${API_URL}/articles`)
      .then(res => {
        // DEBUG: Affiche la réponse dans la console
        console.log("API /api/articles response:", res.data);
        let data = [];
        if (Array.isArray(res.data)) {
          data = res.data;
        } else if (res.data && Array.isArray(res.data.articles)) {
          data = res.data.articles;
        }

        // Filter: Keep only stories with Past dates (or no date)
        const now = new Date();
        const filteredData = data.filter((story: any) => {
           if (!story.date) return true; // Keep if no date?? Assuming yes for legacy
           const d = parseFrenchDate(story.date);
           return d ? d <= now : true; 
        });

        // Use filteredData for state
        setStories(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API /api/articles:", err);
        setStories([]);
        setError("Erreur lors du chargement des articles");
        setLoading(false);
      });
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
        toast.success("Bienvenue dans la meute !", {
            description: "Vous recevrez nos prochaines histoires par email.",
            className: "font-body",
        });
        setEmail("");
        setIsSubmitting(false);
    }, 1500);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;

  return (
    <main className="min-h-screen editorial-layout grain-overlay">
      <Header />
      
      {/* Hero - Editorial magazine style */}
      <section className="pt-32 pb-12 relative overflow-hidden bg-cream/30 border-b border-earth/5">
        {/* Background effect */}
        <div className="absolute inset-0 -z-10">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-3xl opacity-60" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nature/5 rounded-full blur-3xl opacity-60" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal duration={0.5}>
             <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white border border-earth/10 shadow-sm text-xs font-bold uppercase tracking-widest text-orange">
                Le Mag Ryz'Ôm
             </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-earth tracking-tight">
              Histoires <span className="text-orange italic">&</span> Récits
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={100} duration={0.6}>
            <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Plongez au cœur de l'aventure humaine. Découvrez comment chaque kilomètre parcouru ensemble tisse des liens inoubliables.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content - Magazine layout */}
      <section className="pb-24 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 paper-vintage opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Articles Grid - Masonry-like with varying sizes */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {stories.map((story, index) => {
                  // Badge : utiliser l'id du badge (tagIds ou tags)
                  let badge = 'Blog';
                  if (story.badgeId) {
                    badge = story.badgeId;
                  } else if (story.tagIds && story.tagIds.length > 0) {
                    badge = story.tagIds[0];
                  } else if (story.tags && story.tags.length > 0) {
                    badge = story.tags[0];
                  }

                  // Image : utiliser celle du backend
                  let imageUrl = imageMap[story.image];
                  if (!imageUrl && story.image) {
                    if (!/^https?:\/\//.test(story.image) && story.image !== "") {
                      let baseUrl = API_URL.replace(/\/?api$/, "");
                      if (baseUrl.endsWith("/")) baseUrl = baseUrl.slice(0, -1);
                      let imgPath = story.image.startsWith("/") ? story.image.slice(1) : story.image;
                      imageUrl = `${baseUrl}/${imgPath}`;
                      imageUrl = imageUrl.replace(/\/uploads\/+/, "/uploads/");
                    } else {
                      imageUrl = story.image;
                    }
                  }
                  if (!imageUrl) {
                    imageUrl = getSmartDefaultImage(story.tags || story.tagIds);
                  }

                  return (
                    <ScrollReveal key={story._id} delay={(index % 4) * 50} duration={0.4}>
                      <article
                        className="card-article group h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                        style={{ '--rotation': '0deg' } as React.CSSProperties}
                      >
                        {/* Image with vintage treatment */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={imageUrl}
                            alt={story.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                // Fallback image si l'image ne charge pas
                                e.currentTarget.src = getSmartDefaultImage(story.tags || story.tagIds);
                            }}
                          />
                          <div className="absolute top-4 left-4 z-10">
                             <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-earth uppercase tracking-wider shadow-sm">
                                {badge}
                             </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Content - Journal style */}
                        <div className="p-6 flex flex-col flex-1 transform translate-y-0 transition-transform">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3 font-semibold uppercase tracking-wider">
                            <span>{story.date}</span>
                            <span>•</span>
                            <span>{story.readTime || "3 min"}</span>
                          </div>
                          
                          <h2 className="font-display text-2xl text-earth mb-3 leading-tight group-hover:text-orange transition-colors duration-300">
                            {story.title}
                          </h2>
                          
                          <p className="font-body text-foreground/70 mb-6 leading-relaxed line-clamp-3 text-sm flex-1">
                            {story.subtitle || "Découvrez le récit complet de cette aventure humaine..."}
                          </p>
                          
                          <div className="mt-auto">
                            <Link
                              to={`/histoires/${story._id}`}
                              className="inline-flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-wide group/btn hover:text-earth transition-colors"
                            >
                              Lire l'histoire
                              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
              
              {/* Load more button */}
              <ScrollReveal delay={600}>
                <div className="text-center mt-16">
                  <button className="btn-wooden text-2xl">
                    Voir tous nos articles
                    <ArrowRight size={24} />
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar - Sticky with paper effect */}
            <aside className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div 
                  className="card-watercolor p-6 sticky top-28"
                  style={{ '--rotation': '-1deg' } as React.CSSProperties}
                >
                  <h3 className="font-marker text-2xl text-earth mb-6 flex items-center gap-2">
                    <span className="text-orange">→</span>
                    Catégories
                  </h3>
                  <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {categories.length === 0 && (
                        <li className="text-muted-foreground italic text-sm">Aucune catégorie trouvée</li>
                    )}
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-sand/50 transition-all duration-300 group border border-transparent hover:border-border/30">
                          <span className="font-body text-foreground group-hover:text-earth transition-colors">
                            {cat.name}
                          </span>
                          <span 
                            className="font-camping text-lg text-cream px-3 py-1 rounded-full"
                            style={{
                              background: 'linear-gradient(135deg, hsl(var(--earth)) 0%, hsl(var(--earth-light)) 100%)'
                            }}
                          >
                            {cat.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Newsletter signup */}
                  <div className="mt-8 pt-6 border-t border-border/40">
                    <h4 className="font-camping text-xl text-earth mb-3">Restez informés</h4>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Recevez nos dernières histoires directement dans votre boîte mail.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="relative">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre email..."
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-border/40 bg-cream/50 font-body text-sm focus:outline-none focus:border-earth/50 transition-colors disabled:opacity-50"
                      />
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-earth text-cream rounded-md hover:bg-orange transition-colors disabled:opacity-50"
                        title="S'inscrire"
                      >
                       {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <ArrowRight size={16} />}
                      </button>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Histoires;