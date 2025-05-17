
import { create } from 'zustand';
import { Laptop } from '@/types/laptop';
import { fetchLaptops, createLaptop, updateLaptop, deleteLaptop } from '@/services/api';

interface LaptopStore {
  laptops: Laptop[];
  isLoading: boolean;
  error: string | null;
  fetchAll: () => Promise<void>;
  addLaptop: (laptop: Omit<Laptop, 'id'>) => Promise<number>;
  updateLaptop: (id: number, laptop: Partial<Laptop>) => Promise<boolean>;
  deleteLaptop: (id: number) => Promise<boolean>;
}

export const useLaptopStore = create<LaptopStore>((set, get) => ({
  laptops: [],
  isLoading: false,
  error: null,
  
  fetchAll: async () => {
    set({ isLoading: true, error: null });
    try {
      const laptops = await fetchLaptops();
      set({ laptops, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  addLaptop: async (laptop) => {
    set({ isLoading: true, error: null });
    try {
      const id = await createLaptop(laptop);
      const newLaptop = { ...laptop, id };
      set(state => ({ 
        laptops: [...state.laptops, newLaptop], 
        isLoading: false 
      }));
      return id;
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
      throw error;
    }
  },
  
  updateLaptop: async (id, updatedLaptop) => {
    set({ isLoading: true, error: null });
    try {
      const success = await updateLaptop(id, updatedLaptop);
      if (success) {
        set(state => ({
          laptops: state.laptops.map(laptop => 
            laptop.id === id ? { ...laptop, ...updatedLaptop } : laptop
          ),
          isLoading: false
        }));
      }
      return success;
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
      throw error;
    }
  },
  
  deleteLaptop: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const success = await deleteLaptop(id);
      if (success) {
        set(state => ({
          laptops: state.laptops.filter(laptop => laptop.id !== id),
          isLoading: false
        }));
      }
      return success;
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
      throw error;
    }
  }
}));
