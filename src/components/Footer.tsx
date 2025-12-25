import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from "lucide-react";

const COACHING = {
  phoneE164: "+919874088765",
  displayPhone: "+91 98740 88765",
  email: "berasucheta01@gmail.com",
  address: "Near Maa Basanti Varieties, Kolkata",
  defaultWhatsAppText: "Hi! I'm interested in 1:1 private coaching. Please share available slots and fees details."
};

const quickLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#courses", label: "Courses & Fees" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const programs = [
  { title: "Classes 7–10", desc: "Boards: CBSE / ICSE / WBBSE" },
  { title: "Classes 11–12", desc: "Maths + Science (as per stream)" },
  { title: "BSc Mathematics", desc: "Pass / Hons — topic-wise support" },
];

export function Footer() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(COACHING.defaultWhatsAppText);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(900px 420px at 12% 10%, hsla(210, 70%, 60%, 0.08), transparent 62%),
            radial-gradient(900px 420px at 88% 30%, hsla(175, 45%, 42%, 0.06), transparent 62%),
            linear-gradient(180deg, transparent, hsla(43, 25%, 91%, 0.4))
          `
        }}
      />

      <div className="container relative z-10">
        {/* Footer CTA */}
        <div className="tile-cloud glass-ring rounded-2xl border border-border/50 shadow-md p-5 md:p-6 stagger-children overflow-hidden relative">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(600px 240px at 10% 0%, hsla(210, 60%, 42%, 0.08), transparent 60%),
                radial-gradient(520px 220px at 92% 35%, hsla(175, 45%, 42%, 0.06), transparent 62%)
              `
            }}
          />
          <div className="relative flex flex-wrap items-start justify-between gap-6">
            <div className="flex-1 min-w-[240px]">
              <p className="kicker text-xs">Start here</p>
              <h3 className="mt-2 font-heading font-bold text-foreground text-xl">Get a free counselling call + a 30‑day improvement plan</h3>
              <p className="mt-2 text-muted-foreground">
                Share class, board, and weak chapters. We'll suggest the right plan and confirm the best slot
                (Kolkata offline + online).
              </p>
              <div className="flex flex-wrap gap-2.5 mt-4">
                <span className="px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground bg-card/80 border border-border/50">1:1 Private</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground bg-card/80 border border-border/50">CBSE • ICSE • WBBSE</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground bg-card/80 border border-border/50">Notes + Weekly Tests</span>
              </div>
            </div>

            <div className="grid gap-2.5 min-w-[260px]">
              <Button asChild className="w-full font-bold shadow-primary">
                <a href="#contact">Book Counselling</a>
              </Button>
              <Button variant="outline" onClick={openWhatsApp} className="w-full font-bold">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Now
              </Button>
              <Button variant="ghost" asChild className="w-full font-bold">
                <a href="#courses">See Fees</a>
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Or call <a href={`tel:${COACHING.phoneE164}`} className="font-bold text-foreground underline underline-offset-2 decoration-2">{COACHING.displayPhone}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Brand */}
          <div className="glass-ring bg-card/60 rounded-2xl p-5 border border-border/50 shadow-sm stagger-children">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex-shrink-0 shadow-sm"
                style={{
                  background: "conic-gradient(from 215deg, hsl(210, 60%, 42%), hsl(210, 70%, 60%), hsl(175, 45%, 42%), hsl(210, 60%, 42%))"
                }}
              />
              <div>
                <b className="block font-heading font-bold text-foreground">Sucheta's Math Class</b>
                <span className="block text-sm text-muted-foreground font-medium">Maths • Physics • Chemistry • Biology • BSc Mathematics</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Personalized coaching with daily practice, Q&A, notes, and weekly tests to close knowledge gaps.
              Offline in Kolkata + Online.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" variant="outline" asChild className="font-bold">
                <a href="#process">How it works</a>
              </Button>
              <Button size="sm" variant="ghost" asChild className="font-bold">
                <a href="#faq">FAQ</a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-ring bg-card/60 rounded-2xl p-5 border border-border/50 shadow-sm stagger-children">
            <h4 className="font-heading font-bold text-foreground mb-4">Quick links</h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-card/60 border border-border/50 font-semibold text-foreground hover:bg-card hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  {link.label}
                  <span className="text-muted-foreground font-bold">→</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="glass-ring bg-card/60 rounded-2xl p-5 border border-border/50 shadow-sm stagger-children">
            <h4 className="font-heading font-bold text-foreground mb-4">Programs</h4>
            <div className="flex flex-col gap-3">
              {programs.map((program, i) => (
                <div key={i}>
                  <b className="block text-foreground font-semibold">{program.title}</b>
                  <span className="block text-sm text-muted-foreground mt-0.5">{program.desc}</span>
                </div>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />
            <p className="text-sm text-muted-foreground">Limited 1:1 slots to keep quality high.</p>
          </div>

          {/* Contact */}
          <div className="glass-ring bg-card/60 rounded-2xl p-5 border border-border/50 shadow-sm stagger-children">
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${COACHING.phoneE164}`} className="flex gap-3 items-start p-3 rounded-xl bg-card/60 border border-border/50 hover:bg-card transition-colors shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <b className="block text-sm text-foreground font-semibold">Call / WhatsApp</b>
                  <span className="block text-sm text-muted-foreground">{COACHING.displayPhone}</span>
                </div>
              </a>

              <a href={`mailto:${COACHING.email}`} className="flex gap-3 items-start p-3 rounded-xl bg-card/60 border border-border/50 hover:bg-card transition-colors shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <b className="block text-sm text-foreground font-semibold">Email</b>
                  <span className="block text-sm text-muted-foreground break-all">{COACHING.email}</span>
                </div>
              </a>

              <div className="flex gap-3 items-start p-3 rounded-xl bg-card/60 border border-border/50 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <b className="block text-sm text-foreground font-semibold">Location</b>
                  <span className="block text-sm text-muted-foreground">{COACHING.address}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" asChild className="font-bold shadow-primary">
                <a href="#contact">Book</a>
              </Button>
              <Button size="sm" variant="outline" onClick={openWhatsApp} className="font-bold">
                WhatsApp
              </Button>
              <Button size="sm" variant="ghost" asChild className="font-bold">
                <a href="#top">
                  <ArrowUp className="w-3.5 h-3.5 mr-1" />
                  Top
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground">© {year} Sucheta's Math Class • All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Kolkata + Online • CBSE / ICSE / WBBSE</p>
        </div>
      </div>
    </footer>
  );
}
