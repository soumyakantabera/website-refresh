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

const LocationLakeTown = () => {
  const areaName = "Lake Town";
  const nearbyAreas = ["Bangur", "Dum Dum", "Nagerbazar", "Sreebhumi", "Kaikhali", "VIP Road"];

  return (
    <>
      <Helmet>
        <title>Best Math Tutor in Lake Town, Kolkata | 1:1 Private Coaching | Sucheta's Math Class</title>
        <meta name="description" content="Looking for math tutor in Lake Town, Kolkata? Sucheta's Math Class offers 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 & BSc Maths. Online classes available. Call +91-6290871215" />
        <meta name="keywords" content="math tutor lake town, maths tuition lake town kolkata, private tutor lake town, cbse math coaching lake town, icse math tutor lake town, home tuition lake town, math teacher near lake town" />
        <link rel="canonical" href="https://mathclassbysucheta.com/math-tutor-lake-town" />
        <meta property="og:title" content="Best Math Tutor in Lake Town | Sucheta's Math Class" />
        <meta property="og:description" content="Expert 1:1 math coaching for Lake Town students. CBSE, ICSE, WBBSE. Classes 7-12 & BSc. Book free counselling!" />
        <meta property="og:url" content="https://mathclassbysucheta.com/math-tutor-lake-town" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sucheta's Math Class - Lake Town",
            "description": "Best math tutor for Lake Town students offering 1:1 private tuition for CBSE, ICSE, WBBSE Classes 7-12 and BSc Mathematics.",
            "url": "https://mathclassbysucheta.com/math-tutor-lake-town",
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
              "latitude": "22.6000",
              "longitude": "88.4100"
            },
            "areaServed": ["Lake Town", "Bangur", "Dum Dum", "Nagerbazar", "Sreebhumi"]
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

export default LocationLakeTown;
