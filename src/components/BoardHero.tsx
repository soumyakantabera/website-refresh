import { Button } from "@/components/ui/button";
import { GraduationCap, Phone, MessageCircle, CheckCircle, Star, Users, Award, BookOpen } from "lucide-react";

interface BoardHeroProps {
  boardName: string;
  boardFullName: string;
  classes: string;
  subjects: string[];
  description: string;
}

const COACHING = {
  phoneE164: "+916290871215",
  displayPhone: "+91 62908 71215",
};

export function BoardHero({ boardName, boardFullName, classes, subjects, description }: BoardHeroProps) {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(`Hi! I'm looking for ${boardName} math coaching. Please share available slots and fees.`);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const features = [
    { icon: Users, text: "1:1 Personalized Coaching" },
    { icon: BookOpen, text: `${boardName} Syllabus Expert` },
    { icon: Award, text: "Board Exam Specialist" },
    { icon: Star, text: "4.9★ Rating from Parents" },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">{boardName} Math Tuition</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <GraduationCap className="w-4 h-4" />
              {boardFullName}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 leading-tight">
              Best <span className="text-primary">{boardName} Math</span> Tutor in Kolkata
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="font-bold text-base">
                <a href="#contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Book Free Counselling
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={openWhatsApp} className="font-bold text-base">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                {boardName} Coaching Details
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Classes Covered</p>
                    <p className="text-sm text-muted-foreground">{classes}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Topics Covered</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {subjects.map((subject, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground">{subject}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-semibold text-foreground mb-2">What You Get:</p>
                <ul className="space-y-2">
                  {["Board-aligned syllabus coverage", "Previous year paper practice", "Chapter-wise tests & revision", "Personalized doubt clearing"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
