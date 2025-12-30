import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, ArrowRight, Sparkles, ChevronDown, GraduationCap, BookOpen } from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const classLinks = [
  { href: "/class-7-math-tutor", label: "Class 7 Math" },
  { href: "/class-8-math-tutor", label: "Class 8 Math" },
  { href: "/class-9-math-tutor", label: "Class 9 Math" },
  { href: "/class-10-math-tutor", label: "Class 10 Math" },
  { href: "/class-11-math-tutor", label: "Class 11 Math" },
  { href: "/class-12-math-tutor", label: "Class 12 Math" },
  { href: "/bsc-math-tutor", label: "B.Sc Math" },
];

const boardLinks = [
  { href: "/wbbse-math-tutor", label: "WBBSE/Madhyamik" },
  { href: "/cbse-math-tutor", label: "CBSE Board" },
  { href: "/icse-math-tutor", label: "ICSE Board" },
  { href: "/calcutta-university-bsc-math", label: "Calcutta University" },
  { href: "/wbsu-bsc-math", label: "WBSU" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="relative z-50 pt-4 sm:pt-6">
      <div className="container">
        {/* Glassmorphism navbar container */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-border/30 bg-card/60 backdrop-blur-xl shadow-lg shadow-primary/5">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
              <div className="relative group-hover:scale-105 transition-transform duration-300">
                <Logo size="md" className="drop-shadow-md" />
                <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-full" />
              </div>
              <span className="font-heading font-bold text-foreground text-sm sm:text-base lg:text-lg">
                Sucheta's Math Class
              </span>
            </Link>

            {/* Desktop Nav - Pill style */}
            <nav className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full bg-background/50 border border-border/30">
              {navLinks.slice(0, 1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-sm text-muted-foreground font-medium hover:text-foreground transition-all duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              
              {/* Courses Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="relative px-4 py-2 rounded-full text-sm text-muted-foreground font-medium hover:text-foreground transition-all duration-200 group flex items-center gap-1 outline-none">
                  <span className="relative z-10">Courses</span>
                  <ChevronDown className="w-3.5 h-3.5 relative z-10" />
                  <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border border-border shadow-lg z-[100]" align="center" sideOffset={8}>
                  <DropdownMenuLabel className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-4 h-4" />
                    By Class
                  </DropdownMenuLabel>
                  {classLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link to={link.href} className="cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="flex items-center gap-2 text-primary">
                    <BookOpen className="w-4 h-4" />
                    By Board
                  </DropdownMenuLabel>
                  {boardLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link to={link.href} className="cursor-pointer">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-sm text-muted-foreground font-medium hover:text-foreground transition-all duration-200 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
                <a href="#courses">View Fees</a>
              </Button>
              <Button size="sm" asChild className="group rounded-full px-5 shadow-md shadow-primary/20">
                <a href="#contact" className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Book a Call
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden h-10 w-10 p-0 rounded-xl bg-background/50 border border-border/30 hover:bg-background/80">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[320px] sm:w-[380px] p-0 border-l-0">
                <div className="h-full flex flex-col bg-gradient-to-b from-background via-background to-primary/5">
                  {/* Header with glass effect */}
                  <SheetHeader className="p-6 border-b border-border/30 bg-card/50 backdrop-blur-sm">
                    <SheetTitle className="flex items-center gap-3">
                      <Logo size="sm" className="drop-shadow-md" />
                      <div className="text-left">
                        <div className="font-heading font-bold text-foreground">Sucheta's Math Class</div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Kolkata + Online
                        </div>
                      </div>
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigation menu for Sucheta's Math Class
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="flex-1 p-5 space-y-5 overflow-auto">
                    {/* Navigation links */}
                    <nav className="space-y-1.5">
                      {navLinks.map((link, i) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between px-4 py-3.5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 text-foreground font-medium hover:bg-card hover:border-primary/30 hover:shadow-sm transition-all group"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </a>
                      ))}
                    </nav>

                    {/* Courses Section */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider px-1">
                        <GraduationCap className="w-4 h-4" />
                        Classes
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {classLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2.5 rounded-lg bg-card/60 border border-border/30 text-sm text-foreground font-medium hover:bg-card hover:border-primary/30 transition-all"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider px-1">
                        <BookOpen className="w-4 h-4" />
                        Boards
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {boardLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className="px-3 py-2.5 rounded-lg bg-card/60 border border-border/30 text-sm text-foreground font-medium hover:bg-card hover:border-primary/30 transition-all"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-2.5 pt-2">
                      <Button asChild className="w-full rounded-xl shadow-md" size="lg">
                        <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Book Counselling
                        </a>
                      </Button>
                      <Button variant="secondary" asChild className="w-full rounded-xl" size="lg">
                        <a 
                          href="https://wa.me/916290871215?text=Hi! I'm interested in 1:1 private coaching." 
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                        >
                          💬 WhatsApp Now
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="w-full rounded-xl" size="lg">
                        <a href="tel:+916290871215" onClick={() => setOpen(false)}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>

                    {/* Tip card with glass effect */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        Quick tip
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Share last test marks + weak chapters for a faster custom plan.
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}