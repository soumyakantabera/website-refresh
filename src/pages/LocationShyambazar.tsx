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

const LocationShyambazar = () => {
  const areaName = "Shyambazar";
  const nearbyAreas = ["Sobha Bazar", "Hatibagan", "Bagbazar", "Girish Park", "College Street", "Belgachia"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Shyambazar, Kolkata | 1:1 Private Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Looking for math tutor in Shyambazar, Kolkata? Math Class by Sucheta offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Online classes available. Call +91-6290871215" />
        <meta name="keywords" content="math tutor shyambazar, maths tuition shyambazar kolkata, private tutor shyambazar, cbse math coaching shyambazar, icse math tutor shyambazar, home tuition shyambazar, math teacher near shyambazar metro" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-shyambazar" />
        <meta property="og:title" content="Best Math Tutor in Shyambazar | Math Class by Sucheta" />
        <meta property="og:description" content="Expert 1:1 math coaching for Shyambazar students. CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-shyambazar" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Math Class by Sucheta - Shyambazar",
            "description": "Best math tutor for Shyambazar students offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-shyambazar",
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
              "latitude": "22.5950",
              "longitude": "88.3740"
            },
            "areaServed": ["Shyambazar", "Sobha Bazar", "Hatibagan", "Bagbazar", "Belgachia"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationHero areaName={areaName} nearbyAreas={nearbyAreas} distance="20 minutes" />
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

export default LocationShyambazar;
