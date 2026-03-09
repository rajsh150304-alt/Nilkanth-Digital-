import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import cctvDome from "@/assets/cctv-dome.jpg";
import cctvBullet from "@/assets/cctv-bullet.jpg";
import cctvRepair from "@/assets/cctv-repair.jpg";
import laptopRepair from "@/assets/laptop-repair.jpg";
import desktopRepair from "@/assets/desktop-repair.jpg";
import networking from "@/assets/networking.jpg";
import products from "@/assets/products.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import team from "@/assets/team.jpg";

const galleryItems = [
  { title: "CCTV Control Room Setup", desc: "Multi-monitor surveillance control room", img: heroBg },
  { title: "Dome Camera Installation", desc: "Professional dome camera for office security", img: cctvDome },
  { title: "Outdoor Bullet Camera", desc: "Weatherproof bullet camera installation", img: cctvBullet },
  { title: "CCTV Repair Workshop", desc: "Our technician repairing a security camera", img: cctvRepair },
  { title: "Laptop Repair Lab", desc: "State-of-the-art laptop diagnostics and repair", img: laptopRepair },
  { title: "Desktop Hardware Repair", desc: "PC hardware maintenance and upgrades", img: desktopRepair },
  { title: "Server Room Installation", desc: "Professional networking equipment setup", img: networking },
  { title: "Security Products Display", desc: "Our showroom with latest CCTV equipment", img: products },
  { title: "Our Expert Team", desc: "Certified technicians ready to serve you", img: team },
];

const Gallery = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Our Gallery" subtitle="View our completed projects, installations, and workshop" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Gallery" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] bottom-40 -left-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className={`group rounded-xl border border-border bg-card overflow-hidden hover-lift reveal reveal-delay-${(i % 5) + 1}`}
                >
                  <div className="img-overlay aspect-[4/3]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
