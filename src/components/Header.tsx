
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Laptop } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-4 px-6 sm:px-8 mb-8 border-b">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex justify-between items-center"
      >
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Laptop className="h-6 w-6" />
          <span className="font-fira">LaptopShowcase</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="default">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
