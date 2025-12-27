import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-secondary via-primary to-secondary text-primary-foreground py-2.5 px-4 text-center overflow-hidden">
      {/* Animated background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
      
      <div className="container relative flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
        <Sparkles className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <span>
          <span className="hidden sm:inline">📚 Limited Offer: </span>
          <span className="font-bold">FREE Demo Session</span> — see if we're the right fit!
          <a 
            href="#contact" 
            className="ml-2 underline underline-offset-2 hover:no-underline font-bold"
          >
            Book Now →
          </a>
        </span>
      </div>

      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
