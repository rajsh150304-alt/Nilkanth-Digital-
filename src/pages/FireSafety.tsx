import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Flame, Bell, ShieldAlert, AlertTriangle, CheckCircle, ChevronRight, Siren, Eye } from "lucide-react";
import fireSafetyImg from "@/assets/fire-safety.jpg";

const services = [
  { icon: Bell, title: "Fire Alarm Systems", desc: "Advanced fire detection and alarm systems with smoke, heat, and multi-sensor detectors for early warning." },
  { icon: Flame, title: "Fire Extinguishers", desc: "Supply, installation, and annual refilling of all types — ABC, CO2, foam, and water-based extinguishers." },
  { icon: Siren, title: "Emergency Sirens", desc: "High-decibel alarm sirens and strobe lights for immediate evacuation alerts in large premises." },
  { icon: Eye, title: "Smoke Detectors", desc: "Photoelectric and ionization smoke detectors with wireless connectivity and mobile alerts." },
  { icon: ShieldAlert, title: "Fire Suppression", desc: "Automatic fire suppression systems for server rooms, kitchens, and industrial applications." },
  { icon: AlertTriangle, title: "Safety Audits", desc: "Complete fire safety audits, compliance checks, and NOC assistance for your premises." },
];

const FireSafety = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Fire & Safety Solutions" subtitle="Comprehensive fire protection and safety systems for complete peace of mind" image={fireSafetyImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Fire & Safety" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Fire Safety Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-7 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary" />
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
          <div className="glow-orb glow-orb-blue w-[400px] h-[400px] bottom-0 right-0 opacity-15" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal reveal-delay-1">
                <div className="rounded-xl overflow-hidden gradient-border">
                  <img src={fireSafetyImg} alt="Fire safety installation" className="w-full aspect-video object-cover" loading="lazy" />
                </div>
              </div>
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">We Serve</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-8">Who We Protect</h2>
                <div className="space-y-4">
                  {[
                    "Offices & Corporate Buildings",
                    "Schools, Colleges & Hostels",
                    "Factories & Warehouses",
                    "Hospitals & Clinics",
                    "Hotels & Restaurants",
                    "Residential Apartments & Societies",
                  ].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${(i % 5) + 1}`}>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="glow-orb glow-orb-primary w-[400px] h-[400px] -bottom-32 left-1/2 -translate-x-1/2 opacity-30" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Protect Your Premises Today</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get a free fire safety audit and quotation for your property</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
              Get Safety Audit <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FireSafety;