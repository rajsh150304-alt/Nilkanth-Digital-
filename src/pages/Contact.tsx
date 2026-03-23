import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Get in touch for a free consultation and quote" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Contact Us" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[400px] h-[400px] top-0 -right-48 opacity-20" />
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] bottom-0 -left-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="reveal">
                <div className="red-line mb-4" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                    <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-4 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-4 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-5 py-4 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                    <option value="">Select Service</option>
                    <option>CCTV Installation</option>
                    <option>CCTV Repair & AMC</option>
                    <option>Laptop Repair</option>
                    <option>Desktop Repair</option>
                    <option>Smart Home Automation</option>
                    <option>Fire & Safety Solutions</option>
                    <option>Server & NAS Setup</option>
                    <option>Firewall & Networking</option>
                    <option>Wi-Fi & Network Setup</option>
                    <option>Products & Equipment</option>
                    <option>AMC Service</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Your Message *" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-4 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none" />
                  <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300 w-full justify-center sm:w-auto">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>

              <div className="reveal reveal-delay-2">
                <div className="red-line mb-4" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Get In Touch</h2>
                <div className="space-y-5 mb-10">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 99989 94473", href: "tel:+919998994473" },
                    { icon: Mail, label: "Email", value: "info@nilkanthdigital.com", href: "mailto:info@nilkanthdigital.com" },
                    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919998994473?text=Hi%20Nilkanth%20Digital%2C%20I%20need%20your%20service" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-lg border border-border bg-card hover-lift">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{item.label}</h3>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Address</h3>
                      <p className="text-muted-foreground text-sm">Surat, Gujarat, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon–Sat: 9 AM – 8 PM | Sun: 10 AM – 5 PM</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border bg-card h-64 flex items-center justify-center gradient-border">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3 animate-float" />
                    <p className="text-muted-foreground text-sm">Google Maps Integration</p>
                    <p className="text-muted-foreground text-xs mt-1">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;