import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import storyCourse from "@/assets/story-course.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import storyChampionnat from "@/assets/story-championnat.jpg";

const articles = {
  "1": {
    title: "Récit d'une course épique... jusqu'à la ligne d'arrivée!",
    subtitle: "Une aventure inoubliable avec Jules",
    date: "18 avril 2024",
    readTime: "6 minutes de lecture",
    tags: ["Joëlette", "Émotion", "Solidarité"],
    image: storyCourse,
    content: `
      <h2>Un départ explosif plein d'énergie</h2>
      
      <p class="first-letter">Dès les premières lueurs du matin, l'air était chargé d'une excitation palpable. Notre équipe RYZ'ÔM s'était réunie autour de Jules et de sa joëlette, un sourire jusqu'aux oreilles. Jules, notre jeune aventurier atteint de myopathie, nous fixait sous son casque orange avec des étoiles dans les yeux.</p>
      
      <p>Le briefing est terminé, la tension monte, et l'heure du départ sonne enfin. 3... 2... 1... C'est parti!</p>
      
      <blockquote>"Ensemble, nous allons décrocher les étoiles!" - Jules, 8 ans</blockquote>
      
      <p>L'équipe s'élance. Jules fermement assis dans sa joëlette. On court, on slalome à travers les chemins, les cailloux volent sous nos pieds. Des sourires, des encouragements, et cette énergie collective qui nous porte.</p>
      
      <h2>Les moments de doute... puis de triomphe</h2>
      
      <p>À mi-parcours, la fatigue se fait sentir. Les côtes s'enchaînent, le soleil tape fort. Mais à chaque regard échangé avec Jules, notre détermination se renforce. Son rire communicatif efface instantanément toute trace d'épuisement.</p>
      
      <p>Et puis arrive ce moment magique. La ligne d'arrivée se dessine au loin. La foule nous encourage. Les larmes montent aux yeux.</p>
      
      <blockquote>"Ce n'est pas moi qui ai franchi la ligne d'arrivée. C'est nous. Tous ensemble." - Marie, bénévole</blockquote>
      
      <h2>Une victoire partagée</h2>
      
      <p>Au final, ce n'est pas le chronomètre qui compte. C'est ce lien indéfectible qui s'est tissé entre nous tous. C'est le regard de Jules quand il a compris qu'il avait réalisé son rêve. C'est cette certitude que l'inclusion n'est pas qu'un mot, mais une réalité vivante.</p>
      
      <p>Rendez-vous à la prochaine course. Ensemble, tout devient possible.</p>
    `,
    related: [2, 3],
  },
  "2": {
    title: "Portrait : À la rencontre de Jasmine et Léo",
    subtitle: "L'histoire émouvante d'une maman courageuse",
    date: "5 avril 2024",
    readTime: "5 minutes de lecture",
    tags: ["Portrait", "Témoignage", "Famille"],
    image: storyPortrait,
    content: `
      <h2>Une rencontre qui change tout</h2>
      
      <p class="first-letter">Jasmine nous accueille avec un sourire timide mais sincère. À ses côtés, Léo, 15 ans, observe le monde avec une curiosité nouvelle. Leur histoire avec RYZ'ÔM a commencé il y a un an, et depuis, leur vie a pris un tournant inattendu.</p>
      
      <p>"Avant de rencontrer l'association, Léo restait enfermé. Sa polyarthrite juvénile l'empêchait de suivre ses amis dans leurs aventures. Il se sentait différent, exclu."</p>
      
      <blockquote>"La première fois que Léo est monté dans la joëlette, j'ai vu ses yeux s'illuminer comme jamais." - Jasmine</blockquote>
      
      <h2>La montagne comme thérapie</h2>
      
      <p>Pour Léo, chaque sortie est devenue une victoire. La nature, qu'il ne connaissait qu'à travers les fenêtres, est devenue son terrain de jeu. Les sentiers de montagne ont remplacé les couloirs d'hôpital.</p>
      
      <p>Jasmine, maman solo, a elle aussi trouvé dans l'association une famille. "Les bénévoles sont devenus nos amis. On partage bien plus que des courses : on partage nos vies, nos joies, nos peines."</p>
      
      <h2>Un avenir plein d'espoir</h2>
      
      <p>Aujourd'hui, Léo rêve de devenir "ambassadeur de la joëlette". Il veut montrer aux autres enfants comme lui que le handicap n'est pas une fatalité, mais une différence qui peut se transformer en force.</p>
      
      <blockquote>"Chaque sommet atteint avec RYZ'ÔM me prouve que je peux tout accomplir." - Léo, 15 ans</blockquote>
    `,
    related: [1, 3],
  },
  "3": {
    title: "Le championnat du monde de Joëlette: Notre expérience",
    subtitle: "Retour sur une compétition unique en son genre",
    date: "28 mars 2024",
    readTime: "7 minutes de lecture",
    tags: ["Compétition", "Joëlette", "International"],
    image: storyChampionnat,
    content: `
      <h2>Direction les sommets</h2>
      
      <p class="first-letter">Participer au championnat du monde de Joëlette, c'était notre rêve fou depuis la création de RYZ'ÔM. Cette année, ce rêve est devenu réalité. Notre équipe s'est envolée pour représenter notre association face aux meilleurs équipages du monde.</p>
      
      <p>L'excitation était à son comble. Des mois de préparation, d'entraînement, de coordination. Chaque membre de l'équipe connaissait son rôle par cœur.</p>
      
      <blockquote>"Nous n'étions pas là pour gagner. Nous étions là pour montrer que l'impossible n'existe pas." - Thomas, capitaine d'équipe</blockquote>
      
      <h2>L'épreuve</h2>
      
      <p>15 kilomètres de sentiers montagneux. 800 mètres de dénivelé positif. Et surtout, une chaleur écrasante qui mettait notre endurance à rude épreuve.</p>
      
      <p>Mais l'équipe a tenu bon. Relais après relais, nous avons gravi la montagne. Les encouragements fusaient entre nous, créant une bulle d'énergie positive.</p>
      
      <h2>Une fierté immense</h2>
      
      <p>Au final, notre classement importe peu. Ce qui compte, c'est d'avoir été là, ensemble. D'avoir représenté toutes ces personnes qui croient en notre mission. D'avoir prouvé que l'inclusion par le sport n'a pas de frontières.</p>
      
      <blockquote>"Ce championnat m'a appris que la vraie victoire, c'est de ne jamais abandonner." - Amélie, passagère</blockquote>
      
      <p>L'année prochaine, nous reviendrons. Plus forts. Plus déterminés. Et toujours aussi unis.</p>
    `,
    related: [1, 2],
  },
};

const relatedArticles = {
  "1": { title: "Récit d'une course épique...", image: storyCourse },
  "2": { title: "Portrait : À la rencontre de Jasmine et Léo", image: storyPortrait },
  "3": { title: "Le championnat du monde de Joëlette", image: storyChampionnat },
};

const HistoireDetail = () => {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles] || articles["1"];

  return (
    <main className="min-h-screen editorial-layout grain-overlay">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-28 pb-6">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Link
              to="/histoires"
              className="inline-flex items-center gap-2 text-earth hover:text-orange transition-colors font-camping text-xl group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Blog &gt; Course inclusive
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article */}
      <article className="pb-24 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 paper-vintage opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <ScrollReveal>
                <header className="mb-10">
                  <h1 className="title-jungle text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                    {article.title}
                  </h1>
                  <p className="font-camping text-2xl md:text-3xl text-earth/60 mb-8">
                    {article.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                    <span className="flex items-center gap-2 font-camping text-lg">
                      <Calendar size={18} className="text-orange" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2 font-camping text-lg">
                      <Clock size={18} className="text-nature" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag-painted text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>
              </ScrollReveal>

              {/* Featured Image with card-photo effect */}
              <ScrollReveal delay={200}>
                <div 
                  className="card-photo mb-12"
                  style={{ '--rotation': '1deg' } as React.CSSProperties}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover img-vintage"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Article Content - Clean & Elegant editorial style */}
              <ScrollReveal delay={300}>
                <div
                  className="prose prose-sm md:prose-base max-w-none
                    prose-headings:font-marker prose-headings:text-earth prose-headings:mb-3 prose-headings:mt-6
                    prose-h2:text-lg md:text-xl prose-h2:leading-snug
                    prose-p:font-body prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:mb-3 md:prose-p:mb-4 prose-p:text-sm md:prose-p:text-base
                    prose-blockquote:border-l-3 prose-blockquote:border-orange prose-blockquote:bg-transparent
                    prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:my-4 md:prose-blockquote:my-5
                    prose-blockquote:font-camping prose-blockquote:text-sm md:prose-blockquote:text-base prose-blockquote:not-italic prose-blockquote:text-earth
                    prose-blockquote:font-medium
                    prose-strong:text-earth prose-strong:font-semibold
                    [&_.first-letter]:text-3xl md:[&_.first-letter]:text-4xl [&_.first-letter]:font-marker [&_.first-letter]:text-earth 
                    [&_.first-letter]:float-left [&_.first-letter]:mr-2 [&_.first-letter]:mt-0.5 [&_.first-letter]:leading-none [&_.first-letter]:font-bold
                  "
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </ScrollReveal>
              
              {/* End CTA */}
              <ScrollReveal delay={400}>
                <div className="mt-16 pt-8 border-t border-border/40 text-center">
                  <Link to="/histoires" className="btn-painted text-xl">
                    Découvrir d'autres histoires
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Related Stories */}
                <ScrollReveal direction="right">
                  <div 
                    className="card-watercolor p-6"
                    style={{ '--rotation': '-1deg' } as React.CSSProperties}
                  >
                    <h3 className="font-marker text-2xl text-earth mb-6 flex items-center gap-2">
                      <span className="text-orange">→</span>
                      Dernières histoires
                    </h3>
                    <div className="space-y-5">
                      {article.related.map((relId) => {
                        const rel = relatedArticles[relId.toString() as keyof typeof relatedArticles];
                        return (
                          <Link
                            key={relId}
                            to={`/histoires/${relId}`}
                            className="flex gap-4 group"
                          >
                            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                              <img
                                src={rel.image}
                                alt={rel.title}
                                className="w-full h-full object-cover img-vintage group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-camping text-lg text-earth group-hover:text-orange transition-colors leading-tight">
                                {rel.title}
                              </h4>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* CTA Card */}
                <ScrollReveal direction="right" delay={200}>
                  <div 
                    className="relative overflow-hidden rounded-xl p-6"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--earth)) 0%, hsl(var(--earth-light)) 100%)'
                    }}
                  >
                    {/* Grain overlay */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                        mixBlendMode: 'overlay'
                      }}
                    />
                    
                    <div className="relative z-10">
                      <h3 className="font-marker text-xl text-cream mb-3">
                        Rejoignez l'aventure
                      </h3>
                      <p className="font-body text-sm text-cream/80 mb-5 leading-relaxed">
                        Découvrez comment participer à nos prochaines courses et événements.
                      </p>
                      <Link
                        to="/engager"
                        className="inline-flex items-center gap-2 bg-orange text-cream px-5 py-3 rounded-lg font-camping text-lg hover:bg-orange/90 transition-colors"
                      >
                        S'engager →
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default HistoireDetail;