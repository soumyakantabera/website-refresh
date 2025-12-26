import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#courses", label: "Courses & Fees" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-xl bg-background/90 border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group min-w-0">
          <div 
            className="w-11 h-11 rounded-xl flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow"
            style={{
              background: "conic-gradient(from 215deg, hsl(270, 65%, 50%), hsl(280, 70%, 60%), hsl(25, 95%, 52%), hsl(270, 65%, 50%))"
            }}
          >
            <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ 
              background: "linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.92))",
              margin: "2px",
              width: "calc(100% - 4px)",
              height: "calc(100% - 4px)",
              borderRadius: "10px"
            }}>
              <span className="text-lg font-black text-primary">SM</span>
            </div>
          </div>
          <div className="min-w-0">
            <span className="block font-heading font-bold text-foreground text-base sm:text-lg truncate max-w-[12rem] sm:max-w-none">Sucheta's Math Class</span>
            <span className="hidden sm:block text-xs text-muted-foreground font-semibold truncate max-w-[12rem] sm:max-w-none">1:1 Coaching • Kolkata + Online</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-muted-foreground font-semibold hover:text-foreground hover:bg-card/80 transition-all border border-transparent hover:border-border/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="#courses">View Fees</a>
          </Button>
          <Button size="sm" asChild className="group">
            <a href="#contact" className="flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="sm" className="px-3">
              <Menu className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[320px] sm:w-[400px] p-0">
            <div className="h-full flex flex-col bg-gradient-to-b from-background to-accent/10">
              <SheetHeader className="p-6 border-b border-border/50">
                <SheetTitle className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex-shrink-0"
                    style={{
                      background: "conic-gradient(from 215deg, hsl(270, 65%, 50%), hsl(280, 70%, 60%), hsl(25, 95%, 52%), hsl(270, 65%, 50%))"
                    }}
                  />
                  <div className="text-left">
                    <div className="font-heading font-bold">Sucheta's Math Class</div>
                    <div className="text-sm text-muted-foreground font-medium">Kolkata + Online</div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex-1 p-6 space-y-6 overflow-auto">
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-card/80 border border-border/50 text-foreground font-semibold hover:bg-card hover:border-border transition-all"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                  ))}
                </nav>

                <div className="space-y-3">
                  <Button asChild className="w-full" size="lg">
                    <a href="#contact" onClick={() => setOpen(false)}>
                      Book Counselling
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="w-full" size="lg">
                    <a 
                      href="https://wa.me/919874088765?text=Hi! I'm interested in 1:1 private coaching." 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      WhatsApp Now
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full" size="lg">
                    <a href="tel:+919874088765" onClick={() => setOpen(false)}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Quick tip</p>
                  <p className="text-sm text-muted-foreground">
                    Share last test marks + weak chapters for a faster custom plan.
                  </p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}