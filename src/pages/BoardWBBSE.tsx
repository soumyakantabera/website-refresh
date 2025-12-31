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

const BoardWBBSE = () => {
  const wbbseClasses = CLASS_LINKS.filter(link => 
    ["/class-7-math-tutor", "/class-8-math-tutor", "/class-9-math-tutor", "/class-10-math-tutor"].includes(link.href)
  );
  const otherBoards = BOARD_LINKS.filter(link => link.href !== "/wbbse-math-tutor");

  return (
    <>
      <Helmet>
        <title>Best WBBSE Math Tutor in Kolkata | Madhyamik Math Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Expert WBBSE math tutor in Kolkata for Classes 5-10. Madhyamik math preparation with board-aligned syllabus, Bengali medium support. 1:1 coaching. Call +91-6290871215" />
        <meta name="keywords" content="wbbse math tutor kolkata, madhyamik math coaching, west bengal board math tuition, wbbse class 10 math, bengali medium math tutor, wbbse syllabus math, madhyamik preparation kolkata" />
        <link rel="canonical" href="https://mathclassbysucheta.com/wbbse-math-tutor" />
        <meta property="og:title" content="Best WBBSE Math Tutor in Kolkata | Math Class by Sucheta" />
        <meta property="og:description" content="Expert WBBSE/Madhyamik math coaching in Kolkata. Board-aligned syllabus, previous year papers. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/wbbse-madhyamik-math-tutor" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "WBBSE Mathematics Coaching",
            "description": "Expert math coaching for WBBSE/West Bengal Board students from Classes 5-10 including Madhyamik preparation",
            "provider": {
              "@type": "Organization",
              "name": "Math Class by Sucheta",
              "url": "https://mathclassbysucheta.com/"
            },
            "educationalLevel": "Secondary School",
            "about": ["WBBSE Mathematics", "Madhyamik Math", "West Bengal Board"],
            "availableLanguage": ["English", "Bengali"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <BoardHero 
            boardName="WBBSE"
            boardFullName="West Bengal Board of Secondary Education"
            classes="Classes 5-10 (Madhyamik)"
            subjects={["Algebra", "Geometry", "Mensuration", "Trigonometry", "Statistics", "Number System"]}
            description="Looking for WBBSE math coaching in Kolkata? Get expert 1:1 tuition for Madhyamik preparation with board-aligned syllabus, Bengali medium support, and previous year paper practice."
          />
          <RelatedLinks title="WBBSE Classes" links={wbbseClasses} />
          <RelatedLinks title="Other Boards" links={otherBoards} />
          <LocationFeatures areaName="WBBSE students in Kolkata" />
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

export default BoardWBBSE;
