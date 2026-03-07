import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, ChevronRight, AlertTriangle, Settings, RefreshCw } from "lucide-react";
import cctvRepairImg from "@/assets/cctv-repair.jpg";

const services = [
  { icon: Wrench, title: "Camera Repair", desc: "Fix blurry images, night vision issues, and hardware malfunctions" },
  { icon: RefreshCw, title: "DVR/NVR Repair", desc: "Hard drive replacement, firmware updates, and recording issues" },
  { icon: Settings, title: "System Upgrade", desc: "Upgrade your existing CCTV system to HD or 4K resolution" },
  { icon: AlertTriangle, title: "Emergency Service", desc: "Urgent repair service for critical security system failures" },
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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Our Repair Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
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
          </div>
        </section>

        <section className="py-16 lg:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 reveal">
                <div className="red-line mx-auto mb-4" />
                <h2 className="text-3xl font-heading font-bold">Annual Maintenance Contract (AMC)</h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Keep your CCTV system running perfectly with our AMC plans. Regular maintenance prevents costly breakdowns.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Regular cleaning & inspection",
                  "Priority support & response",
                  "Free replacement of minor parts",
                  "Software & firmware updates",
                  "Monthly system health reports",
                  "Discounted repair rates",
                ].map((item, i) => (
                  <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${(i % 3) + 1}`}>
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center reveal">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300">
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
