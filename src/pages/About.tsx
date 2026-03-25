import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Target, Eye, Award, Users, CheckCircle, Zap, Clock, Shield, Camera, Laptop, Printer, PhoneCall, Fingerprint, Tv, Wifi, Wrench, Code } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import logo from "@/assets/logo.png";

const About = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="About Us" subtitle="Learn more about Nilkanth Digital and our commitment to excellence" image={teamImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-blue w-[400px] h-[400px] -top-32 -right-32 opacity-20" />
          
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                  Your Trusted IT & Security Partner Since 2018
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground/90">Nilkanth Digital</strong>, founded by <strong className="text-foreground/90">Mayur Dabhi</strong>, is a trusted Surat-based partner for comprehensive technology and security solutions. Located at <em>23, 1st Floor Shivanjali Complex, AK Road, Surat</em>, we have been serving homes, offices, schools, factories, and businesses since 2018.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We specialize in <strong className="text-foreground/80">Sales, Repair & Service</strong> — covering CCTV, Computer/Laptop, Printers, Biometric, Intercom, LED TV, Networking Hardware, Software, Fire & Safety, Smart Home, and Annual Maintenance Contracts (AMC).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our certified technicians deliver quality service with a strong focus on trust, professionalism, and fast support — ensuring your IT and security needs are met with care.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5 reveal reveal-delay-1">
                {[
                  { icon: Award, title: "Certified Experts", desc: "Trained & certified technicians" },
                  { icon: Users, title: "1000+ Clients", desc: "Trusted across Surat" },
                  { icon: Target, title: "Quality Service", desc: "Premium products & workmanship" },
                  { icon: Clock, title: "24/7 Support", desc: "Always available for you" },
                ].map((item, i) => (
                  <div key={item.title} className={`p-6 rounded-xl border border-border bg-card text-center hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Deal In */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 reveal">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold">What We Deal In</h2>
              <p className="text-muted-foreground mt-2">Complete range of IT products & services</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: Laptop, label: "Computer / Laptop" },
                { icon: Printer, label: "Printers" },
                { icon: Camera, label: "CCTV" },
                { icon: Fingerprint, label: "Biometric" },
                { icon: PhoneCall, label: "Intercom" },
                { icon: Tv, label: "LED TV" },
                { icon: Wifi, label: "Networking Hardware" },
                { icon: Code, label: "Software" },
                { icon: Wrench, label: "AMC" },
                { icon: Shield, label: "Fire & Safety" },
              ].map((item, i) => (
                <div key={item.label} className={`flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover-lift card-shine text-center reveal reveal-delay-${(i % 5) + 1}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 section-alt relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] bottom-0 left-0 opacity-20" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-xl gradient-border bg-card hover-lift reveal">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class IT and security solutions that protect, connect, and empower our customers. We strive to deliver exceptional service at competitive prices with complete professionalism.
                </p>
              </div>
              <div className="p-10 rounded-xl gradient-border bg-card hover-lift reveal reveal-delay-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Surat's most trusted name in IT & security services, known for innovation, reliability, and complete customer satisfaction across every project we deliver.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="reveal mb-10">
              <div className="red-line mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold">Our Service Guarantee</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, text: "100% satisfaction guaranteed on all services" },
                { icon: Zap, text: "Same-day service for urgent requests" },
                { icon: Award, text: "Warranty on repairs and installations" },
                { icon: CheckCircle, text: "Transparent pricing with no hidden charges" },
                { icon: Target, text: "Genuine parts and equipment used" },
                { icon: Users, text: "Post-service support and follow-up" },
              ].map((item, i) => (
                <div key={item.text} className={`flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover-lift reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80 text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
