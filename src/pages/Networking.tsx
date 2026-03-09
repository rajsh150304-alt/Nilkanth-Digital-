import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Wifi, Shield, Server, Globe, Lock, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import networkImg from "@/assets/networking.jpg";

const services = [
  { icon: Wifi, title: "Wi-Fi Setup", desc: "Home and office Wi-Fi network installation, range extenders, and mesh networks" },
  { icon: Server, title: "Server Setup", desc: "File server, NAS, and network storage configuration for businesses" },
  { icon: Globe, title: "Internet Solutions", desc: "Router configuration, ISP troubleshooting, and bandwidth optimization" },
  { icon: Lock, title: "Network Security", desc: "Firewall setup, VPN configuration, and intrusion detection systems" },
  { icon: Shield, title: "Home Security", desc: "Integrated security solutions combining CCTV, alarms, and smart locks" },
];

const faqs = [
  { q: "How long does a network setup take?", a: "Typically 2-4 hours for home setups and 1-2 days for office networks depending on complexity." },
  { q: "Do you provide AMC for networking?", a: "Yes, we offer annual maintenance contracts for all networking and security solutions." },
  { q: "Can you set up remote access for my CCTV?", a: "Absolutely! We configure mobile app access so you can monitor your cameras from anywhere." },
  { q: "What brands do you work with?", a: "We work with all major brands including Hikvision, Dahua, CP Plus, TP-Link, Cisco, and more." },
];

const Networking = () => {
  const ref = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <PageHero title="Networking & Security" subtitle="Complete network setup, troubleshooting, and security solutions" image={networkImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Networking & Security" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Network Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 section-alt relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={faq.q} 
                  className={`rounded-xl border border-border bg-card overflow-hidden hover-lift reveal reveal-delay-${i + 1}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="font-heading font-semibold pr-4">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                    <p className="px-6 pb-6 text-muted-foreground">{faq.a}</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Need a Custom Network Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get expert advice and a tailored solution for your needs</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Networking;
