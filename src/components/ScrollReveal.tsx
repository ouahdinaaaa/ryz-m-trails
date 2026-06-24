import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      case "scale":
        return "animate-scale-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 will-change-transform motion-reduce:transition-none motion-reduce:animate-none",
        isVisible && getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${Math.min(delay, 500)}ms`, /* Cap delay to avoid long waits on scroll */
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
}
