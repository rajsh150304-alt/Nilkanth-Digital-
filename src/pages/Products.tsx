import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Camera, Monitor, HardDrive, Wifi, Shield, ChevronRight } from "lucide-react";
import productsImg from "@/assets/products.jpg";

const products = [
  { icon: Camera, category: "CCTV Cameras", items: ["2MP Bullet Camera", "4MP Dome Camera", "PTZ Camera", "Wireless IP Camera", "Outdoor Waterproof Camera"] },
  { icon: Monitor, category: "DVR/NVR Systems", items: ["4 Channel DVR", "8 Channel DVR", "16 Channel NVR", "Hybrid DVR", "Network Video Recorder"] },
  { icon: HardDrive, category: "Storage & Accessories", items: ["Surveillance Hard Drives", "CCTV Power Supply", "BNC Connectors & Cables", "Camera Mounting Brackets", "CCTV Monitors"] },
  { icon: Wifi, category: "Networking Equipment", items: ["Wi-Fi Routers", "Network Switches", "Ethernet Cables", "Access Points", "Range Extenders"] },
  { icon: Shield, category: "Security Systems", items: ["Burglar Alarms", "Smart Door Locks", "Video Door Phones", "Motion Sensors", "Fire Alarm Systems"] },
];

const Products = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Products & Equipment" subtitle="Browse our range of security cameras, networking equipment, and accessories" image={productsImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <div key={p.category} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4">{p.category}</h3>
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 reveal">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300">
                Request Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
