import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { ClassHero } from "@/components/ClassHero";
import { RelatedLinks, BOARD_LINKS, CLASS_LINKS } from "@/components/RelatedLinks";
import { LocationFeatures } from "@/components/LocationFeatures";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const Class11Math = () => {
  const otherClasses = CLASS_LINKS.filter(link => link.href !== "/class-11-math-tutor");
  
  return (
    <>
      <Helmet>
        <title>Class 11 Math Tutor in Kolkata | CBSE ISC WBCHSE | Math Class by Sucheta</title>
        <meta name="description" content="Expert Class 11 math tutor in Kolkata for CBSE, ISC, WBCHSE. Calculus, trigonometry, permutation combination. JEE foundation. 1:1 coaching. Call +91-6290871215" />
        <meta name="keywords" content="class 11 math tutor kolkata, class 11 maths tuition, cbse class 11 math, isc class 11 math, wbchse class 11 math, calculus tutor kolkata, jee math foundation" />
        <link rel="canonical" href="https://mathclassbysucheta.com/class-11-math-tutor" />
        <meta property="og:title" content="Class 11 Math Tutor in Kolkata | Math Class by Sucheta" />
        <meta property="og:description" content="Expert Class 11 math coaching. CBSE, ISC, WBCHSE. Calculus, trigonometry & more. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/class-11-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="Class 11"
            classLevel="Higher Secondary"
            boards={["CBSE", "ISC", "WBCHSE"]}
            topics={["Sets & Functions", "Trigonometry", "Algebra", "Coordinate Geometry", "Calculus Basics", "Statistics", "Permutation & Combination"]}
            description="Class 11 introduces advanced mathematics concepts. Expert 1:1 coaching covering trigonometry, calculus basics, and more for CBSE, ISC, and WBCHSE with optional JEE foundation."
          />
          <RelatedLinks title="Browse by Board" links={BOARD_LINKS} />
          <RelatedLinks title="Other Classes" links={otherClasses} />
          <LocationFeatures areaName="Class 11 students" />
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

export default Class11Math;
