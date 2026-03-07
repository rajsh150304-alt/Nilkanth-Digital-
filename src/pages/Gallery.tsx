import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { Camera, Monitor, Wifi, Shield, Wrench, Laptop } from "lucide-react";

const galleryItems = [
  { icon: Camera, title: "CCTV Installation - Office Complex", desc: "32-camera IP CCTV system installed at a corporate office" },
  { icon: Shield, title: "Home Security Setup", desc: "Complete home security with 8 cameras and smart monitoring" },
  { icon: Monitor, title: "Control Room Setup", desc: "Multi-monitor surveillance control room for warehouse" },
  { icon: Wifi, title: "Office Network Installation", desc: "Enterprise-grade network setup for 50+ workstations" },
  { icon: Laptop, title: "Laptop Repair Workshop", desc: "Our state-of-the-art laptop repair and diagnostics lab" },
  { icon: Wrench, title: "CCTV Maintenance", desc: "Routine maintenance of outdoor camera systems" },
  { icon: Camera, title: "Retail Store CCTV", desc: "Dome camera installation for retail chain stores" },
  { icon: Shield, title: "Factory Security", desc: "Perimeter security system for manufacturing facility" },
  { icon: Monitor, title: "Server Room Setup", desc: "Network server and storage rack installation" },
];

const Gallery = () => {
  return (
    <Layout>
      <PageHero title="Our Gallery" subtitle="View our completed projects and installations" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Gallery" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover-lift"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <item.icon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
