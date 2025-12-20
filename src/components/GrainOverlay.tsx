import { cn } from "@/lib/utils";

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

export function GrainOverlay({ className, opacity = 0.06 }: GrainOverlayProps) {
  return (
    <div 
      className={cn(
        "pointer-events-none fixed inset-0 z-50",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="w-full h-full animate-grain">
        <filter id="grain-filter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="4" 
            stitchTiles="stitch"
          />
        </filter>
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#grain-filter)"
        />
      </svg>
    </div>
  );
}
