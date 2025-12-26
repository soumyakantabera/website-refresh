import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const COACHING = {
  name: "Sucheta's Math Class",
  phoneE164: "+919874088765",
  displayPhone: "+91 98740 88765",
  email: "berasucheta01@gmail.com",
  address: "Near Maa Basanti Varieties, Kolkata",
  defaultWhatsAppText: "Hi! I'm interested in 1:1 private coaching. Please share available slots and fees details."
};

const classLevels = ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "BSc Mathematics (Pass)", "BSc Mathematics (Honours)"];
const boards = ["CBSE", "ICSE", "WBBSE", "Other / University"];
const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "All Subjects Bundle", "BSc Maths Topics"];
const modes = ["Offline (Kolkata)", "Online"];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    level: "",
    board: "",
    subject: "",
    mode: "",
    message: "",
  });

  const openWhatsApp = (text: string) => {
    const msg = encodeURIComponent(text || COACHING.defaultWhatsAppText);
    const phone = COACHING.phoneE164.replace(/\+/g, "").trim();
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const makeLeadMessage = () => {
    return [
      `Hi! I want to enquire about 1:1 private coaching (${COACHING.name}).`,
      ``,
      `Name: ${formData.name || "-"}`,
      `Phone/WhatsApp: ${formData.phone || "-"}`,
      `Class/Level: ${formData.level || "-"}`,
      `Board: ${formData.board || "-"}`,
      `Subject(s): ${formData.subject || "-"}`,
      `Mode: ${formData.mode || "-"}`,
      formData.message ? `Notes: ${formData.message}` : `Notes: -`,
      ``,
      `Please share available slots and next steps. धन्यवाद / Thanks!`
    ].join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const digits = formData.phone.replace(/\D/g, "");
    if (!formData.name || digits.length < 10 || !formData.level || !formData.board || !formData.subject || !formData.mode) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    toast.success("Enquiry prepared! WhatsApp will open.");
    openWhatsApp(makeLeadMessage());
  };

  const contactCards = [
    { icon: Phone, label: "Call / WhatsApp", value: COACHING.displayPhone, href: `tel:${COACHING.phoneE164}`, color: "primary" },
    { icon: Mail, label: "Email", value: COACHING.email, href: `mailto:${COACHING.email}`, color: "secondary" },
    { icon: MapPin, label: "Location", value: COACHING.address, href: null, color: "primary" },
    { icon: Clock, label: "Timings", value: "By appointment (limited slots)", href: null, color: "secondary" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Section header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-2">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-bold uppercase tracking-wider border border-secondary/20">
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            Get Started
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground leading-tight">
            Book your{" "}
            <span className="text-primary">FREE counselling call</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Fill the form and we'll respond with the best plan.
          </p>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form - takes 3 columns */}
          <AnimatedSection animation="fade-left" delay={100} className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-3xl bg-card/80 border-2 border-border/50 shadow-lg h-full">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="font-bold text-foreground mb-2 block">Parent/Student Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="e.g., Mr. Sen / Ananya" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-bold text-foreground mb-2 block">Phone / WhatsApp *</Label>
                    <Input 
                      id="phone" 
                      placeholder="e.g., 9XXXXXXXXX" 
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="font-bold text-foreground mb-2 block">Class / Level *</Label>
                    <Select value={formData.level} onValueChange={(v) => setFormData({ ...formData, level: v })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classLevels.map((level) => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-bold text-foreground mb-2 block">Board *</Label>
                    <Select value={formData.board} onValueChange={(v) => setFormData({ ...formData, board: v })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        {boards.map((board) => (
                          <SelectItem key={board} value={board}>{board}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="font-bold text-foreground mb-2 block">Subject(s) *</Label>
                    <Select value={formData.subject} onValueChange={(v) => setFormData({ ...formData, subject: v })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="font-bold text-foreground mb-2 block">Mode *</Label>
                    <Select value={formData.mode} onValueChange={(v) => setFormData({ ...formData, mode: v })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        {modes.map((mode) => (
                          <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-bold text-foreground mb-2 block">Your message (optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Weak chapters, last test marks, exam goal, preferred time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" size="default" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </Button>
                  <Button type="button" size="default" variant="secondary" className="w-full sm:w-auto" onClick={() => openWhatsApp(makeLeadMessage())}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Directly
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact details - takes 2 columns */}
          <AnimatedSection animation="fade-right" delay={200} className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {contactCards.map((card, i) => (
                <div 
                  key={i}
                  className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-${card.color}/10 via-card to-card border border-border/50 shadow-sm hover:shadow-md transition-shadow ${card.href ? "cursor-pointer" : ""}`}
                  onClick={() => card.href && window.open(card.href, card.href.startsWith("tel") ? "_self" : "_blank")}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-${card.color} to-${card.color}/70 flex items-center justify-center text-primary-foreground shadow-md mb-2 sm:mb-3`}>
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="block text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">{card.label}</span>
                  <span className="block text-xs sm:text-sm font-semibold text-foreground mt-0.5 sm:mt-1 break-all">{card.value}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.691201789417!2d88.37257827508058!3d22.6652991794258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89da1f8973297%3A0x8e7ccc5a2ffa3eb3!2sMaa%20Basanti%20Varieties!5e0!3m2!1sen!2sit!4v1766610099780!5m2!1sen!2sit"
                className="w-full h-[200px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick WhatsApp */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-border/50">
              <h4 className="font-bold text-foreground mb-2">Prefer WhatsApp?</h4>
              <p className="text-sm text-muted-foreground mb-4">Get a quick response. Just click below!</p>
              <Button onClick={() => openWhatsApp(COACHING.defaultWhatsAppText)} className="w-full" variant="secondary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}