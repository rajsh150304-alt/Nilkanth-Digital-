import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const serviceLinks = [
  { to: "/cctv-installation", label: "CCTV Installation" },
  { to: "/cctv-repair", label: "CCTV Repair & AMC" },
  { to: "/laptop-repair", label: "Laptop Repair" },
  { to: "/desktop-repair", label: "Desktop Repair" },
  { to: "/networking", label: "Networking & Security" },
];

const otherLinks = [
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServiceOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (to: string) => location.pathname === to;
  const isServiceActive = serviceLinks.some((s) => location.pathname === s.to);

  const linkClass = (to: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      isActive(to)
        ? "text-primary"
        : "text-foreground/70 hover:text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_2px_20px_-5px_hsla(0,85%,50%,0.15)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-xl transition-all duration-300 group-hover:shadow-[0_0_20px_hsla(0,85%,50%,0.5)]">
              N
            </div>
            <div className="font-heading font-bold text-lg">
              <span className="text-foreground">Nilkanth</span>{" "}
              <span className="text-primary">Digital</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {mainLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isServiceActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`} />
              </button>
              {serviceOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-primary/5 py-2 animate-in">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        isActive(link.to) ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_25px_hsla(0,85%,50%,0.4)] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-card/95 backdrop-blur-xl rounded-b-xl pb-4 border-t border-border/30 animate-in">
            {mainLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`block px-4 py-3 text-sm font-medium ${isActive(link.to) ? "text-primary" : "text-foreground/70"}`}>
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
            {serviceLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`block px-6 py-2.5 text-sm ${isActive(link.to) ? "text-primary" : "text-foreground/70"}`}>
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border/30 mt-2 pt-2">
              {otherLinks.map((link) => (
                <Link key={link.to} to={link.to} className={`block px-4 py-3 text-sm font-medium ${isActive(link.to) ? "text-primary" : "text-foreground/70"}`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:+919876543210"
              className="mx-4 mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
