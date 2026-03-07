import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Shield, Camera, Monitor, Laptop, Wifi, Wrench, Star, ChevronRight, Phone, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Camera, title: "CCTV Installation", desc: "Professional installation of bullet, dome, wireless & outdoor cameras", to: "/cctv-installation" },
  { icon: Wrench, title: "CCTV Repair", desc: "Expert repair and maintenance for all CCTV systems", to: "/cctv-repair" },
  { icon: Laptop, title: "Laptop Repair", desc: "Screen, battery, motherboard & software repairs", to: "/laptop-repair" },
  { icon: Monitor, title: "Desktop Repair", desc: "Complete desktop computer repair solutions", to: "/desktop-repair" },
  { icon: Wifi, title: "Networking", desc: "Network setup, troubleshooting & security solutions", to: "/networking" },
  { icon: Shield, title: "AMC Services", desc: "Annual maintenance contracts for worry-free IT", to: "/contact" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Business Owner", text: "Nilkanth Digital installed CCTV at my shop. Excellent work and very professional team!", rating: 5 },
  { name: "Priya Sharma", role: "Home Owner", text: "Got my laptop repaired here. Fast service and reasonable pricing. Highly recommended!", rating: 5 },
  { name: "Amit Patel", role: "Office Manager", text: "Their AMC service keeps our office IT running smoothly. Great support team!", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="CCTV and technology setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsla(0,0%,0%,0.85)] via-[hsla(0,0%,0%,0.6)] to-[hsla(0,0%,0%,0.4)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary-foreground/90 mb-6 animate-in">
              <Shield className="w-4 h-4 text-primary" />
              Trusted Technology Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-in animate-in-delay-1">
              Your Complete <span className="text-primary">Security</span> & IT Solutions
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed animate-in animate-in-delay-2">
              Professional CCTV installation, computer repair, networking, and AMC services. Protecting your home and business with cutting-edge technology.
            </p>
            <div className="flex flex-wrap gap-4 animate-in animate-in-delay-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get Free Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 glass-card text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive technology solutions for homes and businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group p-8 rounded-xl border border-border bg-card hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Nilkanth Digital</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-section-dark-foreground mt-2 mb-8">
                Trusted by 1000+ Customers
              </h2>
              <div className="space-y-5">
                {[
                  "10+ years of industry experience",
                  "Certified & trained technicians",
                  "Quick response & same-day service",
                  "Affordable & transparent pricing",
                  "Warranty on all repairs & installations",
                  "24/7 customer support available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-section-dark-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "10+", label: "Years Experience" },
                { num: "1000+", label: "Happy Customers" },
                { num: "5000+", label: "Projects Done" },
                { num: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl glass-card text-center">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">{stat.num}</div>
                  <div className="text-sm text-section-dark-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-8 rounded-xl border border-border bg-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Need Our Services?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Contact us today for a free consultation and quote. We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
