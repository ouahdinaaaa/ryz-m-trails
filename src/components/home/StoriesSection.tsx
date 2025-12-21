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
			{/* Paper texture only - no color */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 paper-vintage opacity-[0.95]" />
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

				{/* Article cards - Newspaper/Journal style */}
				<div className="md:grid md:grid-cols-3 gap-8 lg:gap-10 [&_article]:overflow-visible flex md:flex-none overflow-x-auto md:overflow-visible space-x-6 md:space-x-0 pb-4 md:pb-0 hide-scrollbar items-start pt-8 md:pt-0">
					{stories.map((story, index) => (
						<ScrollReveal key={story.id} delay={index * 200}>
							<article
								className="card-article group relative flex flex-col h-[600px] md:h-[650px] min-w-[85vw] max-w-[90vw] md:min-w-0 md:max-w-none"
								style={{ "--rotation": story.rotation } as React.CSSProperties}
							>
								{/* Pin decoration - Hand-drawn top-down view */}
								<div className="absolute -top-3 left-6 z-50 flex items-center justify-center pointer-events-none" style={{ transform: "rotate(12deg)" }}>
									{/* SVG hand-drawn pin */}
									<svg width="40" height="40" viewBox="0 0 40 40" className="filter drop-shadow-lg" style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
										{/* Outer circle - sketchy */}
										<circle cx="20" cy="20" r="17" fill="none" stroke="hsl(8 95% 50%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" pathLength="100" style={{ strokeDasharray: "5,2", opacity: 0.9 }} />
										<circle cx="20" cy="20" r="16" fill="hsl(8 95% 55%)" opacity="0.85" />
										{/* Radial shading */}
										<defs>
											<radialGradient id="pinGrad" cx="35%" cy="35%">
												<stop offset="0%" stopColor="hsl(15 100% 65%)" />
												<stop offset="70%" stopColor="hsl(8 95% 50%)" />
												<stop offset="100%" stopColor="hsl(2 90% 35%)" />
											</radialGradient>
										</defs>
										<circle cx="20" cy="20" r="16" fill="url(#pinGrad)" />
										{/* Center needle point - dark and visible */}
										<circle cx="20" cy="20" r="5" fill="hsl(0 0% 25%)" />
										<circle cx="20" cy="20" r="4" fill="hsl(0 0% 35%)" opacity="0.7" />
										{/* Highlight reflection */}
										<ellipse cx="16" cy="16" rx="5" ry="4" fill="hsl(0 0% 100%)" opacity="0.4" />
										{/* Sketchy outline for hand-drawn effect */}
										<circle cx="20" cy="20" r="17" fill="none" stroke="hsl(2 80% 25%)" strokeWidth="0.8" opacity="0.6" style={{ strokeDasharray: "8,3" }} />
									</svg>
								</div>

								{/* Tag - Painted rectangle */}
								<div className="absolute top-4 right-4 z-10">
									<span className="tag-painted text-sm">{story.tag}</span>
								</div>

								{/* Image with vintage treatment and white padding */}
								<div className="relative flex-1 overflow-hidden p-4">
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
										<span className="font-camping text-lg text-black bg-cream/90 px-3 py-1 rounded-md border border-earth/20 shadow-sm">{story.date}</span>
										<Link
											to={`/histoires/${story.id}`}
											className="btn-painted text-base py-2 px-4 group/btn hover:underline"
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