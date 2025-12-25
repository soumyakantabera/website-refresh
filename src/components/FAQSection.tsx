import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    group: "lilac",
    items: [
      { q: "Is it really 1:1 coaching?", a: "Yes, sessions are 1:1 so pace and focus are exactly as per the student's level and board pattern." },
      { q: "How do you handle weak basics?", a: "We diagnose gaps, rebuild fundamentals, then move to board-style questions with daily practice targets." },
      { q: "Online coaching possible?", a: "Yes. Online sessions are available for Classes 7–12 and BSc Mathematics as per slot availability." },
      { q: "Do you provide notes and worksheets?", a: "Yes. Personalized notes, formula sheets, and curated practice sets are provided based on weak areas." },
    ]
  },
  {
    group: "cream",
    items: [
      { q: "What about tests and progress tracking?", a: "Weekly tests are conducted, and feedback is shared to fix mistakes and close gaps consistently." },
      { q: "Which boards do you cover?", a: "CBSE, ICSE, and WBBSE — with board-aligned practice and exam-oriented revision." },
      { q: "Can you help for final exam revision?", a: "Yes. A focused revision plan with formula sheets, mixed practice, and timed tests is available." },
      { q: "How do we start?", a: "Click \"Book Counselling\", share class/board/subjects, and we'll confirm the best plan and slot." },
    ]
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
          <div className="stagger-children">
            <p className="kicker">FAQ</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-heading font-black text-foreground">
              <span className="chalk-underline">Common questions</span> from parents & students
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If your child is weak in basics or feels "maths is scary", our system is designed to fix it.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[200px] lg:max-w-md lg:ml-auto">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=60"
              alt="Question and answer"
              className="w-full h-full object-cover min-h-[200px]"
            />
            <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-md">
              <b className="block text-foreground">Doubts welcome</b>
              <span className="block mt-0.5 text-sm text-muted-foreground font-semibold">No hesitation, ask freely</span>
            </div>
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="grid lg:grid-cols-2 gap-5">
          {faqs.map((group, gi) => (
            <div key={gi} className={`tile-${group.group} glass-ring p-4 md:p-5 rounded-2xl border border-border/50 shadow-sm`}>
              <Accordion type="single" collapsible className="w-full">
                {group.items.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`${gi}-${i}`}
                    className="bg-card/70 rounded-xl border border-border/50 mb-2.5 last:mb-0 shadow-xs overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3.5 text-left font-bold text-foreground hover:no-underline hover:bg-card/50">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-0 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
