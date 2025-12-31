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

const LocationDunlop = () => {
  const areaName = "Dunlop";
  const nearbyAreas = ["Belghoria", "Sodepur", "Ariadaha", "Bonhooghly", "Nagerbazar", "Dum Dum"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Dunlop, Kolkata | 1:1 Private Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Looking for math tutor in Dunlop, Kolkata? Math Class by Sucheta offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Just 5 mins from Dunlop. Call +91-6290871215" />
        <meta name="keywords" content="math tutor dunlop, maths tuition dunlop kolkata, private tutor dunlop, cbse math coaching dunlop, icse math tutor dunlop, home tuition dunlop, math teacher near dunlop" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-dunlop" />
        <meta property="og:title" content="Best Math Tutor in Dunlop | Math Class by Sucheta" />
        <meta property="og:description" content="Expert 1:1 math coaching near Dunlop for CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-dunlop" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Math Class by Sucheta - Dunlop",
            "description": "Best math tutor near Dunlop offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-dunlop",
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
              "latitude": "22.6650",
              "longitude": "88.3750"
            },
            "areaServed": ["Dunlop", "Belghoria", "Sodepur", "Bonhooghly", "Nagerbazar"]
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

export default LocationDunlop;
