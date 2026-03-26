import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Camera, Laptop, Wifi, Wrench, Star, Phone, CheckCircle, ArrowRight, Zap, Home, Flame, Server, Lock, Monitor, Printer, PhoneCall, Tv, Fingerprint, Shield, Eye, Settings } from "lucide-react";
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
  { icon: Camera, title: "CCTV Installation", desc: "Professional bullet, dome, wireless & outdoor camera setup for complete surveillance coverage", to: "/cctv-installation", img: cctvDome },
  { icon: Wrench, title: "CCTV Repair & AMC", desc: "Expert repair, preventive maintenance and annual service contracts to keep your systems running", to: "/cctv-repair" },
  { icon: Laptop, title: "Computer / Laptop", desc: "Complete sales, repair & servicing for all major brands — HP, Dell, Lenovo, Asus & more", to: "/laptop-repair", img: laptopRepairImg },
  { icon: Printer, title: "Printers", desc: "All printer brands available with full sales, repair & cartridge refilling services", to: "/products/printers" },
  { icon: Fingerprint, title: "Biometric Systems", desc: "Advanced attendance tracking & access control biometric solutions for offices & factories", to: "/products" },
  { icon: PhoneCall, title: "Intercom Systems", desc: "Audio & video intercom installation for apartments, offices & commercial buildings", to: "/products/intercom" },
  { icon: Tv, title: "LED TV", desc: "LED TV sales, professional wall mounting & home theatre setup services", to: "/products" },
  { icon: Home, title: "Smart Home", desc: "Transform your home with smart lighting, locks, climate control & voice assistants", to: "/smart-home", img: smartHomeImg },
  { icon: Flame, title: "Fire & Safety", desc: "Complete fire safety — alarms, extinguishers, smoke detectors & compliance audits", to: "/fire-safety", img: fireSafetyImg },
  { icon: Server, title: "Server & NAS", desc: "Enterprise server installation, NAS storage, backup solutions & cloud integration", to: "/server-nas", img: serverNasImg },
  { icon: Lock, title: "Firewall & Security", desc: "Hardware firewall setup, VPN configuration, web filtering & network protection", to: "/firewall", img: firewallImg },
  { icon: Wifi, title: "Networking & Wi-Fi", desc: "Complete network setup — structured cabling, Wi-Fi, mesh routers & troubleshooting", to: "/networking", img: networkingImg },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner, Surat", text: "Nilkanth Digital installed CCTV and fire safety systems at our factory. Excellent work and very professional team! Highly recommended for any business.", rating: 5 },
  { name: "Priya Sharma", role: "Home Owner", text: "Got our home fully automated with smart lighting and locks. The team was knowledgeable and pricing was very fair. Great after-sales support!", rating: 5 },
  { name: "Amit Patel", role: "Office Manager", text: "Their AMC service and server setup keeps our office IT running smoothly. Quick response time and great support team. Best in Surat!", rating: 5 },
];

const stats = [
  { num: 7, suffix: "+", label: "Years Experience", icon: Zap },
  { num: 1000, suffix: "+", label: "Happy Customers", icon: Star },
  { num: 5000, suffix: "+", label: "Projects Completed", icon: CheckCircle },
  { num: 24, suffix: "/7", label: "Support Available", icon: Phone },
];

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
    <div ref={ref} className="group text-center p-6 md:p-8 rounded-2xl bg-card/90 backdrop-blur-lg border border-border/50 hover:border-primary/40 hover:bg-card transition-all duration-500 hover-lift">
      <stat.icon className="w-7 h-7 text-primary mx-auto mb-3 group-hover:scale-125 transition-transform duration-500" />
      <div className="text-3xl md:text-5xl font-heading font-bold text-foreground">{count}{stat.suffix}</div>
      <div className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</div>
    </div>
  );
};

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full particle"
        style={{
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: `hsla(0, 80%, 55%, ${0.1 + Math.random() * 0.2})`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 10}s`,
        }}
      />
    ))}
  </div>
);

/* Rotating 3D-style orbit ring */
const OrbitRing = () => (
  <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] hidden lg:block">
    {/* Outer ring */}
    <div className="absolute inset-0 rounded-full border border-primary/10 orbit-spin" />
    {/* Middle ring */}
    <div className="absolute inset-8 rounded-full border border-primary/15 orbit-spin-reverse" />
    {/* Inner ring */}
    <div className="absolute inset-16 rounded-full border border-primary/20 orbit-spin" style={{ animationDuration: "12s" }} />
    
    {/* Orbiting icons */}
    <div className="absolute inset-0 orbit-spin">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
        <Camera className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
        <Wifi className="w-5 h-5 text-primary" />
      </div>
    </div>
    <div className="absolute inset-0 orbit-spin-reverse">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
        <Shield className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
        <Laptop className="w-5 h-5 text-primary" />
      </div>
    </div>

    {/* Center logo */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 rounded-2xl bg-card/90 border border-primary/30 flex items-center justify-center shadow-2xl shadow-primary/20 pulse-glow-red">
        <img src={logo} alt="" className="w-16 h-16 object-contain" />
      </div>
    </div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/70" />
        </div>

        <FloatingParticles />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="glow-orb glow-orb-primary w-[800px] h-[800px] -top-48 -right-48 opacity-20" />
        <div className="glow-orb glow-orb-blue w-[500px] h-[500px] bottom-0 left-0 opacity-10" />

        {/* Floating decorative shapes */}
        <div className="absolute top-1/4 right-[12%] w-24 h-24 border-2 border-primary/15 rounded-3xl rotate-12 animate-float hidden lg:block" />
        <div className="absolute bottom-1/3 right-[22%] w-16 h-16 border border-primary/10 rounded-xl -rotate-12 animate-float hidden lg:block" style={{ animationDelay: "1.5s" }} />

        {/* Orbit Ring 3D Effect */}
        <OrbitRing />

        <div className="container mx-auto px-4 relative z-10 pt-28 md:pt-32">
          <div className="max-w-3xl">
            {/* Logo badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-6 py-3 mb-8 animate-in">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/90 font-medium text-sm md:text-base">Trusted IT & Security Partner Since 2018 — Surat, Gujarat</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground leading-[1.05] mb-6 animate-in animate-in-delay-1">
              Protect. Connect.
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">Grow.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none">
                  <path d="M2 8C20 2 60 2 118 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-foreground/70 mb-3 font-heading font-bold tracking-wide animate-in animate-in-delay-2">
              Complete IT & Security Solutions
            </p>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-in animate-in-delay-2">
              From CCTV cameras to smart homes, laptops to servers — we handle your complete technology needs. Sales, Repair & Service for homes, offices & businesses across Surat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base md:text-lg btn-shine hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:scale-[1.03] transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
              <a
                href="tel:+919998994473"
                className="group inline-flex items-center gap-3 bg-foreground/5 backdrop-blur-md border border-border/50 px-8 py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center pulse-glow">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                +91 99989 94473
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base text-muted-foreground animate-in animate-in-delay-4">
              {[
                { icon: CheckCircle, text: "Free Consultation" },
                { icon: Zap, text: "Same Day Service" },
                { icon: Shield, text: "Warranty Guaranteed" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </span>
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
              <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest">What We Offer</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-4">Our Services</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">Comprehensive IT & security solutions — Sales, Repair & Service for homes, offices, and businesses across Surat</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                      <s.icon className="w-16 h-16 text-primary/15" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
                <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest">Why Nilkanth Digital</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-8">
                  Trusted by <span className="text-gradient">1000+</span> Customers
                </h2>
                <div className="space-y-5">
                  {[
                    "Serving Surat since 2018 with 7+ years of experience",
                    "Complete Sales, Repair & Service under one roof",
                    "Certified & trained technicians for all services",
                    "Quick response with same-day service available",
                    "CCTV, Computer, Printer, Intercom, Biometric & more",
                    "Customized solutions for homes, offices & factories",
                    "Warranty on all repairs & installations",
                    "24/7 customer support — always just a call away",
                  ].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${(i % 5) + 1}`}>
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/80 text-base md:text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="relative">
                  <div className="rounded-xl overflow-hidden gradient-border">
                    <img src={heroBg} alt="Nilkanth Digital professional setup" className="w-full aspect-video object-cover" loading="lazy" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-card rounded-2xl border border-border shadow-2xl flex items-center justify-center animate-float">
                    <img src={logo} alt="Nilkanth Digital" className="w-20 h-20 object-contain" />
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
              <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-widest">Testimonials</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2">What Our Customers Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`p-7 rounded-xl border border-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-base">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-base">{t.name}</div>
                      <div className="text-muted-foreground text-sm">{t.role}</div>
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
            <img src={logo} alt="" className="w-20 h-20 mx-auto mb-6 rounded-xl animate-float" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg mx-auto">
              Contact Nilkanth Digital for a free consultation. Sales, Repair & Service for homes, offices, schools, factories & businesses across Surat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-base md:text-lg btn-shine hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919998994473"
                className="glass-card px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-primary" />
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
