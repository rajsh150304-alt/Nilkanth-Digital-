import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Monitor, Battery, Cpu, Code, ChevronRight } from "lucide-react";

const services = [
  { icon: Monitor, title: "Screen Replacement", desc: "Cracked, broken, or malfunctioning laptop screens replaced with genuine parts. We support all brands including HP, Dell, Lenovo, Acer, and Apple.", price: "Starting ₹2,500" },
  { icon: Battery, title: "Battery Issues", desc: "Battery not charging, draining fast, or swelling? We replace laptop batteries with high-quality compatible or original batteries.", price: "Starting ₹1,500" },
  { icon: Cpu, title: "Motherboard Repair", desc: "Expert motherboard-level repair including chip replacement, power issues, and component-level diagnostics.", price: "Starting ₹3,000" },
  { icon: Code, title: "Software Problems", desc: "OS installation, virus removal, data recovery, driver updates, and performance optimization for slow laptops.", price: "Starting ₹500" },
];

const LaptopRepair = () => {
  return (
    <Layout>
      <PageHero title="Laptop Repair Services" subtitle="Expert laptop repair for all brands — fast, reliable, and affordable" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Laptop Repair" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-xl border border-border bg-card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <s.icon className="w-10 h-10 text-primary" />
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">{s.price}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Book Repair <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LaptopRepair;
