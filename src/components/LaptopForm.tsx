
import { useState, useEffect } from 'react';
import { Laptop } from '@/types/laptop';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X, Plus } from 'lucide-react';

interface LaptopFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Laptop, 'id'>) => void;
  initialData?: Laptop;
}

const LaptopForm = ({ open, onClose, onSubmit, initialData }: LaptopFormProps) => {
  const [formData, setFormData] = useState<Omit<Laptop, 'id'>>({
    company: '',
    model: '',
    price: 0,
    size: '',
    hdd: '',
    ram: '',
    cpu: '',
    vga: '',
    images: [''],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        company: initialData.company,
        model: initialData.model,
        price: initialData.price,
        size: initialData.size || '',
        hdd: initialData.hdd || '',
        ram: initialData.ram || '',
        cpu: initialData.cpu || '',
        vga: initialData.vga || '',
        images: [...initialData.images],
      });
    } else {
      // Reset form when opening without initial data
      setFormData({
        company: '',
        model: '',
        price: 0,
        size: '',
        hdd: '',
        ram: '',
        cpu: '',
        vga: '',
        images: [''],
      });
    }
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageField = (index: number) => {
    if (formData.images.length > 1) {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, images: newImages }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter out empty image URLs
    const filteredData = {
      ...formData,
      images: formData.images.filter(img => img.trim() !== '')
    };
    
    // Ensure at least one image
    if (filteredData.images.length === 0) {
      filteredData.images = ['https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000']; // Default image
    }
    
    onSubmit(filteredData);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{initialData ? 'Edit Laptop' : 'Add New Laptop'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="size">Size (e.g., "15.6")</Label>
              <Input
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ram">RAM</Label>
              <Input
                id="ram"
                name="ram"
                value={formData.ram}
                onChange={handleChange}
                placeholder="e.g., 16GB DDR4"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hdd">Storage</Label>
              <Input
                id="hdd"
                name="hdd"
                value={formData.hdd}
                onChange={handleChange}
                placeholder="e.g., 512GB SSD"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cpu">CPU</Label>
            <Input
              id="cpu"
              name="cpu"
              value={formData.cpu}
              onChange={handleChange}
              placeholder="e.g., Intel Core i7-1260P"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="vga">Graphics</Label>
            <Input
              id="vga"
              name="vga"
              value={formData.vga}
              onChange={handleChange}
              placeholder="e.g., NVIDIA GeForce RTX 3050 Ti"
            />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Images (URLs)</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={addImageField}
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" /> Add Image
              </Button>
            </div>
            
            {formData.images.map((image, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={image}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  placeholder="Image URL"
                  className="flex-1"
                />
                {formData.images.length > 1 && (
                  <Button 
                    type="button" 
                    variant="destructive" 
                    size="icon" 
                    onClick={() => removeImageField(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? 'Update' : 'Add'} Laptop
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LaptopForm;
