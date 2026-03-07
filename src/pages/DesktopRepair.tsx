import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Monitor, HardDrive, Cpu, Zap, Fan, ChevronRight } from "lucide-react";

const services = [
  { icon: Cpu, title: "Hardware Repair", desc: "Motherboard, RAM, processor, and component replacement for desktops" },
  { icon: HardDrive, title: "Storage Solutions", desc: "HDD/SSD upgrade, data recovery, and RAID configurations" },
  { icon: Monitor, title: "Display & Peripherals", desc: "Monitor repair, keyboard, mouse, and peripheral troubleshooting" },
  { icon: Zap, title: "Power Supply", desc: "SMPS replacement, voltage issues, and UPS setup" },
  { icon: Fan, title: "Cooling & Maintenance", desc: "Thermal paste replacement, fan cleaning, and dust removal" },
];

const DesktopRepair = () => {
  return (
    <Layout>
      <PageHero title="Desktop Computer Repair" subtitle="Complete desktop repair solutions — from hardware to software" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Desktop Repair" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-xl border border-border bg-card hover-lift">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Schedule Repair <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DesktopRepair;
