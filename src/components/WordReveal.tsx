import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delayBetweenWords?: number;
  startDelay?: number;
}

export function WordReveal({ 
  text, 
  className, 
  wordClassName,
  delayBetweenWords = 100,
  startDelay = 0 
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

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

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block mr-2 opacity-0",
            isVisible && "animate-word-reveal",
            wordClassName
          )}
          style={{ 
            animationDelay: `${startDelay + index * delayBetweenWords}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
