import { MessageCircle, Phone } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:+919998994473"
        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 hover:shadow-primary/50 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 text-primary-foreground" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Nilkanth%20Digital%2C%20I%20need%20your%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300 pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
