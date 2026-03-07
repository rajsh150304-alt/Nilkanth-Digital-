import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="reveal">
                <div className="red-line mb-4" />
                <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text" placeholder="Your Name *" required
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                    <input
                      type="tel" placeholder="Phone Number *" required
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <input
                    type="email" placeholder="Email Address"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                  <select
                    value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  >
                    <option value="">Select Service</option>
                    <option>CCTV Installation</option>
                    <option>CCTV Repair</option>
                    <option>Laptop Repair</option>
                    <option>Desktop Repair</option>
                    <option>Networking</option>
                    <option>AMC Service</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    placeholder="Your Message *" required rows={4}
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300 w-full justify-center sm:w-auto"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>

              <div className="reveal reveal-delay-2">
                <div className="red-line mb-4" />
                <h2 className="text-2xl font-heading font-bold mb-6">Get In Touch</h2>
                <div className="space-y-5 mb-10">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: Mail, label: "Email", value: "info@nilkanthdigital.com", href: "mailto:info@nilkanthdigital.com" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{item.label}</h3>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Address</h3>
                      <p className="text-muted-foreground text-sm">123 Tech Street, City Center, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon–Sat: 9:00 AM – 8:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sunday: 10:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-border bg-card h-64 flex items-center justify-center glow-border">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-primary/30 mx-auto mb-2 animate-float" />
                    <p className="text-muted-foreground text-sm">Google Maps Location</p>
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
