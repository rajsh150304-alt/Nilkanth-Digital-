import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Wifi, Shield, Server, Globe, Lock, ChevronRight } from "lucide-react";
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

  return (
    <Layout>
      <PageHero title="Networking & Security" subtitle="Complete network setup, troubleshooting, and security solutions" image={networkImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Networking & Security" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Our Network Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-8 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={`p-6 rounded-xl border border-border bg-card hover-lift reveal reveal-delay-${i + 1}`}>
                  <h3 className="font-heading font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-heading font-bold mb-4">Need a Custom Network Solution?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_30px_hsla(0,85%,50%,0.4)] transition-all duration-300 mt-4">
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Networking;
