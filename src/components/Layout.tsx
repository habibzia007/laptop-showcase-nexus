
import Header from './Header';
import { ThemeProvider } from './ThemeProvider';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-fira">
        <Header />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 pb-16"
        >
          {children}
        </motion.main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
