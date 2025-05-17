
import { Laptop } from '@/types/laptop';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperHeroProps {
  laptops: Laptop[];
}

const SwiperHero = ({ laptops }: SwiperHeroProps) => {
  const [mounted, setMounted] = useState(false);
  
  // We use useEffect to ensure that Swiper is only mounted on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-96 rounded-2xl overflow-hidden shadow-lg"
      >
        {laptops.map((laptop) => (
          <SwiperSlide key={laptop.id}>
            <div className="relative w-full h-full">
              <img 
                src={laptop.images[0]} 
                alt={`${laptop.company} ${laptop.model}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-white/80">{laptop.company}</h4>
                  <h3 className="text-3xl font-bold mb-2">{laptop.model}</h3>
                  <div className="flex justify-between items-center">
                    <div className="space-x-2">
                      {laptop.cpu && <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{laptop.cpu}</span>}
                      {laptop.ram && <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{laptop.ram}</span>}
                    </div>
                    <div className="text-2xl font-bold">${laptop.price.toLocaleString()}</div>
                  </div>
                  <Link 
                    to={`/laptops/${laptop.id}`}
                    className="mt-4 inline-block bg-white text-black font-medium px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SwiperHero;
