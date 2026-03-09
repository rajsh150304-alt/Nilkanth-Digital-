import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, getCallHref } from "@/lib/contact";

const services = [
  { to: "/cctv-installation", label: "CCTV Installation" },
  { to: "/cctv-repair", label: "CCTV Repair & AMC" },
  { to: "/laptop-repair", label: "Laptop Repair" },
  { to: "/desktop-repair", label: "Desktop Repair" },
  { to: "/networking", label: "Networking & Security" },
  { to: "/products", label: "Products" },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

const Footer = () => {
  const callHref = getCallHref();

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="glow-orb glow-orb-primary w-[300px] h-[300px] -bottom-32 left-1/4 opacity-10" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-xl">
                N
              </div>
              <span className="font-heading font-bold text-lg">
                Nilkanth <span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your trusted partner for CCTV installation, computer repair, and IT solutions since 2014.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5">Contact Info</h3>
            <div className="space-y-4">
              <a href={callHref} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a href="mailto:info@nilkanthdigital.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                info@nilkanthdigital.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                123 Tech Street, City Center, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nilkanth Digital. All rights reserved.</p>
          <p>Designed for quality service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

