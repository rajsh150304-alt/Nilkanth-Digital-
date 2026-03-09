import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Monitor, Battery, Cpu, Code, ChevronRight, Zap, Clock, Shield } from "lucide-react";
import laptopImg from "@/assets/laptop-repair.jpg";

const services = [
  { icon: Monitor, title: "Screen Replacement", desc: "Cracked, broken, or malfunctioning laptop screens replaced with genuine parts. We support all brands including HP, Dell, Lenovo, Acer, and Apple.", price: "₹2,500" },
  { icon: Battery, title: "Battery Issues", desc: "Battery not charging, draining fast, or swelling? We replace laptop batteries with high-quality compatible or original batteries.", price: "₹1,500" },
  { icon: Cpu, title: "Motherboard Repair", desc: "Expert motherboard-level repair including chip replacement, power issues, and component-level diagnostics.", price: "₹3,000" },
  { icon: Code, title: "Software Problems", desc: "OS installation, virus removal, data recovery, driver updates, and performance optimization for slow laptops.", price: "₹500" },
];

const LaptopRepair = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Laptop Repair Services" subtitle="Expert laptop repair for all brands — fast, reliable, and affordable" image={laptopImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Laptop Repair" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Repair Services & Pricing</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-sm font-bold px-4 py-2 rounded-full gradient-border text-primary">Starting {s.price}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 section-alt relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Zap, title: "Quick Turnaround", desc: "Most repairs completed within 24-48 hours" },
                { icon: Shield, title: "Warranty", desc: "All repairs come with service warranty" },
                { icon: Clock, title: "Free Diagnosis", desc: "No charge for initial problem assessment" },
              ].map((item, i) => (
                <div key={item.title} className={`text-center p-8 rounded-xl gradient-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center reveal">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
                Book Repair <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LaptopRepair;
