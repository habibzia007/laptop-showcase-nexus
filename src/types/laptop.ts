
export interface Laptop {
  id: number;
  company: string;
  model: string;
  size?: string;
  price: number;
  hdd?: string;
  ram?: string;
  cpu?: string;
  vga?: string;
  images: string[];
  created_at?: string;
  updated_at?: string;
}
