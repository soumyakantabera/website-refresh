import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teacher.jpg";
import { Star, Users, Award, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";

const trustBadges = [
  { icon: Users, label: "1:1 Private", desc: "Focused attention" },
  { icon: Award, label: "Expert Teacher", desc: "MSc Mathematics" },
  { icon: Star, label: "Proven Results", desc: "Score improvement" },
];

const heroPoints = [
  { icon: "📝", title: "Personalized Notes", desc: "Made for your child's gaps + board pattern" },
  { icon: "📊", title: "Daily Practice + Q&A", desc: "Consistency = marks (with accountability)" },
  { icon: "📈", title: "Weekly Tests", desc: "Track progress and fix weak areas early" },
  { icon: "📋", title: "Formula Sheets", desc: "Quick revision before school tests/exams" },
];

export function HeroSection() {
  return (
    <section id="top" className="relative py-8 md:py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Top announcement bar */}
        <div className="flex justify-center mb-6 sm:mb-8 slide-up px-2">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 via-secondary/10 to-primary/15 border border-primary/20 backdrop-blur-sm max-w-full">
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground flex-shrink-0">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-foreground truncate">Limited 1:1 slots for January batch</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          </div>
        </div>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 stagger-children">
            {/* Board badges */}
            <div className="flex flex-wrap gap-2">
              {["CBSE", "ICSE", "WBBSE"].map((board) => (
                <span key={board} className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 transition-all duration-200 hover:scale-105 hover:bg-primary/20 active:scale-95 cursor-default">
                  {board}
                </span>
              ))}
              <span className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider bg-secondary/10 text-secondary border border-secondary/20 transition-all duration-200 hover:scale-105 hover:bg-secondary/20 active:scale-95 cursor-default">
                Classes 7-12 + BSc
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.15] tracking-tight">
              <span className="text-primary">Strong Basics</span>{" "}
              <span className="hidden sm:inline">→</span>{" "}
              <span className="relative inline-block">
                Better Marks
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c30-6 60-6 90 0s60 6 90 0" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <span className="hidden sm:inline">→</span> <span className="block sm:inline">Confident Exams</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Personalized 1:1 coaching for Classes <b className="text-foreground">7–12</b> and <b className="text-foreground">BSc Mathematics</b>.
              We don't just "teach chapters" — we build clarity, daily practice habits, and exam-ready confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="group text-sm sm:text-base w-full sm:w-auto">
                <a href="#contact" className="flex items-center justify-center gap-2">
                  <span>📞 Book FREE Counselling</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="text-sm sm:text-base w-full sm:w-auto">
                <a 
                  href="https://wa.me/916290871215?text=Hi! I'm interested in 1:1 private coaching." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center"
                >
                  💬 WhatsApp Now
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-4 pt-4">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-card/80 border border-border/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30 active:scale-[0.98]">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-md flex-shrink-0">
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <b className="block text-xs sm:text-sm text-foreground truncate">{badge.label}</b>
                    <span className="block text-[10px] sm:text-xs text-muted-foreground truncate">{badge.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual - hidden on mobile */}
          <div className="relative slide-right hidden lg:block">
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-border/50 shadow-xl">
              <ImageWithSkeleton 
                src={heroImage}
                alt="Teacher explaining mathematical concepts"
                className="w-full h-[500px] object-cover"
                skeletonClassName="rounded-none"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              
              {/* Floating stats card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/50 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="px-1">
                    <b className="block text-2xl font-black text-primary">1:1</b>
                    <span className="text-xs text-muted-foreground font-semibold leading-tight block">Private</span>
                  </div>
                  <div className="border-x border-border/50 px-1">
                    <b className="block text-2xl font-black text-primary">Hybrid</b>
                    <span className="text-xs text-muted-foreground font-semibold leading-tight block">Online + Offline</span>
                  </div>
                  <div className="px-1">
                    <b className="block text-2xl font-black text-primary">Goal</b>
                    <span className="text-xs text-muted-foreground font-semibold leading-tight block">Score Better</span>
                  </div>
                </div>
              </div>

              {/* Floating badge top right */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-bold text-sm shadow-lg animate-float">
                ⭐ Kolkata + Online
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Hero points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {heroPoints.map((point, i) => (
            <div 
              key={i} 
              className="group relative p-5 rounded-2xl bg-card/80 border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <span className="text-3xl">{point.icon}</span>
                <h3 className="mt-3 font-heading font-bold text-foreground">{point.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher credentials */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0">
              🎓
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground">Taught by Qualified Expert</h3>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                BSc Mathematics (Hons.) from Sa Jaipuria College, Kolkata (CU) — First Class • MSc Pure Mathematics from Lady Brabourne College
              </p>
            </div>
            <Button size="default" className="w-full sm:w-auto flex-shrink-0" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}