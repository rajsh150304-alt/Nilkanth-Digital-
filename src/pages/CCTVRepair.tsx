import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, ChevronRight, AlertTriangle, Settings, RefreshCw, Shield, Clock } from "lucide-react";
import cctvRepairImg from "@/assets/cctv-repair.jpg";

const services = [
  { icon: Wrench, title: "Camera Repair", desc: "Fix blurry images, night vision issues, and hardware malfunctions" },
  { icon: RefreshCw, title: "DVR/NVR Repair", desc: "Hard drive replacement, firmware updates, and recording issues" },
  { icon: Settings, title: "System Upgrade", desc: "Upgrade your existing CCTV system to HD or 4K resolution" },
  { icon: AlertTriangle, title: "Emergency Service", desc: "Urgent repair service for critical security system failures" },
];

const amcFeatures = [
  { icon: Clock, text: "Regular cleaning & inspection" },
  { icon: Shield, text: "Priority support & response" },
  { icon: Wrench, text: "Free replacement of minor parts" },
  { icon: RefreshCw, text: "Software & firmware updates" },
  { icon: CheckCircle, text: "Monthly system health reports" },
  { icon: AlertTriangle, text: "Discounted repair rates" },
];

const CCTVRepair = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="CCTV Repair & Maintenance" subtitle="Expert repair and maintenance services for all CCTV systems" image={cctvRepairImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "CCTV Repair & Maintenance" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] top-10 -left-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Repair Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
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
          <div className="glow-orb glow-orb-primary w-[400px] h-[400px] bottom-0 right-0 opacity-20" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 reveal">
                <div className="red-line mx-auto mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">AMC Plans</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Annual Maintenance Contract</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto">
                  Keep your CCTV system running perfectly with our AMC plans. Regular maintenance prevents costly breakdowns.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {amcFeatures.map((item, i) => (
                  <div key={item.text} className={`flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover-lift reveal reveal-delay-${(i % 3) + 1}`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center reveal">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
                  Get AMC Quote <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CCTVRepair;
