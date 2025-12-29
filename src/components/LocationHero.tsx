import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, CheckCircle, Star, Users, Award, BookOpen } from "lucide-react";

interface LocationHeroProps {
  areaName: string;
  nearbyAreas: string[];
  distance?: string;
}

const COACHING = {
  phoneE164: "+916290871215",
  displayPhone: "+91 62908 71215",
  defaultWhatsAppText: "Hi! I'm interested in 1:1 private coaching. Please share available slots and fees details."
};

export function LocationHero({ areaName, nearbyAreas, distance }: LocationHeroProps) {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(`Hi! I'm from ${areaName} and interested in 1:1 private math coaching. Please share available slots and fees.`);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const features = [
    { icon: Users, text: "1:1 Personalized Coaching" },
    { icon: BookOpen, text: "CBSE / ICSE / WBBSE" },
    { icon: Award, text: "Classes 7-12 & BSc Maths" },
    { icon: Star, text: "4.9★ Rating from Parents" },
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Math Tutor in {areaName}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <MapPin className="w-4 h-4" />
              Serving {areaName} & Nearby Areas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 leading-tight">
              Best <span className="text-primary">Math Tutor</span> in {areaName}, Kolkata
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Looking for expert math coaching in {areaName}? Sucheta's Math Class offers personalized 1:1 tuition for Classes 7–12 and BSc Mathematics. 
              {distance && ` Just ${distance} from ${areaName}.`} Home tuition & online classes available.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50">
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="font-bold text-base">
                <a href="#contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Book Free Counselling
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={openWhatsApp} className="font-bold text-base">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>

          {/* Right Side - Location Info Card */}
          <div className="relative">
            <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                We Serve {areaName} & Nearby
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Main Location</p>
                    <p className="text-sm text-muted-foreground">108, Shri Krishna Nagar, Belghoria, Kolkata - 700056</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Call / WhatsApp</p>
                    <a href={`tel:${COACHING.phoneE164}`} className="text-sm text-primary hover:underline">{COACHING.displayPhone}</a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-semibold text-foreground mb-2">Also serving nearby areas:</p>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-background text-xs font-medium text-muted-foreground border border-border/50">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
