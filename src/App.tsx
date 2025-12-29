import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
