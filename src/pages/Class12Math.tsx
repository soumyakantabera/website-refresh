import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { ClassHero } from "@/components/ClassHero";
import { LocationFeatures } from "@/components/LocationFeatures";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const Class12Math = () => {
  return (
    <>
      <Helmet>
        <title>Class 12 Math Tutor in Kolkata | Board Exam & JEE | Sucheta's Math Class</title>
        <meta name="description" content="Expert Class 12 math tutor in Kolkata for CBSE, ISC, WBCHSE. Calculus, 3D geometry, probability. Board exam & JEE preparation. 1:1 coaching. Call +91-6290871215" />
        <meta name="keywords" content="class 12 math tutor kolkata, class 12 board exam math, cbse class 12 math, isc class 12 math, wbchse class 12 math, calculus tutor kolkata, jee math coaching" />
        <link rel="canonical" href="https://mathclassbysucheta.com/class-12-math-tutor" />
        <meta property="og:title" content="Class 12 Math Tutor in Kolkata | Board & JEE Expert | Sucheta's Math Class" />
        <meta property="og:description" content="Expert Class 12 math coaching. Board exam & JEE preparation. Calculus, 3D geometry. Book now!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/class-12-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="Class 12"
            classLevel="Board Exam Year"
            boards={["CBSE", "ISC", "WBCHSE"]}
            topics={["Relations & Functions", "Calculus", "Vectors", "3D Geometry", "Linear Programming", "Probability", "Differential Equations"]}
            description="Class 12 board exam determines your future. Expert 1:1 coaching with comprehensive preparation for CBSE, ISC, WBCHSE boards including calculus, 3D geometry, and probability."
          />
          <LocationFeatures areaName="Class 12 students" />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Class12Math;
