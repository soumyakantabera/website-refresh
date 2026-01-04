import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Sparkles, Monitor, Smartphone, Share2, Calendar, PartyPopper, BookOpen, GraduationCap } from "lucide-react";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import posterLandscapeBg from "@/assets/poster-promo-landscape.jpg";
import posterPortraitBg from "@/assets/poster-promo-portrait.jpg";

const CLASSES_TEXT = "Classes 7, 8, 9, 10, 11, 12 & B.Sc Math";
const PHONE_NUMBER = "+91-6290871215";
const WEBSITE = "mathclassbysucheta.com";

const locations = [
  { name: "Belghoria", tagline: "Excel in Math, Right in Belghoria!", gradient: "from-violet-600 to-indigo-700" },
  { name: "Dunlop", tagline: "Dunlop's Trusted Math Expert!", gradient: "from-purple-600 to-pink-600" },
  { name: "Sodepur", tagline: "Sodepur's #1 Math Coaching!", gradient: "from-emerald-600 to-teal-700" },
  { name: "Barrackpore", tagline: "Top Math Tutor Near Barrackpore!", gradient: "from-orange-600 to-red-600" },
  { name: "Dum Dum", tagline: "Dum Dum's Math Success Partner!", gradient: "from-cyan-600 to-blue-700" },
  { name: "Lake Town", tagline: "Lake Town's Premier Math Coaching!", gradient: "from-rose-600 to-pink-700" },
  { name: "Shyambazar", tagline: "Shyambazar's Math Excellence Hub!", gradient: "from-violet-700 to-purple-700" },
  { name: "Sinthi More", tagline: "Master Math Near Sinthi More!", gradient: "from-amber-600 to-orange-700" },
  { name: "Ariadaha", tagline: "Ariadaha's Favorite Math Tutor!", gradient: "from-green-600 to-emerald-700" },
  { name: "Sobha Bazar", tagline: "Sobha Bazar's Math Champion!", gradient: "from-fuchsia-600 to-purple-700" },
];

interface FestivePoster {
  id: string;
  name: string;
  emoji: string;
  title: string;
  subtitle: string;
  gradient: string;
  accentColor: string;
}

const festivePoster: FestivePoster[] = [
  { 
    id: "durga-puja", 
    name: "Durga Puja", 
    emoji: "🪷",
    title: "Shubho Bijoya!", 
    subtitle: "Start Fresh This Puja Season - Enroll Now!",
    gradient: "from-red-600 to-orange-500",
    accentColor: "red-600"
  },
  { 
    id: "diwali", 
    name: "Diwali", 
    emoji: "🪔",
    title: "Happy Diwali!", 
    subtitle: "Light Up Your Math Skills This Festival!",
    gradient: "from-amber-500 to-orange-600",
    accentColor: "amber-500"
  },
  { 
    id: "new-year", 
    name: "New Year", 
    emoji: "🎉",
    title: "Happy New Year!", 
    subtitle: "New Year, New Goals - Master Math in 2025!",
    gradient: "from-violet-600 to-indigo-600",
    accentColor: "violet-600"
  },
  { 
    id: "exam-season", 
    name: "Exam Season", 
    emoji: "📝",
    title: "Exam Time!", 
    subtitle: "Ace Your Exams with Expert Coaching!",
    gradient: "from-blue-600 to-cyan-600",
    accentColor: "blue-600"
  },
  { 
    id: "board-exams", 
    name: "Board Exams", 
    emoji: "🎓",
    title: "Board Exam Prep!", 
    subtitle: "Crack Your Boards with Confidence!",
    gradient: "from-emerald-600 to-teal-600",
    accentColor: "emerald-600"
  },
  { 
    id: "summer-batch", 
    name: "Summer Batch", 
    emoji: "☀️",
    title: "Summer Batch Open!", 
    subtitle: "Beat the Heat, Master Math This Summer!",
    gradient: "from-yellow-500 to-orange-500",
    accentColor: "yellow-500"
  },
  { 
    id: "admission-open", 
    name: "Admission Open", 
    emoji: "📚",
    title: "Admissions Open!", 
    subtitle: "Limited Seats - Enroll Today!",
    gradient: "from-purple-600 to-pink-600",
    accentColor: "purple-600"
  },
  { 
    id: "result-celebration", 
    name: "Result Day", 
    emoji: "🏆",
    title: "Celebrate Success!", 
    subtitle: "Our Students Top Every Year!",
    gradient: "from-green-600 to-emerald-600",
    accentColor: "green-600"
  },
];

type PosterFormat = "portrait" | "landscape";

const colorMap: Record<string, string> = {
  "violet-600": "#7c3aed", "violet-700": "#6d28d9",
  "indigo-700": "#4338ca", "purple-600": "#9333ea", "purple-700": "#7e22ce",
  "pink-600": "#db2777", "pink-700": "#be185d",
  "emerald-600": "#059669", "emerald-700": "#047857",
  "teal-700": "#0f766e", "orange-600": "#ea580c", "orange-700": "#c2410c",
  "red-600": "#dc2626", "cyan-600": "#0891b2",
  "blue-700": "#1d4ed8", "rose-600": "#e11d48",
  "amber-600": "#d97706", "green-600": "#16a34a",
  "fuchsia-600": "#c026d3",
};

const getColorHex = (colorName: string): string => colorMap[colorName] || "#7c3aed";

interface LocationPosterProps {
  location: typeof locations[0];
  format: PosterFormat;
  index: number;
}

const LocationPoster = ({ location, format, index }: LocationPosterProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgImage = format === "landscape" ? posterLandscapeBg : posterPortraitBg;

  const getCanvasSize = () => format === "landscape" 
    ? { width: 1920, height: 1080 } 
    : { width: 1080, height: 1350 };

  const downloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = getCanvasSize();
    canvas.width = width;
    canvas.height = height;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Draw background image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Add gradient overlay
      const colors = location.gradient.replace("from-", "").replace("to-", " ").split(" ");
      const grd = ctx.createLinearGradient(0, 0, width, height);
      grd.addColorStop(0, getColorHex(colors[0]) + "E6");
      grd.addColorStop(1, getColorHex(colors[1]) + "F2");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // Decorative circles
      ctx.globalAlpha = 0.08;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(width * 0.88, height * 0.12, width * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(width * 0.08, height * 0.88, width * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      const isLandscape = format === "landscape";
      const scale = isLandscape ? 1.1 : 1;

      // Brand name
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.font = `bold ${Math.floor(64 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText("Math Class by Sucheta", width / 2, height * 0.12);

      // Location badge
      ctx.font = `bold ${Math.floor(52 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(`📍 ${location.name}`, width / 2, height * 0.26);

      // Main tagline
      ctx.font = `bold ${Math.floor(72 * scale)}px system-ui, -apple-system, sans-serif`;
      const taglineY = isLandscape ? height * 0.42 : height * 0.38;
      wrapText(ctx, location.tagline, width / 2, taglineY, width * 0.85, 85 * scale);

      // Classes (prominent)
      ctx.font = `bold ${Math.floor(44 * scale)}px system-ui, -apple-system, sans-serif`;
      const classesY = isLandscape ? height * 0.58 : height * 0.52;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(`📚 ${CLASSES_TEXT}`, width / 2, classesY);

      // Features
      ctx.font = `${Math.floor(32 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      const featuresY = isLandscape ? height * 0.68 : height * 0.62;
      ctx.fillText("✓ 1:1 Private Coaching  •  CBSE • ICSE • WBBSE  •  Daily Practice", width / 2, featuresY);

      // Contact
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${Math.floor(48 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(`📞 ${PHONE_NUMBER}`, width / 2, height * 0.82);
      ctx.font = `${Math.floor(32 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(WEBSITE, width / 2, height * 0.90);

      // Download
      const link = document.createElement("a");
      link.download = `mathclass-${location.name.toLowerCase().replace(/\s+/g, "-")}-${format}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = bgImage;
  };

  function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
    const words = text.split(" ");
    let line = "";
    let lineY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, lineY);
        line = words[n] + " ";
        lineY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, lineY);
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Preview */}
      <div 
        className={`${format === "landscape" ? "aspect-video" : "aspect-[4/5]"} relative overflow-hidden`}
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-90`} />
        
        {/* Format badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 text-white text-xs font-medium">
          {format === "landscape" ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
          {format === "landscape" ? "Landscape" : "Portrait"}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5">
          <div>
            <p className="text-white/90 text-sm font-semibold">Math Class by Sucheta</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-sm font-medium">
              <MapPin className="w-3.5 h-3.5" />
              {location.name}
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl leading-tight px-2">{location.tagline}</h3>
            <p className="text-white font-semibold text-xs bg-white/15 rounded-full px-3 py-1.5 inline-block">
              📚 {CLASSES_TEXT}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-white/90 text-xs font-medium">📞 {PHONE_NUMBER}</p>
          </div>
        </div>
      </div>
      
      {/* Download button */}
      <div className="p-3 bg-card">
        <Button 
          onClick={downloadPoster} 
          className="w-full rounded-xl text-sm"
          variant="outline"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download {format === "landscape" ? "Landscape" : "Portrait"}
        </Button>
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

// Festive Poster Card Component
interface FestivePosterCardProps {
  poster: FestivePoster;
  format: PosterFormat;
  index: number;
}

const FestivePosterCard = ({ poster, format, index }: FestivePosterCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bgImage = format === "landscape" ? posterLandscapeBg : posterPortraitBg;

  const getCanvasSize = () => format === "landscape" 
    ? { width: 1920, height: 1080 } 
    : { width: 1080, height: 1350 };

  const downloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = getCanvasSize();
    canvas.width = width;
    canvas.height = height;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      
      const colors = poster.gradient.replace("from-", "").replace("to-", " ").split(" ");
      const grd = ctx.createLinearGradient(0, 0, width, height);
      grd.addColorStop(0, getColorHex(colors[0]) + "E8");
      grd.addColorStop(1, getColorHex(colors[1]) + "F5");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      // Decorative elements
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(width * 0.9, height * 0.1, width * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(width * 0.05, height * 0.9, width * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      const isLandscape = format === "landscape";
      const scale = isLandscape ? 1.15 : 1;

      // Brand name
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.font = `bold ${Math.floor(56 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText("Math Class by Sucheta", width / 2, height * 0.10);

      // Festive emoji & title
      ctx.font = `${Math.floor(100 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(poster.emoji, width / 2, height * 0.26);
      
      ctx.font = `bold ${Math.floor(80 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(poster.title, width / 2, height * 0.38);

      // Subtitle
      ctx.font = `${Math.floor(42 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      wrapTextFestive(ctx, poster.subtitle, width / 2, height * 0.48, width * 0.85, 50 * scale);

      // Classes
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${Math.floor(44 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(`📚 ${CLASSES_TEXT}`, width / 2, height * 0.60);

      // Features
      ctx.font = `${Math.floor(30 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillText("✓ 1:1 Private Coaching  •  CBSE • ICSE • WBBSE  •  Daily Practice", width / 2, height * 0.70);

      // Contact
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${Math.floor(48 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(`📞 ${PHONE_NUMBER}`, width / 2, height * 0.84);
      ctx.font = `${Math.floor(32 * scale)}px system-ui, -apple-system, sans-serif`;
      ctx.fillText(WEBSITE, width / 2, height * 0.92);

      const link = document.createElement("a");
      link.download = `mathclass-${poster.id}-${format}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = bgImage;
  };

  function wrapTextFestive(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
    const words = text.split(" ");
    let line = "";
    let lineY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, lineY);
        line = words[n] + " ";
        lineY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, lineY);
  }

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div 
        className={`${format === "landscape" ? "aspect-video" : "aspect-[4/5]"} relative overflow-hidden`}
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${poster.gradient} opacity-92`} />
        
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/25 backdrop-blur-sm rounded-full px-2.5 py-1 text-white text-xs font-medium">
          <Calendar className="w-3 h-3" />
          {poster.name}
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1 text-white text-xs font-medium">
          {format === "landscape" ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
          {format === "landscape" ? "Landscape" : "Portrait"}
        </div>

        <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5">
          <div>
            <p className="text-white/90 text-sm font-semibold">Math Class by Sucheta</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-4xl">{poster.emoji}</div>
            <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight">{poster.title}</h3>
            <p className="text-white/90 text-sm px-2">{poster.subtitle}</p>
            <p className="text-white font-semibold text-xs bg-white/15 rounded-full px-3 py-1.5 inline-block">
              📚 {CLASSES_TEXT}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-white/90 text-xs font-medium">📞 {PHONE_NUMBER}</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-card">
        <Button 
          onClick={downloadPoster} 
          className="w-full rounded-xl text-sm"
          variant="outline"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download {format === "landscape" ? "Landscape" : "Portrait"}
        </Button>
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

const BrandAssets = () => {
  const [selectedFormat, setSelectedFormat] = useState<PosterFormat>("portrait");

  return (
    <>
      <Helmet>
        <title>Download Posters & Shareables | Math Class by Sucheta</title>
        <meta name="description" content="Download free promotional posters for Math Class by Sucheta. Location-based shareables for Belghoria, Dunlop, Sodepur, Barrackpore & more. Classes 7-12 & BSc Math." />
        <link rel="canonical" href="https://mathclassbysucheta.com/brand-assets" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-8 pb-16">
          {/* Hero Section */}
          <section className="container py-10 sm:py-14">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Free Download & Share
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                Location <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Posters & Shareables</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download eye-catching promotional posters for your area. Perfect for WhatsApp, Facebook, Instagram, or printing! Every poster mentions <strong>{CLASSES_TEXT}</strong>.
              </p>
            </div>
          </section>

          {/* Format Selector */}
          <section className="container">
            <Tabs defaultValue="portrait" className="w-full" onValueChange={(v) => setSelectedFormat(v as PosterFormat)}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                    <Share2 className="w-6 h-6 text-primary" />
                    Location Shareables
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Choose your format and download posters for your area
                  </p>
                </div>
                <TabsList className="grid grid-cols-2 w-full sm:w-auto">
                  <TabsTrigger value="portrait" className="flex items-center gap-2 px-6">
                    <Smartphone className="w-4 h-4" />
                    Portrait
                  </TabsTrigger>
                  <TabsTrigger value="landscape" className="flex items-center gap-2 px-6">
                    <Monitor className="w-4 h-4" />
                    Landscape
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="portrait" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {locations.map((loc, index) => (
                    <LocationPoster key={loc.name} location={loc} format="portrait" index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="landscape" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {locations.map((loc, index) => (
                    <LocationPoster key={loc.name} location={loc} format="landscape" index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Festive/Seasonal Posters Section */}
          <section className="container py-12 mt-4">
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                <PartyPopper className="w-6 h-6 text-secondary" />
                Festive & Seasonal Posters
              </h2>
              <p className="text-muted-foreground mt-1">
                Special occasion posters to share during festivals, exams, and important times
              </p>
            </div>
            
            <Tabs defaultValue="portrait" className="w-full">
              <TabsList className="grid grid-cols-2 w-full sm:w-auto mb-6">
                <TabsTrigger value="portrait" className="flex items-center gap-2 px-6">
                  <Smartphone className="w-4 h-4" />
                  Portrait
                </TabsTrigger>
                <TabsTrigger value="landscape" className="flex items-center gap-2 px-6">
                  <Monitor className="w-4 h-4" />
                  Landscape
                </TabsTrigger>
              </TabsList>

              <TabsContent value="portrait" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {festivePoster.map((poster, index) => (
                    <FestivePosterCard key={poster.id} poster={poster} format="portrait" index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="landscape" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {festivePoster.map((poster, index) => (
                    <FestivePosterCard key={poster.id} poster={poster} format="landscape" index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Quick Download Section */}
          <section className="container py-12 mt-4">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 sm:p-10 border border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Quick Download Tips
                </h2>
                <p className="text-muted-foreground">Share these posters to spread the word!</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto">
                    <Smartphone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Portrait Format</h3>
                  <p className="text-sm text-muted-foreground">Best for WhatsApp Status & Instagram Stories</p>
                </div>
                <div className="space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto">
                    <Monitor className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Landscape Format</h3>
                  <p className="text-sm text-muted-foreground">Best for Facebook Posts & YouTube Banners</p>
                </div>
                <div className="space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto">
                    <Share2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Share Freely</h3>
                  <p className="text-sm text-muted-foreground">Send to friends, family & groups in your area</p>
                </div>
                <div className="space-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto">
                    <Download className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Print Ready</h3>
                  <p className="text-sm text-muted-foreground">High quality for flyers & notice boards</p>
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
