import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

export function GrainOverlay({ className, opacity = 0.05 }: GrainOverlayProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // On mobile: much lower opacity, lower frequency, no animation (avoids "broken TV" effect)
  const finalOpacity = isMobile ? Math.min(opacity, 0.025) : opacity;
  const baseFrequency = isMobile ? "0.35" : "0.8";

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-50", className)}
      style={{ opacity: finalOpacity }}
      aria-hidden="true"
    >
      <svg className={cn("w-full h-full", !isMobile && "animate-grain")}>
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={isMobile ? 2 : 4}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  );
}

