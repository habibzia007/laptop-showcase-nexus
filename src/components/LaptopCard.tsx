
import { Laptop } from '@/types/laptop';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp, buttonTap } from '@/lib/animations';
import { Link } from 'react-router-dom';

interface LaptopCardProps {
  laptop: Laptop;
  onDelete?: (id: number) => void;
  delay?: number;
}

const LaptopCard = ({ laptop, onDelete, delay = 0 }: LaptopCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img 
            src={laptop.images[0]} 
            alt={`${laptop.company} ${laptop.model}`}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="flex justify-between items-start">
            <div>
              <div className="text-sm text-muted-foreground">{laptop.company}</div>
              <div className="text-lg font-semibold">{laptop.model}</div>
            </div>
            <div className="text-right font-bold">${laptop.price.toLocaleString()}</div>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pb-2 flex-grow">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {laptop.cpu && (
              <div className="flex justify-between col-span-2">
                <span className="text-muted-foreground">CPU:</span>
                <span className="font-medium truncate">{laptop.cpu}</span>
              </div>
            )}
            {laptop.ram && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">RAM:</span>
                <span className="font-medium">{laptop.ram}</span>
              </div>
            )}
            {laptop.hdd && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Storage:</span>
                <span className="font-medium">{laptop.hdd}</span>
              </div>
            )}
            {laptop.vga && (
              <div className="flex justify-between col-span-2">
                <span className="text-muted-foreground">Graphics:</span>
                <span className="font-medium truncate">{laptop.vga}</span>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-2">
          <div className="flex w-full gap-2">
            <Button asChild className="flex-1">
              <Link to={`/laptops/${laptop.id}`}>
                View Details
              </Link>
            </Button>
            {onDelete && (
              <motion.div whileTap={buttonTap}>
                <Button 
                  variant="outline" 
                  className="flex-none" 
                  onClick={() => onDelete(laptop.id)}
                >
                  Delete
                </Button>
              </motion.div>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default LaptopCard;
