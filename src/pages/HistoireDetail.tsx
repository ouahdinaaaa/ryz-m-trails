import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
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
    <main className="min-h-screen">
      <Header />
      
      {/* Breadcrumb & Header */}
      <section className="pt-28 pb-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Link
              to="/histoires"
              className="inline-flex items-center gap-2 text-earth hover:text-orange transition-colors font-display mb-6"
            >
              <ArrowLeft size={18} />
              Blog &gt; Course inclusive
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article */}
      <article className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <header className="mb-8">
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-earth mb-4 leading-tight">
                    {article.title}
                  </h1>
                  <p className="font-display text-xl text-muted-foreground mb-6">
                    {article.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-orange" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-nature" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full font-display text-sm text-secondary-foreground"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>
              </ScrollReveal>

              {/* Featured Image */}
              <ScrollReveal delay={200}>
                <div className="relative mb-12 rounded-xl overflow-hidden shadow-card transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>

              {/* Article Content */}
              <ScrollReveal delay={300}>
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-display prose-headings:text-earth prose-headings:font-semibold
                    prose-p:font-body prose-p:text-foreground prose-p:leading-relaxed
                    prose-blockquote:border-l-4 prose-blockquote:border-orange prose-blockquote:bg-secondary/50 
                    prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                    prose-blockquote:font-display prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:text-earth
                    prose-strong:text-earth
                    [&_.first-letter]:text-6xl [&_.first-letter]:font-display [&_.first-letter]:text-earth 
                    [&_.first-letter]:float-left [&_.first-letter]:mr-3 [&_.first-letter]:leading-none
                  "
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Related Stories */}
                <ScrollReveal direction="right">
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="font-display text-xl font-semibold text-earth mb-4">
                      Dernières histoires
                    </h3>
                    <div className="space-y-4">
                      {article.related.map((relId) => {
                        const rel = relatedArticles[relId.toString() as keyof typeof relatedArticles];
                        return (
                          <Link
                            key={relId}
                            to={`/histoires/${relId}`}
                            className="flex gap-3 group"
                          >
                            <img
                              src={rel.image}
                              alt={rel.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-display text-sm text-foreground group-hover:text-earth transition-colors line-clamp-2">
                                {rel.title}
                              </h4>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal direction="right" delay={200}>
                  <div className="bg-earth rounded-xl p-6 text-primary-foreground">
                    <h3 className="font-display text-xl font-semibold mb-3">
                      Découvrez toutes nos histoires
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-4">
                      Récits, portraits de ceux et celles qui bâtissent RYZ'ÔM
                    </p>
                    <Link
                      to="/histoires"
                      className="inline-flex items-center gap-2 bg-orange text-primary-foreground px-4 py-2 rounded-full font-display hover:bg-orange/90 transition-colors"
                    >
                      Voir le blog →
                    </Link>
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
