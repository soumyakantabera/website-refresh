import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Copy, MessageCircle } from "lucide-react";
import { toast } from "sonner";

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

  const copyTemplate = async () => {
    const template = "Hi! I'm looking for 1:1 coaching for Class __ (Board __). Subject: __. Mode: __. Weak topics: __. Preferred time: __.";
    await navigator.clipboard.writeText(template);
    toast.success("Template copied!");
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-8">
          <div className="stagger-children">
            <p className="kicker">Contact</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-heading font-black text-foreground">
              <span className="chalk-underline">Book a counselling call</span> (Kolkata + Online)
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Fill the form and we'll respond with the best plan based on level and weak chapters.
              Parents can add last test marks for faster planning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[180px]">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60"
                alt="Chat on phone"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-sm">
                <b className="block text-sm text-foreground">Quick on WhatsApp</b>
                <span className="block text-xs text-muted-foreground font-semibold">Fast response</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md min-h-[180px]">
              <img 
                src="https://images.unsplash.com/photo-1587614382346-acbfa6b5b6ee?auto=format&fit=crop&w=1200&q=60"
                alt="Call support"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 p-3 rounded-xl bg-card/90 backdrop-blur-lg border border-border/50 shadow-sm">
                <b className="block text-sm text-foreground">Call & confirm</b>
                <span className="block text-xs text-muted-foreground font-semibold">Check slot availability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Form */}
          <div className="tile-ice glass-ring p-5 md:p-6 rounded-2xl border border-border/50 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="font-bold text-muted-foreground">Parent/Student Name</Label>
                  <Input 
                    id="name" 
                    placeholder="e.g., Mr. Sen / Ananya" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-bold text-muted-foreground">Phone / WhatsApp</Label>
                  <Input 
                    id="phone" 
                    placeholder="e.g., 9XXXXXXXXX" 
                    inputMode="numeric"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-bold text-muted-foreground">Class / Level</Label>
                  <Select value={formData.level} onValueChange={(v) => setFormData({ ...formData, level: v })}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {classLevels.map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-bold text-muted-foreground">Board</Label>
                  <Select value={formData.board} onValueChange={(v) => setFormData({ ...formData, board: v })}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {boards.map((board) => (
                        <SelectItem key={board} value={board}>{board}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-bold text-muted-foreground">Subject(s)</Label>
                  <Select value={formData.subject} onValueChange={(v) => setFormData({ ...formData, subject: v })}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="font-bold text-muted-foreground">Mode</Label>
                  <Select value={formData.mode} onValueChange={(v) => setFormData({ ...formData, mode: v })}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select" />
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
                <Label htmlFor="message" className="font-bold text-muted-foreground">Your message (optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Weak chapters, last test marks, exam goal, preferred time..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 min-h-[100px]"
                />
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <Button type="submit" className="font-bold shadow-primary">Send Enquiry</Button>
                <Button type="button" variant="outline" className="font-bold" onClick={() => openWhatsApp(makeLeadMessage())}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send on WhatsApp
                </Button>
                <Button type="button" variant="ghost" className="font-bold" asChild>
                  <a href={`tel:${COACHING.phoneE164}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="tile-cream glass-ring p-5 md:p-6 rounded-2xl border border-border/50 shadow-sm">
            <h3 className="font-heading font-bold text-foreground text-lg">Contact Details</h3>
            <p className="mt-2 text-muted-foreground">
              Kolkata (offline) + Online sessions available. Share class, board, and subjects to confirm slots.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <strong className="block text-foreground font-semibold">Location</strong>
                  <span className="block text-sm text-muted-foreground mt-0.5">{COACHING.address}</span>
                </div>
              </div>

              <a href={`tel:${COACHING.phoneE164}`} className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs hover:bg-card transition-colors">
                <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <strong className="block text-foreground font-semibold">Phone / WhatsApp</strong>
                  <span className="block text-sm text-muted-foreground mt-0.5">{COACHING.displayPhone}</span>
                </div>
              </a>

              <a href={`mailto:${COACHING.email}`} className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs hover:bg-card transition-colors">
                <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <strong className="block text-foreground font-semibold">Email</strong>
                  <span className="block text-sm text-muted-foreground mt-0.5">{COACHING.email}</span>
                </div>
              </a>

              <div className="flex gap-3 items-start p-3 rounded-2xl bg-card/60 border border-border/50 shadow-xs">
                <div className="w-6 h-6 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                </div>
                <div>
                  <strong className="block text-foreground font-semibold">Timings</strong>
                  <span className="block text-sm text-muted-foreground mt-0.5">By appointment (limited 1:1 slots)</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

            {/* Map */}
            <p className="kicker text-xs mb-3">Map</p>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm glass-ring">
              <iframe
                title="Location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.691201789417!2d88.37257827508058!3d22.6652991794258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89da1f8973297%3A0x8e7ccc5a2ffa3eb3!2sMaa%20Basanti%20Varieties!5e0!3m2!1sen!2sit!4v1766610099780!5m2!1sen!2sit"
                className="w-full h-[200px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

            {/* Quick template */}
            <div className="tile-cloud glass-ring p-4 rounded-xl border border-border/50">
              <p className="kicker text-xs">Quick WhatsApp message</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Hi! I'm looking for 1:1 coaching for Class __ (Board __). Subject: __. Mode: __. Weak topics: __. Preferred time: __.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-3">
                <Button size="sm" variant="outline" onClick={copyTemplate} className="font-bold">
                  <Copy className="w-3.5 h-3.5 mr-2" />
                  Copy
                </Button>
                <Button size="sm" onClick={() => openWhatsApp(COACHING.defaultWhatsAppText)} className="font-bold shadow-primary">
                  <MessageCircle className="w-3.5 h-3.5 mr-2" />
                  WhatsApp This
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
