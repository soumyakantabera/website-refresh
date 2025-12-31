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

const Class9Math = () => {
  const otherClasses = CLASS_LINKS.filter(link => link.href !== "/class-9-math-tutor");
  
  return (
    <>
      <Helmet>
        <title>Class 9 Math Tutor in Kolkata | CBSE ICSE WBBSE | Math Class by Sucheta</title>
        <meta name="description" content="Expert Class 9 math tutor in Kolkata for CBSE, ICSE, WBBSE. Board exam preparation starts here. Polynomials, geometry, coordinate geometry. Call +91-6290871215" />
        <meta name="keywords" content="class 9 math tutor kolkata, class 9 maths tuition, cbse class 9 math, icse class 9 math, wbbse class 9 math, 9th class math coaching, board preparation tutor" />
        <link rel="canonical" href="https://mathclassbysucheta.com/class-9-math-tutor" />
        <meta property="og:title" content="Class 9 Math Tutor in Kolkata | Math Class by Sucheta" />
        <meta property="og:description" content="Expert Class 9 math coaching for CBSE, ICSE, WBBSE. Board exam foundation. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/class-9-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="Class 9"
            classLevel="Board Foundation"
            boards={["CBSE", "ICSE", "WBBSE"]}
            topics={["Polynomials", "Coordinate Geometry", "Linear Equations", "Triangles", "Circles", "Surface Area & Volume", "Statistics"]}
            description="Class 9 is where board exam preparation begins. Expert 1:1 coaching covering polynomials, coordinate geometry, and advanced concepts for CBSE, ICSE, and WBBSE."
          />
          <RelatedLinks title="Browse by Board" links={BOARD_LINKS} />
          <RelatedLinks title="Other Classes" links={otherClasses} />
          <LocationFeatures areaName="Class 9 students" />
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

export default Class9Math;
