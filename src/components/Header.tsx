import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Vision & Valeurs", href: "/vision-valeurs" },
  { label: "La Joëlette", href: "/joelette" },
  { label: "Nos Actions", href: "/actions" },
  { label: "Événements", href: "/evenements" },
  { label: "Histoires", href: "/histoires" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-sm shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display text-3xl md:text-4xl font-bold text-earth hover:text-orange transition-colors"
        >
          RYZ'ÔM
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "font-display text-xl transition-all duration-300 relative group",
                  location.pathname === item.href
                    ? "text-orange"
                    : "text-foreground hover:text-earth"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300",
                    location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-earth transition-colors"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu — carnet ouvert */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 transition-all duration-500 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className="mx-3 mt-2 p-6 bg-cream border border-earth/20 shadow-card"
          style={{
            borderRadius: "6px",
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0, transparent 44px, hsl(var(--earth) / 0.08) 44px, hsl(var(--earth) / 0.08) 45px)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                style={{
                  animation: isMobileMenuOpen
                    ? `fade-in 0.4s ease-out ${i * 60}ms both`
                    : undefined,
                }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block font-camping text-3xl py-2 px-2 transition-all hover:translate-x-2",
                    location.pathname === item.href
                      ? "text-orange underline-hand"
                      : "text-earth hover:text-orange"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  );
}
