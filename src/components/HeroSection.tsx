import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-teacher.jpg";

const heroPoints = [
  { title: "Personalized Notes", desc: "Made for your child's gaps + board pattern", bg: "tile-mist" },
  { title: "Daily Practice + Q&A", desc: "Consistency = marks (with accountability)", bg: "tile-ice" },
  { title: "Weekly Tests", desc: "Track progress and fix weak areas early", bg: "tile-lilac" },
  { title: "Formula Sheets", desc: "Quick revision before school tests/exams", bg: "tile-sand" },
];

const stats = [
  { value: "1:1", label: "Private coaching (focused attention)" },
  { value: "Boards", label: "CBSE • ICSE • WBBSE aligned" },
  { value: "Hybrid", label: "Kolkata + online batches" },
  { value: "Goal", label: "Concept clarity + score improvement" },
];

export function HeroSection() {
  return (
    <section id="top" className="py-14 md:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-6 items-stretch">
          {/* Main Hero Card */}
          <div className="slide-left bg-card/90 rounded-2xl border border-border shadow-lg overflow-hidden relative">
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(900px 420px at 10% 0%, hsla(210, 70%, 60%, 0.16), transparent 60%),
                  radial-gradient(900px 420px at 92% 10%, hsla(210, 60%, 42%, 0.12), transparent 56%)
                `
              }}
            />
            <div className="relative p-6 md:p-7 stagger-children">
              {/* Pills */}
              <div className="flex flex-wrap gap-2.5 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground bg-gradient-to-r from-primary/10 to-primary/5 border border-border backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_0_4px_hsla(175,45%,42%,0.15)]" />
                  Kolkata (Offline) + Online • 1:1 Private Coaching
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold text-muted-foreground bg-gradient-to-r from-primary/10 to-primary/5 border border-border backdrop-blur-sm">
                  CBSE • ICSE • WBBSE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-heading font-black text-foreground leading-tight">
                <span className="chalk-underline">Strong Basics</span> → Better Marks → Confident Exams
              </h1>

              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Personalized coaching for Classes <b className="text-foreground">7–12</b> and <b className="text-foreground">BSc Mathematics</b>.
                We don't just "teach chapters" — we build clarity, daily practice habits, and exam-ready confidence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Button size="lg" asChild className="font-bold shadow-primary">
                  <a href="#contact">📞 Book a FREE Counselling Call</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="font-bold">
                  <a href="#courses">💰 See Course Fees</a>
                </Button>
                <Button size="lg" variant="ghost" asChild className="font-bold">
                  <a href="#process">✅ How the Plan Works</a>
                </Button>
              </div>

              {/* Hero Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {heroPoints.map((point, i) => (
                  <div key={i} className={`${point.bg} glass-ring p-4 rounded-2xl border border-border/50 shadow-sm`}>
                    <strong className="block text-foreground font-bold">{point.title}</strong>
                    <span className="block mt-1 text-sm text-muted-foreground font-semibold">{point.desc}</span>
                  </div>
                ))}
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {stats.map((stat, i) => (
                  <div key={i} className="tile-cloud glass-ring p-4 rounded-2xl border border-border/50 shadow-sm">
                    <b className="block text-xl font-black text-foreground">{stat.value}</b>
                    <span className="block mt-1 text-sm text-muted-foreground font-semibold">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-5" />
              
              <p className="text-muted-foreground">
                <b className="text-foreground">Limited slots</b> to keep 1:1 quality high. Book a counselling call to check availability.
              </p>
            </div>
          </div>

          {/* Side Column */}
          <div className="slide-right flex flex-col gap-4">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[220px]">
              <img 
                src={heroImage}
                alt="Teacher explaining mathematical concepts"
                className="w-full h-full object-cover min-h-[220px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-md">
                <b className="block text-foreground">Modern 1:1 Coaching</b>
                <span className="block mt-0.5 text-sm text-muted-foreground font-semibold">Clear plan • Daily practice • Weekly tracking</span>
              </div>
            </div>

            {/* Badges */}
            <div className="tile-ice glass-ring p-4 rounded-2xl border border-border/50 shadow-sm flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-lg shadow-primary flex-shrink-0">
                🎓
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Teacher + Strong Academic Background</h3>
                <p className="mt-1 text-sm text-muted-foreground font-medium">
                  BSc Mathematics (Hons.) from Sa Jaipuria College, Kolkata (CU) — First Class • MSc Pure Mathematics from Lady Brabourne College • Currently a high school Mathematics teacher
                </p>
              </div>
            </div>

            <div className="tile-mist glass-ring p-4 rounded-2xl border border-border/50 shadow-sm flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-lg shadow-primary flex-shrink-0">
                🧠
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">"Concept First" Method</h3>
                <p className="mt-1 text-sm text-muted-foreground font-medium">
                  Step-by-step explanation, then mixed practice to handle tricky board questions confidently.
                </p>
              </div>
            </div>

            <div className="tile-lilac glass-ring p-4 rounded-2xl border border-border/50 shadow-sm flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-lg shadow-primary flex-shrink-0">
                📈
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground">Parents Love This</h3>
                <p className="mt-1 text-sm text-muted-foreground font-medium">
                  Clear progress updates + tests so you always know what improved and what needs work.
                </p>
              </div>
            </div>

            {/* Promise Card */}
            <div className="tile-sand glass-ring p-5 rounded-2xl border border-border/50 shadow-md">
              <p className="kicker text-xs">Simple promise</p>
              <h3 className="mt-2 font-heading font-bold text-foreground text-lg">Not magic. Just the right system.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                With regular classes + daily practice + weekly tests, students build accuracy, speed, and confidence.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-4">
                <Button size="sm" asChild className="font-bold shadow-primary">
                  <a href="#contact">Start Counselling</a>
                </Button>
                <Button size="sm" variant="ghost" asChild className="font-bold">
                  <a href="#faq">Common Questions</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
