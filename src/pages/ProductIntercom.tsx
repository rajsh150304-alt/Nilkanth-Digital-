import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, IndianRupee } from "lucide-react";
import heroImg from "@/assets/intercom-store.jpg";
import intercomImg1 from "@/assets/product-intercom-1.jpg";
import intercomImg2 from "@/assets/product-intercom-2.jpg";

const products = [
  { name: "Audio Intercom System", desc: "2-wire audio intercom for homes & small offices", price: "₹5,000 – ₹8,000", img: intercomImg2 },
  { name: "Video Door Phone", desc: "7\" color screen, night vision camera, 2-way audio", price: "₹8,000 – ₹15,000", img: intercomImg1 },
  { name: "IP Video Intercom", desc: "WiFi enabled, mobile app support, HD camera", price: "₹12,000 – ₹20,000", img: intercomImg1 },
  { name: "Multi-Apartment System", desc: "Building intercom for flats, multiple indoor units", price: "₹15,000 – ₹30,000", img: intercomImg1 },
  { name: "Office Intercom PBX", desc: "Multi-line EPABX system for offices, 4-16 extensions", price: "₹10,000 – ₹25,000", img: intercomImg2 },
  { name: "Wireless Intercom", desc: "No wiring needed, portable handsets, long range", price: "₹6,000 – ₹12,000", img: intercomImg2 },
];

const ProductIntercom = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Intercom Systems" subtitle="Audio & Video Intercom Solutions — ₹5,000 to ₹30,000" image={heroImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: "Intercom" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] bottom-20 -left-32 opacity-20" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Intercom Systems</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Complete intercom solutions for homes, apartments, offices & buildings</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <div key={p.name} className={`group rounded-xl border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}>
                  <div className="img-overlay h-40">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={640} height={512} />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{p.desc}</p>
                    <div className="flex items-center gap-1 text-primary font-bold text-sm">
                      <IndianRupee className="w-3.5 h-3.5" />
                      {p.price.replace("₹", "")}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-14 reveal">
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine transition-all duration-300">
                  Get Quote <ChevronRight className="w-4 h-4" />
                </Link>
                <a href="tel:+919998994473" className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductIntercom;
