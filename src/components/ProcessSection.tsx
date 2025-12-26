import { Button } from "@/components/ui/button";
import { Search, FileText, Calendar, BarChart3, Check, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const steps = [
  { 
    num: "01", 
    icon: Search,
    title: "Diagnose weak areas", 
    desc: "We check basics, previous chapters, and exam-pattern mistakes (accuracy, speed, concept gaps).",
    color: "primary"
  },
  { 
    num: "02", 
    icon: FileText,
    title: "Personal study plan", 
    desc: "Topic order, daily practice targets, revision slots, and test schedule — planned for your board level.",
    color: "secondary"
  },
  { 
    num: "03", 
    icon: Calendar,
    title: "Daily practice + Q&A", 
    desc: "Small daily work beats weekend overload. Doubts get cleared quickly so gaps don't pile up.",
    color: "primary"
  },
  { 
    num: "04", 
    icon: BarChart3,
    title: "Weekly tests + feedback", 
    desc: "Tests show progress. Feedback tells exactly what to fix next — marks rise steadily.",
    color: "secondary"
  },
];

const whatYouGet = [
  "Personalized Notes",
  "Formula Sheets",
  "Practice Sets",
  "Daily Practice",
  "Weekly Tests",
  "Progress Reports",
];

const bestFor = [
  { title: "Weak in basics", desc: "We rebuild fundamentals" },
  { title: "Fear of numericals", desc: "Step-wise method + repetition" },
  { title: "Low test scores", desc: "Accuracy-focused corrections" },
  { title: "No routine", desc: "Daily targets + accountability" },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-2">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider border border-secondary/20">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            How It Works
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            A <span className="text-primary">simple 4-step system</span>{" "}
            parents trust
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Clear routine + quick doubt clearing + weekly tests.
          </p>
        </AnimatedSection>

        {/* Steps - Timeline style */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection 
                key={i} 
                delay={i * 150}
                animation={i % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className={`relative flex items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content card */}
                  <div className={`flex-1 p-6 rounded-3xl bg-gradient-to-br from-${step.color}/10 via-card to-card border-2 border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color}/70 flex items-center justify-center text-primary-foreground shadow-md flex-shrink-0`}>
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className={`text-sm font-black text-${step.color} uppercase tracking-wider`}>Step {step.num}</span>
                        <h3 className="text-xl font-heading font-bold text-foreground mt-1">{step.title}</h3>
                        <p className="text-muted-foreground mt-2">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className={`hidden md:flex w-4 h-4 rounded-full bg-${step.color} shadow-lg flex-shrink-0 z-10`} />
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* What you get + Best for */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* What you get */}
          <AnimatedSection animation="fade-left" delay={600}>
            <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-border/50 shadow-lg overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 mb-4">
                  <FileText className="w-3.5 h-3.5" />
                  What You Get
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Personalized notes, formula sheets & practice</h3>
                <p className="text-muted-foreground mb-6">
                  We create personalized notes per student, quick formula sheets, and curated practice problems to close knowledge gaps.
                </p>
                <div className="flex flex-wrap gap-3">
                  {whatYouGet.map((item, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-bold bg-card border border-border/50 text-foreground shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Best for */}
          <AnimatedSection animation="fade-right" delay={700}>
            <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-secondary/10 via-card to-card border border-border/50 shadow-lg overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/20 mb-4">
                  <Check className="w-3.5 h-3.5" />
                  Best For
                </span>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Students who want higher marks, not stress</h3>
                <div className="space-y-4">
                  {bestFor.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex gap-4 items-start p-4 rounded-2xl bg-card/80 border border-border/50 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <strong className="block text-foreground font-bold">{item.title}</strong>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center" delay={800}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button size="default" asChild className="w-full sm:w-auto text-sm sm:text-base">
              <a href="#contact" className="flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="default" variant="outline" asChild className="w-full sm:w-auto text-sm sm:text-base">
              <a href="#courses">Check Fees</a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}