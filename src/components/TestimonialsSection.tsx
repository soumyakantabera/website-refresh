import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    text: "My son was scared of maths. After weekly tests and daily practice, his accuracy improved and he feels confident now.",
    author: "Parent",
    class: "Class 9 (ICSE)",
    location: "Kolkata",
    highlight: "Confidence boost",
    rating: 5,
  },
  {
    text: "Best part is personalized notes. I don't waste time searching. Doubts get cleared fast and I score better in school tests.",
    author: "Student",
    class: "Class 11 (CBSE)",
    location: "Online",
    highlight: "Better scores",
    rating: 5,
  },
  {
    text: "The test series and feedback showed exactly where my gaps were. The plan was clear and my marks improved steadily.",
    author: "Student",
    class: "Class 10 (WBBSE)",
    location: "Kolkata",
    highlight: "Clear progress",
    rating: 5,
  },
];

const stats = [
  { value: "1:1", label: "Private coaching" },
  { value: "100%", label: "Personal attention" },
  { value: "Weekly", label: "Progress tests" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/20">
            <MessageSquare className="w-4 h-4" />
            Real Feedback
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            The biggest win:{" "}
            <span className="text-primary">"Now I understand"</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Confidence comes from clarity + practice + tests. Here's what parents and students say.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl bg-card/80 border border-border/50 shadow-sm">
              <b className="block text-3xl md:text-4xl font-black text-primary">{stat.value}</b>
              <span className="text-sm text-muted-foreground font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="group relative p-6 md:p-8 rounded-3xl bg-card/80 border-2 border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-md mb-4">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Highlight badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                  {testimonial.highlight}
                </span>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed mb-6">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-lg font-bold text-foreground">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <b className="block text-foreground font-bold">{testimonial.author}</b>
                    <span className="block text-sm text-muted-foreground">{testimonial.class} • {testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Ready to start your journey?</h3>
            <p className="text-muted-foreground mb-6">Book a counselling call and get a clear study plan for the next 30 days.</p>
            <Button size="lg" asChild className="font-bold shadow-primary text-base">
              <a href="#contact" className="flex items-center gap-2">
                Book Counselling
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
