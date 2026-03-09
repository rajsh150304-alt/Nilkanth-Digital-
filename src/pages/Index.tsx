import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Camera, Monitor, Laptop, Wifi, Wrench, Star, Phone, CheckCircle, ArrowRight, Play, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cctvDome from "@/assets/cctv-dome.jpg";
import laptopRepairImg from "@/assets/laptop-repair.jpg";
import networkingImg from "@/assets/networking.jpg";

const services = [
  { icon: Camera, title: "CCTV Installation", desc: "Professional installation of bullet, dome, wireless & outdoor cameras", to: "/cctv-installation", img: cctvDome },
  { icon: Wrench, title: "CCTV Repair & AMC", desc: "Expert repair, maintenance and annual contracts", to: "/cctv-repair" },
  { icon: Laptop, title: "Laptop Repair", desc: "Screen, battery, motherboard & software repairs", to: "/laptop-repair", img: laptopRepairImg },
  { icon: Monitor, title: "Desktop Repair", desc: "Complete desktop computer repair solutions", to: "/desktop-repair" },
  { icon: Wifi, title: "Networking", desc: "Network setup, troubleshooting & security", to: "/networking", img: networkingImg },
  { icon: Shield, title: "AMC Services", desc: "Annual maintenance for worry-free IT", to: "/contact" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner", text: "Nilkanth Digital installed CCTV at my shop. Excellent work and very professional team!", rating: 5 },
  { name: "Priya Sharma", role: "Home Owner", text: "Got my laptop repaired here. Fast service and reasonable pricing. Highly recommend!", rating: 5 },
  { name: "Amit Patel", role: "Office Manager", text: "Their AMC service keeps our office IT running smoothly. Great support team!", rating: 5 },
];

const stats = [
  { num: "10+", label: "Years Experience", icon: Zap },
  { num: "1000+", label: "Happy Customers", icon: Star },
  { num: "5000+", label: "Projects Done", icon: CheckCircle },
  { num: "24/7", label: "Support Available", icon: Phone },
];

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="Technology background" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Glow orbs */}
        <div className="glow-orb glow-orb-primary w-[500px] h-[500px] -top-48 -right-48" />
        <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-0 left-1/4" />

        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm mb-6 animate-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/80">Trusted by 1000+ customers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6 animate-in animate-in-delay-1">
              Your Complete{" "}
              <span className="text-gradient">Security</span> &{" "}
              <span className="text-gradient">IT</span> Solutions
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl animate-in animate-in-delay-2">
              Professional CCTV installation, computer repair, networking, and AMC services. Protecting your home and business with cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center gap-2 glass-card px-7 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in animate-in-delay-4">
              {stats.map((stat) => (
                <div key={stat.label} className="group text-center p-5 rounded-xl glass-card gradient-border hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={scrollRef}>
        {/* Services Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive technology solutions for homes and businesses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className={`group rounded-xl border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${i % 5 + 1}`}
                >
                  {s.img ? (
                    <div className="img-overlay h-48">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center shimmer">
                      <s.icon className="w-16 h-16 text-primary/20" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
                    "10+ years of industry experience",
                    "Certified & trained technicians",
                    "Quick response & same-day service",
                    "Affordable & transparent pricing",
                    "Warranty on all repairs & installations",
                    "24/7 customer support available",
                  ].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${i % 5 + 1}`}>
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
                  <img src={heroBg} alt="Professional setup" className="w-full aspect-video object-cover" loading="lazy" />
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
              Contact us today for a free consultation and quote. We're here to help!
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
