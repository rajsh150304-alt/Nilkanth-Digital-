import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Server, HardDrive, Database, Cloud, Shield, ChevronRight, CheckCircle, Settings } from "lucide-react";
import serverImg from "@/assets/server-nas.jpg";

const services = [
  { icon: Server, title: "Server Setup & Config", desc: "Complete server installation, OS setup, and configuration for Windows Server, Linux, and virtualization platforms." },
  { icon: HardDrive, title: "NAS Solutions", desc: "Network Attached Storage setup with RAID configuration, remote access, and automated backup solutions." },
  { icon: Database, title: "Data Backup & Recovery", desc: "Automated backup solutions, disaster recovery planning, and data migration services." },
  { icon: Cloud, title: "Cloud Integration", desc: "Hybrid cloud setup, cloud backup, and seamless integration with AWS, Azure, and Google Cloud." },
  { icon: Shield, title: "Server Security", desc: "Firewall configuration, antivirus, intrusion detection, and regular security patching." },
  { icon: Settings, title: "Server Maintenance", desc: "AMC plans for servers including monitoring, updates, hardware replacement, and 24/7 support." },
];

const ServerNAS = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Server & NAS Setup" subtitle="Enterprise-grade server solutions and network storage for your business" image={serverImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Server & NAS Setup" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Server & Storage Solutions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={s.title} className={`p-7 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}>
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-8">Reliable Server Solutions</h2>
                <div className="space-y-4">
                  {[
                    "Certified server engineers with 7+ years experience",
                    "Support for Dell, HP, Lenovo, and Synology NAS",
                    "RAID configuration for data redundancy",
                    "24/7 monitoring and remote support",
                    "Scalable solutions that grow with your business",
                    "AMC plans with guaranteed uptime SLA",
                  ].map((item, i) => (
                    <div key={item} className={`flex items-center gap-3 reveal reveal-delay-${(i % 5) + 1}`}>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-2">
                <div className="rounded-xl overflow-hidden gradient-border">
                  <img src={serverImg} alt="Server room" className="w-full aspect-video object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden reveal">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="glow-orb glow-orb-primary w-[400px] h-[400px] -bottom-32 left-1/2 -translate-x-1/2 opacity-30" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Need a Server Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get expert consultation for your server and storage requirements</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
              Get Server Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServerNAS;