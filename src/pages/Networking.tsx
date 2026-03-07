import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { Link } from "react-router-dom";
import { Wifi, Shield, Server, Globe, Lock, ChevronRight } from "lucide-react";

const services = [
  { icon: Wifi, title: "Wi-Fi Setup", desc: "Home and office Wi-Fi network installation, range extenders, and mesh networks for seamless connectivity" },
  { icon: Server, title: "Server Setup", desc: "File server, NAS, and network storage configuration for businesses" },
  { icon: Globe, title: "Internet Solutions", desc: "Router configuration, ISP troubleshooting, and bandwidth optimization" },
  { icon: Lock, title: "Network Security", desc: "Firewall setup, VPN configuration, and intrusion detection systems" },
  { icon: Shield, title: "Home Security", desc: "Integrated security solutions combining CCTV, alarms, and smart locks" },
];

const Networking = () => {
  return (
    <Layout>
      <PageHero title="Networking & Security Solutions" subtitle="Complete network setup, troubleshooting, and security solutions" />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Networking & Security" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-xl border border-border bg-card hover-lift">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does a network setup take?", a: "Typically 2-4 hours for home setups and 1-2 days for office networks depending on complexity." },
              { q: "Do you provide AMC for networking?", a: "Yes, we offer annual maintenance contracts for all networking and security solutions." },
              { q: "Can you set up remote access for my CCTV?", a: "Absolutely! We configure mobile app access so you can monitor your cameras from anywhere." },
              { q: "What brands do you work with?", a: "We work with all major brands including Hikvision, Dahua, CP Plus, TP-Link, Cisco, and more." },
            ].map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Need a Custom Network Solution?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all mt-4">
            Contact Us <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Networking;
