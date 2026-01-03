import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Location pages
import LocationBelghoria from "./pages/LocationBelghoria";
import LocationDunlop from "./pages/LocationDunlop";
import LocationSodepur from "./pages/LocationSodepur";
import LocationBarrackpore from "./pages/LocationBarrackpore";
import LocationDumDum from "./pages/LocationDumDum";
import LocationLakeTown from "./pages/LocationLakeTown";
import LocationShyambazar from "./pages/LocationShyambazar";
import LocationSinthiMore from "./pages/LocationSinthiMore";
import LocationAriadaha from "./pages/LocationAriadaha";
import LocationSobhaBazar from "./pages/LocationSobhaBazar";
// Board pages
import BoardWBBSE from "./pages/BoardWBBSE";
import BoardCBSE from "./pages/BoardCBSE";
import BoardICSE from "./pages/BoardICSE";
import BoardCU from "./pages/BoardCU";
import BoardWBSU from "./pages/BoardWBSU";
// Class pages
import Class7Math from "./pages/Class7Math";
import Class8Math from "./pages/Class8Math";
import Class9Math from "./pages/Class9Math";
import Class10Math from "./pages/Class10Math";
import Class11Math from "./pages/Class11Math";
import Class12Math from "./pages/Class12Math";
import BScMath from "./pages/BScMath";
import BrandAssets from "./pages/BrandAssets";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Location pages */}
            <Route path="/math-tutor-belghoria" element={<LocationBelghoria />} />
            <Route path="/math-tutor-dunlop" element={<LocationDunlop />} />
            <Route path="/math-tutor-sodepur" element={<LocationSodepur />} />
            <Route path="/math-tutor-barrackpore" element={<LocationBarrackpore />} />
            <Route path="/math-tutor-dum-dum" element={<LocationDumDum />} />
            <Route path="/math-tutor-lake-town" element={<LocationLakeTown />} />
            <Route path="/math-tutor-shyambazar" element={<LocationShyambazar />} />
            <Route path="/math-tutor-sinthi-more" element={<LocationSinthiMore />} />
            <Route path="/math-tutor-ariadaha" element={<LocationAriadaha />} />
            <Route path="/math-tutor-sobha-bazar" element={<LocationSobhaBazar />} />
            {/* Board pages */}
            <Route path="/wbbse-math-tutor" element={<BoardWBBSE />} />
            <Route path="/cbse-math-tutor" element={<BoardCBSE />} />
            <Route path="/icse-math-tutor" element={<BoardICSE />} />
            <Route path="/calcutta-university-bsc-math" element={<BoardCU />} />
            <Route path="/wbsu-bsc-math" element={<BoardWBSU />} />
            {/* Class pages */}
            <Route path="/class-7-math-tutor" element={<Class7Math />} />
            <Route path="/class-8-math-tutor" element={<Class8Math />} />
            <Route path="/class-9-math-tutor" element={<Class9Math />} />
            <Route path="/class-10-math-tutor" element={<Class10Math />} />
            <Route path="/class-11-math-tutor" element={<Class11Math />} />
            <Route path="/class-12-math-tutor" element={<Class12Math />} />
            <Route path="/bsc-math-tutor" element={<BScMath />} />
            {/* Other pages */}
            <Route path="/brand-assets" element={<BrandAssets />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
