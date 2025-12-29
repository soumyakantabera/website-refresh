import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

interface LocationCoursesProps {
  areaName: string;
}

export function LocationCourses({ areaName }: LocationCoursesProps) {
  const courses = [
    {
      level: "Classes 7-8",
      title: "Foundation Mathematics",
      boards: ["CBSE", "ICSE", "WBBSE"],
      topics: ["Algebra Basics", "Geometry", "Arithmetic", "Number Systems"],
      description: "Build strong mathematical foundations with concept clarity and daily practice."
    },
    {
      level: "Classes 9-10",
      title: "Board Exam Preparation",
      boards: ["CBSE", "ICSE", "WBBSE"],
      topics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Coordinate Geometry"],
      description: "Intensive board exam coaching with previous year paper practice and mock tests."
    },
    {
      level: "Classes 11-12",
      title: "Advanced Mathematics",
      boards: ["CBSE", "ISC", "WBCHSE"],
      topics: ["Calculus", "Algebra", "Probability", "Vectors", "3D Geometry"],
      description: "Master advanced concepts with focus on board exams and competitive preparation."
    },
    {
      level: "BSc Mathematics",
      title: "University Level",
      boards: ["CU", "Other Universities"],
      topics: ["Real Analysis", "Linear Algebra", "Abstract Algebra", "Calculus"],
      description: "Expert coaching for BSc Pass and Honours students. Proof-writing and problem-solving focus."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground text-sm font-bold mb-4">
            <GraduationCap className="w-4 h-4" />
            Courses Available in {areaName}
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
            Math Coaching Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive math tuition for all levels. Students from {areaName} can choose home tuition or online classes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold">{course.level}</span>
                <div className="flex gap-1">
                  {course.boards.map((board, j) => (
                    <span key={j} className="px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground">{board}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic, j) => (
                  <span key={j} className="px-2 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground">{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild className="font-bold">
            <a href="#contact" className="flex items-center gap-2">
              Get Course Details & Fees
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
