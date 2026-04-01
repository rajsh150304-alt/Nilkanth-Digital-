import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  brand: string | null;
  price_min: number | null;
  price_max: number | null;
  description: string | null;
  image_url: string | null;
  in_stock: boolean | null;
}

const categories = ["Laptops", "Computers", "Printers", "Intercom", "Accessories", "CCTV", "Biometric", "LED TV"];

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({
    name: "", category: "Laptops", brand: "", price_min: "", price_max: "",
    description: "", image_url: "", in_stock: true
  });
  const { toast } = useToast();

  const fetchProducts = async () => {
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (data) setProducts(data);
  };

  useEffect(() => { fetchProducts(); }, []);

  const resetForm = () => {
    setForm({ name: "", category: "Laptops", brand: "", price_min: "", price_max: "", description: "", image_url: "", in_stock: true });
    setEditing(null);
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setForm({
      name: product.name,
      category: product.category,
      brand: product.brand || "",
      price_min: product.price_min?.toString() || "",
      price_max: product.price_max?.toString() || "",
      description: product.description || "",
      image_url: product.image_url || "",
      in_stock: product.in_stock ?? true,
    });
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: form.name.trim(),
      category: form.category,
      brand: form.brand.trim() || null,
      price_min: form.price_min ? parseFloat(form.price_min) : null,
      price_max: form.price_max ? parseFloat(form.price_max) : null,
      description: form.description.trim() || null,
      image_url: form.image_url.trim() || null,
      in_stock: form.in_stock,
    };

    if (!payload.name || !payload.category) {
      toast({ title: "Error", description: "Name and category are required", variant: "destructive" });
      return;
    }

    if (editing) {
      const { error } = await supabase.from("products").update(payload).eq("id", editing.id);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Product updated" });
    } else {
      const { error } = await supabase.from("products").insert(payload);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Product added" });
    }
    setOpen(false);
    resetForm();
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Product deleted" });
    fetchProducts();
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground">Products</CardTitle>
        <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) resetForm(); }}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-foreground">{editing ? "Edit Product" : "Add Product"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Name *</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Category *</Label>
                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger className="bg-secondary border-border"><SelectValue /></SelectTrigger>
                  <SelectContent>{categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Brand</Label>
                <Input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className="bg-secondary border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Min Price (₹)</Label>
                  <Input type="number" value={form.price_min} onChange={(e) => setForm({ ...form, price_min: e.target.value })} className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Max Price (₹)</Label>
                  <Input type="number" value={form.price_max} onChange={(e) => setForm({ ...form, price_max: e.target.value })} className="bg-secondary border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Image URL</Label>
                <Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Description</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="bg-secondary border-border" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={form.in_stock} onChange={(e) => setForm({ ...form, in_stock: e.target.checked })} id="in_stock" />
                <Label htmlFor="in_stock" className="text-foreground">In Stock</Label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                {editing ? "Update Product" : "Add Product"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {products.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No products yet. Add your first product!</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-muted-foreground">Name</TableHead>
                  <TableHead className="text-muted-foreground">Category</TableHead>
                  <TableHead className="text-muted-foreground">Brand</TableHead>
                  <TableHead className="text-muted-foreground">Price Range</TableHead>
                  <TableHead className="text-muted-foreground">Stock</TableHead>
                  <TableHead className="text-muted-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="border-border">
                    <TableCell className="text-foreground font-medium">{product.name}</TableCell>
                    <TableCell className="text-muted-foreground">{product.category}</TableCell>
                    <TableCell className="text-muted-foreground">{product.brand || "—"}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {product.price_min && product.price_max
                        ? `₹${product.price_min.toLocaleString()} – ₹${product.price_max.toLocaleString()}`
                        : "—"}
                    </TableCell>
                    <TableCell>
                      <span className={`text-xs px-2 py-1 rounded ${product.in_stock ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}>
                        {product.in_stock ? "In Stock" : "Out of Stock"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" onClick={() => handleEdit(product)}>
                          <Pencil className="h-4 w-4 text-muted-foreground" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => handleDelete(product.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
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

export default AdminProducts;
