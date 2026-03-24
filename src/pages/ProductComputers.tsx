import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, IndianRupee } from "lucide-react";
import heroImg from "@/assets/computers-store.jpg";
import pcImg1 from "@/assets/product-computer-1.jpg";
import pcImg2 from "@/assets/product-computer-2.jpg";

const products = [
  { name: "HP Slim CPU", desc: "Intel i3/i5, 4-8GB RAM, 256-512GB SSD, Windows 11", price: "₹8,000 – ₹20,000", badge: "Best Seller", img: pcImg1 },
  { name: "HP ProDesk Mini", desc: "Intel i5, 8GB RAM, 256GB SSD, Ultra Compact", price: "₹15,000 – ₹30,000", img: pcImg1 },
  { name: "Assemble PC — Basic", desc: "Intel i3, 8GB RAM, 256GB SSD, Cabinet + Monitor", price: "₹15,000 – ₹25,000", img: pcImg1 },
  { name: "Assemble PC — Business", desc: "Intel i5, 16GB RAM, 512GB SSD, Cabinet + 22\" Monitor", price: "₹25,000 – ₹45,000", img: pcImg1 },
  { name: "Assemble PC — Gaming", desc: "Intel i7/Ryzen 7, 16-32GB RAM, RTX GPU, RGB Case", price: "₹50,000 – ₹1,50,000", img: pcImg2 },
  { name: "Assemble PC — Workstation", desc: "Intel i9/Xeon, 32-64GB RAM, Professional GPU, ECC", price: "₹80,000 – ₹2,00,000", img: pcImg2 },
  { name: "All-in-One PC", desc: "HP/Lenovo AIO, i3-i5, 8GB RAM, 23.8\" FHD Display", price: "₹30,000 – ₹60,000", img: pcImg1 },
  { name: "Refurbished Desktop", desc: "Certified refurbished HP/Dell, i3/i5, 4-8GB RAM", price: "₹10,000 – ₹18,000", img: pcImg1 },
];

const ProductComputers = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Computers & Desktops" subtitle="HP Slim CPUs & Custom Assembled PCs — ₹8,000 to ₹2,00,000" image={heroImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: "Computers" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Desktops & Assembled PCs</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">HP Slim CPUs at best price + custom assembled PCs as per your requirement</p>
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
              <p className="text-muted-foreground mb-6">Assemble CPU as per your requirement — tell us your budget!</p>
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

export default ProductComputers;
