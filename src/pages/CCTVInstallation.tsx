import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Camera, Shield, Wifi, Eye, ChevronRight, CheckCircle } from "lucide-react";
import cctvDome from "@/assets/cctv-dome.jpg";
import cctvBullet from "@/assets/cctv-bullet.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const cameraTypes = [
  { icon: Camera, title: "Bullet Cameras", desc: "Long-range outdoor surveillance with weatherproof design. Ideal for parking lots, entrances, and perimeter security.", features: ["Night vision", "Weatherproof IP66", "Long range"], img: cctvBullet },
  { icon: Eye, title: "Dome Cameras", desc: "Discreet indoor/outdoor cameras with wide-angle view. Perfect for retail stores, offices, and lobbies.", features: ["Wide angle", "Vandal-proof", "360° coverage"], img: cctvDome },
  { icon: Wifi, title: "Wireless Cameras", desc: "Easy-to-install wire-free cameras with remote monitoring. Great for homes and small businesses.", features: ["Wi-Fi enabled", "App control", "Easy install"] },
  { icon: Shield, title: "Outdoor Security", desc: "Heavy-duty cameras built to withstand extreme weather. Designed for construction sites and warehouses.", features: ["4K resolution", "Motion detection", "Cloud storage"] },
];

const steps = [
  { num: "01", title: "Site Survey", desc: "Our experts visit your location to assess security needs" },
  { num: "02", title: "Custom Plan", desc: "We design a tailored CCTV solution for your requirements" },
  { num: "03", title: "Installation", desc: "Professional installation with minimal disruption" },
  { num: "04", title: "Testing", desc: "Complete system testing and user training provided" },
];

const CCTVInstallation = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="CCTV Installation" subtitle="Professional CCTV camera installation for homes, offices, and businesses" image={heroBg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "CCTV Installation" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Camera Types</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Choose the Right Camera</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cameraTypes.map((cam, i) => (
                <div key={cam.title} className={`rounded-xl border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  {cam.img ? (
                    <div className="img-overlay h-56">
                      <img src={cam.img} alt={cam.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div className="h-56 bg-gradient-to-br from-secondary to-background flex items-center justify-center shimmer">
                      <cam.icon className="w-20 h-20 text-primary/15" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <cam.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl">{cam.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cam.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cam.features.map((f) => (
                        <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 section-alt relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Installation Process</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.num} className={`text-center p-8 rounded-xl gradient-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <div className="text-5xl font-heading font-bold text-gradient mb-4">{step.num}</div>
                  <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="glow-orb glow-orb-primary w-[400px] h-[400px] -bottom-32 left-1/2 -translate-x-1/2 opacity-30" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Secure Your Property?</h2>
            <p className="text-muted-foreground mb-8">Get a free site survey and quotation today</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
              Get Free Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CCTVInstallation;
