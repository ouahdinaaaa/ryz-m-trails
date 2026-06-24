import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import defaultJoelette from "@/assets/hero-joelette.jpg";
import defaultNature from "@/assets/why.png";
import defaultGeneral from "@/assets/acceuil.png";
import storyCourse from "@/assets/story-course.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// Smart default image logic (copied for consistency)
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

export function StoriesSection() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
	axios.get(`${API_URL}/articles`)
      .then(res => {
        let data = [];
        if (Array.isArray(res.data)) {
          data = res.data;
        } else if (res.data && Array.isArray(res.data.articles)) {
          data = res.data.articles;
        }
        // Limit to 3 latest articles
        setStories(data.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-24 font-camping text-2xl animate-pulse">Chargement des histoires...</div>;
  }

  return (
		<section className="py-24 relative overflow-hidden">
			{/* Paper texture only - no color */}
			<div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute inset-0 bg-paper-texture mix-blend-multiply" />
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
							Découvrez les récits inspirants de celles et ceux qui bâtissent{" "}
							<strong className="text-earth">RYZ'ÔM</strong>.
						</p>
					</div>
				</ScrollReveal>

				{/* Carousel for Articles */}
                <div className="px-4 md:px-12">
                     <Carousel 
                        opts={{ 
                            align: "start",
                            loop: false
                        }} 
                        className="w-full"
                     >
                        <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
                            {stories.map((story, index) => {
                                // Badge = toujours "Blog" ou tag principal
                                const badge = story.tags?.[0] || story.tagIds?.[0] || "Blog";

                                // Image logic
                                let imageUrl = story.image;
                                if (!imageUrl || imageUrl.includes('placeholder')) {
                                    imageUrl = getSmartDefaultImage(story.tags || story.tagIds);
                                } else if (imageUrl && !/^https?:\/\//.test(imageUrl) && imageUrl !== "") {
                                    let baseUrl = API_URL.replace(/\/?api$/, "");
                                    if (baseUrl.endsWith("/")) baseUrl = baseUrl.slice(0, -1);
                                    if (imageUrl.startsWith("/")) imageUrl = imageUrl.slice(1);
                                    imageUrl = `${baseUrl}/${imageUrl}`;
                                    imageUrl = imageUrl.replace(/\/uploads\/+/, "/uploads/");
                                }

                                return (
                                    <CarouselItem key={story._id || index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3 pt-6">
                                        <ScrollReveal delay={index * 100}>
                                            <article
                                                className="card-article group relative flex flex-col h-[500px] overflow-visible"
                                                style={{ "--rotation": ["-1deg", "1deg", "-0.5deg"][index % 3] } as React.CSSProperties}
                                            >
                                                {/* Pin decoration */}
                                                <div className="absolute -top-3 left-6 z-50 flex items-center justify-center pointer-events-none" style={{ transform: "rotate(12deg)" }}>
                                                    <svg width="40" height="40" viewBox="0 0 40 40" className="filter drop-shadow-lg" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
                                                        <circle cx="20" cy="20" r="17" fill="none" stroke="hsl(8 95% 50%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength="100" style={{ strokeDasharray: "5,2", opacity: 0.9 }} />
                                                        <circle cx="20" cy="20" r="16" fill="hsl(8 95% 55%)" opacity="0.85" />
                                                        <defs>
                                                            <radialGradient id={`pinGrad-${index}`} cx="35%" cy="35%">
                                                                <stop offset="0%" stopColor="hsl(15 100% 65%)" />
                                                                <stop offset="70%" stopColor="hsl(8 95% 50%)" />
                                                                <stop offset="100%" stopColor="hsl(2 90% 35%)" />
                                                            </radialGradient>
                                                        </defs>
                                                        <circle cx="20" cy="20" r="16" fill={`url(#pinGrad-${index})`} />
                                                        <circle cx="20" cy="20" r="5" fill="hsl(0 0% 25%)" />
                                                    </svg>
                                                </div>

                                                {/* Tag */}
                                                <div className="absolute top-4 right-4 z-10">
                                                    <span className="tag-painted text-sm">{badge}</span>
                                                </div>

                                                {/* Image */}
                                                <div className="relative h-64 overflow-hidden p-3 bg-white">
                                                    <div className="w-full h-full overflow-hidden rounded-sm relative">
                                                        <img
                                                            src={imageUrl}
                                                            alt={story.title}
                                                            onError={(e) => {
                                                               e.currentTarget.src = getSmartDefaultImage(story.tags || story.tagIds);
                                                            }}
                                                            className="w-full h-full object-cover img-vintage group-hover:scale-105 transition-transform duration-700"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-cream/40 to-transparent pointer-events-none" />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 pt-2 flex flex-col flex-1 bg-cream">
                                                    <h3 className="font-marker text-xl text-earth mb-3 leading-tight group-hover:text-orange transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                                                        {story.title}
                                                    </h3>
                                                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-1">
                                                        {story.subtitle || "Une aventure inoubliable avec Ryz'Ôm..."}
                                                    </p>

                                                    <div className="flex items-center justify-between pt-4 border-t border-earth/10 mt-auto">
                                                        <span className="font-camping text-lg text-earth/80">{story.date}</span>
                                                        <Link
                                                            to={`/histoires/${story._id}`}
                                                            className="flex items-center gap-1 text-orange font-bold uppercase tracking-wider text-xs hover:text-earth transition-colors"
                                                        >
                                                            Lire
                                                            <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </article>
                                        </ScrollReveal>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="border-2 border-earth text-earth hover:bg-earth hover:text-white -left-12 h-12 w-12" />
                            <CarouselNext className="border-2 border-earth text-earth hover:bg-earth hover:text-white -right-12 h-12 w-12" />
                        </div>
                     </Carousel>
                </div>

				{/* CTA Button */}
				<ScrollReveal delay={400}>
					<div className="text-center mt-12 md:mt-16">
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