import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Heart } from "lucide-react";


const Contact = () => {
  // Pré-remplir le sujet depuis l'URL si présent
  const getSubjectFromURL = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('subject') || "";
    }
    return "";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: getSubjectFromURL(),
    message: "",
  });

  // Met à jour le sujet si l'URL change (navigation interne)
  useEffect(() => {
    const subject = getSubjectFromURL();
    if (subject && subject !== formData.subject) {
      setFormData((prev) => ({ ...prev, subject }));
    }
    // eslint-disable-next-line
  }, [window.location.search]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation d'envoi asynchrone
    setTimeout(() => {
        toast.success("Message envoyé !", {
          description: "Nous reviendrons vers vous sous 48h.",
          className: "font-body",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-nature/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-orange/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 paper-vintage opacity-80" />
      </div>
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-earth mb-4">
              Contact
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-display text-2xl text-muted-foreground mb-2">
              « Écrivons la suite ensemble »
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="font-body text-foreground/80 max-w-xl mx-auto">
              Une question, une envie de nous rejoindre, ou simplement dire bonjour ? 
              Nous sommes là pour vous répondre.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-display text-lg text-foreground">
                      Votre nom
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 bg-background border-2 border-border rounded-xl focus:border-orange focus:ring-orange/20 transition-all font-body"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-display text-lg text-foreground">
                      Votre email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 bg-background border-2 border-border rounded-xl focus:border-orange focus:ring-orange/20 transition-all font-body"
                      placeholder="jean@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="font-display text-lg text-foreground">
                      Sujet
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="mt-2 bg-background border-2 border-border rounded-xl focus:border-orange focus:ring-orange/20 transition-all font-body"
                      placeholder="Devenir bénévole, participer à une course..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="font-display text-lg text-foreground">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-2 bg-background border-2 border-border rounded-xl focus:border-orange focus:ring-orange/20 transition-all font-body resize-none"
                      placeholder="Parlez-nous de vous et de votre envie de nous rejoindre..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="nature" 
                    size="xl" 
                    className="w-full relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </Button>
                </div>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <div className="bg-secondary/50 rounded-2xl p-8">
                  <h2 className="font-display text-3xl font-semibold text-earth mb-6">
                    Contacts Officiels
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-card rounded-xl">
                      <p className="font-display text-lg text-foreground font-semibold">
                        Président
                      </p>
                      <p className="font-body text-muted-foreground">
                        À votre écoute pour toute question stratégique
                      </p>
                    </div>
                    
                    <div className="p-4 bg-card rounded-xl">
                      <p className="font-display text-lg text-foreground font-semibold">
                        Trésorier
                      </p>
                      <p className="font-body text-muted-foreground">
                        Pour les dons et partenariats financiers
                      </p>
                    </div>
                    
                    <a 
                      href="mailto:contact@ryzom.org"
                      className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-soft transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                        <Mail className="text-orange" size={24} />
                      </div>
                      <div>
                        <p className="font-display text-lg text-foreground group-hover:text-earth transition-colors">
                          contact@ryzom.org
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          Réponse sous 48h
                        </p>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-nature/20 flex items-center justify-center">
                        <MapPin className="text-nature" size={24} />
                      </div>
                      <div>
                        <p className="font-display text-lg text-foreground">
                          France entière
                        </p>
                        <p className="font-body text-sm text-muted-foreground">
                          Nous intervenons partout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="bg-earth text-primary-foreground rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-orange fill-orange" size={24} />
                    <h3 className="font-display text-2xl font-semibold">
                      Collaborons ensemble
                    </h3>
                  </div>
                  <p className="font-body leading-relaxed mb-4">
                    Que vous soyez une institution, une entreprise, une école ou un particulier, 
                    nous sommes ouverts à toutes les collaborations. Inventons ensemble de nouvelles 
                    façons de rendre l'aventure accessible à tous !
                  </p>
                  <p className="font-display text-orange text-lg italic">
                    « Chaque message est une porte qui s'ouvre. »
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
