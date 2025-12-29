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

const LocationAriadaha = () => {
  const areaName = "Ariadaha";
  const nearbyAreas = ["Belghoria", "Dunlop", "Dakshineswar", "Kamarhati", "Sodepur", "Baranagar"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Ariadaha, Kolkata | 1:1 Private Coaching | Sucheta's Math Class</title>
        <meta name="description" content="Looking for math tutor in Ariadaha, Kolkata? Sucheta's Math Class offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Very close to Ariadaha. Call +91-6290871215" />
        <meta name="keywords" content="math tutor ariadaha, maths tuition ariadaha kolkata, private tutor ariadaha, cbse math coaching ariadaha, icse math tutor ariadaha, home tuition ariadaha, math teacher near ariadaha" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-ariadaha" />
        <meta property="og:title" content="Best Math Tutor in Ariadaha | Sucheta's Math Class" />
        <meta property="og:description" content="Expert 1:1 math coaching near Ariadaha. CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-ariadaha" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sucheta's Math Class - Ariadaha",
            "description": "Best math tutor near Ariadaha offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-ariadaha",
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
              "latitude": "22.6700",
              "longitude": "88.3650"
            },
            "areaServed": ["Ariadaha", "Belghoria", "Dunlop", "Dakshineswar", "Kamarhati"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationHero areaName={areaName} nearbyAreas={nearbyAreas} distance="5 minutes" />
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

export default LocationAriadaha;
