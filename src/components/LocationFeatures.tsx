import { CheckCircle, Clock, Target, BookOpen, FileText, TrendingUp } from "lucide-react";

interface LocationFeaturesProps {
  areaName: string;
}

export function LocationFeatures({ areaName }: LocationFeaturesProps) {
  const features = [
    {
      icon: Target,
      title: "1:1 Personalized Attention",
      description: `No batch classes. Every student from ${areaName} gets dedicated individual coaching tailored to their learning pace and board requirements.`
    },
    {
      icon: BookOpen,
      title: "All Major Boards Covered",
      description: "Expert coaching for CBSE, ICSE, and WBBSE curriculum. We understand board-specific question patterns and marking schemes."
    },
    {
      icon: FileText,
      title: "Custom Notes & Worksheets",
      description: "Handwritten notes, formula sheets, and practice sets designed specifically based on each student's weak areas."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: `Convenient evening and weekend slots for students from ${areaName}. Both home tuition and online options available.`
    },
    {
      icon: TrendingUp,
      title: "Weekly Progress Tests",
      description: "Regular assessments to track improvement. Parents receive detailed feedback and progress reports."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Students have improved from failing grades to 90+ marks. See our testimonials from parents across Kolkata."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
            Why Choose Us for Math Tuition in {areaName}?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parents from {areaName} and nearby areas trust Sucheta's Math Class for quality coaching and real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
