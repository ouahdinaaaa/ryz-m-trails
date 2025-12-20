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
  },
  {
    id: 2,
    title: "Portrait : À la rencontre de Jasmine et Léo",
    excerpt: "Découvrez l'histoire émouvante d'une maman courageuse et d'un ado timide qui s'ouvre à...",
    date: "5 avril 2024",
    image: storyPortrait,
    tag: "Blog",
  },
  {
    id: 3,
    title: "Le championnat du monde de Joëlette: Notre expérience",
    excerpt: "Retour sur une compétition unique en son genre. Nous avons défié la montée aux côtés des...",
    date: "28 mars 2024",
    image: storyChampionnat,
    tag: "Blog",
  },
];

export function StoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Watercolor background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-earth mb-4">
              HISTOIRES
            </h2>
            <p className="font-display text-xl text-muted-foreground mb-2">
              ENTREZ DANS L'AVENTURE...
            </p>
            <p className="font-body text-foreground/80 max-w-xl mx-auto">
              Découvrez les récits inspirants de celles et ceux qui bâtissent <strong>RYZ'ÔM</strong>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index * 150}>
              <article
                className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
                style={{
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                {/* Pin decoration */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                  <div className="w-5 h-5 rounded-full bg-orange shadow-md" />
                </div>

                {/* Tag */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-nature text-accent-foreground px-3 py-1 rounded-full font-display text-sm shadow-soft">
                    {story.tag}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-earth transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-orange">{story.date}</span>
                    <Link
                      to={`/histoires/${story.id}`}
                      className="inline-flex items-center gap-2 font-display text-earth hover:text-orange transition-colors group/link"
                    >
                      Lire l'histoire complète
                      <ArrowRight
                        size={18}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Link
              to="/histoires"
              className="inline-flex items-center gap-3 font-display text-xl text-earth hover:text-orange transition-colors group"
            >
              Voir tous nos articles
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
