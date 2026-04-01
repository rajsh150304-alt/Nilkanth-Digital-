import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Wrench, MessageSquare, AlertCircle } from "lucide-react";

const AdminOverview = () => {
  const [stats, setStats] = useState({ products: 0, services: 0, inquiries: 0, newInquiries: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [products, services, inquiries, newInquiries] = await Promise.all([
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase.from("services").select("id", { count: "exact", head: true }),
        supabase.from("contact_inquiries").select("id", { count: "exact", head: true }),
        supabase.from("contact_inquiries").select("id", { count: "exact", head: true }).eq("status", "new"),
      ]);
      setStats({
        products: products.count || 0,
        services: services.count || 0,
        inquiries: inquiries.count || 0,
        newInquiries: newInquiries.count || 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { title: "Total Products", value: stats.products, icon: Package, color: "text-blue-400" },
    { title: "Active Services", value: stats.services, icon: Wrench, color: "text-green-400" },
    { title: "Total Inquiries", value: stats.inquiries, icon: MessageSquare, color: "text-yellow-400" },
    { title: "New Inquiries", value: stats.newInquiries, icon: AlertCircle, color: "text-primary" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Card key={card.title} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
            <card.icon className={`h-5 w-5 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminOverview;
