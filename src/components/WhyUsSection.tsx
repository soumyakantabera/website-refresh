import { Button } from "@/components/ui/button";
import studyNotesImage from "@/assets/study-notes.jpg";
import onlineClassImage from "@/assets/online-class.jpg";
import { Check } from "lucide-react";

const studentBenefits = [
  { title: "Clear understanding", desc: "Not rote. We explain 'why' behind every concept." },
  { title: "Accuracy in numericals", desc: "Step-by-step solving trains precision." },
  { title: "Mixed practice", desc: "Same concept, different question types → real mastery." },
  { title: "Exam confidence", desc: "No surprise in tests. We train for all question patterns." },
];

const parentBenefits = [
  { title: "Regular updates", desc: "Test scores + key improvement areas" },
  { title: "Discipline & routine", desc: "Daily practice habit to reduce last-minute panic" },
  { title: "Personal attention", desc: "1:1 format ensures no topic is ignored" },
  { title: "Right guidance", desc: "Focus on scoring topics + concept clarity" },
];

export function WhyUsSection() {
  return (
    <section id="why" className="py-16 md:py-20">
      <div className="container">
        {/* Header Split */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-6">
          <div className="stagger-children">
            <p className="kicker">Why us</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-heading font-black text-foreground">
              <span className="chalk-underline">Focused 1:1 coaching</span> that builds real understanding
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Math isn't "hard" — it's just taught wrong most of the time. Our approach: concept clarity → mixed practice → weekly tests.
              Parents see progress. Students gain confidence.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Button asChild className="font-bold shadow-primary">
                <a href="#contact">Book Counselling</a>
              </Button>
              <Button variant="outline" asChild className="font-bold">
                <a href="#courses">See Fees</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[200px]">
              <img 
                src={studyNotesImage}
                alt="Student studying with personalized notes"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-sm">
                <b className="block text-sm text-foreground">Clear notes</b>
                <span className="block text-xs text-muted-foreground font-semibold">Concept + practice</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[200px]">
              <img 
                src={onlineClassImage}
                alt="Online tutoring session"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-sm">
                <b className="block text-sm text-foreground">Online too</b>
                <span className="block text-xs text-muted-foreground font-semibold">Same quality, any location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          {/* Student Benefits */}
          <div className="tile-cloud glass-ring p-5 md:p-6 rounded-2xl border border-border/50 shadow-sm">
            <p className="kicker text-xs">For students</p>
            <h3 className="mt-3 font-heading font-bold text-foreground text-lg">What changes after joining</h3>
            <div className="flex flex-col gap-3 mt-4">
              {studentBenefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-semibold">{benefit.title}</strong>
                    <span className="block text-sm text-muted-foreground mt-0.5">{benefit.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent Benefits */}
          <div className="tile-cream glass-ring p-5 md:p-6 rounded-2xl border border-border/50 shadow-sm">
            <p className="kicker text-xs">For parents</p>
            <h3 className="mt-3 font-heading font-bold text-foreground text-lg">You'll see progress clearly</h3>
            <div className="flex flex-col gap-3 mt-4">
              {parentBenefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <div>
                    <strong className="block text-foreground font-semibold">{benefit.title}</strong>
                    <span className="block text-sm text-muted-foreground mt-0.5">{benefit.desc}</span>
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
