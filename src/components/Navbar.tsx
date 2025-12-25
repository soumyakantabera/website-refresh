import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between py-3.5 gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex-shrink-0 shadow-md"
            style={{
              background: "conic-gradient(from 215deg, hsl(210, 60%, 42%), hsl(210, 70%, 60%), hsl(175, 45%, 42%), hsl(210, 60%, 42%))"
            }}
          >
            <div className="w-full h-full rounded-xl" style={{ 
              background: "linear-gradient(180deg, rgba(247,245,239,0.35), rgba(247,245,239,0.92))",
              margin: "2px",
              width: "calc(100% - 4px)",
              height: "calc(100% - 4px)",
              borderRadius: "10px"
            }} />
          </div>
          <div>
            <span className="block font-heading font-bold text-foreground">Sucheta's Math Class</span>
            <span className="block text-sm text-muted-foreground font-semibold">1:1 Coaching • Kolkata + Online</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-lg text-muted-foreground font-semibold hover:text-foreground hover:bg-card/70 transition-colors border border-transparent hover:border-border"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <Button variant="outline" size="sm" asChild className="font-bold">
            <a href="#courses">View Fees</a>
          </Button>
          <Button size="sm" asChild className="font-bold shadow-primary">
            <a href="#contact">Book a Call</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="sm">
              <Menu className="h-4 w-4 mr-2" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[340px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-xl flex-shrink-0"
                  style={{
                    background: "conic-gradient(from 215deg, hsl(210, 60%, 42%), hsl(210, 70%, 60%), hsl(175, 45%, 42%), hsl(210, 60%, 42%))"
                  }}
                />
                <div className="text-left">
                  <div className="font-heading font-bold">Sucheta's Math Class</div>
                  <div className="text-sm text-muted-foreground font-medium">Kolkata + Online • 1:1</div>
                </div>
              </SheetTitle>
            </SheetHeader>
            
            <div className="mt-6 space-y-3">
              <div className="tile-cream rounded-2xl p-4 border border-border/50 glass-ring">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 rounded-xl bg-card/50 border border-border/50 text-foreground font-semibold hover:bg-card transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button asChild className="mt-2 font-bold shadow-primary">
                    <a href="#contact" onClick={() => setOpen(false)}>
                      Contact / Book Now
                    </a>
                  </Button>
                </nav>
              </div>

              <div className="tile-ice rounded-2xl p-4 border border-border/50 glass-ring">
                <p className="kicker text-xs mb-2">Quick tip</p>
                <p className="text-sm text-muted-foreground">
                  Parents: share last test marks + weak chapters — you'll get a faster custom plan.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
