export const CONTACT_PHONE_E164 = "919876543210";
export const CONTACT_PHONE_DISPLAY = "+91 98765 43210";

export const DEFAULT_WHATSAPP_MESSAGE = "Hi Nilkanth Digital, I need your service";

export const getCallHref = () => `tel:+${CONTACT_PHONE_E164}`;

export const getWhatsAppHref = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(message)}`;

export const getWhatsAppWebHref = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://web.whatsapp.com/send?phone=${CONTACT_PHONE_E164}&text=${encodeURIComponent(message)}`;

export const getSmartWhatsAppHref = (message: string = DEFAULT_WHATSAPP_MESSAGE) => {
  if (typeof navigator === "undefined") return getWhatsAppHref(message);
  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  return isMobile ? getWhatsAppHref(message) : getWhatsAppWebHref(message);
};
