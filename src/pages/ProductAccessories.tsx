import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, IndianRupee } from "lucide-react";
import heroImg from "@/assets/accessories-store.jpg";
import accImg1 from "@/assets/product-accessory-1.jpg";
import accImg2 from "@/assets/product-accessory-2.jpg";

const products = [
  { name: "Logitech MK200 Combo", desc: "Media Wired Keyboard and Mouse Combo, USB, Spill Resistant", price: "₹1,200 – ₹1,500", badge: "Best Seller", img: accImg1 },
  { name: "Logitech MK270r Wireless", desc: "Wireless Keyboard & Mouse Combo, Long Battery, 2.4GHz", price: "₹1,800 – ₹2,200", img: accImg1 },
  { name: "HP USB Wired Mouse", desc: "Optical Wired Mouse, 1000 DPI, Ergonomic Design", price: "₹300 – ₹600", img: accImg1 },
  { name: "Webcam HD 1080p", desc: "Full HD Webcam, Built-in Mic, USB Plug & Play", price: "₹1,500 – ₹4,000", img: accImg1 },
  { name: "USB Hub 4-Port", desc: "USB 3.0 Hub, High Speed Transfer, Portable", price: "₹400 – ₹1,200", img: accImg2 },
  { name: "Laptop Bag 15.6\"", desc: "Water Resistant, Multiple Pockets, Padded Shoulder Strap", price: "₹500 – ₹2,000", img: accImg1 },
  { name: "Headphones & Headset", desc: "Wired/Wireless Headsets, Noise Cancelling, with Mic", price: "₹800 – ₹5,000", img: accImg1 },
  { name: "HDMI / VGA / USB Cables", desc: "All types of cables — HDMI, VGA, USB-C, Ethernet, Display Port", price: "₹150 – ₹1,500", img: accImg2 },
  { name: "Laptop Charger / Adapter", desc: "Original & compatible chargers for HP, Dell, Lenovo, Asus", price: "₹800 – ₹3,000", img: accImg2 },
  { name: "RAM & SSD Upgrades", desc: "DDR4 RAM 4-16GB, SSD 128GB-1TB, NVMe & SATA", price: "₹1,500 – ₹8,000", img: accImg2 },
  { name: "External Hard Drive", desc: "Seagate/WD 1-4TB Portable USB 3.0 Hard Drive", price: "₹3,500 – ₹10,000", img: accImg2 },
  { name: "Pen Drive / Memory Card", desc: "16GB to 256GB USB Flash Drive, MicroSD Cards", price: "₹250 – ₹2,500", img: accImg2 },
];

const ProductAccessories = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Computer Accessories" subtitle="Keyboards, Mice, Cables, Storage & More" image={heroImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: "Accessories" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Computer Accessories</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Logitech, HP, Dell & more — keyboards, mice, cables, storage, chargers</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <div key={p.name} className={`group rounded-xl border border-border bg-card overflow-hidden hover-lift card-shine reveal reveal-delay-${(i % 5) + 1} relative`}>
                  {p.badge && (
                    <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">{p.badge}</span>
                  )}
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

export default ProductAccessories;
