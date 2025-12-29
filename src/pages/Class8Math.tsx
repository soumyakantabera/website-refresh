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

const Class8Math = () => {
  const otherClasses = CLASS_LINKS.filter(link => link.href !== "/class-8-math-tutor");
  
  return (
    <>
      <Helmet>
        <title>Class 8 Math Tutor in Kolkata | CBSE ICSE WBBSE | Sucheta's Math Class</title>
        <meta name="description" content="Expert Class 8 math tutor in Kolkata for CBSE, ICSE, WBBSE. Pre-board foundation, algebra, geometry. 1:1 coaching. Call +91-6290871215" />
        <meta name="keywords" content="class 8 math tutor kolkata, class 8 maths tuition, cbse class 8 math, icse class 8 math, wbbse class 8 math, 8th class math coaching, pre-board math tutor" />
        <link rel="canonical" href="https://mathclassbysucheta.com/class-8-math-tutor" />
        <meta property="og:title" content="Class 8 Math Tutor in Kolkata | Sucheta's Math Class" />
        <meta property="og:description" content="Expert Class 8 math coaching for CBSE, ICSE, WBBSE. Pre-board foundation. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/class-8-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="Class 8"
            classLevel="Pre-Board Foundation"
            boards={["CBSE", "ICSE", "WBBSE"]}
            topics={["Algebraic Expressions", "Linear Equations", "Quadrilaterals", "Mensuration", "Exponents", "Direct & Inverse Proportion"]}
            description="Prepare for board exams with strong Class 8 foundation. Expert 1:1 coaching covering algebraic expressions, linear equations, and geometry for CBSE, ICSE, and WBBSE."
          />
          <RelatedLinks title="Browse by Board" links={BOARD_LINKS} />
          <RelatedLinks title="Other Classes" links={otherClasses} />
          <LocationFeatures areaName="Class 8 students" />
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

export default Class8Math;
