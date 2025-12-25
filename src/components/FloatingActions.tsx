import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const COACHING = {
  phoneE164: "+919874088765",
  displayPhone: "+91 98740 88765",
  defaultWhatsAppText: "Hi! I'm interested in 1:1 private coaching. Please share available slots and fees details."
};

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent(COACHING.defaultWhatsAppText);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed right-6 bottom-6 z-40 hidden md:flex flex-col gap-3 items-end">
        {/* Scroll to top */}
        <button 
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-full bg-card/95 border border-border shadow-lg backdrop-blur-xl flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ArrowUp className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* WhatsApp */}
        <Button 
          onClick={openWhatsApp}
          variant="whatsapp"
          size="lg"
          className="rounded-full pl-5 pr-4"
        >
          <span>WhatsApp Now</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-2">
            <MessageCircle className="w-4 h-4" />
          </div>
        </Button>

        {/* Book Counselling */}
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="rounded-full pl-5 pr-4"
        >
          <span>Book Counselling</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-2">
            <Phone className="w-4 h-4" />
          </div>
        </Button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed left-4 right-4 bottom-4 z-50 md:hidden">
        <div className="flex gap-2 p-2 rounded-2xl bg-card/95 border border-border shadow-xl backdrop-blur-xl">
          <Button onClick={scrollToContact} className="flex-1 h-12">
            Book Counselling
          </Button>
          <Button onClick={openWhatsApp} variant="whatsapp" className="flex-1 h-12">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline" className="h-12 px-4" asChild>
            <a href={`tel:${COACHING.phoneE164}`}>
              <Phone className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}