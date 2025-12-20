import { Link } from "react-router-dom";
import { Heart, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-earth text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Mission */}
          <div>
            <h3 className="font-display text-4xl font-bold mb-4">RYZ'ÔM</h3>
            <p className="text-primary-foreground/80 font-body leading-relaxed">
              S'unir pour aller plus loin. Ensemble, nous rendons l'aventure accessible à tous.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-2xl mb-4">Naviguer</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/association" className="hover:text-sand transition-colors font-body">
                  L'Association
                </Link>
              </li>
              <li>
                <Link to="/joelette" className="hover:text-sand transition-colors font-body">
                  La Joëlette
                </Link>
              </li>
              <li>
                <Link to="/histoires" className="hover:text-sand transition-colors font-body">
                  Nos Histoires
                </Link>
              </li>
              <li>
                <Link to="/engager" className="hover:text-sand transition-colors font-body">
                  S'engager
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-2xl mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:contact@ryzom.org" className="hover:text-sand transition-colors font-body">
                  contact@ryzom.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span className="font-body">France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm font-body">
            © 2024 RYZ'ÔM. Tous droits réservés.
          </p>
          <p className="flex items-center gap-2 text-sm font-body">
            Fait avec <Heart size={16} className="text-orange fill-orange" /> pour l'inclusion
          </p>
        </div>
      </div>
    </footer>
  );
}
