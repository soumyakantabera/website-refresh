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

const Class7Math = () => {
  const otherClasses = CLASS_LINKS.filter(link => link.href !== "/class-7-math-tutor");
  
  return (
    <>
      <Helmet>
        <title>Class 7 Math Tutor in Kolkata | CBSE ICSE WBBSE | Sucheta's Math Class</title>
        <meta name="description" content="Expert Class 7 math tutor in Kolkata for CBSE, ICSE, WBBSE. Build strong foundation with 1:1 coaching. Algebra, geometry basics. Call +91-6290871215" />
        <meta name="keywords" content="class 7 math tutor kolkata, class 7 maths tuition, cbse class 7 math, icse class 7 math, wbbse class 7 math, 7th class math coaching, foundation math tutor" />
        <link rel="canonical" href="https://mathclassbysucheta.com/class-7-math-tutor" />
        <meta property="og:title" content="Class 7 Math Tutor in Kolkata | Sucheta's Math Class" />
        <meta property="og:description" content="Expert Class 7 math coaching for CBSE, ICSE, WBBSE. Strong foundation building. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/class-7-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="Class 7"
            classLevel="Foundation"
            boards={["CBSE", "ICSE", "WBBSE"]}
            topics={["Integers", "Fractions", "Algebra Basics", "Geometry", "Ratio & Proportion", "Data Handling"]}
            description="Build a strong mathematical foundation in Class 7. Expert 1:1 coaching covering integers, fractions, basic algebra, and geometry for CBSE, ICSE, and WBBSE students."
          />
          <RelatedLinks title="Browse by Board" links={BOARD_LINKS} />
          <RelatedLinks title="Other Classes" links={otherClasses} />
          <LocationFeatures areaName="Class 7 students" />
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

export default Class7Math;
