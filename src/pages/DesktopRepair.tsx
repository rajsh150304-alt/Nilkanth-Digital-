import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Monitor, HardDrive, Cpu, Zap, Fan, ChevronRight } from "lucide-react";
import desktopImg from "@/assets/desktop-repair.jpg";

const services = [
  { icon: Cpu, title: "Hardware Repair", desc: "Motherboard, RAM, processor, and component replacement for desktops" },
  { icon: HardDrive, title: "Storage Solutions", desc: "HDD/SSD upgrade, data recovery, and RAID configurations" },
  { icon: Monitor, title: "Display & Peripherals", desc: "Monitor repair, keyboard, mouse, and peripheral troubleshooting" },
  { icon: Zap, title: "Power Supply", desc: "SMPS replacement, voltage issues, and UPS setup" },
  { icon: Fan, title: "Cooling & Maintenance", desc: "Thermal paste replacement, fan cleaning, and dust removal" },
];

const DesktopRepair = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Desktop Computer Repair" subtitle="Complete desktop repair solutions — from hardware to software" image={desktopImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Desktop Repair" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Our Desktop Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 reveal">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300">
                Schedule Repair <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DesktopRepair;
