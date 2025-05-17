
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchLaptopById } from '@/services/api';
import { useLaptopStore } from '@/store/laptopStore';
import { Laptop } from '@/types/laptop';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Trash } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, slideIn } from '@/lib/animations';
import { useToast } from '@/components/ui/use-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Layout from '@/components/Layout';
import LaptopForm from '@/components/LaptopForm';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const LaptopDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateLaptop, deleteLaptop } = useLaptopStore();
  const { toast } = useToast();
  
  const [laptop, setLaptop] = useState<Laptop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  
  useEffect(() => {
    const getLaptop = async () => {
      try {
        setLoading(true);
        setError(null);
        if (id) {
          const data = await fetchLaptopById(parseInt(id));
          setLaptop(data);
        }
      } catch (err) {
        setError('Failed to load laptop details.');
      } finally {
        setLoading(false);
      }
    };
    
    getLaptop();
  }, [id]);

  const handleUpdate = async (data: Omit<Laptop, 'id'>) => {
    try {
      if (laptop && id) {
        await updateLaptop(parseInt(id), data);
        setLaptop({ ...laptop, ...data });
        setIsEditFormOpen(false);
        toast({
          title: 'Success!',
          description: 'Laptop updated successfully.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update laptop.',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async () => {
    try {
      if (id) {
        await deleteLaptop(parseInt(id));
        toast({
          title: 'Success!',
          description: 'Laptop deleted successfully.',
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete laptop.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-96">
          <div className="animate-pulse text-xl">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (error || !laptop) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-muted-foreground mb-6">{error || 'Laptop not found'}</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="rounded-xl overflow-hidden shadow-lg aspect-video mb-4"
          >
            {laptop.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={image} 
                  alt={`${laptop.company} ${laptop.model} - Image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-3 justify-center mt-6">
            <Button variant="outline" onClick={() => setIsEditFormOpen(true)}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          variants={slideIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h4 className="text-lg font-medium text-muted-foreground">{laptop.company}</h4>
            <h1 className="text-4xl font-bold">{laptop.model}</h1>
            {laptop.size && <p className="text-lg mt-1">{laptop.size} Display</p>}
            <p className="text-3xl font-bold mt-2">${laptop.price.toLocaleString()}</p>
          </div>

          <div className="grid gap-6 pt-4">
            <div className="grid grid-cols-2 gap-4">
              {laptop.cpu && (
                <div>
                  <h3 className="font-semibold mb-1">Processor</h3>
                  <p>{laptop.cpu}</p>
                </div>
              )}
              
              {laptop.ram && (
                <div>
                  <h3 className="font-semibold mb-1">Memory</h3>
                  <p>{laptop.ram}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {laptop.hdd && (
                <div>
                  <h3 className="font-semibold mb-1">Storage</h3>
                  <p>{laptop.hdd}</p>
                </div>
              )}
              
              {laptop.vga && (
                <div>
                  <h3 className="font-semibold mb-1">Graphics</h3>
                  <p>{laptop.vga}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Edit Form Modal */}
      <LaptopForm
        open={isEditFormOpen}
        onClose={() => setIsEditFormOpen(false)}
        onSubmit={handleUpdate}
        initialData={laptop}
      />
    </Layout>
  );
};

export default LaptopDetail;
