import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/acceuil.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-8 md:pt-12 bg-[#e8dfce]">

      {/* Background — image identique desktop/mobile, recadrée intelligemment */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Course inclusive avec joëlette dans la nature"
          className="w-full h-full object-cover object-[center_30%] md:object-center"
          style={{
            filter: 'sepia(0.2) contrast(1.1) brightness(0.9)',
          }}
        />
        {/* Overlay papier vintage pour cohérence avec le reste du site */}
        <div className="absolute inset-0 paper-vintage opacity-30 mix-blend-multiply pointer-events-none" />
        {/* Dégradé bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e8dfce]/80" />
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-start w-full max-w-5xl gap-3 sm:gap-5 overflow-hidden"
        style={{ minHeight: "50vh", maxHeight: "60vh", paddingTop: "4vh" }}
      >
        
        {/* Logo RYZ'OM (Style robuste) */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col items-center">
            <h1 className="font-black text-[clamp(3rem,8vw,6.5rem)] text-[#5d3a24] mb-0 tracking-tighter flex items-center leading-[0.9]">
              RYZ’ÔM
              <span className="text-[clamp(1.6rem,4vw,3.5rem)] ml-2">🌿</span>
            </h1>
            
            {/* Slogan avec les tirets latéraux */}
            <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3 mb-2 sm:mb-4">
              <div className="h-[2px] w-8 md:w-12 bg-[#b35a2d]" />
              <p className="uppercase font-bold tracking-[0.28em] text-[#b35a2d] text-[clamp(0.7rem,2.2vw,1.05rem)]">
                S'unir pour aller plus loin
              </p>
              <div className="h-[2px] w-8 md:w-12 bg-[#b35a2d]" />
            </div>
          </div>
        </ScrollReveal>

        {/* Phrase d'accroche (Style Manuscrit) */}
        <ScrollReveal delay={400}>
          <h2 className="font-serif italic text-[clamp(1.8rem,6vw,4.4rem)] text-[#2D2D2D] mb-2 sm:mb-4 drop-shadow-sm leading-tight">
            Courir. Partager. Inclure.
          </h2>
        </ScrollReveal>

        {/* Le Bandeau Noir Incliné */}
        <ScrollReveal delay={600}>
          <div className="relative inline-block px-7 py-2.5 bg-black/85 backdrop-blur-sm shadow-2xl rotate-[-1.5deg] border-x-4 border-black">
            <p className="text-white font-bold tracking-[0.22em] text-[clamp(0.7rem,2vw,1rem)] uppercase">
              Ensemble, tout devient possible.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator (Style épuré de l'image) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <ScrollReveal delay={1000}>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-6 bg-stone-500" />
              <span className="italic text-stone-700 font-semibold tracking-wide whitespace-nowrap text-base sm:text-lg">Vivez l'expérience</span>
              <div className="h-[1px] w-6 bg-stone-500" />
            </div>
            <ChevronDown className="text-stone-800 w-6 h-6 animate-bounce mt-1" strokeWidth={2} />
          </div>
        </ScrollReveal>
      </div>
      
      {/* Texture de grain globale (Optionnel, à définir dans ton CSS global) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply grain-overlay"></div>
    </section>
  );
}