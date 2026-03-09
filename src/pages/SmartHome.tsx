import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "react-router-dom";
import { Home, Lightbulb, Thermometer, Lock, Smartphone, Speaker, ChevronRight, CheckCircle } from "lucide-react";
import smartHomeImg from "@/assets/smart-home.jpg";

const solutions = [
  { icon: Lightbulb, title: "Smart Lighting", desc: "Automated lighting systems with scheduling, dimming, and voice control. Set the perfect mood for any occasion.", features: ["Voice Control", "Scheduling", "Energy Saving"] },
  { icon: Thermometer, title: "Climate Control", desc: "Smart thermostats and AC automation for optimal comfort. Control temperature from anywhere via your phone.", features: ["Remote Control", "Auto Schedule", "Energy Efficient"] },
  { icon: Lock, title: "Smart Locks & Access", desc: "Keyless entry with smart locks, video doorbells, and access control systems for enhanced security.", features: ["Fingerprint", "App Control", "Guest Access"] },
  { icon: Speaker, title: "Voice Assistants", desc: "Integration with Alexa, Google Home, and Apple HomeKit for seamless voice-controlled automation.", features: ["Multi-Room", "Voice Control", "Routines"] },
  { icon: Smartphone, title: "App Integration", desc: "Control everything from a single app. Monitor, automate, and manage your entire home remotely.", features: ["One App", "Real-time", "Alerts"] },
  { icon: Home, title: "Full Home Automation", desc: "Complete smart home packages including curtains, security, entertainment, and energy management.", features: ["Custom Setup", "Scalable", "Future-proof"] },
];

const SmartHome = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <PageHero title="Smart Home Automation" subtitle="Transform your home into an intelligent, connected living space" image={smartHomeImg} />
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Smart Home Automation" }]} />
      </div>

      <div ref={ref}>
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-20 -right-32 opacity-20" />
          <div className="glow-orb glow-orb-blue w-[300px] h-[300px] bottom-20 -left-32 opacity-15" />

          <div className="container mx-auto px-4">
            <div className="text-center mb-14 reveal">
              <div className="red-line mx-auto mb-4" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Solutions</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3">Smart Home Solutions</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Make your home smarter, safer, and more energy-efficient with our automation solutions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((s, i) => (
                <div key={s.title} className={`p-7 rounded-xl border border-border bg-card hover-lift card-shine reveal reveal-delay-${(i % 5) + 1}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">{f}</span>
                    ))}
                  </div>
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
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Smart Home?</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-8">Benefits of Home Automation</h2>
                <div className="space-y-4">
                  {[
                    "Save up to 30% on energy bills",
                    "Enhanced security with smart locks & cameras",
                    "Control everything from your smartphone",
                    "Voice-activated convenience with Alexa/Google",
                    "Increase your property value",
                    "Custom solutions for every budget",
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
                  <img src={smartHomeImg} alt="Smart home setup" className="w-full aspect-video object-cover" loading="lazy" />
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Make Your Home Smart?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get a free consultation and discover the perfect automation solution for your home</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold btn-shine hover:shadow-[0_0_40px_hsla(0,80%,55%,0.4)] transition-all duration-300">
              Get Free Consultation <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SmartHome;