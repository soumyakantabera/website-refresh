import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, MessageSquare } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "My daughter went from 45 marks to 92 in Class 10 boards. The personalized attention and weekly tests made all the difference. Highly recommend!",
    author: "Ananya Mukherjee",
    class: "Class 10 (CBSE)",
    location: "Kolkata",
    highlight: "45 → 92 marks",
    rating: 5,
  },
  {
    text: "Best math tuition in Kolkata. My son was struggling with Calculus in Class 12, now he tops his class. The formula sheets and daily practice really helped.",
    author: "Rahul Sharma",
    class: "Class 12 (CBSE)",
    location: "Kolkata",
    highlight: "Class topper",
    rating: 5,
  },
  {
    text: "Excellent coaching for BSc Mathematics. The proof-writing sessions and problem sets prepared me well for university exams. Very patient teacher.",
    author: "Priya Das",
    class: "BSc Mathematics",
    location: "Online",
    highlight: "University prep",
    rating: 5,
  },
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

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div 
      className="group relative p-6 md:p-8 rounded-3xl bg-card/80 border-2 border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
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
        <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6">"{testimonial.text}"</p>

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
  );
}

function MobileCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <AnimatedSection delay={200} className="md:hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="pl-2 md:pl-4 basis-[90%] sm:basis-[85%]">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-6">
          <CarouselPrevious className="static translate-y-0 bg-card border-border/50 hover:bg-primary hover:text-primary-foreground" />
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext className="static translate-y-0 bg-card border-border/50 hover:bg-primary hover:text-primary-foreground" />
        </div>
      </Carousel>
    </AnimatedSection>
  );
}

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
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-2">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider border border-primary/20">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            Real Feedback
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            The biggest win:{" "}
            <span className="text-primary">"Now I understand"</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Confidence comes from clarity + practice + tests.
          </p>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-12 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/80 border border-border/50 shadow-sm">
                <b className="block text-xl sm:text-3xl md:text-4xl font-black text-primary">{stat.value}</b>
                <span className="text-xs sm:text-sm text-muted-foreground font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Mobile Carousel */}
        <MobileCarousel />

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={200 + i * 100} animation="scale">
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-12 md:mt-16 text-center" delay={700}>
          <div className="inline-block p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 shadow-lg mx-2">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">Ready to start your journey?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Book a counselling call and get a clear study plan.</p>
            <Button size="default" asChild className="w-full sm:w-auto text-sm sm:text-base">
              <a href="#contact" className="flex items-center justify-center gap-2">
                Book Counselling
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
