import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";
import teamImg from "@/assets/team.jpg";

const About = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="About Us" subtitle="Learn more about Nilkanth Digital and our commitment to excellence" image={teamImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>

      <div ref={ref}>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <div className="red-line mb-4" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                  Your Trusted Technology Partner Since 2014
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nilkanth Digital is a leading technology service provider specializing in CCTV installation, computer repair, networking solutions, and IT support services. With over 10 years of experience, we have served thousands of satisfied customers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of certified technicians is dedicated to providing fast, reliable, and affordable technology solutions for homes and businesses.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Certified Experts", desc: "Trained & certified technicians" },
                  { icon: Users, title: "1000+ Clients", desc: "Trusted by businesses & homes" },
                  { icon: Target, title: "Quality Service", desc: "Premium products & workmanship" },
                  { icon: Eye, title: "24/7 Support", desc: "Always available when you need us" },
                ].map((item, i) => (
                  <div key={item.title} className={`p-6 rounded-xl border border-border bg-card text-center hover-lift card-shine reveal reveal-delay-${i + 1}`}>
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-xl glow-border bg-card hover-lift reveal">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class technology solutions that protect, connect, and empower our customers. We strive to deliver exceptional service quality at competitive prices.
                </p>
              </div>
              <div className="p-10 rounded-xl glow-border bg-card hover-lift reveal reveal-delay-1">
                <Eye className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted name in technology services, known for innovation, reliability, and customer satisfaction across the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-10 reveal">Our Service Guarantee</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                "100% satisfaction guaranteed on all services",
                "Warranty on repairs and installations",
                "Transparent pricing with no hidden charges",
                "Same-day service for urgent requests",
                "Genuine parts and equipment used",
                "Post-service support and follow-up",
              ].map((item, i) => (
                <div key={item} className={`flex items-start gap-3 text-left reveal reveal-delay-${(i % 3) + 1}`}>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
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
