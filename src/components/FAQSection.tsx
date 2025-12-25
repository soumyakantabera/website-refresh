import { HelpCircle, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const faqs = [
  { 
    q: "Is it really 1:1 coaching?", 
    a: "Yes, sessions are 1:1 so pace and focus are exactly as per the student's level and board pattern. This ensures personalized attention and faster progress." 
  },
  { 
    q: "How do you handle weak basics?", 
    a: "We diagnose gaps, rebuild fundamentals, then move to board-style questions with daily practice targets. No rushing ahead until basics are strong." 
  },
  { 
    q: "Is online coaching possible?", 
    a: "Yes. Online sessions are available for Classes 7–12 and BSc Mathematics as per slot availability. Same quality, just virtual!" 
  },
  { 
    q: "Do you provide notes and worksheets?", 
    a: "Yes. Personalized notes, formula sheets, and curated practice sets are provided based on weak areas identified during sessions." 
  },
  { 
    q: "What about tests and progress tracking?", 
    a: "Weekly tests are conducted, and feedback is shared to fix mistakes and close gaps consistently. Parents get regular updates too." 
  },
  { 
    q: "Which boards do you cover?", 
    a: "CBSE, ICSE, and WBBSE — with board-aligned practice and exam-oriented revision for each." 
  },
  { 
    q: "Can you help with final exam revision?", 
    a: "Yes. A focused revision plan with formula sheets, mixed practice, and timed tests is available for exam preparation." 
  },
  { 
    q: "How do we start?", 
    a: "Click 'Book Counselling', share class/board/subjects, and we'll confirm the best plan and slot. It's that simple!" 
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/20">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            Got questions?{" "}
            <span className="text-primary">We've got answers</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Everything parents and students commonly ask before joining. If you don't find your answer, just WhatsApp us!
          </p>
        </AnimatedSection>

        {/* FAQ Grid */}
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`faq-${i}`}
                  className="group border-2 border-border/50 rounded-2xl bg-card/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-bold text-foreground hover:no-underline hover:text-primary transition-colors [&>svg]:hidden">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                        <span className="font-black text-primary group-data-[state=open]:text-primary-foreground">{i + 1}</span>
                      </div>
                      <span className="flex-1 text-lg">{faq.q}</span>
                      <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                        <Plus className="w-4 h-4 group-data-[state=open]:hidden" />
                        <Minus className="w-4 h-4 hidden group-data-[state=open]:block text-primary" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <div className="pl-14 text-muted-foreground text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* Still have questions? */}
        <AnimatedSection className="mt-12 text-center" delay={300}>
          <div className="inline-block p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50 shadow-lg">
            <h3 className="text-xl font-heading font-bold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">We're happy to help. WhatsApp us for a quick response.</p>
            <a 
              href="https://wa.me/919874088765?text=Hi!%20I%20have%20a%20question%20about%20the%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-bold hover:opacity-90 transition-opacity shadow-md"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}