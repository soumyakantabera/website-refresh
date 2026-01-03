import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Sparkles, GraduationCap, Star, Phone } from "lucide-react";
import { useRef } from "react";

const locationPosters = [
  { name: "Belghoria", tagline: "Excel in Math, Right in Belghoria!", color: "from-blue-500 to-indigo-600" },
  { name: "Dunlop", tagline: "Dunlop's Trusted Math Expert!", color: "from-purple-500 to-pink-600" },
  { name: "Sodepur", tagline: "Sodepur's #1 Math Coaching!", color: "from-green-500 to-teal-600" },
  { name: "Barrackpore", tagline: "Top Math Tutor Near Barrackpore!", color: "from-orange-500 to-red-600" },
  { name: "Dum Dum", tagline: "Dum Dum's Math Success Partner!", color: "from-cyan-500 to-blue-600" },
  { name: "Lake Town", tagline: "Lake Town's Premier Math Coaching!", color: "from-rose-500 to-pink-600" },
  { name: "Shyambazar", tagline: "Shyambazar's Math Excellence Hub!", color: "from-violet-500 to-purple-600" },
  { name: "Sinthi More", tagline: "Master Math Near Sinthi More!", color: "from-amber-500 to-orange-600" },
  { name: "Ariadaha", tagline: "Ariadaha's Favorite Math Tutor!", color: "from-emerald-500 to-green-600" },
  { name: "Sobha Bazar", tagline: "Sobha Bazar's Math Champion!", color: "from-fuchsia-500 to-purple-600" },
];

const brandPosters = [
  { 
    title: "1:1 Private Coaching", 
    subtitle: "Personalized Attention, Proven Results",
    icon: GraduationCap,
    color: "from-primary to-purple-600"
  },
  { 
    title: "CBSE • ICSE • WBBSE", 
    subtitle: "All Boards Covered",
    icon: Star,
    color: "from-secondary to-orange-600"
  },
  { 
    title: "Free Counselling", 
    subtitle: "Book Your Session Today!",
    icon: Phone,
    color: "from-green-500 to-emerald-600"
  },
];

const PosterCard = ({ 
  title, 
  subtitle, 
  location, 
  gradient, 
  index 
}: { 
  title: string; 
  subtitle: string; 
  location?: string;
  gradient: string;
  index: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size for poster
    canvas.width = 1080;
    canvas.height = 1350;

    // Create gradient background
    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    const colors = gradient.replace("from-", "").replace("to-", " ").split(" ");
    grd.addColorStop(0, getColorHex(colors[0]));
    grd.addColorStop(1, getColorHex(colors[1]));
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative circles
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(900, 200, 300, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 1200, 250, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Add main text
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    
    // Brand name
    ctx.font = "bold 72px system-ui, -apple-system, sans-serif";
    ctx.fillText("Math Class", canvas.width / 2, 200);
    ctx.font = "bold 56px system-ui, -apple-system, sans-serif";
    ctx.fillText("by Sucheta", canvas.width / 2, 280);

    // Location or title
    ctx.font = "bold 96px system-ui, -apple-system, sans-serif";
    const mainText = location || title;
    ctx.fillText(mainText, canvas.width / 2, canvas.height / 2 - 50);

    // Tagline
    ctx.font = "48px system-ui, -apple-system, sans-serif";
    ctx.fillText(subtitle, canvas.width / 2, canvas.height / 2 + 50);

    // Features
    ctx.font = "36px system-ui, -apple-system, sans-serif";
    ctx.fillText("✓ 1:1 Private Coaching", canvas.width / 2, canvas.height / 2 + 180);
    ctx.fillText("✓ CBSE • ICSE • WBBSE", canvas.width / 2, canvas.height / 2 + 240);
    ctx.fillText("✓ Classes 7-12 & B.Sc", canvas.width / 2, canvas.height / 2 + 300);

    // Contact
    ctx.font = "bold 48px system-ui, -apple-system, sans-serif";
    ctx.fillText("📞 +91-6290871215", canvas.width / 2, canvas.height - 200);
    
    ctx.font = "32px system-ui, -apple-system, sans-serif";
    ctx.fillText("mathclassbysucheta.com", canvas.width / 2, canvas.height - 130);

    // Download
    const link = document.createElement("a");
    link.download = `math-class-${(location || title).toLowerCase().replace(/\s+/g, "-")}-poster.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Preview */}
      <div className={`aspect-[4/5] bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <p className="text-white/90 text-sm font-medium">Math Class by Sucheta</p>
        </div>
        
        <div className="relative z-10 text-center space-y-2">
          {location && (
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              <MapPin className="w-3.5 h-3.5" />
              {location}
            </div>
          )}
          <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight">{title}</h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>
        
        <div className="relative z-10 text-center">
          <p className="text-white/90 text-xs">📞 +91-6290871215</p>
        </div>
      </div>
      
      {/* Download button */}
      <div className="p-4 bg-card">
        <Button 
          onClick={downloadPoster} 
          className="w-full group/btn rounded-xl"
          variant="outline"
        >
          <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
          Download Poster
        </Button>
      </div>
      
      {/* Hidden canvas for generation */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

// Helper to convert Tailwind color names to hex
function getColorHex(colorName: string): string {
  const colors: Record<string, string> = {
    "blue-500": "#3b82f6",
    "indigo-600": "#4f46e5",
    "purple-500": "#a855f7",
    "purple-600": "#9333ea",
    "pink-600": "#db2777",
    "green-500": "#22c55e",
    "green-600": "#16a34a",
    "teal-600": "#0d9488",
    "orange-500": "#f97316",
    "orange-600": "#ea580c",
    "red-600": "#dc2626",
    "cyan-500": "#06b6d4",
    "rose-500": "#f43f5e",
    "violet-500": "#8b5cf6",
    "amber-500": "#f59e0b",
    "emerald-500": "#10b981",
    "emerald-600": "#059669",
    "fuchsia-500": "#d946ef",
    "primary": "#7c3aed",
    "secondary": "#f97316",
  };
  return colors[colorName] || "#7c3aed";
}

const BrandAssets = () => {
  return (
    <>
      <Helmet>
        <title>Brand Assets & Location Posters | Math Class by Sucheta</title>
        <meta name="description" content="Download free promotional posters and brand assets for Math Class by Sucheta. Location-based posters for Belghoria, Dunlop, Sodepur, and more areas in Kolkata." />
        <link rel="canonical" href="https://mathclassbysucheta.com/brand-assets" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-8 pb-16">
          {/* Hero */}
          <section className="container py-12 sm:py-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Free Download
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                Brand Assets & <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Location Posters</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Download eye-catching promotional posters for your area. Perfect for sharing on WhatsApp, Facebook, or printing!
              </p>
            </div>
          </section>

          {/* Brand Posters */}
          <section className="container py-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Brand Posters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandPosters.map((poster, index) => (
                <PosterCard
                  key={poster.title}
                  title={poster.title}
                  subtitle={poster.subtitle}
                  gradient={poster.color}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* Location Posters */}
          <section className="container py-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Location Posters
            </h2>
            <p className="text-muted-foreground mb-8">
              Share these posters with friends and family in your area to spread the word about quality math coaching!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locationPosters.map((poster, index) => (
                <PosterCard
                  key={poster.name}
                  title={poster.tagline}
                  subtitle="1:1 Private Math Coaching"
                  location={poster.name}
                  gradient={poster.color}
                  index={index + 3}
                />
              ))}
            </div>
          </section>

          {/* Usage Tips */}
          <section className="container py-12">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 sm:p-12 border border-primary/20">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                How to Use These Posters
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-2xl">
                    1️⃣
                  </div>
                  <h3 className="font-semibold text-foreground">Download</h3>
                  <p className="text-sm text-muted-foreground">Click the download button on your preferred poster</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-2xl">
                    2️⃣
                  </div>
                  <h3 className="font-semibold text-foreground">Share</h3>
                  <p className="text-sm text-muted-foreground">Post on WhatsApp status, Facebook, or Instagram</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-2xl">
                    3️⃣
                  </div>
                  <h3 className="font-semibold text-foreground">Print</h3>
                  <p className="text-sm text-muted-foreground">Print and put up in local shops or notice boards</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default BrandAssets;
