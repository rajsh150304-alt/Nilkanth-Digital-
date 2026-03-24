import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { ChevronRight, Phone, IndianRupee } from "lucide-react";
import heroImg from "@/assets/printers-store.jpg";
import printerImg1 from "@/assets/product-printer-1.jpg";
import printerImg2 from "@/assets/product-printer-2.jpg";

const products = [
  { name: "HP InkTank Printer", desc: "All-in-One Ink Tank, Print/Scan/Copy, WiFi, Low Cost Printing", price: "₹10,000 – ₹15,000", badge: "Popular", img: printerImg1 },
  { name: "HP LaserJet Printer", desc: "Mono Laser, Fast Printing, USB + WiFi, Auto Duplex", price: "₹12,000 – ₹20,000", img: printerImg2 },
  { name: "Canon PIXMA InkJet", desc: "Color InkJet, Print/Scan/Copy, Borderless Photo Print", price: "₹5,000 – ₹12,000", img: printerImg1 },
  { name: "Epson EcoTank Printer", desc: "High Yield Ink Tank, Ultra Low Cost, WiFi, All-in-One", price: "₹8,000 – ₹18,000", img: printerImg1 },
  { name: "Brother Laser Printer", desc: "Mono/Color Laser, Network Ready, High Volume", price: "₹10,000 – ₹25,000", img: printerImg2 },
  { name: "HP Color LaserJet", desc: "Color Laser, Professional Quality, Network, Duplex", price: "₹15,000 – ₹25,000", img: printerImg2 },
  { name: "Thermal Receipt Printer", desc: "POS Billing Printer, USB/Bluetooth, 80mm Width", price: "₹3,500 – ₹8,000", img: printerImg2 },
  { name: "Label Printer", desc: "Barcode & Label Printer, Thermal Transfer, USB", price: "₹5,000 – ₹15,000", img: printerImg2 },
];

const ProductPrinters = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Printers" subtitle="All Printers Available — ₹3,500 to ₹25,000" image={heroImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Products", to: "/products" }, { label: "Printers" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">All Printers Available</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">HP, Canon, Epson, Brother — InkJet, Laser, InkTank & Thermal Printers</p>
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

export default ProductPrinters;
