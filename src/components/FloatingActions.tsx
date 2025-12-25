import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const COACHING = {
  phoneE164: "+919874088765",
  displayPhone: "+91 98740 88765",
  defaultWhatsAppText: "Hi! I'm interested in 1:1 private coaching. Please share available slots and fees details."
};

export function FloatingActions() {
  const openWhatsApp = () => {
    const msg = encodeURIComponent(COACHING.defaultWhatsAppText);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed right-4 bottom-4 z-40 hidden md:flex flex-col gap-2.5 items-end">
        <button 
          onClick={openWhatsApp}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-card/95 border border-border shadow-lg backdrop-blur-xl hover:-translate-y-0.5 transition-transform cursor-pointer glass-ring"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground shadow-md">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <b className="block text-sm text-foreground leading-tight">WhatsApp Now</b>
            <span className="block text-xs text-muted-foreground font-semibold">Fast response</span>
          </div>
        </button>

        <a 
          href={`tel:${COACHING.phoneE164}`}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-card/95 border border-border shadow-lg backdrop-blur-xl hover:-translate-y-0.5 transition-transform cursor-pointer glass-ring"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground shadow-md">
            <Phone className="w-5 h-5" />
          </div>
          <div className="text-left">
            <b className="block text-sm text-foreground leading-tight">Call Now</b>
            <span className="block text-xs text-muted-foreground font-semibold">Check slots</span>
          </div>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed left-3 right-3 bottom-3 z-50 md:hidden flex gap-2.5 p-2.5 rounded-2xl bg-card/95 border border-border shadow-xl backdrop-blur-xl glass-ring">
        <Button onClick={scrollToContact} className="flex-1 font-bold shadow-primary">
          Book
        </Button>
        <Button onClick={openWhatsApp} variant="outline" className="flex-1 font-bold">
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
        <Button variant="outline" className="font-bold px-3" asChild>
          <a href={`tel:${COACHING.phoneE164}`}>
            <Phone className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </>
  );
}
