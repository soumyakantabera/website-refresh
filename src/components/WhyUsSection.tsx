import { Button } from "@/components/ui/button";
import studyNotesImage from "@/assets/study-notes.jpg";
import onlineClassImage from "@/assets/online-class.jpg";
import { CheckCircle2, Target, Brain, TrendingUp, Users, BookOpen, Clock, BarChart3 } from "lucide-react";

const studentBenefits = [
  { icon: Brain, title: "Clear understanding", desc: "Not rote. We explain 'why' behind every concept." },
  { icon: Target, title: "Accuracy in numericals", desc: "Step-by-step solving trains precision." },
  { icon: BookOpen, title: "Mixed practice", desc: "Same concept, different question types → real mastery." },
  { icon: TrendingUp, title: "Exam confidence", desc: "No surprise in tests. We train for all question patterns." },
];

const parentBenefits = [
  { icon: BarChart3, title: "Regular updates", desc: "Test scores + key improvement areas" },
  { icon: Clock, title: "Discipline & routine", desc: "Daily practice habit to reduce last-minute panic" },
  { icon: Users, title: "Personal attention", desc: "1:1 format ensures no topic is ignored" },
  { icon: Target, title: "Right guidance", desc: "Focus on scoring topics + concept clarity" },
];

export function WhyUsSection() {
  return (
    <section id="why" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-children">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/20">
            <CheckCircle2 className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            <span className="text-primary">Focused 1:1 coaching</span> that builds{" "}
            <span className="relative inline-block">
              real understanding
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8c30-6 60-6 90 0s60 6 90 0" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Math isn't "hard" — it's just taught wrong most of the time. Our approach: concept clarity → mixed practice → weekly tests.
            Parents see progress. Students gain confidence.
          </p>
        </div>

        {/* Visual showcase */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="group relative rounded-3xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={studyNotesImage}
              alt="Student studying with personalized notes"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase mb-2">
                Personalized
              </span>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground">Clear, Custom Notes</h3>
              <p className="mt-1 text-primary-foreground/80 text-sm">Tailored to each student's weak areas</p>
            </div>
          </div>
          
          <div className="group relative rounded-3xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={onlineClassImage}
              alt="Online tutoring session"
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase mb-2">
                Flexible
              </span>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground">Online + Offline</h3>
              <p className="mt-1 text-primary-foreground/80 text-sm">Same quality coaching, anywhere</p>
            </div>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Student Benefits */}
          <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-card border border-border/50 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                For Students
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">What changes after joining</h3>
              <div className="space-y-4">
                {studentBenefits.map((benefit, i) => (
                  <div 
                    key={i} 
                    className="flex gap-4 items-start p-4 rounded-2xl bg-card/80 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground shadow-md flex-shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="block text-foreground font-bold text-lg">{benefit.title}</strong>
                      <span className="block text-muted-foreground mt-0.5">{benefit.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Parent Benefits */}
          <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-secondary/10 via-card to-card border border-border/50 shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider border border-secondary/20 mb-4">
                <Users className="w-3.5 h-3.5" />
                For Parents
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">You'll see progress clearly</h3>
              <div className="space-y-4">
                {parentBenefits.map((benefit, i) => (
                  <div 
                    key={i} 
                    className="flex gap-4 items-start p-4 rounded-2xl bg-card/80 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-secondary-foreground shadow-md flex-shrink-0">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <strong className="block text-foreground font-bold text-lg">{benefit.title}</strong>
                      <span className="block text-muted-foreground mt-0.5">{benefit.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="font-bold shadow-primary text-base">
              <a href="#contact">📞 Book Counselling</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-bold text-base">
              <a href="#courses">See Fees</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
