import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Sparkles, GraduationCap, Star, Phone, Monitor, Smartphone, Square, Image } from "lucide-react";
import { useRef } from "react";
import posterLandscapeBg from "@/assets/poster-landscape-bg.jpg";
import posterStoryBg from "@/assets/poster-story-bg.jpg";
import posterSquareBg from "@/assets/poster-square-bg.jpg";

const CLASSES_TEXT = "Classes 7, 8, 9, 10, 11, 12 & B.Sc";

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

type PosterFormat = "portrait" | "landscape" | "story" | "square";

interface PosterCardProps {
  title: string;
  subtitle: string;
  location?: string;
  gradient: string;
  index: number;
  format?: PosterFormat;
  backgroundImage?: string;
}

const PosterCard = ({ 
  title, 
  subtitle, 
  location, 
  gradient, 
  index,
  format = "portrait",
  backgroundImage
}: PosterCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getAspectClass = () => {
    switch (format) {
      case "landscape": return "aspect-video";
      case "story": return "aspect-[9/16]";
      case "square": return "aspect-square";
      default: return "aspect-[4/5]";
    }
  };

  const getCanvasSize = () => {
    switch (format) {
      case "landscape": return { width: 1920, height: 1080 };
      case "story": return { width: 1080, height: 1920 };
      case "square": return { width: 1080, height: 1080 };
      default: return { width: 1080, height: 1350 };
    }
  };

  const downloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = getCanvasSize();
    canvas.width = width;
    canvas.height = height;

    const drawContent = () => {
      // Create gradient background or overlay
      const grd = ctx.createLinearGradient(0, 0, width, height);
      const colors = gradient.replace("from-", "").replace("to-", " ").split(" ");
      grd.addColorStop(0, getColorHex(colors[0]));
      grd.addColorStop(1, getColorHex(colors[1]));
      
      if (!backgroundImage) {
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Add overlay for better text visibility
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, width, height);
      }

      // Add decorative circles
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(width * 0.85, height * 0.15, width * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(width * 0.1, height * 0.85, width * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Add main text
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";

      const scaleFactor = format === "story" ? 0.9 : format === "landscape" ? 1.2 : 1;
      
      // Brand name
      ctx.font = `bold ${Math.floor(72 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText("Math Class", width / 2, height * 0.12);
      ctx.font = `bold ${Math.floor(56 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText("by Sucheta", width / 2, height * 0.18);

      // Location badge if exists
      if (location) {
        ctx.font = `bold ${Math.floor(48 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
        ctx.fillText(`📍 ${location}`, width / 2, height * 0.35);
      }

      // Main title
      ctx.font = `bold ${Math.floor(80 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      const titleY = location ? height * 0.45 : height * 0.4;
      
      // Word wrap for long titles
      const words = title.split(" ");
      let lines: string[] = [];
      let currentLine = "";
      const maxWidth = width * 0.85;
      
      words.forEach(word => {
        const testLine = currentLine + (currentLine ? " " : "") + word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });
      if (currentLine) lines.push(currentLine);
      
      lines.forEach((line, i) => {
        ctx.fillText(line, width / 2, titleY + i * (90 * scaleFactor));
      });

      // Tagline
      ctx.font = `${Math.floor(40 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(subtitle, width / 2, titleY + lines.length * (90 * scaleFactor) + 30);

      // Classes offered
      ctx.font = `bold ${Math.floor(36 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(`📚 ${CLASSES_TEXT}`, width / 2, height * 0.65);

      // Features
      ctx.font = `${Math.floor(32 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      const featureY = height * 0.72;
      ctx.fillText("✓ 1:1 Private Coaching", width / 2, featureY);
      ctx.fillText("✓ CBSE • ICSE • WBBSE", width / 2, featureY + 50 * scaleFactor);
      ctx.fillText("✓ Daily Practice & Weekly Tests", width / 2, featureY + 100 * scaleFactor);

      // Contact
      ctx.font = `bold ${Math.floor(48 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText("📞 +91-6290871215", width / 2, height - height * 0.12);
      
      ctx.font = `${Math.floor(32 * scaleFactor)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText("mathclassbysucheta.com", width / 2, height - height * 0.06);
    };

    if (backgroundImage) {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        ctx.drawImage(img, 0, 0, width, height);
        drawContent();
        downloadCanvas();
      };
      img.src = backgroundImage;
    } else {
      drawContent();
      downloadCanvas();
    }

    function downloadCanvas() {
      const link = document.createElement("a");
      const formatSuffix = format !== "portrait" ? `-${format}` : "";
      link.download = `math-class-${(location || title).toLowerCase().replace(/\s+/g, "-")}${formatSuffix}-poster.png`;
      link.href = canvas!.toDataURL("image/png");
      link.click();
    }
  };

  const formatLabel = {
    portrait: "Portrait",
    landscape: "Landscape",
    story: "Story",
    square: "Square"
  };

  const FormatIcon = {
    portrait: Smartphone,
    landscape: Monitor,
    story: Smartphone,
    square: Square
  }[format];

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Preview */}
      <div 
        className={`${getAspectClass()} bg-gradient-to-br ${gradient} p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden`}
        style={backgroundImage ? { 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        } : undefined}
      >
        {/* Format badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs">
          <FormatIcon className="w-3 h-3" />
          {formatLabel[format]}
        </div>

        {/* Decorative elements */}
        {!backgroundImage && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          </>
        )}
        
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
          <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">{title}</h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
          <p className="text-white/90 text-xs font-medium bg-white/10 rounded-full px-3 py-1 inline-block">
            📚 {CLASSES_TEXT}
          </p>
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
          Download {formatLabel[format]}
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
        <meta name="description" content="Download free promotional posters and brand assets for Math Class by Sucheta. Location-based posters for Belghoria, Dunlop, Sodepur, and more areas in Kolkata. Classes 7-12 & BSc Math." />
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
                Download eye-catching promotional posters for your area. Perfect for WhatsApp, Facebook, Instagram, or printing!
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">Portrait</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">Landscape</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600">Story</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600">Square</span>
              </div>
            </div>
          </section>

          {/* Social Media Format Posters */}
          <section className="container py-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2 flex items-center gap-2">
              <Image className="w-6 h-6 text-primary" />
              Social Media Posters
            </h2>
            <p className="text-muted-foreground mb-6">
              Ready-to-share posters in different formats for various platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Landscape - Facebook/YouTube */}
              <PosterCard
                title="Expert Math Coaching"
                subtitle="Transform Your Grades!"
                gradient="from-primary to-purple-600"
                index={0}
                format="landscape"
                backgroundImage={posterLandscapeBg}
              />
              {/* Story - Instagram/WhatsApp */}
              <PosterCard
                title="Master Mathematics"
                subtitle="Join 500+ Success Stories!"
                gradient="from-purple-500 to-pink-600"
                index={1}
                format="story"
                backgroundImage={posterStoryBg}
              />
              {/* Square - Instagram Post */}
              <PosterCard
                title="Score Better in Math"
                subtitle="Personal Attention Guaranteed"
                gradient="from-secondary to-orange-600"
                index={2}
                format="square"
                backgroundImage={posterSquareBg}
              />
              {/* Portrait - WhatsApp Status */}
              <PosterCard
                title="Math Made Easy"
                subtitle="From Struggle to Success"
                gradient="from-green-500 to-teal-600"
                index={3}
                format="portrait"
              />
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
                  index={index + 4}
                />
              ))}
            </div>
          </section>

          {/* Location Posters */}
          <section className="container py-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Location Posters
            </h2>
            <p className="text-muted-foreground mb-8">
              Share these posters with friends and family in your area. Each poster includes all classes we offer!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locationPosters.map((poster, index) => (
                <PosterCard
                  key={poster.name}
                  title={poster.tagline}
                  subtitle="1:1 Private Math Coaching"
                  location={poster.name}
                  gradient={poster.color}
                  index={index + 7}
                />
              ))}
            </div>
          </section>

          {/* Different Formats for Each Location */}
          <section className="container py-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2 flex items-center gap-2">
              <Monitor className="w-6 h-6 text-primary" />
              Multi-Format Location Posters
            </h2>
            <p className="text-muted-foreground mb-8">
              Popular locations available in landscape and story formats for better social media reach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationPosters.slice(0, 6).map((poster, index) => (
                <div key={`multi-${poster.name}`} className="space-y-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {poster.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <PosterCard
                      title={poster.tagline}
                      subtitle="1:1 Math Coaching"
                      location={poster.name}
                      gradient={poster.color}
                      index={index + 20}
                      format="landscape"
                    />
                    <PosterCard
                      title={poster.tagline}
                      subtitle="1:1 Math Coaching"
                      location={poster.name}
                      gradient={poster.color}
                      index={index + 26}
                      format="story"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Usage Tips */}
          <section className="container py-12">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 sm:p-12 border border-primary/20">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                How to Use These Posters
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
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
                  <h3 className="font-semibold text-foreground">Choose Format</h3>
                  <p className="text-sm text-muted-foreground">Story for WhatsApp/Insta, Landscape for Facebook</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-2xl">
                    3️⃣
                  </div>
                  <h3 className="font-semibold text-foreground">Share</h3>
                  <p className="text-sm text-muted-foreground">Post on WhatsApp status, Facebook, or Instagram</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-2xl">
                    4️⃣
                  </div>
                  <h3 className="font-semibold text-foreground">Print</h3>
                  <p className="text-sm text-muted-foreground">Use portrait for flyers and notice boards</p>
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
