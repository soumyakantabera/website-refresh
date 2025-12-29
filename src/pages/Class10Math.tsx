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

const Class10Math = () => {
  const otherClasses = CLASS_LINKS.filter(link => link.href !== "/class-10-math-tutor");
  
  return (
    <>
      <Helmet>
        <title>Class 10 Math Tutor in Kolkata | Board Exam Preparation | Sucheta's Math Class</title>
        <meta name="description" content="Expert Class 10 math tutor in Kolkata for CBSE, ICSE, WBBSE Madhyamik. Board exam preparation, previous year papers, mock tests. 1:1 coaching. Call +91-6290871215" />
        <meta name="keywords" content="class 10 math tutor kolkata, class 10 board exam preparation, cbse class 10 math, icse class 10 math, madhyamik math tutor, 10th class math coaching, board exam math tuition" />
        <link rel="canonical" href="https://mathclassbysucheta.com/class-10-math-tutor" />
        <meta property="og:title" content="Class 10 Math Tutor in Kolkata | Board Exam Expert | Sucheta's Math Class" />
        <meta property="og:description" content="Expert Class 10 board exam math coaching. CBSE, ICSE, Madhyamik. Previous year papers & mock tests. Book now!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/class-10-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="Class 10"
            classLevel="Board Exam Year"
            boards={["CBSE", "ICSE", "WBBSE/Madhyamik"]}
            topics={["Real Numbers", "Polynomials", "Quadratic Equations", "Trigonometry", "Circles", "Coordinate Geometry", "Statistics & Probability"]}
            description="Class 10 board exam is crucial. Expert 1:1 coaching with comprehensive board exam preparation, previous year papers, mock tests, and revision strategies for CBSE, ICSE, and Madhyamik."
          />
          <RelatedLinks title="Browse by Board" links={BOARD_LINKS} />
          <RelatedLinks title="Other Classes" links={otherClasses} />
          <LocationFeatures areaName="Class 10 students" />
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

export default Class10Math;
