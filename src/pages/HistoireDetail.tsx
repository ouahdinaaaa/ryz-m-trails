import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import storyCourse from "@/assets/story-course.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import storyChampionnat from "@/assets/story-championnat.jpg";
import defaultJoelette from "@/assets/hero-joelette.jpg";
import defaultNature from "@/assets/why.png";
import defaultGeneral from "@/assets/acceuil.png";

// Pour la prévisualisation locale des images, vous pouvez faire une correspondance si besoin
const imageMap: Record<string, string> = {
  "story-course.jpg": storyCourse,
  "story-portrait.jpg": storyPortrait,
  "story-championnat.jpg": storyChampionnat,
};

// Smart default image based on tags
const getSmartDefaultImage = (tags: string[] = []): string => {
  if (!tags) return defaultGeneral;
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

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const HistoireDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Article introuvable");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  if (error || !article) return <div className="min-h-screen flex items-center justify-center text-red-600">{error || "Article introuvable"}</div>;

  // Pour l'image, si c'est un nom local, on prend dans imageMap, sinon on construit l'URL backend
  let imageSrc = imageMap[article.image];
  if (!imageSrc && article.image) {
    // Si ce n'est pas une URL absolue, on construit l'URL backend
    if (!/^https?:\/\//.test(article.image) && article.image !== "") {
      let baseUrl = API_URL.replace(/\/?api$/, "");
      if (baseUrl.endsWith("/")) baseUrl = baseUrl.slice(0, -1);
      let imgPath = article.image.startsWith("/") ? article.image.slice(1) : article.image;
      imageSrc = `${baseUrl}/${imgPath}`;
      imageSrc = imageSrc.replace(/\/uploads\/+/, "/uploads/");
    } else {
      imageSrc = article.image;
    }
  }
  if (!imageSrc) {
    imageSrc = getSmartDefaultImage(article.tags || article.tagIds);
  }

  return (
    <main className="min-h-screen editorial-layout grain-overlay">
      <Header />
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
      <article className="pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 paper-vintage opacity-80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
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
                    {article.tags && article.tags.map((tag: string) => (
                      <span key={tag} className="tag-painted text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="card-photo mb-12" style={{ '--rotation': '1deg' } as React.CSSProperties}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={article.title}
                      className="w-full h-full object-cover img-vintage"
                      onError={(e) => {
                         e.currentTarget.src = getSmartDefaultImage(article.tags || article.tagIds);
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div
                  className="prose prose-sm md:prose-base max-w-none prose-headings:font-marker prose-headings:text-earth prose-headings:mb-3 prose-headings:mt-6 prose-h2:text-lg md:text-xl prose-h2:leading-snug prose-p:font-body prose-p:text-foreground/70 prose-p:leading-relaxed prose-p:mb-3 md:prose-p:mb-4 prose-p:text-sm md:prose-p:text-base prose-blockquote:border-l-3 prose-blockquote:border-orange prose-blockquote:bg-transparent prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:my-4 md:prose-blockquote:my-5 prose-blockquote:font-camping prose-blockquote:text-sm md:prose-blockquote:text-base prose-blockquote:not-italic prose-blockquote:text-earth prose-blockquote:font-medium prose-strong:text-earth prose-strong:font-semibold [&_.first-letter]:text-3xl md:[&_.first-letter]:text-4xl [&_.first-letter]:font-marker [&_.first-letter]:text-earth [&_.first-letter]:float-left [&_.first-letter]:mr-2 [&_.first-letter]:mt-0.5 [&_.first-letter]:leading-none [&_.first-letter]:font-bold"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="mt-16 pt-8 border-t border-border/40 text-center">
                  <Link to="/histoires" className="btn-painted text-xl">
                    Découvrir d'autres histoires
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            {/* Sidebar désactivée pour l'instant, à réimplémenter dynamiquement si besoin */}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default HistoireDetail;