import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, ArrowRight, Zap } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Classes 7–10",
    subtitle: "Board Foundation",
    price: "₹750",
    priceLabel: "/ month",
    priceSuffix: "Maths",
    otherPrices: ["Physics ₹500/mo", "Chemistry ₹500/mo", "Biology ₹500/mo"],
    bundle: { price: "₹2000/mo", label: "All subjects" },
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
    priceLabel: "/ month",
    priceSuffix: "Maths",
    otherPrices: ["Physics ₹750/mo", "Chemistry ₹750/mo", "Biology ₹750/mo"],
    bundle: { price: "₹2500/mo", label: "All subjects" },
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
    priceSuffix: null,
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
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-2">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider border border-secondary/20">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            Courses & Pricing
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            Transparent pricing,{" "}
            <span className="text-primary">real value</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            1:1 private coaching • CBSE/ICSE/WBBSE • Kolkata offline + online. <span className="font-semibold text-foreground">All fees are per month.</span>
          </p>
        </AnimatedSection>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 150} animation="scale">
              <div 
                className={`group relative rounded-3xl bg-gradient-to-br ${plan.gradient} border-2 overflow-hidden transition-all duration-500 ease-out h-full cursor-pointer ${
                  plan.popular 
                    ? "border-secondary lg:scale-105 lg:z-10 shadow-[0_20px_50px_-12px_hsl(var(--secondary)/0.35)] hover:shadow-[0_30px_60px_-12px_hsl(var(--secondary)/0.5)] hover:-translate-y-3" 
                    : "border-border/50 shadow-lg hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.25)] hover:-translate-y-3 hover:border-primary/50"
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

                <div className={`p-4 sm:p-6 md:p-8 ${plan.popular ? "pt-16 sm:pt-20" : ""}`}>
                  {/* Plan header */}
                  <div className={`mb-4 sm:mb-6 ${plan.popular ? "mt-2 sm:mt-3" : ""}`}>
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                      plan.popular 
                        ? "bg-secondary text-secondary-foreground" 
                        : plan.accent === "primary" 
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-secondary text-secondary-foreground"
                    }`}>
                      {plan.subtitle}
                    </span>
                    <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl font-heading font-black text-foreground">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground">{plan.price}</span>
                      <span className="text-sm sm:text-base text-muted-foreground font-bold">{plan.priceLabel}</span>
                      {plan.priceSuffix && (
                        <span className="text-xs sm:text-sm text-muted-foreground font-semibold">({plan.priceSuffix})</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      {plan.otherPrices.map((price, j) => (
                        <span key={j} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-card/80 border border-border/50 text-muted-foreground">
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
                    className="w-full text-base transition-transform duration-300 group-hover:scale-[1.02]"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      {plan.popular ? "Get Started" : "Enquire Now"}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Custom plan CTA */}
        <AnimatedSection className="mt-12" delay={500}>
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">Need a custom plan?</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Share class, board, and weak chapters — get a roadmap tailored for you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button size="default" asChild className="w-full sm:w-auto">
                  <a href="#contact">Get Custom Plan</a>
                </Button>
                <Button size="default" variant="secondary" asChild className="w-full sm:w-auto">
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