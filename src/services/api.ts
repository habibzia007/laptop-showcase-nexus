
import axios from 'axios';
import { Laptop } from '@/types/laptop';

const API_URL = '/api/laptops';

export const fetchLaptops = async (): Promise<Laptop[]> => {
  // For development, let's use mock data initially
  // This would be replaced with real API calls in production
  return mockLaptops;
};

export const fetchLaptopById = async (id: number): Promise<Laptop | null> => {
  // In real application, this would be:
  // const response = await axios.get(`${API_URL}/${id}`);
  // return response.data;
  return mockLaptops.find(laptop => laptop.id === id) || null;
};

export const createLaptop = async (laptop: Omit<Laptop, 'id'>): Promise<number> => {
  // In real application, this would be:
  // const response = await axios.post(API_URL, laptop);
  // return response.data.id;
  return Math.floor(Math.random() * 1000); // Mock ID
};

export const updateLaptop = async (id: number, laptop: Partial<Laptop>): Promise<boolean> => {
  // In real application, this would be:
  // const response = await axios.put(`${API_URL}/${id}`, laptop);
  // return response.data.success;
  return true; // Mock success
};

export const deleteLaptop = async (id: number): Promise<boolean> => {
  // In real application, this would be:
  // const response = await axios.delete(`${API_URL}/${id}`);
  // return response.data.success;
  return true; // Mock success
};

// Mock data for development
export const mockLaptops: Laptop[] = [
  {
    id: 1,
    company: "Apple",
    model: "MacBook Pro 16",
    size: "16\"",
    price: 2499.99,
    hdd: "1TB SSD",
    ram: "32GB DDR4",
    cpu: "Apple M2 Max",
    vga: "Apple Integrated",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000",
    ]
  },
  {
    id: 2,
    company: "Dell",
    model: "XPS 15",
    size: "15.6\"",
    price: 1899.99,
    hdd: "512GB SSD",
    ram: "16GB DDR4",
    cpu: "Intel Core i9-12900HK",
    vga: "NVIDIA GeForce RTX 3050 Ti",
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000",
    ]
  },
  {
    id: 3,
    company: "Lenovo",
    model: "ThinkPad X1 Carbon",
    size: "14\"",
    price: 1399.99,
    hdd: "1TB SSD",
    ram: "16GB DDR4",
    cpu: "Intel Core i7-1260P",
    vga: "Intel Iris Xe Graphics",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000",
    ]
  },
  {
    id: 4,
    company: "HP",
    model: "Spectre x360",
    size: "13.5\"",
    price: 1299.99,
    hdd: "512GB SSD",
    ram: "16GB DDR4",
    cpu: "Intel Core i7-1255U",
    vga: "Intel Iris Xe Graphics",
    images: [
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1000",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000",
    ]
  },
  {
    id: 5,
    company: "Razer",
    model: "Blade 15",
    size: "15.6\"",
    price: 2199.99,
    hdd: "1TB SSD",
    ram: "32GB DDR5",
    cpu: "Intel Core i9-12900H",
    vga: "NVIDIA GeForce RTX 3080 Ti",
    images: [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000",
      "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1000",
    ]
  }
];
