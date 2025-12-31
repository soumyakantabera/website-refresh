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

const LocationSinthiMore = () => {
  const areaName = "Sinthi More";
  const nearbyAreas = ["Baranagar", "Belgachia", "Dunlop", "Chiria More", "Tobin Road", "Cossipore"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Sinthi More, Kolkata | 1:1 Private Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Looking for math tutor in Sinthi More, Kolkata? Math Class by Sucheta offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Home tuition available. Call +91-6290871215" />
        <meta name="keywords" content="math tutor sinthi more, maths tuition sinthi kolkata, private tutor sinthi more, cbse math coaching sinthi, icse math tutor sinthi more, home tuition sinthi more, math teacher near sinthi" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-sinthi-more" />
        <meta property="og:title" content="Best Math Tutor in Sinthi More | Math Class by Sucheta" />
        <meta property="og:description" content="Expert 1:1 math coaching near Sinthi More. CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-sinthi-more" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Math Class by Sucheta - Sinthi More",
            "description": "Best math tutor near Sinthi More offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-sinthi-more",
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
              "latitude": "22.6300",
              "longitude": "88.3750"
            },
            "areaServed": ["Sinthi More", "Baranagar", "Belgachia", "Dunlop", "Cossipore"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationHero areaName={areaName} nearbyAreas={nearbyAreas} distance="10 minutes" />
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

export default LocationSinthiMore;
