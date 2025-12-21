import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import storyCourse from "@/assets/story-course.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import storyChampionnat from "@/assets/story-championnat.jpg";

const stories = [
  {
    id: 1,
    title: "Récit d'une course épique... jusqu'à la ligne d'arrivée!",
    excerpt: "De l'émotion, de la solidarité et une arrivée en triomphe avec Jules! Revivez chaque moment de...",
    date: "18 avril 2024",
    image: storyCourse,
    tag: "Blog",
    rotation: "-2deg",
  },
  {
    id: 2,
    title: "Portrait : À la rencontre de Jasmine et Léo",
    excerpt: "Découvrez l'histoire émouvante d'une maman courageuse et d'un ado timide qui s'ouvre à...",
    date: "5 avril 2024",
    image: storyPortrait,
    tag: "Blog",
    rotation: "1.5deg",
  },
  {
    id: 3,
    title: "Le championnat du monde de Joëlette: Notre expérience",
    excerpt: "Retour sur une compétition unique en son genre. Nous avons défié la montée aux côtés des...",
    date: "28 mars 2024",
    image: storyChampionnat,
    tag: "Blog",
    rotation: "-1deg",
  },
];

export function StoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden grain-overlay">
      {/* Watercolor background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 paper-vintage opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title - Jungle/Adventure style */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="title-jungle text-6xl md:text-7xl lg:text-8xl mb-4">
              <span className="text-sun-highlight">HIST</span>OIRES
            </h2>
            <p className="font-camping text-xl md:text-2xl text-earth/60 mb-4 tracking-widest">
              — ENTREZ DANS L'AVENTURE —
            </p>
            <p className="font-body text-foreground/80 max-w-xl mx-auto leading-relaxed">
              Découvrez les récits inspirants de celles et ceux qui bâtissent <strong className="text-earth">RYZ'ÔM</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Article cards - Newspaper/Journal style */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {stories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index * 200}>
              <article
                className="card-article group"
                style={{ '--rotation': story.rotation } as React.CSSProperties}
              >
                {/* Pin decoration with 3D effect */}
                <div className="absolute -top-3 left-6 z-20">
                  <div 
                    className="w-5 h-5 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, hsl(28 80% 65%), hsl(22 85% 52%), hsl(18 60% 40%))',
                      boxShadow: 'inset -1px -1px 3px hsl(18 60% 30% / 0.4), 0 3px 6px hsl(28 50% 32% / 0.35)'
                    }}
                  />
                </div>

                {/* Tag - Painted rectangle */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="tag-painted text-sm">
                    {story.tag}
                  </span>
                </div>

                {/* Image with vintage treatment */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover img-vintage group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-cream/20 to-transparent" />
                </div>

                {/* Content - Journal style */}
                <div className="p-6 pt-4">
                  <h3 className="font-marker text-xl md:text-2xl text-earth mb-3 leading-tight group-hover:text-orange transition-colors duration-300 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="font-camping text-lg text-earth/60">{story.date}</span>
                    <Link
                      to={`/histoires/${story.id}`}
                      className="inline-flex items-center gap-2 font-camping text-lg text-earth hover:text-orange transition-colors group/link"
                    >
                      Lire l'histoire
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA - Painted button style */}
        <ScrollReveal delay={700}>
          <div className="text-center mt-16">
            <Link to="/histoires" className="btn-wooden text-2xl">
              Voir tous nos articles
              <ArrowRight size={24} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}