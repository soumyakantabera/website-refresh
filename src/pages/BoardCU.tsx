import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { BoardHero } from "@/components/BoardHero";
import { RelatedLinks, CLASS_LINKS, BOARD_LINKS } from "@/components/RelatedLinks";
import { LocationFeatures } from "@/components/LocationFeatures";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const BoardCU = () => {
  const bscClasses = CLASS_LINKS.filter(link => link.href === "/bsc-math-tutor");
  const otherBoards = BOARD_LINKS.filter(link => link.href !== "/calcutta-university-bsc-math-tutor");

  return (
    <>
      <Helmet>
        <title>Calcutta University BSc Maths Tutor | CU Hons & Pass Coaching | Sucheta's Math Class</title>
        <meta name="description" content="Expert Calcutta University BSc Mathematics tutor in Kolkata. Honours & Pass course coaching, CU syllabus, exam preparation. 1:1 tuition for all semesters. Call +91-6290871215" />
        <meta name="keywords" content="calcutta university bsc math tutor, cu math honours coaching, cu math pass tuition, calcutta university math syllabus, bsc math tutor kolkata, cu semester exam preparation, real analysis tutor kolkata" />
        <link rel="canonical" href="https://mathclassbysucheta.com/calcutta-university-bsc-math-tutor" />
        <meta property="og:title" content="Calcutta University BSc Maths Tutor | Sucheta's Math Class" />
        <meta property="og:description" content="Expert CU BSc Mathematics coaching in Kolkata. Honours & Pass. All semesters. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/calcutta-university-bsc-math-tutor" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Calcutta University BSc Mathematics Coaching",
            "description": "Expert coaching for Calcutta University BSc Mathematics Honours and Pass students covering all semesters",
            "provider": {
              "@type": "Organization",
              "name": "Sucheta's Math Class",
              "url": "https://mathclassbysucheta.com/"
            },
            "educationalLevel": "Undergraduate",
            "about": ["BSc Mathematics", "Calcutta University", "Real Analysis", "Linear Algebra", "Abstract Algebra"],
            "availableLanguage": ["English", "Bengali"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <BoardHero 
            boardName="CU BSc Math"
            boardFullName="Calcutta University"
            classes="BSc Mathematics (Honours & Pass)"
            subjects={["Real Analysis", "Linear Algebra", "Abstract Algebra", "Calculus", "Differential Equations", "Complex Analysis", "Numerical Methods"]}
            description="Looking for Calcutta University BSc Mathematics coaching? Get expert 1:1 tuition for Honours and Pass courses, covering all semesters with CU syllabus-aligned preparation."
          />
          <RelatedLinks title="BSc Math Coaching" links={bscClasses} />
          <RelatedLinks title="Other Boards & Universities" links={otherBoards} />
          <LocationFeatures areaName="CU BSc Math students" />
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

export default BoardCU;
