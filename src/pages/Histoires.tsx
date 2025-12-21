import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import storyCourse from "@/assets/story-course.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import storyChampionnat from "@/assets/story-championnat.jpg";

const categories = [
  { name: "Course inclusive", count: 4 },
  { name: "Histoires et témoignages", count: 3 },
  { name: "Vie associative", count: 2 },
  { name: "Joëlette", count: 5 },
];

const stories = [
  {
    id: 1,
    title: "Récit d'une course épique... jusqu'à la ligne d'arrivée!",
    excerpt: "De l'émotion, de la solidarité et une arrivée en triomphe avec Jules! Revivez chaque moment de cette journée inoubliable où ensemble, nous avons repoussé les limites.",
    date: "18 avril 2024",
    image: storyCourse,
    category: "Course inclusive",
    rotation: "-1.5deg",
  },
  {
    id: 2,
    title: "Portrait : À la rencontre de Jasmine et Léo",
    excerpt: "Découvrez l'histoire émouvante d'une maman courageuse et d'un ado timide qui s'ouvre à la montagne, à la vie. Une rencontre qui a changé leur quotidien.",
    date: "5 avril 2024",
    image: storyPortrait,
    category: "Histoires et témoignages",
    rotation: "1deg",
  },
  {
    id: 3,
    title: "Le championnat du monde de Joëlette: Notre expérience",
    excerpt: "Retour sur une compétition unique en son genre. Nous avons défié la montée aux côtés des meilleurs équipages du monde.",
    date: "28 mars 2024",
    image: storyChampionnat,
    category: "Joëlette",
    rotation: "-0.5deg",
  },
  {
    id: 4,
    title: "La Trifouillette : une nuit sous les étoiles",
    excerpt: "Quand la course nocturne devient une aventure magique. Récit d'une expérience unique au clair de lune.",
    date: "15 mars 2024",
    image: storyCourse,
    category: "Course inclusive",
    rotation: "1.5deg",
  },
  {
    id: 5,
    title: "Amélie nous raconte son parcours",
    excerpt: "Du premier regard timide à la passion de la course, Amélie partage son histoire avec une émotion sincère.",
    date: "2 mars 2024",
    image: storyPortrait,
    category: "Histoires et témoignages",
    rotation: "-1deg",
  },
  {
    id: 6,
    title: "Formation joëlette : nos nouveaux équipiers",
    excerpt: "Bienvenue à la nouvelle génération de bénévoles ! Retour sur une journée de formation riche en partages.",
    date: "20 février 2024",
    image: storyChampionnat,
    category: "Vie associative",
    rotation: "0.5deg",
  },
];

const Histoires = () => {
  return (
    <main className="min-h-screen editorial-layout grain-overlay">
      <Header />
      
      {/* Hero - Editorial magazine style */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Watercolor background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 paper-vintage opacity-90" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="title-jungle text-6xl md:text-8xl lg:text-9xl mb-6">
              <span className="text-sun-highlight">HIST</span>OIRES
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="font-camping text-2xl md:text-3xl text-earth/70 mb-6 tracking-widest">
              — ENTREZ DANS L'AVENTURE —
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Découvrez les récits inspirants de celles et ceux qui bâtissent <strong className="text-earth">RYZ'ÔM</strong> au quotidien. 
              Chaque histoire est une invitation à rejoindre l'aventure.
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
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {stories.map((story, index) => (
                  <ScrollReveal key={story.id} delay={index * 100}>
                    <article
                      className="card-article group"
                      style={{ '--rotation': story.rotation } as React.CSSProperties}
                    >
                      {/* Pin decoration */}
                      <div className="absolute -top-3 left-8 z-20">
                        <div 
                          className="w-5 h-5 rounded-full"
                          style={{
                            background: 'radial-gradient(circle at 35% 35%, hsl(28 80% 65%), hsl(22 85% 52%), hsl(18 60% 40%))',
                            boxShadow: 'inset -1px -1px 3px hsl(18 60% 30% / 0.4), 0 3px 6px hsl(28 50% 32% / 0.35)'
                          }}
                        />
                      </div>

                      {/* Tag - Painted style */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="tag-painted text-sm">
                          Blog
                        </span>
                      </div>

                      {/* Image with vintage treatment */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover img-vintage group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-cream/20 to-transparent" />
                      </div>

                      {/* Content - Journal style */}
                      <div className="p-6 pt-4">
                        <h2 className="font-marker text-xl md:text-2xl text-earth mb-3 leading-tight group-hover:text-orange transition-colors duration-300">
                          {story.title}
                        </h2>
                        <p className="font-body text-sm text-foreground/70 mb-5 leading-relaxed line-clamp-3">
                          {story.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-border/30">
                          <span className="font-camping text-lg text-earth/60">{story.date}</span>
                          <Link
                            to={`/histoires/${story.id}`}
                            className="btn-painted text-base py-2 px-4 group/btn"
                          >
                            Lire l'histoire
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
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
                  <ul className="space-y-3">
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
                    <input 
                      type="email" 
                      placeholder="Votre email..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-border/40 bg-cream/50 font-body text-sm focus:outline-none focus:border-earth/50 transition-colors"
                    />
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