import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Wrench, MessageSquare, LayoutDashboard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminServices from "@/components/admin/AdminServices";
import AdminInquiries from "@/components/admin/AdminInquiries";
import AdminOverview from "@/components/admin/AdminOverview";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!user) return null;

  if (!isAdmin) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Access Denied</h1>
            <p className="text-muted-foreground text-lg">You don't have admin privileges. Contact the administrator.</p>
            <Button onClick={signOut} variant="outline">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your products, services, and customer inquiries</p>
            </div>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-secondary mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <LayoutDashboard className="mr-2 h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Package className="mr-2 h-4 w-4" /> Products
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Wrench className="mr-2 h-4 w-4" /> Services
              </TabsTrigger>
              <TabsTrigger value="inquiries" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MessageSquare className="mr-2 h-4 w-4" /> Inquiries
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview"><AdminOverview /></TabsContent>
            <TabsContent value="products"><AdminProducts /></TabsContent>
            <TabsContent value="services"><AdminServices /></TabsContent>
            <TabsContent value="inquiries"><AdminInquiries /></TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
