import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  is_active: boolean | null;
}

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ name: "", description: "", icon: "", is_active: true });
  const { toast } = useToast();

  const fetchServices = async () => {
    const { data } = await supabase.from("services").select("*").order("created_at", { ascending: false });
    if (data) setServices(data);
  };

  useEffect(() => { fetchServices(); }, []);

  const resetForm = () => { setForm({ name: "", description: "", icon: "", is_active: true }); setEditing(null); };

  const handleEdit = (service: Service) => {
    setEditing(service);
    setForm({ name: service.name, description: service.description || "", icon: service.icon || "", is_active: service.is_active ?? true });
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: form.name.trim(),
      description: form.description.trim() || null,
      icon: form.icon.trim() || null,
      is_active: form.is_active,
    };
    if (!payload.name) { toast({ title: "Error", description: "Name is required", variant: "destructive" }); return; }

    if (editing) {
      const { error } = await supabase.from("services").update(payload).eq("id", editing.id);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Service updated" });
    } else {
      const { error } = await supabase.from("services").insert(payload);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Service added" });
    }
    setOpen(false); resetForm(); fetchServices();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Service deleted" }); fetchServices();
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Services</CardTitle>
        <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) resetForm(); }}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-primary hover:bg-primary/90"><Plus className="mr-2 h-4 w-4" /> Add Service</Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader><DialogTitle className="text-foreground">{editing ? "Edit Service" : "Add Service"}</DialogTitle></DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Service Name *</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Icon (Lucide icon name)</Label>
                <Input value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} placeholder="e.g. Camera, Laptop, Wifi" className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Description</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="bg-secondary border-border" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} id="is_active" />
                <Label htmlFor="is_active" className="text-foreground">Active</Label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">{editing ? "Update Service" : "Add Service"}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {services.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No services yet. Add your first service!</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Description</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id} className="border-border">
                  <TableCell className="text-foreground font-medium">{service.name}</TableCell>
                  <TableCell className="text-muted-foreground max-w-xs truncate">{service.description || "—"}</TableCell>
                  <TableCell>
                    <span className={`text-xs px-2 py-1 rounded ${service.is_active ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}>
                      {service.is_active ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" onClick={() => handleEdit(service)}><Pencil className="h-4 w-4 text-muted-foreground" /></Button>
                      <Button size="icon" variant="ghost" onClick={() => handleDelete(service.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminServices;
