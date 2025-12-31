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

const LocationSobhaBazar = () => {
  const areaName = "Sobha Bazar";
  const nearbyAreas = ["Shyambazar", "Hatibagan", "College Street", "Jorasanko", "Kumartuli", "Bagbazar"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Sobha Bazar, Kolkata | 1:1 Private Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Looking for math tutor in Sobha Bazar, Kolkata? Math Class by Sucheta offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Online classes available. Call +91-6290871215" />
        <meta name="keywords" content="math tutor sobha bazar, maths tuition sobha bazar kolkata, private tutor sobha bazar, cbse math coaching sobha bazar, icse math tutor sobha bazar, home tuition sobha bazar, math teacher near sobha bazar" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-sobha-bazar" />
        <meta property="og:title" content="Best Math Tutor in Sobha Bazar | Math Class by Sucheta" />
        <meta property="og:description" content="Expert 1:1 math coaching for Sobha Bazar students. CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-sobha-bazar" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Math Class by Sucheta - Sobha Bazar",
            "description": "Best math tutor for Sobha Bazar students offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-sobha-bazar",
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
              "latitude": "22.5900",
              "longitude": "88.3650"
            },
            "areaServed": ["Sobha Bazar", "Shyambazar", "Hatibagan", "College Street", "Jorasanko"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationHero areaName={areaName} nearbyAreas={nearbyAreas} distance="25 minutes" />
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

export default LocationSobhaBazar;
