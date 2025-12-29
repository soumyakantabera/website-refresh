import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { BoardHero } from "@/components/BoardHero";
import { LocationFeatures } from "@/components/LocationFeatures";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const BoardWBSU = () => {
  return (
    <>
      <Helmet>
        <title>WBSU BSc Maths Tutor | West Bengal State University Math Coaching | Sucheta's Math Class</title>
        <meta name="description" content="Expert West Bengal State University BSc Mathematics tutor in Kolkata. Honours & Pass course coaching, WBSU syllabus, exam preparation. 1:1 tuition. Call +91-6290871215" />
        <meta name="keywords" content="wbsu bsc math tutor, west bengal state university math coaching, wbsu math honours tuition, wbsu math pass, bsc math tutor barasat, wbsu semester exam preparation, wbsu syllabus math" />
        <link rel="canonical" href="https://mathclassbysucheta.com/wbsu-bsc-math" />
        <meta property="og:title" content="WBSU BSc Maths Tutor | Sucheta's Math Class" />
        <meta property="og:description" content="Expert WBSU BSc Mathematics coaching in Kolkata. Honours & Pass. All semesters. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/wbsu-bsc-math" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "WBSU BSc Mathematics Coaching",
            "description": "Expert coaching for West Bengal State University BSc Mathematics Honours and Pass students covering all semesters",
            "provider": {
              "@type": "Organization",
              "name": "Sucheta's Math Class",
              "url": "https://mathclassbysucheta.com/"
            },
            "educationalLevel": "Undergraduate",
            "about": ["BSc Mathematics", "WBSU", "Real Analysis", "Linear Algebra", "Abstract Algebra"],
            "availableLanguage": ["English", "Bengali"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <BoardHero 
            boardName="WBSU BSc Math"
            boardFullName="West Bengal State University"
            classes="BSc Mathematics (Honours & Pass)"
            subjects={["Real Analysis", "Linear Algebra", "Abstract Algebra", "Calculus", "Differential Equations", "Complex Analysis", "Numerical Methods"]}
            description="Looking for West Bengal State University BSc Mathematics coaching? Get expert 1:1 tuition for Honours and Pass courses, covering all semesters with WBSU syllabus-aligned preparation."
          />
          <LocationFeatures areaName="WBSU BSc Math students" />
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

export default BoardWBSU;
