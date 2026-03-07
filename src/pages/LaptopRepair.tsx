import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Monitor, Battery, Cpu, Code, ChevronRight } from "lucide-react";
import laptopImg from "@/assets/laptop-repair.jpg";

const services = [
  { icon: Monitor, title: "Screen Replacement", desc: "Cracked, broken, or malfunctioning laptop screens replaced with genuine parts. We support all brands including HP, Dell, Lenovo, Acer, and Apple.", price: "Starting ₹2,500" },
  { icon: Battery, title: "Battery Issues", desc: "Battery not charging, draining fast, or swelling? We replace laptop batteries with high-quality compatible or original batteries.", price: "Starting ₹1,500" },
  { icon: Cpu, title: "Motherboard Repair", desc: "Expert motherboard-level repair including chip replacement, power issues, and component-level diagnostics.", price: "Starting ₹3,000" },
  { icon: Code, title: "Software Problems", desc: "OS installation, virus removal, data recovery, driver updates, and performance optimization for slow laptops.", price: "Starting ₹500" },
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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Repair Services & Pricing</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full glow-border text-primary">{s.price}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 reveal">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300">
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
