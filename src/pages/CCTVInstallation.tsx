import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Camera, Shield, Wifi, Eye, CheckCircle, ChevronRight } from "lucide-react";

const cameraTypes = [
  { icon: Camera, title: "Bullet Cameras", desc: "Long-range outdoor surveillance with weatherproof design. Ideal for parking lots, entrances, and perimeter security.", features: ["Night vision", "Weatherproof IP66", "Long range"] },
  { icon: Eye, title: "Dome Cameras", desc: "Discreet indoor/outdoor cameras with wide-angle view. Perfect for retail stores, offices, and lobbies.", features: ["Wide angle", "Vandal-proof", "360° coverage"] },
  { icon: Wifi, title: "Wireless Cameras", desc: "Easy-to-install wire-free cameras with remote monitoring. Great for homes and small businesses.", features: ["Wi-Fi enabled", "App control", "Easy install"] },
  { icon: Shield, title: "Outdoor Security", desc: "Heavy-duty cameras built to withstand extreme weather. Designed for construction sites and warehouses.", features: ["4K resolution", "Motion detection", "Cloud storage"] },
];

const steps = [
  { num: "01", title: "Site Survey", desc: "Our experts visit your location to assess security needs" },
  { num: "02", title: "Custom Plan", desc: "We design a tailored CCTV solution for your requirements" },
  { num: "03", title: "Installation", desc: "Professional installation with minimal disruption" },
  { num: "04", title: "Testing & Training", desc: "Complete system testing and user training provided" },
];

const CCTVInstallation = () => {
  return (
    <Layout>
      <PageHero title="CCTV Installation" subtitle="Professional CCTV camera installation for homes, offices, and businesses" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "CCTV Installation" }]} />
      </div>

      {/* Camera Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Camera Types</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Choose the Right Camera</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cameraTypes.map((cam) => (
              <div key={cam.title} className="p-8 rounded-xl border border-border bg-card hover-lift">
                <cam.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">{cam.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cam.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cam.features.map((f) => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-section-dark-foreground mt-2 mb-4">Installation Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center p-6">
                <div className="text-4xl font-heading font-bold text-primary/30 mb-3">{step.num}</div>
                <h3 className="font-heading font-semibold text-section-dark-foreground mb-2">{step.title}</h3>
                <p className="text-section-dark-foreground/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Ready to Secure Your Property?</h2>
          <p className="text-primary-foreground/80 mb-8">Get a free site survey and quotation today</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all">
            Get Free Quote <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CCTVInstallation;
