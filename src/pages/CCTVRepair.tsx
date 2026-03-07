import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle, ChevronRight, AlertTriangle, Settings, RefreshCw } from "lucide-react";

const services = [
  { icon: Wrench, title: "Camera Repair", desc: "Fix blurry images, night vision issues, and hardware malfunctions" },
  { icon: RefreshCw, title: "DVR/NVR Repair", desc: "Hard drive replacement, firmware updates, and recording issues" },
  { icon: Settings, title: "System Upgrade", desc: "Upgrade your existing CCTV system to HD or 4K resolution" },
  { icon: AlertTriangle, title: "Emergency Service", desc: "Urgent repair service for critical security system failures" },
];

const CCTVRepair = () => {
  return (
    <Layout>
      <PageHero title="CCTV Repair & Maintenance" subtitle="Expert repair and maintenance services for all CCTV systems" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "CCTV Repair & Maintenance" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-xl border border-border bg-card hover-lift">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC */}
      <section className="py-16 lg:py-24 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-section-dark-foreground mb-6">Annual Maintenance Contract (AMC)</h2>
            <p className="text-section-dark-foreground/70 mb-8 leading-relaxed">
              Keep your CCTV system running perfectly with our AMC plans. Regular maintenance prevents costly breakdowns and ensures your security is never compromised.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                "Regular cleaning & inspection",
                "Priority support & response",
                "Free replacement of minor parts",
                "Software & firmware updates",
                "Monthly system health reports",
                "Discounted repair rates",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-section-dark-foreground/70">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Get AMC Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CCTVRepair;
