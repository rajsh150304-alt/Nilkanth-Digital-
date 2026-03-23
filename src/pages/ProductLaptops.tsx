import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, IndianRupee } from "lucide-react";
import heroImg from "@/assets/laptops-store.jpg";

const products = [
  { name: "HP Laptop 15s", desc: "Intel i3 12th Gen, 8GB RAM, 512GB SSD, 15.6\" FHD", price: "₹35,000 – ₹45,000" },
  { name: "HP Laptop 14s", desc: "Intel i5 12th Gen, 8GB RAM, 512GB SSD, 14\" FHD", price: "₹45,000 – ₹55,000" },
  { name: "Dell Inspiron 15", desc: "Intel i5/i7, 8-16GB RAM, 512GB SSD, 15.6\" FHD", price: "₹40,000 – ₹75,000" },
  { name: "Lenovo IdeaPad Slim 3", desc: "AMD Ryzen 5, 8GB RAM, 512GB SSD, 15.6\" FHD", price: "₹35,000 – ₹50,000" },
  { name: "Asus VivoBook 15", desc: "Intel i3/i5, 8GB RAM, 256-512GB SSD, 15.6\" FHD", price: "₹30,000 – ₹55,000" },
  { name: "Acer Aspire 3", desc: "Intel i3/i5, 4-8GB RAM, 256-512GB SSD, 15.6\" HD", price: "₹25,000 – ₹45,000" },
  { name: "HP Pavilion Gaming", desc: "Intel i5, 8-16GB RAM, GTX 1650, 512GB SSD", price: "₹55,000 – ₹80,000" },
  { name: "Apple MacBook Air M1", desc: "M1 Chip, 8GB RAM, 256GB SSD, 13.3\" Retina", price: "₹75,000 – ₹1,00,000" },
];

const ProductLaptops = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Laptops" subtitle="All Laptop Brands Available — ₹15,000 to ₹1,20,000" image={heroImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: "Laptops" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -left-32 opacity-20" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">All Laptops Available</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">HP, Dell, Lenovo, Asus, Acer, Apple & more. Best prices in Surat with warranty.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <div key={p.name} className={`group p-6 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}>
                  <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-1 text-primary font-bold text-sm">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {p.price.replace("₹", "")}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-14 reveal">
              <p className="text-muted-foreground mb-6">Need a specific brand or configuration? Contact us for best pricing!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
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

export default ProductLaptops;
