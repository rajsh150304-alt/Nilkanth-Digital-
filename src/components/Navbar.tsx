import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { CONTACT_PHONE_DISPLAY, getCallHref } from "@/lib/contact";

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
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const callHref = getCallHref();

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
    const onDocClick = (e: MouseEvent) => {
      const el = dropdownRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setServiceOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServiceOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServiceOpen(false), 200);
  };

  const isActive = (to: string) => location.pathname === to;
  const isServiceActive = serviceLinks.some((s) => location.pathname === s.to);

  const linkClass = (to: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive(to) ? "text-primary" : "text-foreground/70 hover:text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-lg shadow-background/50"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
              N
            </div>
            <div className="font-heading font-bold text-base">
              <span className="text-foreground">Nilkanth</span>{" "}
              <span className="text-primary">Digital</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown - hover + click */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServiceOpen((v) => !v)}
                aria-expanded={serviceOpen}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isServiceActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                  serviceOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="w-52 bg-card border border-border rounded-lg shadow-xl py-1.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(link.to)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
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
              href={callHref}
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
              aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="pb-4 border-t border-border/30">
            {mainLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2.5 text-sm font-medium ${isActive(link.to) ? "text-primary" : "text-foreground/70"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
            {serviceLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`block px-6 py-2 text-sm ${isActive(link.to) ? "text-primary" : "text-foreground/70"}`}>
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border/30 mt-2 pt-2">
              {otherLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-2.5 text-sm font-medium ${isActive(link.to) ? "text-primary" : "text-foreground/70"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a href={callHref} className="mx-4 mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold">
              <Phone className="w-3.5 h-3.5" />
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

