import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Classes 7–10 (Boards)",
    price: "₹750",
    priceLabel: "/ Maths",
    otherPrices: "Physics ₹500 • Chemistry ₹500 • Biology ₹500",
    bundle: { price: "₹2000", label: "(All subjects)" },
    features: [
      "Foundation building + school exam prep",
      "Daily practice sessions + Q&A sessions",
      "Weekly test series for better fill up of knowledge gaps",
      "Personalized notes per student + formula sheets + practice",
    ],
    bg: "tile-ice",
    popular: false,
  },
  {
    name: "Classes 11–12 (Boards)",
    price: "₹1000",
    priceLabel: "/ Maths",
    otherPrices: "Physics ₹750 • Chemistry ₹750 • Biology ₹750",
    bundle: { price: "₹2500", label: "(All subjects)" },
    features: [
      "Board-focused numericals + speed building",
      "Concept clarity → problem-solving confidence",
      "Weekly tests + revision schedule",
      "Personalized notes + formula sheets + practice",
    ],
    bg: "tile-mist",
    popular: true,
  },
  {
    name: "BSc in Mathematics (Pass / Hons)",
    price: "From ₹2000",
    priceLabel: "/ month",
    otherPrices: "Topic-wise support + university exam prep",
    bundle: null,
    features: [
      "Calculus, Algebra, Real Analysis, Linear Algebra, etc. (as per syllabus)",
      "Proof-writing + problem sets",
      "University exam pattern practice",
      "1:1 doubt clearing + structured plan",
    ],
    bg: "tile-cream",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="courses" className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
          <div className="stagger-children">
            <p className="kicker">Courses & fees</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-heading font-black text-foreground">
              <span className="chalk-underline">Choose your class level</span> — pay per subject or take the full bundle
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              1:1 private coaching • CBSE/ICSE/WBBSE • Kolkata offline + online.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Button asChild className="font-bold shadow-primary">
                <a href="#contact">Enquire & get plan</a>
              </Button>
              <Button variant="ghost" asChild className="font-bold">
                <a href="#process">See how we teach</a>
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[200px] lg:max-w-md lg:ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=60"
              alt="Books and study setup"
              className="w-full h-full object-cover min-h-[200px]"
            />
            <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-md">
              <b className="block text-foreground">Clear packages</b>
              <span className="block mt-0.5 text-sm text-muted-foreground font-semibold">Parents understand. Students focus.</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`${plan.bg} glass-ring rounded-2xl border shadow-md overflow-hidden relative transition-transform hover:-translate-y-1 ${
                plan.popular ? "border-primary/30 shadow-primary" : "border-border/50"
              }`}
            >
              {/* Glow effect */}
              <div 
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none blur-2xl"
                style={{ 
                  background: "radial-gradient(circle at 30% 30%, hsla(210, 70%, 60%, 0.35), transparent 62%)" 
                }}
              />
              
              <div className="relative">
                <div className="p-5 pb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold text-foreground bg-card/70 border border-border/50 backdrop-blur-sm">
                    {plan.name}
                  </span>
                  <div className="mt-3 text-3xl font-black text-foreground">
                    {plan.price} <small className="text-base text-muted-foreground font-bold">{plan.priceLabel}</small>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground font-semibold">{plan.otherPrices}</p>
                </div>

                <div className="px-5 pb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-3" />
                  
                  {plan.bundle && (
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="font-heading font-bold text-foreground">Bundle</h3>
                      <div className="ml-auto text-lg font-black text-foreground">
                        {plan.bundle.price} <span className="text-sm text-muted-foreground font-bold">{plan.bundle.label}</span>
                      </div>
                    </div>
                  )}
                  
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary">
                    {plan.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 pt-3 flex flex-wrap gap-2.5">
                  <Button asChild className="font-bold shadow-primary">
                    <a href="#contact">{plan.popular ? "Most Popular • Enquire" : "Enquire Now"}</a>
                  </Button>
                  <Button variant={plan.popular ? "ghost" : "outline"} asChild className="font-bold">
                    <a href={plan.popular ? "#process" : "#contact"}>
                      {plan.popular ? "See How It Works" : "Request Counselling"}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <div className="tile-cream glass-ring rounded-2xl border border-border/50 shadow-md p-5 mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <b className="block text-lg text-foreground">Want a custom plan?</b>
              <p className="mt-1 text-muted-foreground">
                Share class, board, and weak chapters — get a clear improvement roadmap.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Button asChild className="font-bold shadow-primary">
                <a href="#contact">Get a Custom Study Plan</a>
              </Button>
              <Button variant="ghost" asChild className="font-bold">
                <a href="#contact">WhatsApp Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
