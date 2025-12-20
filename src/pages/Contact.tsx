import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Heart } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen">
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
                    variant="organic" 
                    size="xl" 
                    className="w-full"
                  >
                    Envoyer le message
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
