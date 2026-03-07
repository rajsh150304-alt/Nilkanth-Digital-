import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Camera, Monitor, Laptop, Wifi, Wrench, Star, ChevronRight, Phone, CheckCircle, ArrowRight } from "lucide-react";
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
  { name: "Rajesh Kumar", role: "Business Owner", text: "Nilkanth Digital installed CCTV at my shop. Excellent work and very professional team! They completed the job in one day.", rating: 5 },
  { name: "Priya Sharma", role: "Home Owner", text: "Got my laptop repaired here. Fast service and reasonable pricing. They fixed my motherboard issue which others couldn't.", rating: 5 },
  { name: "Amit Patel", role: "Office Manager", text: "Their AMC service keeps our office IT running smoothly. Great support team, always available when needed!", rating: 5 },
];

const Index = () => {
  const scrollRef = useScrollReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="CCTV and technology setup" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsla(0,0%,0%,0.92)] via-[hsla(0,0%,0%,0.7)] to-[hsla(0,0%,0%,0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 glow-border rounded-full px-4 py-1.5 text-sm text-foreground/80 mb-6 animate-in">
              <Shield className="w-4 h-4 text-primary" />
              Trusted Technology Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] mb-6 animate-in animate-in-delay-1">
              Your Complete{" "}
              <span className="text-gradient">Security</span> & IT Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg animate-in animate-in-delay-2">
              Professional CCTV installation, computer repair, networking, and AMC services. Protecting your home and business with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 glow-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent">
          <div className="container mx-auto px-4 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in animate-in-delay-4">
              {[
                { num: "10+", label: "Years Experience" },
                { num: "1000+", label: "Happy Customers" },
                { num: "5000+", label: "Projects Done" },
                { num: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl glow-border bg-card/50 backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={scrollRef}>
        {/* Services */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive technology solutions for homes and businesses</p>
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
                    <div className="h-48 bg-secondary/50 flex items-center justify-center shimmer">
                      <s.icon className="w-16 h-16 text-primary/20" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-heading font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 section-alt">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Nilkanth Digital</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-8">
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
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="rounded-2xl overflow-hidden glow-border">
                  <img src={heroBg} alt="Our professional setup" className="w-full aspect-video object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`p-8 rounded-xl border border-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 hero-gradient opacity-90" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Need Our Services?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919876543210"
                className="glow-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
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
