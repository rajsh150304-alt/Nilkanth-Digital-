import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Inquiry {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  service: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
}

const statusColors: Record<string, string> = {
  new: "bg-blue-900/30 text-blue-400",
  contacted: "bg-yellow-900/30 text-yellow-400",
  resolved: "bg-green-900/30 text-green-400",
  closed: "bg-muted text-muted-foreground",
};

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const { toast } = useToast();

  const fetchInquiries = async () => {
    const { data } = await supabase.from("contact_inquiries").select("*").order("created_at", { ascending: false });
    if (data) setInquiries(data);
  };

  useEffect(() => { fetchInquiries(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("contact_inquiries").update({ status }).eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: `Status updated to ${status}` });
    fetchInquiries();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this inquiry?")) return;
    const { error } = await supabase.from("contact_inquiries").delete().eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Inquiry deleted" }); fetchInquiries();
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Customer Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        {inquiries.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No inquiries yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-muted-foreground">Date</TableHead>
                  <TableHead className="text-muted-foreground">Name</TableHead>
                  <TableHead className="text-muted-foreground">Contact</TableHead>
                  <TableHead className="text-muted-foreground">Service</TableHead>
                  <TableHead className="text-muted-foreground">Message</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.map((inquiry) => (
                  <TableRow key={inquiry.id} className="border-border">
                    <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                      {new Date(inquiry.created_at).toLocaleDateString("en-IN")}
                    </TableCell>
                    <TableCell className="text-foreground font-medium">{inquiry.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        {inquiry.phone && (
                          <a href={`tel:${inquiry.phone}`} className="text-sm text-primary flex items-center gap-1">
                            <Phone className="h-3 w-3" /> {inquiry.phone}
                          </a>
                        )}
                        {inquiry.email && (
                          <a href={`mailto:${inquiry.email}`} className="text-sm text-primary flex items-center gap-1">
                            <Mail className="h-3 w-3" /> {inquiry.email}
                          </a>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{inquiry.service || "—"}</TableCell>
                    <TableCell className="text-muted-foreground max-w-xs truncate text-sm">{inquiry.message || "—"}</TableCell>
                    <TableCell>
                      <Select value={inquiry.status || "new"} onValueChange={(v) => updateStatus(inquiry.id, v)}>
                        <SelectTrigger className="w-28 h-8 text-xs bg-secondary border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Button size="icon" variant="ghost" onClick={() => handleDelete(inquiry.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminInquiries;
