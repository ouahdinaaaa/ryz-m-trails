import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden grain-overlay grain-8xl">
      {/* Paper texture only - no color, avec overlay marron */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 paper-vintage opacity-[0.95]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="title-jungle text-4xl md:text-5xl lg:text-6xl mb-4">
            Prêt à écrire votre histoire ?
          </h3>
          <p className="font-camping text-xl md:text-2xl text-earth/60 mb-6 tracking-widest">
            — Rejoignez l'aventure humaine —
          </p>
          <p className="font-body text-foreground/80 max-w-xl mx-auto leading-relaxed mb-8">
            Participez à nos prochaines courses, partagez des moments forts et aidez-nous à rendre le trail accessible à tous.
          </p>
          <a
            href="/engager"
            className="btn-wooden text-xl md:text-2xl px-8 py-4 inline-flex items-center gap-2 shadow-lg hover:scale-105 hover:bg-orange/90 transition-all duration-300"
          >
            S'engager maintenant
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="ml-1">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}