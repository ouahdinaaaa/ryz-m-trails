import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterQuoteProps {
  text: string;
  author?: string;
  className?: string;
}

/**
 * Citation qui s'écrit/s'efface selon la position de scroll.
 * Effet "machine à écrire" : la longueur affichée suit la progression
 * du bloc dans le viewport.
 */
export function TypewriterQuote({ text, author, className }: TypewriterQuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0 → 1 entre l'entrée dans le viewport et la sortie
      const start = vh * 0.85;
      const end = vh * 0.15;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      // courbe en cloche : 0 → 1 (écrit) → 0 (efface)
      let p: number;
      if (clamped < 0.5) p = clamped * 2;
      else p = 1 - (clamped - 0.5) * 2;
      setCount(Math.round(text.length * p));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [text, reduced]);

  const visible = text.slice(0, count);
  const showCursor = count > 0 && count < text.length;

  return (
    <blockquote
      ref={ref}
      className={cn(
        "font-serif italic text-xl md:text-2xl leading-relaxed text-earth/90 max-w-2xl mx-auto text-center py-8 relative",
        className
      )}
      aria-label={text}
    >
      <span className="block whitespace-pre-wrap min-h-[3em]" style={{ fontFamily: '"Courier New", ui-monospace, monospace' }}>
        {visible}
        {showCursor && (
          <span className="inline-block w-[2px] h-[1em] align-middle bg-earth ml-0.5 animate-pulse" />
        )}
      </span>
      {author && count >= text.length - 1 && (
        <footer className="mt-4 font-camping text-lg text-orange not-italic tracking-widest">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
