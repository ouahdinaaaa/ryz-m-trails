import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterQuote } from "@/components/TypewriterQuote";
import heroImage from "@/assets/we-why2.png"; // Assurez-vous que ce chemin est correct


const reasons = [
    {
        number: "1",
        title: "AIDER",
        description: "Partager la joie du sport avec ceux qui ne peuvent pas courir seuls.",
    },
    {
        number: "2",
        title: "DÉPASSER",
        description: "Repousser ensemble les limites, viser l'inaccessible et y croire.",
    },
    {
        number: "3",
        title: "PARTAGER",
        description: "Respirer, grimper, sourire, étape après étape. Ensemble.",
    },
];

export function WhyWeRunSection() {
    
    const landscapeBackground = `url(${heroImage})`; 

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
            
            {/* ---------------------------------------------------- */}
            {/* 1. BLOC: Arrière-plan Paysage Aquarelle (z-[5]) */}
            {/* AUGMENTATION DE L'OPACITÉ (de 0.3 à 0.4) */}
            {/* ---------------------------------------------------- */}
            <div
                className="absolute inset-0 z-[5] pointer-events-none" 
                style={{
                    backgroundImage: landscapeBackground, 
                    backgroundSize: 'cover',           
                    backgroundPosition: 'center center',    
                    backgroundRepeat: 'no-repeat',         
                    opacity: 0.4, // OPACITÉ AUGMENTÉE
                    filter: 'blur(1px) contrast(110%)',
                }}
            />
            
            {/* ---------------------------------------------------- */}
            {/* 2. Paper texture and color overlay (z-[6]) */}
            {/* AUGMENTATION DE L'OPACITÉ DU PAPIER (de 0.3 à 0.4) */}
            {/* ---------------------------------------------------- */}
            <div className="absolute inset-0 z-[6]">
                {/* Opacité du papier augmentée */}
                <div className="absolute inset-0 paper-vintage opacity-[0.4]" /> 
                <div className="absolute inset-0 bg-gradient-to-br from-[#5d3a24]/30 via-transparent to-orange/20 mix-blend-multiply pointer-events-none" />
            </div>

            {/* ---------------------------------------------------- */}
            {/* 3. Gradient transitions (z-10) */}
            <div
                className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b z-10"
                style={{
                    // Utilise la couleur rgb(238, 233, 225) à la place de white/80
                    backgroundImage: "linear-gradient(to bottom, rgb(238,233,225) 80%, transparent 100%)"
                }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/60 to-transparent z-10" />

            {/* Content (Z-index z-20) */}
            <div className="container mx-auto px-2 md:px-8 relative z-20 py-20">
                <div className="max-w-full ml-0">
                    {/* Section Title - Hero style */}
                    <ScrollReveal delay={100}>
                        <div className="mb-8 md:mb-12 flex items-center gap-4">
                            <h2
                                className="font-camping text-[clamp(3.5rem,12vw,8rem)] text-[#5d3a24] mb-2 tracking-tight leading-tight font-black"
                                style={{
                                    textShadow:
                                        '2px 2px 0 rgba(93,58,36,0.3), 4px 4px 0 rgba(93,58,36,0.2)',
                                }}
                            >
                                Pourquoi on court
                            </h2>
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                className="text-[#5d3a24] flex-shrink-0 -mt-2"
                            >
                                <path
                                    d="M10 25 Q 30 20, 40 25"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M35 20 L 45 25 L 35 30"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </ScrollReveal>

                    {/* Reasons with black circles and curved arrows */}
                    <div className="space-y-4 md:space-y-8">
                        {reasons.map((reason, index) => (
                            <div key={reason.title}>
                                <ScrollReveal delay={200 + index * 150}>
                                    <div className="flex gap-5 items-start group">
                                        {/* Number circle - black background */}
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/90 backdrop-blur-sm flex items-center justify-center border-2 border-white shadow-lg flex-shrink-0">
                                                <span className="font-black text-lg md:text-3xl text-white">
                                                    {reason.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pt-1">
                                            <h3 className="font-marker text-[clamp(1.4rem,4vw,2.8rem)] text-[#5d3a24] mb-1 md:mb-2 leading-tight">
                                                {reason.title}
                                            </h3>
                                            <p className="font-serif italic text-[clamp(0.85rem,2vw,1.25rem)] text-gray-700 leading-tight md:leading-relaxed break-words lg:max-w-sm">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Curved arrow between steps */}
                                {index < reasons.length - 1 && (
                                    <div className="ml-6 my-4">
                                        <svg
                                            width="50"
                                            height="40"
                                            viewBox="0 0 50 40"
                                            className="text-gray-500"
                                        >
                                            <path
                                                d="M25 5 Q 30 15, 25 25 L 25 35"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M20 30 L 25 35 L 30 30"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Citation machine-à-écrire qui se révèle au scroll */}
                <div className="mt-16 md:mt-24">
                    <TypewriterQuote
                        text="On ne court pas pour gagner. On court pour ne laisser personne derrière."
                        author="L'équipe Ryz'Ôm"
                    />
                </div>
            </div>
        </section>
    );
}