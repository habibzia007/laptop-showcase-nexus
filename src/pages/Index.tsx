
import { useState, useEffect } from 'react';
import { useLaptopStore } from '@/store/laptopStore';
import LaptopCard from '@/components/LaptopCard';
import SwiperHero from '@/components/SwiperHero';
import LaptopForm from '@/components/LaptopForm';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import { Laptop } from '@/types/laptop';
import { useToast } from '@/components/ui/use-toast';
import Layout from '@/components/Layout';

const Index = () => {
  const { laptops, isLoading, error, fetchAll, addLaptop, deleteLaptop } = useLaptopStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleAddLaptop = async (data: Omit<Laptop, 'id'>) => {
    try {
      await addLaptop(data);
      setIsFormOpen(false);
      toast({
        title: 'Success!',
        description: 'Laptop added successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add laptop.',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteLaptop = async (id: number) => {
    try {
      await deleteLaptop(id);
      toast({
        title: 'Success!',
        description: 'Laptop deleted successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete laptop.',
        variant: 'destructive',
      });
    }
  };

  if (error) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Error Loading Laptops</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button onClick={() => fetchAll()}>
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero section with Swiper */}
      {laptops.length > 0 && <SwiperHero laptops={laptops.slice(0, 5)} />}

      {/* Actions Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Laptop Showcase</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Laptop
        </Button>
      </div>

      {/* Laptop Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-80 bg-muted rounded-lg"></div>
          ))}
        </div>
      ) : laptops.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">No Laptops Found</h2>
          <p className="text-muted-foreground mb-6">Add your first laptop to get started!</p>
          <Button onClick={() => setIsFormOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Laptop
          </Button>
        </div>
      ) : (
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {laptops.map((laptop, index) => (
            <LaptopCard 
              key={laptop.id} 
              laptop={laptop} 
              onDelete={handleDeleteLaptop}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      )}

      {/* Add/Edit Form Modal */}
      <LaptopForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddLaptop}
      />
    </Layout>
  );
};

export default Index;
