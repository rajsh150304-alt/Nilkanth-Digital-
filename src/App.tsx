import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import CCTVInstallation from "./pages/CCTVInstallation";
import CCTVRepair from "./pages/CCTVRepair";
import LaptopRepair from "./pages/LaptopRepair";
import DesktopRepair from "./pages/DesktopRepair";
import Networking from "./pages/Networking";
import SmartHome from "./pages/SmartHome";
import FireSafety from "./pages/FireSafety";
import ServerNAS from "./pages/ServerNAS";
import Firewall from "./pages/Firewall";
import Products from "./pages/Products";
import ProductLaptops from "./pages/ProductLaptops";
import ProductComputers from "./pages/ProductComputers";
import ProductIntercom from "./pages/ProductIntercom";
import ProductPrinters from "./pages/ProductPrinters";
import ProductAccessories from "./pages/ProductAccessories";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/cctv-installation" element={<CCTVInstallation />} />
            <Route path="/cctv-repair" element={<CCTVRepair />} />
            <Route path="/laptop-repair" element={<LaptopRepair />} />
            <Route path="/desktop-repair" element={<DesktopRepair />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/smart-home" element={<SmartHome />} />
            <Route path="/fire-safety" element={<FireSafety />} />
            <Route path="/server-nas" element={<ServerNAS />} />
            <Route path="/firewall" element={<Firewall />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/laptops" element={<ProductLaptops />} />
            <Route path="/products/computers" element={<ProductComputers />} />
            <Route path="/products/intercom" element={<ProductIntercom />} />
            <Route path="/products/printers" element={<ProductPrinters />} />
            <Route path="/products/accessories" element={<ProductAccessories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
