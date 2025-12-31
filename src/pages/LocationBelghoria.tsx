import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { LocationHero } from "@/components/LocationHero";
import { LocationFeatures } from "@/components/LocationFeatures";
import { LocationCourses } from "@/components/LocationCourses";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

const LocationBelghoria = () => {
  const areaName = "Belghoria";
  const nearbyAreas = ["Dunlop", "Sodepur", "Agarpara", "Kamarhati", "Barrackpore", "Ariadaha"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Belghoria, Kolkata | 1:1 Private Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Looking for math tutor in Belghoria, Kolkata? Math Class by Sucheta offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Home tuition available. Call +91-6290871215" />
        <meta name="keywords" content="math tutor belghoria, maths tuition belghoria kolkata, private tutor belghoria, cbse math coaching belghoria, icse math tutor belghoria, home tuition belghoria, math teacher near belghoria" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-belghoria" />
        <meta property="og:title" content="Best Math Tutor in Belghoria | Math Class by Sucheta" />
        <meta property="og:description" content="Expert 1:1 math coaching in Belghoria for CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-belghoria" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Math Class by Sucheta - Belghoria",
            "description": "Best math tutor in Belghoria offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-belghoria",
            "telephone": "+916290871215",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "108, Shri Krishna Nagar, Belghoria",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "postalCode": "700056",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "22.6816",
              "longitude": "88.3784"
            },
            "areaServed": ["Belghoria", "Dunlop", "Sodepur", "Agarpara", "Kamarhati"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationHero areaName={areaName} nearbyAreas={nearbyAreas} />
          <LocationFeatures areaName={areaName} />
          <LocationCourses areaName={areaName} />
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

export default LocationBelghoria;
