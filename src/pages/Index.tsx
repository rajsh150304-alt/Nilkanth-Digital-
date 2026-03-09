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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="CCTV and technology setup" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-5 animate-in">
              <Shield className="w-3.5 h-3.5 text-primary" />
              Trusted Technology Partner
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.15] mb-5 animate-in animate-in-delay-1">
              Your Complete{" "}
              <span className="text-primary">Security</span> & IT Solutions
            </h1>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-md animate-in animate-in-delay-2">
              Professional CCTV installation, computer repair, networking, and AMC services for homes and businesses.
            </p>
            <div className="flex flex-wrap gap-3 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-card transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-primary" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-in animate-in-delay-4">
              {[
                { num: "10+", label: "Years Experience" },
                { num: "1000+", label: "Happy Customers" },
                { num: "5000+", label: "Projects Done" },
                { num: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50">
                  <div className="text-xl md:text-2xl font-heading font-bold text-primary">{stat.num}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={scrollRef}>
        {/* Services */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-3">Our Services</h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">Comprehensive technology solutions for homes and businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className={`group rounded-lg border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${i % 5 + 1}`}
                >
                  {s.img ? (
                    <div className="img-overlay h-44">
                      <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="h-44 bg-secondary/30 flex items-center justify-center">
                      <s.icon className="w-12 h-12 text-primary/15" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                        <s.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                      </div>
                      <h3 className="font-heading font-semibold text-sm">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Nilkanth Digital</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2 mb-6">
                  Trusted by <span className="text-primary">1000+</span> Customers
                </h2>
                <div className="space-y-3">
                  {[
                    "10+ years of industry experience",
                    "Certified & trained technicians",
                    "Quick response & same-day service",
                    "Affordable & transparent pricing",
                    "Warranty on all repairs & installations",
                    "24/7 customer support available",
                  ].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${i % 5 + 1}`}>
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="rounded-lg overflow-hidden border border-border">
                  <img src={heroBg} alt="Our professional setup" className="w-full aspect-video object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mt-2">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={t.name} className={`p-6 rounded-lg border border-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
                  <div className="border-t border-border pt-3">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              Need Our Services?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919876543210"
                className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-card transition-colors duration-200 inline-flex items-center gap-2"
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
