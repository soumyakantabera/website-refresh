import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const steps = [
  { num: "1", title: "Diagnose weak areas", desc: "We check basics, previous chapters, and exam-pattern mistakes (accuracy, speed, concept gaps).", bg: "tile-mist" },
  { num: "2", title: "Personal study plan", desc: "Topic order, daily practice targets, revision slots, and test schedule — planned for your board level.", bg: "tile-ice" },
  { num: "3", title: "Daily practice + Q&A", desc: "Small daily work beats weekend overload. Doubts get cleared quickly so gaps don't pile up.", bg: "tile-lilac" },
  { num: "4", title: "Weekly tests + feedback", desc: "Tests show progress. Feedback tells exactly what to fix next — marks rise steadily.", bg: "tile-sand" },
];

const whatYouGet = [
  "Personalized Notes",
  "Formula Sheets",
  "Practice Sets",
  "Daily Practice",
  "Weekly Tests",
];

const bestFor = [
  { title: "Weak in basics", desc: "We rebuild fundamentals" },
  { title: "Fear of numericals", desc: "Step-wise method + repetition" },
  { title: "Low test scores", desc: "Accuracy-focused corrections" },
  { title: "No routine", desc: "Daily targets + accountability" },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-6">
          <div className="stagger-children">
            <p className="kicker">How it works</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-heading font-black text-foreground">
              <span className="chalk-underline">A simple 4-step system</span> parents trust & students follow
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Clear routine + quick doubt clearing + weekly tests. Students stop panicking and start improving steadily.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Button asChild className="font-bold shadow-primary">
                <a href="#contact">Start counselling</a>
              </Button>
              <Button variant="ghost" asChild className="font-bold">
                <a href="#courses">Check fees</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[180px]">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=60"
                alt="Teacher explaining concept"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-sm">
                <b className="block text-sm text-foreground">Concept first</b>
                <span className="block text-xs text-muted-foreground font-semibold">Step-by-step clarity</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[180px]">
              <img 
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=60"
                alt="Planning study schedule"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-sm">
                <b className="block text-sm text-foreground">Daily routine</b>
                <span className="block text-xs text-muted-foreground font-semibold">Small targets, every day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {steps.map((step, i) => (
            <div key={i} className={`${step.bg} glass-ring p-5 rounded-2xl border border-border/50 shadow-sm`}>
              <h3 className="font-heading font-bold text-foreground text-lg">{step.num}) {step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* What you get + Best for */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="tile-cream glass-ring p-5 md:p-6 rounded-2xl border border-border/50 shadow-sm">
            <p className="kicker text-xs">What you get</p>
            <h3 className="mt-3 font-heading font-bold text-foreground text-lg">Personalized notes, formula sheets & practice</h3>
            <p className="mt-2 text-muted-foreground">
              We create personalized notes per student, quick formula sheets, and curated practice problems to close knowledge gaps.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {whatYouGet.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground bg-card/80 border border-border/50 shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="tile-cloud glass-ring p-5 md:p-6 rounded-2xl border border-border/50 shadow-sm">
            <p className="kicker text-xs">Best for</p>
            <h3 className="mt-3 font-heading font-bold text-foreground text-lg">Students who want higher marks, not stress</h3>
            <div className="flex flex-col gap-3 mt-4">
              {bestFor.map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-semibold">{item.title}</strong>
                    <span className="block text-sm text-muted-foreground mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
