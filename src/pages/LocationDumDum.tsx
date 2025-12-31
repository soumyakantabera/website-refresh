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

const LocationDumDum = () => {
  const areaName = "Dum Dum";
  const nearbyAreas = ["Nagerbazar", "Lake Town", "Bangur", "South Dum Dum", "Airport", "Jessore Road"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Dum Dum, Kolkata | 1:1 Private Coaching | Math Class by Sucheta</title>
        <meta name="description" content="Looking for math tutor in Dum Dum, Kolkata? Math Class by Sucheta offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Near Dum Dum Metro. Call +91-6290871215" />
        <meta name="keywords" content="math tutor dum dum, maths tuition dum dum kolkata, private tutor dum dum, cbse math coaching dum dum, icse math tutor dum dum, home tuition dum dum, math teacher near dum dum metro" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-dum-dum" />
        <meta property="og:title" content="Best Math Tutor in Dum Dum | Math Class by Sucheta" />
        <meta property="og:description" content="Expert 1:1 math coaching in Dum Dum for CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-dum-dum" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Math Class by Sucheta - Dum Dum",
            "description": "Best math tutor in Dum Dum offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-dum-dum",
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
              "latitude": "22.6225",
              "longitude": "88.4208"
            },
            "areaServed": ["Dum Dum", "Nagerbazar", "Lake Town", "Bangur", "South Dum Dum"]
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

export default LocationDumDum;
