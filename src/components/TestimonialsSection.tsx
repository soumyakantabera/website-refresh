import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "My son was scared of maths. After weekly tests and daily practice, his accuracy improved and he feels confident now.",
    author: "Parent, Class 9 (ICSE)",
    location: "Kolkata",
    bg: "tile-cream",
  },
  {
    text: "Best part is personalized notes. I don't waste time searching. Doubts get cleared fast and I score better in school tests.",
    author: "Student, Class 11 (CBSE)",
    location: "Online",
    bg: "tile-ice",
  },
  {
    text: "The test series and feedback showed exactly where my gaps were. The plan was clear and my marks improved steadily.",
    author: "Student, Class 10 (WBBSE)",
    location: "Kolkata",
    bg: "tile-mist",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="w-4 h-4 bg-gradient-to-br from-primary to-primary/80 shadow-sm"
          style={{
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
          }}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
          <div className="stagger-children">
            <p className="kicker">Parent & student feedback</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-heading font-black text-foreground">
              <span className="chalk-underline">The biggest win</span>: "Now I understand and can solve on my own."
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Confidence comes from clarity + practice + tests.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[200px] lg:max-w-md lg:ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=60"
              alt="Students learning together"
              className="w-full h-full object-cover min-h-[200px]"
            />
            <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-md">
              <b className="block text-foreground">Confidence = marks</b>
              <span className="block mt-0.5 text-sm text-muted-foreground font-semibold">Practice + tests = results</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <div key={i} className={`${testimonial.bg} glass-ring p-5 rounded-2xl border border-border/50 shadow-sm`}>
              <StarRating />
              <p className="text-muted-foreground font-medium leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/60 to-accent border border-border/50 shadow-sm" />
                <div>
                  <b className="block text-foreground text-sm">{testimonial.author}</b>
                  <span className="block text-xs text-muted-foreground font-semibold">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="tile-cloud glass-ring rounded-2xl border border-border/50 shadow-md p-5 mt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <b className="block text-lg text-foreground">Ready to start?</b>
              <p className="mt-1 text-muted-foreground">Book a counselling call and get a clear study plan for the next 30 days.</p>
            </div>
            <Button asChild className="font-bold shadow-primary">
              <a href="#contact">Book Counselling</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
