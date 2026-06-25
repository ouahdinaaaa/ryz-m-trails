import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-[6px] shadow-soft hover:shadow-hover hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[6px]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-[6px]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-[6px]",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-[6px]",
        link: "text-primary underline-offset-4 hover:underline",
        organic: "bg-earth text-primary-foreground font-display text-lg rounded-[8px] shadow-soft hover:shadow-hover hover:-translate-y-1 px-8",
        nature: "bg-nature text-accent-foreground font-display text-lg rounded-[8px] shadow-soft hover:shadow-hover hover:-translate-y-1 px-8",
        orange: "bg-orange text-primary-foreground font-display text-lg rounded-[8px] shadow-soft hover:shadow-hover hover:-translate-y-1 px-8",
        "organic-outline": "border-2 border-earth bg-transparent text-earth font-display text-lg rounded-[8px] hover:bg-earth hover:text-primary-foreground px-8",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[6px] px-3",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },

    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
