import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedKeywordProps {
  word: string;
  delay?: number;
  className?: string;
  variant?: "default" | "highlight" | "nature" | "orange";
}

export function AnimatedKeyword({ 
  word, 
  delay = 0, 
  className,
  variant = "default"
}: AnimatedKeywordProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const variantStyles = {
    default: "bg-secondary text-foreground",
    highlight: "bg-earth text-primary-foreground",
    nature: "bg-nature/20 text-nature border border-nature/30",
    orange: "bg-orange/20 text-orange border border-orange/30",
  };

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block px-4 py-2 rounded-full font-display text-lg md:text-xl",
        "transform transition-all duration-500",
        variantStyles[variant],
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-4 scale-95",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {word}
    </span>
  );
}
