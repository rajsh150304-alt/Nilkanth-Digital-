import { MessageCircle, Phone } from "lucide-react";
import { getCallHref, getSmartWhatsAppHref } from "@/lib/contact";

const WhatsAppButton = () => {
  const callHref = getCallHref();
  const whatsappHref = getSmartWhatsAppHref();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href={callHref}
        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 text-primary-foreground" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-whatsapp-foreground" />
      </a>
    </div>
  );
};

export default WhatsAppButton;

