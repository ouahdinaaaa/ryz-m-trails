import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Heart, Send } from "lucide-react";

const Contact = () => {
  const getSubjectFromURL = () => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("subject") || "";
    }
    return "";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: getSubjectFromURL(),
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const subject = getSubjectFromURL();
    if (subject && subject !== formData.subject) {
      setFormData((prev) => ({ ...prev, subject }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message envoyé !", {
        description: "Nous reviendrons vers vous sous 48h.",
        className: "font-body",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-paper-texture">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-[40vw] h-[40vw] bg-nature/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[40vw] h-[40vw] bg-orange/10 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-10 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <ScrollReveal>
            <p className="font-marker text-orange text-base sm:text-lg mb-3 -rotate-2 inline-block">
              ✉ Une carte postale pour nous ✉
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h1 className="title-jungle text-5xl sm:text-7xl md:text-8xl mb-5 leading-[0.9]">
              <span className="underline-hand">Écrivons</span>-nous
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="font-body text-foreground/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Une question, une envie de rejoindre l'aventure, ou simplement un bonjour ?
              On lit chaque mot, promis.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Postcard */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-start">
            {/* LEFT — handwritten letter */}
            <ScrollReveal>
              <form
                onSubmit={handleSubmit}
                className="relative bg-cream p-7 sm:p-10 shadow-card border border-earth/15"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0, transparent 38px, hsl(var(--earth) / 0.08) 38px, hsl(var(--earth) / 0.08) 39px)",
                  borderRadius: "6px",
                  transform: "rotate(-0.6deg)",
                }}
              >
                {/* Washi tape decoration */}
                <span className="washi-tape washi-blue" style={{ top: -10, left: 30 }} aria-hidden />
                <span className="washi-tape washi-green" style={{ top: -12, right: 40, transform: "rotate(7deg)" }} aria-hidden />

                <h2 className="font-marker text-3xl sm:text-4xl text-earth mb-6 -rotate-1">
                  Cher RYZ'ÔM,
                </h2>

                <div className="space-y-7">
                  <div>
                    <label htmlFor="name" className="font-camping text-xl text-earth/80 block mb-1">
                      Je m'appelle
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-handwritten"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-camping text-xl text-earth/80 block mb-1">
                      Mon adresse
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-handwritten"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="font-camping text-xl text-earth/80 block mb-1">
                      À propos de
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input-handwritten"
                      placeholder="Devenir bénévole, proposer un défi…"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="font-camping text-xl text-earth/80 block mb-1">
                      Ce que je voulais vous dire
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-handwritten resize-none"
                      placeholder="Racontez-nous…"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to bottom, transparent 0, transparent 31px, hsl(var(--earth) / 0.18) 31px, hsl(var(--earth) / 0.18) 32px)",
                        borderBottom: "none",
                        lineHeight: "32px",
                      }}
                    />
                  </div>

                  <div className="flex items-end justify-between pt-2">
                    <p className="font-marker text-earth/70 text-lg -rotate-2">— Bien à vous</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="postal-stamp disabled:opacity-60"
                      aria-label="Envoyer le message"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="animate-spin h-4 w-4 border-2 border-rust border-t-transparent rounded-full" />
                          Envoi…
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          <Send className="w-4 h-4" /> Envoyer
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </ScrollReveal>

            {/* RIGHT — sticky notes & info */}
            <div className="space-y-8 lg:pt-10">
              <ScrollReveal direction="right">
                <div className="postit postit-blue" style={{ ["--rotation" as never]: "1.5deg" }}>
                  <p className="font-marker text-2xl text-earth mb-2">📮 Email direct</p>
                  <a
                    href="mailto:contact@ryzom.org"
                    className="font-body text-lg text-earth underline decoration-wavy underline-offset-4 break-all"
                  >
                    contact@ryzom.org
                  </a>
                  <p className="font-body text-sm text-earth/70 mt-1">Réponse sous 48h</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="postit postit-green" style={{ ["--rotation" as never]: "-2deg" }}>
                  <p className="font-marker text-2xl text-earth mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> Où nous trouver
                  </p>
                  <p className="font-body text-lg text-earth">France entière</p>
                  <p className="font-body text-sm text-earth/70">On court partout où il y a un sentier.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="postit postit-pink" style={{ ["--rotation" as never]: "2.5deg" }}>
                  <p className="font-marker text-2xl text-earth mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-rust text-rust" /> Collaborons
                  </p>
                  <p className="font-body text-base text-earth leading-relaxed">
                    Institution, entreprise, école, particulier — toutes les rencontres comptent.
                    Inventons ensemble.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <p className="font-marker text-center text-earth/70 text-xl -rotate-1 pt-4">
                  « Chaque message est une porte qui s'ouvre. »
                </p>
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
