import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Camera, Laptop, Wifi, Wrench, Star, Phone, CheckCircle, ArrowRight, Zap, Home, Flame, Server, Lock, Monitor, Printer, PhoneCall, Tv, Fingerprint, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cctvDome from "@/assets/cctv-dome.jpg";
import laptopRepairImg from "@/assets/laptop-repair.jpg";
import networkingImg from "@/assets/networking.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";
import fireSafetyImg from "@/assets/fire-safety.jpg";
import serverNasImg from "@/assets/server-nas.jpg";
import firewallImg from "@/assets/firewall.jpg";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";

const services = [
  { icon: Camera, title: "CCTV Installation", desc: "Professional bullet, dome, wireless & outdoor camera installation", to: "/cctv-installation", img: cctvDome },
  { icon: Wrench, title: "CCTV Repair & AMC", desc: "Expert repair, maintenance and annual contracts", to: "/cctv-repair" },
  { icon: Laptop, title: "Computer / Laptop", desc: "Sales, repair & service for all brands and models", to: "/laptop-repair", img: laptopRepairImg },
  { icon: Printer, title: "Printers", desc: "All printer brands available — sales, repair & service", to: "/products/printers" },
  { icon: Fingerprint, title: "Biometric Systems", desc: "Attendance & access control biometric solutions", to: "/products" },
  { icon: PhoneCall, title: "Intercom Systems", desc: "Audio & video intercom for homes, offices & buildings", to: "/products/intercom" },
  { icon: Tv, title: "LED TV", desc: "LED TV sales, installation & wall mounting services", to: "/products" },
  { icon: Home, title: "Smart Home", desc: "Smart lighting, locks, climate control & voice assistants", to: "/smart-home", img: smartHomeImg },
  { icon: Flame, title: "Fire & Safety", desc: "Fire alarms, extinguishers, smoke detectors & safety audits", to: "/fire-safety", img: fireSafetyImg },
  { icon: Server, title: "Server & NAS", desc: "Server installation, NAS storage, backup & cloud integration", to: "/server-nas", img: serverNasImg },
  { icon: Lock, title: "Firewall & Security", desc: "Firewall installation, VPN, web filtering & protection", to: "/firewall", img: firewallImg },
  { icon: Wifi, title: "Networking & Wi-Fi", desc: "Network setup, troubleshooting, Wi-Fi & mesh solutions", to: "/networking", img: networkingImg },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner, Surat", text: "Nilkanth Digital installed CCTV and fire safety systems at our factory. Excellent work and very professional team!", rating: 5 },
  { name: "Priya Sharma", role: "Home Owner", text: "Got our home fully automated with smart lighting and locks. The team was knowledgeable and pricing was fair!", rating: 5 },
  { name: "Amit Patel", role: "Office Manager", text: "Their AMC service and server setup keeps our office IT running smoothly. Great support team!", rating: 5 },
];

const stats = [
  { num: 7, suffix: "+", label: "Years Experience", icon: Zap },
  { num: 1000, suffix: "+", label: "Happy Customers", icon: Star },
  { num: 5000, suffix: "+", label: "Projects Done", icon: CheckCircle },
  { num: 24, suffix: "/7", label: "Support Available", icon: Phone },
];

// Animated counter hook
const useCounter = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const { count, ref } = useCounter(stat.num);
  return (
    <div ref={ref} className="group text-center p-5 md:p-8 rounded-2xl bg-card/90 backdrop-blur-lg border border-border/50 hover:border-primary/40 hover:bg-card transition-all duration-500 hover-lift">
      <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-125 transition-transform duration-500" />
      <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">{count}{stat.suffix}</div>
      <div className="text-xs md:text-sm text-muted-foreground mt-1.5">{stat.label}</div>
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-primary/20 rounded-full particle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 10}s`,
        }}
      />
    ))}
  </div>
);

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="Nilkanth Digital IT Solutions" className="w-full h-full object-cover scale-105" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
        </div>

        <FloatingParticles />
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="glow-orb glow-orb-primary w-[800px] h-[800px] -top-48 -right-48 opacity-25" />
        <div className="glow-orb glow-orb-blue w-[500px] h-[500px] bottom-0 left-0 opacity-15" />

        {/* Floating decorative shapes */}
        <div className="absolute top-1/4 right-[12%] w-24 h-24 border-2 border-primary/15 rounded-3xl rotate-12 animate-float hidden lg:block" />
        <div className="absolute bottom-1/3 right-[22%] w-16 h-16 border border-primary/10 rounded-xl -rotate-12 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[60%] right-[8%] w-3 h-3 bg-primary/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: "0.5s" }} />

        <div className="container mx-auto px-4 relative z-10 pt-28 md:pt-32">
          <div className="max-w-3xl">
            {/* Logo badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-6 py-3 mb-8 animate-in">
              <img src={logo} alt="" className="w-8 h-8 rounded-full" width={32} height={32} />
              <span className="text-foreground/90 font-medium text-sm">Trusted IT & Security Partner Since 2018 • Surat</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] mb-6 animate-in animate-in-delay-1">
              Your Complete
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">IT & Security</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 150 2 298 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
              <br />
              Solutions
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-foreground/60 mb-4 font-heading font-semibold tracking-wide animate-in animate-in-delay-2">
              SALES • REPAIR • SERVICE
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-in animate-in-delay-2">
              CCTV, Computer, Laptop, Printer, Intercom, Biometric, LED TV, Networking, Smart Home, Fire Safety & more — serving homes, offices & businesses across Surat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base btn-shine hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:scale-[1.03] transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
              <a
                href="tel:+919998994473"
                className="group inline-flex items-center gap-3 bg-foreground/5 backdrop-blur-md border border-border/50 px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center pulse-glow">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                +91 99989 94473
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground animate-in animate-in-delay-4">
              {["✓ Free Consultation", "✓ Same Day Service", "✓ Warranty Guaranteed"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-12 md:-mt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <div ref={scrollRef}>
        {/* Services */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive IT & security solutions — Sales, Repair & Service for homes, offices, and businesses</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className={`group rounded-xl border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}
                >
                  {s.img ? (
                    <div className="img-overlay h-40">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="h-40 bg-gradient-to-br from-secondary to-background flex items-center justify-center shimmer">
                      <s.icon className="w-14 h-14 text-primary/20" />
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
        <section className="py-16 lg:py-24 section-alt relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="glow-orb glow-orb-blue w-[400px] h-[400px] top-0 right-0 opacity-20" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Nilkanth Digital</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-8">
                  Trusted by <span className="text-gradient">1000+</span> Customers
                </h2>
                <div className="space-y-4">
                  {[
                    "Serving Surat since 2018 with 7+ years experience",
                    "Complete Sales, Repair & Service under one roof",
                    "Certified & trained technicians for all services",
                    "Quick response & same-day service available",
                    "CCTV, Computer, Printer, Intercom, Biometric & more",
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
                <div className="relative">
                  <div className="rounded-xl overflow-hidden gradient-border">
                    <img src={heroBg} alt="Nilkanth Digital professional setup" className="w-full aspect-video object-cover" loading="lazy" />
                  </div>
                  {/* Floating logo overlay */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-card rounded-2xl border border-border shadow-2xl flex items-center justify-center animate-float">
                    <img src={logo} alt="Nilkanth Digital" className="w-16 h-16 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
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
        <section className="py-16 lg:py-20 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -bottom-48 left-1/2 -translate-x-1/2" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <img src={logo} alt="" className="w-16 h-16 mx-auto mb-6 rounded-xl animate-float" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contact Nilkanth Digital for a free consultation. Sales, Repair & Service — homes, offices, schools, factories & businesses across Surat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919998994473"
                className="glass-card px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 99989 94473
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
