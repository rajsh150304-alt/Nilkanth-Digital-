import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Monitor, HardDrive, Cpu, Fan, ChevronRight, Zap, Clock, Shield } from "lucide-react";
import desktopImg from "@/assets/desktop-repair.jpg";

const services = [
  { icon: HardDrive, title: "Hard Drive Issues", desc: "Data recovery, SSD upgrades, and storage solutions for faster performance.", price: "₹1,000" },
  { icon: Cpu, title: "Processor & RAM", desc: "CPU upgrades, RAM installation, and performance optimization.", price: "₹500" },
  { icon: Fan, title: "Cooling Problems", desc: "Fan replacement, thermal paste application, and overheating solutions.", price: "₹800" },
  { icon: Monitor, title: "Display Issues", desc: "Monitor repair, graphics card troubleshooting, and display connectivity.", price: "₹1,500" },
];

const DesktopRepair = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Desktop Repair Services" subtitle="Complete desktop computer repair and maintenance solutions" image={desktopImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Desktop Repair" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] top-10 -left-32 opacity-20" />
          
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
                { icon: Zap, title: "Same Day Service", desc: "Quick repairs for urgent requirements" },
                { icon: Shield, title: "Quality Parts", desc: "Genuine replacement components used" },
                { icon: Clock, title: "Home Service", desc: "Doorstep repair service available" },
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

export default DesktopRepair;
