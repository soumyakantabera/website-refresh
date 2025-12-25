import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, ArrowRight, Zap } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Classes 7–10",
    subtitle: "Board Foundation",
    price: "₹750",
    priceLabel: "/ Maths",
    otherPrices: ["Physics ₹500", "Chemistry ₹500", "Biology ₹500"],
    bundle: { price: "₹2000", label: "All subjects" },
    features: [
      "Foundation building + school exam prep",
      "Daily practice sessions + Q&A sessions",
      "Weekly test series for knowledge gaps",
      "Personalized notes + formula sheets",
    ],
    gradient: "from-primary/20 via-card to-card",
    accent: "primary",
    popular: false,
  },
  {
    name: "Classes 11–12",
    subtitle: "Board Mastery",
    price: "₹1000",
    priceLabel: "/ Maths",
    otherPrices: ["Physics ₹750", "Chemistry ₹750", "Biology ₹750"],
    bundle: { price: "₹2500", label: "All subjects" },
    features: [
      "Board-focused numericals + speed building",
      "Concept clarity → problem-solving confidence",
      "Weekly tests + revision schedule",
      "Personalized notes + formula sheets",
    ],
    gradient: "from-secondary/20 via-card to-card",
    accent: "secondary",
    popular: true,
  },
  {
    name: "BSc Mathematics",
    subtitle: "University Level",
    price: "From ₹2000",
    priceLabel: "/ month",
    otherPrices: ["Topic-wise support + university prep"],
    bundle: null,
    features: [
      "Calculus, Algebra, Real Analysis, Linear Algebra",
      "Proof-writing + problem sets",
      "University exam pattern practice",
      "1:1 doubt clearing + structured plan",
    ],
    gradient: "from-primary/10 via-card to-secondary/10",
    accent: "primary",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="courses" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold uppercase tracking-wider border border-secondary/20">
            <Sparkles className="w-4 h-4" />
            Courses & Pricing
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            Transparent pricing,{" "}
            <span className="text-primary">real value</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            1:1 private coaching • CBSE/ICSE/WBBSE • Kolkata offline + online.
            Choose your level and subjects — no hidden fees.
          </p>
        </AnimatedSection>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 150} animation="scale">
              <div 
                className={`relative rounded-3xl bg-gradient-to-br ${plan.gradient} border-2 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full ${
                  plan.popular ? "border-secondary lg:scale-105 lg:z-10" : "border-border/50"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-secondary to-primary py-2 text-center">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground uppercase tracking-wider">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                      <Star className="w-4 h-4 fill-current" />
                    </span>
                  </div>
                )}

                <div className={`p-6 md:p-8 ${plan.popular ? "pt-14" : ""}`}>
                  {/* Plan header */}
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-${plan.accent}/10 text-${plan.accent} border border-${plan.accent}/20`}>
                      {plan.subtitle}
                    </span>
                    <h3 className="mt-3 text-2xl font-heading font-black text-foreground">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground font-bold">{plan.priceLabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {plan.otherPrices.map((price, j) => (
                        <span key={j} className="px-2 py-1 rounded-lg text-xs font-semibold bg-card/80 border border-border/50 text-muted-foreground">
                          {price}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bundle */}
                  {plan.bundle && (
                    <div className={`p-4 rounded-2xl bg-${plan.accent}/10 border border-${plan.accent}/20 mb-6`}>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground flex items-center gap-2">
                          <Zap className={`w-4 h-4 text-${plan.accent}`} />
                          Bundle Deal
                        </span>
                        <span className="text-xl font-black text-foreground">{plan.bundle.price}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{plan.bundle.label}</span>
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-${plan.accent}/20 border border-${plan.accent}/30 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 text-${plan.accent}`} />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    asChild 
                    className="w-full text-base"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      {plan.popular ? "Get Started" : "Enquire Now"}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Custom plan CTA */}
        <AnimatedSection className="mt-12" delay={500}>
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold text-foreground">Need a custom plan?</h3>
                <p className="mt-2 text-muted-foreground">
                  Share class, board, and weak chapters — get a clear improvement roadmap tailored for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#contact">Get Custom Plan</a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://wa.me/919874088765" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}