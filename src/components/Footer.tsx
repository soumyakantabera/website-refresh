import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowUp, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";

const COACHING = {
  phoneE164: "+916290871215",
  displayPhone: "+91 62908 71215",
  email: "berasucheta01@gmail.com",
  address: "Near Maa Basanti Varieties, Kolkata",
  defaultWhatsAppText: "Hi! I'm interested in 1:1 private coaching. Please share available slots and fees details."
};

const quickLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#courses", label: "Courses & Fees" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const programs = [
  { title: "Classes 7–10", desc: "CBSE / ICSE / WBBSE" },
  { title: "Classes 11–12", desc: "Mathematics" },
  { title: "BSc Mathematics", desc: "Pass / Honours" },
];

export function Footer() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(COACHING.defaultWhatsAppText);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 md:pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Big CTA Section */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-secondary overflow-hidden mb-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                Limited 1:1 Slots
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-primary-foreground mb-2">
                Ready to start your journey?
              </h3>
              <p className="text-primary-foreground/80 text-lg max-w-xl">
                Book a free counselling call and get a 30-day improvement plan. Kolkata offline + Online available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button size="lg" asChild className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-base shadow-lg">
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Book Counselling
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={openWhatsApp} className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="lg" className="drop-shadow-md" />
              <div>
                <b className="block font-heading font-bold text-foreground text-lg">Sucheta's Math Class</b>
                <span className="block text-sm text-muted-foreground">1:1 Private Coaching</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Personalized coaching with daily practice, notes, and weekly tests. Building clarity and confidence.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">CBSE</span>
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">ICSE</span>
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">WBBSE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Programs</h4>
            <div className="space-y-3">
              {programs.map((program, i) => (
                <div key={i}>
                  <b className="block text-foreground font-semibold">{program.title}</b>
                  <span className="text-sm text-muted-foreground">{program.desc}</span>
                </div>
              ))}
            </div>
            
            {/* Location Links */}
            <h4 className="font-heading font-bold text-foreground mt-6 mb-3">Areas We Serve</h4>
            <div className="flex flex-wrap gap-2">
              <a href="/math-tutor-belghoria" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Belghoria</a>
              <a href="/math-tutor-dunlop" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Dunlop</a>
              <a href="/math-tutor-sodepur" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Sodepur</a>
              <a href="/math-tutor-barrackpore" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Barrackpore</a>
              <a href="/math-tutor-dum-dum" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Dum Dum</a>
              <a href="/math-tutor-lake-town" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Lake Town</a>
              <a href="/math-tutor-shyambazar" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Shyambazar</a>
              <a href="/math-tutor-sinthi-more" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Sinthi More</a>
              <a href="/math-tutor-ariadaha" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Ariadaha</a>
              <a href="/math-tutor-sobha-bazar" className="px-3 py-1 rounded-lg text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary transition-colors">Sobha Bazar</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${COACHING.phoneE164}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-medium">{COACHING.displayPhone}</span>
              </a>
              <a href={`mailto:${COACHING.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors min-w-0">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-medium text-sm break-all min-w-0">{COACHING.email}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm">{COACHING.address}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm" asChild className="font-bold">
                <a href="#contact">Book</a>
              </Button>
              <Button size="sm" variant="outline" onClick={openWhatsApp} className="font-bold">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {year} Sucheta's Math Class • All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
