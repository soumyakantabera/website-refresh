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

const LocationBarrackpore = () => {
  const areaName = "Barrackpore";
  const nearbyAreas = ["Sodepur", "Titagarh", "Khardah", "Panihati", "Belghoria", "Barrackpore Cantonment"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Barrackpore, Kolkata | 1:1 Private Coaching | Sucheta's Math Class</title>
        <meta name="description" content="Looking for math tutor in Barrackpore, Kolkata? Sucheta's Math Class offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Home tuition & online available. Call +91-6290871215" />
        <meta name="keywords" content="math tutor barrackpore, maths tuition barrackpore kolkata, private tutor barrackpore, cbse math coaching barrackpore, icse math tutor barrackpore, home tuition barrackpore, math teacher near barrackpore" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-barrackpore" />
        <meta property="og:title" content="Best Math Tutor in Barrackpore | Sucheta's Math Class" />
        <meta property="og:description" content="Expert 1:1 math coaching near Barrackpore for CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-barrackpore" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sucheta's Math Class - Barrackpore",
            "description": "Best math tutor near Barrackpore offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-barrackpore",
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
              "latitude": "22.7647",
              "longitude": "88.3697"
            },
            "areaServed": ["Barrackpore", "Sodepur", "Titagarh", "Khardah", "Panihati"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationHero areaName={areaName} nearbyAreas={nearbyAreas} distance="15 minutes" />
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

export default LocationBarrackpore;
