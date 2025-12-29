import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { BoardHero } from "@/components/BoardHero";
import { LocationFeatures } from "@/components/LocationFeatures";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const BoardICSE = () => {
  return (
    <>
      <Helmet>
        <title>Best ICSE Math Tutor in Kolkata | ISC Math Coaching | Sucheta's Math Class</title>
        <meta name="description" content="Expert ICSE/ISC math tutor in Kolkata for Classes 7-12. Selina, ML Aggarwal solutions, board exam preparation. 1:1 private tuition. Call +91-6290871215" />
        <meta name="keywords" content="icse math tutor kolkata, isc math coaching kolkata, icse class 10 math, isc class 12 math, selina math solutions, ml aggarwal math tutor, icse board preparation kolkata" />
        <link rel="canonical" href="https://mathclassbysucheta.com/icse-math-tutor" />
        <meta property="og:title" content="Best ICSE Math Tutor in Kolkata | Sucheta's Math Class" />
        <meta property="og:description" content="Expert ICSE/ISC math coaching in Kolkata. Selina, ML Aggarwal aligned. Classes 7-12. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/icse-math-tutor" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "ICSE/ISC Mathematics Coaching",
            "description": "Expert math coaching for ICSE and ISC students from Classes 7-12 with comprehensive board exam preparation",
            "provider": {
              "@type": "Organization",
              "name": "Sucheta's Math Class",
              "url": "https://mathclassbysucheta.com/"
            },
            "educationalLevel": "Secondary School",
            "about": ["ICSE Mathematics", "ISC Mathematics", "Selina Solutions", "ML Aggarwal"],
            "availableLanguage": ["English"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <BoardHero 
            boardName="ICSE"
            boardFullName="Indian Certificate of Secondary Education"
            classes="Classes 7-12 (ICSE & ISC)"
            subjects={["Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability", "Commercial Mathematics"]}
            description="Looking for ICSE/ISC math coaching in Kolkata? Get expert 1:1 tuition with Selina and ML Aggarwal solutions, comprehensive board exam preparation, and previous year paper practice."
          />
          <LocationFeatures areaName="ICSE students in Kolkata" />
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

export default BoardICSE;
