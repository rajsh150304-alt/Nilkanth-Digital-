import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Camera, Monitor, Laptop, Wifi, Wrench, Star, Phone, CheckCircle, ArrowRight, Zap, Home, Flame, Server, Lock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cctvDome from "@/assets/cctv-dome.jpg";
import laptopRepairImg from "@/assets/laptop-repair.jpg";
import networkingImg from "@/assets/networking.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import fireSafetyImg from "@/assets/fire-safety.jpg";
import serverNasImg from "@/assets/server-nas.jpg";
import firewallImg from "@/assets/firewall.jpg";

const services = [
  { icon: Camera, title: "CCTV Installation", desc: "Professional bullet, dome, wireless & outdoor camera installation", to: "/cctv-installation", img: cctvDome },
  { icon: Wrench, title: "CCTV Repair & AMC", desc: "Expert repair, maintenance and annual contracts", to: "/cctv-repair" },
  { icon: Laptop, title: "PC/Laptop Sales & Repair", desc: "Screen, battery, motherboard & software repairs for all brands", to: "/laptop-repair", img: laptopRepairImg },
  { icon: Home, title: "Smart Home Automation", desc: "Smart lighting, locks, climate control & voice assistants", to: "/smart-home", img: smartHomeImg },
  { icon: Flame, title: "Fire & Safety Solutions", desc: "Fire alarms, extinguishers, smoke detectors & safety audits", to: "/fire-safety", img: fireSafetyImg },
  { icon: Server, title: "Server & NAS Setup", desc: "Server installation, NAS storage, backup & cloud integration", to: "/server-nas", img: serverNasImg },
  { icon: Lock, title: "Firewall & Security", desc: "Firewall installation, VPN, web filtering & network protection", to: "/firewall", img: firewallImg },
  { icon: Wifi, title: "Networking & Wi-Fi", desc: "Network setup, troubleshooting, Wi-Fi & mesh solutions", to: "/networking", img: networkingImg },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner, Surat", text: "Nilkanth Digital installed CCTV and fire safety systems at our factory. Excellent work and very professional team!", rating: 5 },
  { name: "Priya Sharma", role: "Home Owner", text: "Got our home fully automated with smart lighting and locks. The team was knowledgeable and pricing was fair!", rating: 5 },
  { name: "Amit Patel", role: "Office Manager", text: "Their AMC service and server setup keeps our office IT running smoothly. Great support team!", rating: 5 },
];

const stats = [
  { num: "7+", label: "Years Experience", icon: Zap },
  { num: "1000+", label: "Happy Customers", icon: Star },
  { num: "5000+", label: "Projects Done", icon: CheckCircle },
  { num: "24/7", label: "Support Available", icon: Phone },
];

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Nilkanth Digital IT Solutions" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-48 -right-48" />
        <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-0 left-1/4" />

        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-32 pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm mb-6 animate-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/80">Trusted IT & Security Partner Since 2018 • Surat</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-5 animate-in animate-in-delay-1">
              Your Complete{" "}
              <span className="text-gradient">IT</span> &{" "}
              <span className="text-gradient">Security</span> Solutions
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-xl animate-in animate-in-delay-2">
              Professional CCTV installation, smart home automation, fire safety, server setup, networking, and computer services. Protecting homes, offices, schools, factories & businesses across Surat.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 md:px-7 py-3 md:py-3.5 rounded-lg font-semibold text-sm md:text-base btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center gap-2 glass-card px-5 md:px-7 py-3 md:py-3.5 rounded-lg font-semibold text-sm md:text-base hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Now
              </a>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-in animate-in-delay-4">
              {stats.map((stat) => (
                <div key={stat.label} className="group text-center p-3 md:p-5 rounded-xl glass-card gradient-border hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-4 md:w-5 h-4 md:h-5 text-primary mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                  <div className="text-xl md:text-3xl font-heading font-bold text-foreground">{stat.num}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={scrollRef}>
        {/* Services */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive IT & security solutions for homes, offices, and businesses</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className={`group rounded-xl border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}
                >
                  {s.img ? (
                    <div className="img-overlay h-44">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="h-44 bg-gradient-to-br from-secondary to-background flex items-center justify-center shimmer">
                      <s.icon className="w-16 h-16 text-primary/20" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <s.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading font-semibold text-sm group-hover:text-primary transition-colors">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 section-alt relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="glow-orb glow-orb-blue w-[400px] h-[400px] top-0 right-0 opacity-20" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Nilkanth Digital</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-8">
                  Trusted by <span className="text-gradient">1000+</span> Customers
                </h2>
                <div className="space-y-4">
                  {[
                    "Serving Surat since 2018 with 7+ years experience",
                    "Certified & trained technicians for all services",
                    "Quick response & same-day service available",
                    "Customized solutions for homes, offices & factories",
                    "Warranty on all repairs & installations",
                    "24/7 customer support available",
                  ].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${(i % 5) + 1}`}>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="rounded-xl overflow-hidden gradient-border">
                  <img src={heroBg} alt="Nilkanth Digital professional setup" className="w-full aspect-video object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] bottom-0 left-1/2 opacity-15" />

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">What Our Customers Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`p-7 rounded-xl border border-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-muted-foreground text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -bottom-48 left-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contact Nilkanth Digital today for a free consultation. We serve homes, offices, schools, factories & businesses across Surat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919876543210"
                className="glass-card px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;