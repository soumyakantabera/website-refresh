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

const BoardCBSE = () => {
  const cbseClasses = CLASS_LINKS.filter(link => !link.href.includes("bsc"));
  const otherBoards = BOARD_LINKS.filter(link => link.href !== "/cbse-math-tutor");

  return (
    <>
      <Helmet>
        <title>Best CBSE Math Tutor in Kolkata | Class 9-12 Math Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Expert CBSE math tutor in Kolkata for Classes 7-12. NCERT-aligned coaching, board exam preparation, sample papers practice. 1:1 private tuition. Call +91-6290871215" />
        <meta name="keywords" content="cbse math tutor kolkata, cbse class 10 math coaching, cbse class 12 math tuition, ncert math tutor kolkata, cbse board exam preparation, cbse sample papers math, cbse syllabus math coaching" />
        <link rel="canonical" href="https://mathclassbysucheta.com/cbse-math-tutor" />
        <meta property="og:title" content="Best CBSE Math Tutor in Kolkata | Math Class by Sucheta" />
        <meta property="og:description" content="Expert CBSE math coaching in Kolkata. NCERT-aligned, board exam preparation. Classes 7-12. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/cbse-math-tutor" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "CBSE Mathematics Coaching",
            "description": "Expert math coaching for CBSE students from Classes 7-12 with NCERT-aligned syllabus and board exam preparation",
            "provider": {
              "@type": "Organization",
              "name": "Math Class by Sucheta",
              "url": "https://mathclassbysucheta.com/"
            },
            "educationalLevel": "Secondary School",
            "about": ["CBSE Mathematics", "NCERT Math", "Board Exam Preparation"],
            "availableLanguage": ["English", "Hindi"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <BoardHero 
            boardName="CBSE"
            boardFullName="Central Board of Secondary Education"
            classes="Classes 7-12"
            subjects={["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability", "Coordinate Geometry"]}
            description="Looking for CBSE math coaching in Kolkata? Get expert 1:1 tuition with NCERT-aligned syllabus, comprehensive board exam preparation, and sample paper practice."
          />
          <RelatedLinks title="CBSE Classes" links={cbseClasses} />
          <RelatedLinks title="Other Boards" links={otherBoards} />
          <LocationFeatures areaName="CBSE students in Kolkata" />
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

export default BoardCBSE;
