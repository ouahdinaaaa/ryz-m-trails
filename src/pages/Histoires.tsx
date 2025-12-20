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
  },
  {
    id: 2,
    title: "Portrait : À la rencontre de Jasmine et Léo",
    excerpt: "Découvrez l'histoire émouvante d'une maman courageuse et d'un ado timide qui s'ouvre à la montagne, à la vie. Une rencontre qui a changé leur quotidien.",
    date: "5 avril 2024",
    image: storyPortrait,
    category: "Histoires et témoignages",
  },
  {
    id: 3,
    title: "Le championnat du monde de Joëlette: Notre expérience",
    excerpt: "Retour sur une compétition unique en son genre. Nous avons défié la montée aux côtés des meilleurs équipages du monde.",
    date: "28 mars 2024",
    image: storyChampionnat,
    category: "Joëlette",
  },
];

const Histoires = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-nature/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-4">
              HISTOIRES
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-display text-xl text-muted-foreground mb-4">
              ENTREZ DANS L'AVENTURE...
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="font-body text-foreground/80 max-w-xl mx-auto">
              Découvrez les récits inspirants de celles et ceux qui bâtissent <strong>RYZ'ÔM</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                  <ScrollReveal key={story.id} delay={index * 100}>
                    <article
                      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 h-full flex flex-col"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                      }}
                    >
                      {/* Pin */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
                        <div className="w-4 h-4 rounded-full bg-orange shadow-md" />
                      </div>

                      {/* Tag */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-nature text-accent-foreground px-2 py-1 rounded-full font-display text-xs shadow-soft">
                          Blog
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-earth transition-colors line-clamp-2">
                          {story.title}
                        </h2>
                        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-body text-xs text-orange">{story.date}</span>
                          <Link
                            to={`/histoires/${story.id}`}
                            className="inline-flex items-center gap-1 font-display text-sm text-earth hover:text-orange transition-colors group/link"
                          >
                            Lire l'histoire complète
                            <ArrowRight
                              size={14}
                              className="group-hover/link:translate-x-1 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <ScrollReveal direction="right">
                <div className="bg-card rounded-xl p-6 shadow-card sticky top-24">
                  <h3 className="font-display text-2xl font-semibold text-earth mb-6">
                    Catégories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary transition-colors group">
                          <span className="font-body text-foreground group-hover:text-earth transition-colors">
                            {cat.name}
                          </span>
                          <span className="font-display text-muted-foreground bg-secondary px-2 py-1 rounded-full text-sm">
                            {cat.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
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
