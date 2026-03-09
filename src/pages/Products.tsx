import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Camera, Monitor, HardDrive, Wifi, Shield, ChevronRight, Home, Flame, Server } from "lucide-react";
import productsImg from "@/assets/products.jpg";

const products = [
  { icon: Camera, category: "CCTV Cameras & DVR", items: ["2MP/4MP Bullet Camera", "Dome Camera", "PTZ Camera", "Wireless IP Camera", "4/8/16 Channel DVR/NVR"] },
  { icon: Monitor, category: "Computers & Laptops", items: ["Desktop PCs", "Laptops (All Brands)", "Monitors & Displays", "Keyboards & Mouse", "Printers & Scanners"] },
  { icon: HardDrive, category: "Storage & Accessories", items: ["Surveillance Hard Drives", "SSD & NAS Drives", "CCTV Cables & Connectors", "UPS & Power Supply", "Camera Mounting Brackets"] },
  { icon: Wifi, category: "Networking Equipment", items: ["Wi-Fi Routers & Mesh", "Network Switches", "Access Points", "Ethernet Cables", "Range Extenders"] },
  { icon: Shield, category: "Security & Firewall", items: ["Firewall Appliances", "Smart Door Locks", "Video Door Phones", "Burglar Alarms", "Motion Sensors"] },
  { icon: Home, category: "Smart Home Devices", items: ["Smart Lights & Switches", "Smart Plugs", "Voice Assistants", "Smart Thermostats", "Automated Curtains"] },
  { icon: Flame, category: "Fire Safety Equipment", items: ["Fire Extinguishers", "Smoke Detectors", "Fire Alarm Panels", "Emergency Lights", "Fire Blankets"] },
  { icon: Server, category: "Servers & NAS", items: ["Rack Servers", "Tower Servers", "Synology NAS", "QNAP NAS", "Server Accessories"] },
];

const Products = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Products & Equipment" subtitle="Browse our complete range of IT, security, and smart home products" image={productsImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] bottom-20 -right-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <div key={p.category} className={`p-6 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-4">{p.category}</h3>
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-14 reveal">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
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