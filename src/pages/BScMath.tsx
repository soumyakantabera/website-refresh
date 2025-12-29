import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { ClassHero } from "@/components/ClassHero";
import { LocationFeatures } from "@/components/LocationFeatures";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const BScMath = () => {
  return (
    <>
      <Helmet>
        <title>BSc Maths Tutor in Kolkata | Honours & Pass | Sucheta's Math Class</title>
        <meta name="description" content="Expert BSc Mathematics tutor in Kolkata for Honours & Pass students. CU, WBSU affiliated colleges. Real Analysis, Linear Algebra, Abstract Algebra. 1:1 coaching. Call +91-6290871215" />
        <meta name="keywords" content="bsc math tutor kolkata, bsc honours math coaching, bsc pass math tuition, real analysis tutor, linear algebra tutor kolkata, abstract algebra coaching, university math tutor" />
        <link rel="canonical" href="https://mathclassbysucheta.com/bsc-math-tutor" />
        <meta property="og:title" content="BSc Maths Tutor in Kolkata | Honours & Pass | Sucheta's Math Class" />
        <meta property="og:description" content="Expert BSc Mathematics coaching. Honours & Pass. Real Analysis, Linear Algebra & more. Book now!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/bsc-math-tutor" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <ClassHero 
            className="BSc Mathematics"
            classLevel="Undergraduate"
            boards={["Calcutta University", "WBSU", "Other Universities"]}
            topics={["Real Analysis", "Linear Algebra", "Abstract Algebra", "Calculus", "Differential Equations", "Complex Analysis", "Numerical Methods"]}
            description="University-level mathematics requires expert guidance. 1:1 coaching for BSc Honours and Pass students covering Real Analysis, Linear Algebra, and all core subjects for CU, WBSU, and affiliated colleges."
          />
          <LocationFeatures areaName="BSc Math students" />
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

export default BScMath;
