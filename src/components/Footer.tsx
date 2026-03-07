import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                N
              </div>
              <span className="font-heading font-bold text-lg">
                Nilkanth <span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your trusted partner for CCTV installation, computer repair, and IT solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" /> +91 98765 43210
              </a>
              <a href="mailto:info@nilkanthdigital.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" /> info@nilkanthdigital.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> 123 Tech Street, City Center, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nilkanth Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
