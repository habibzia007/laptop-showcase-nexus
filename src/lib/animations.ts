
import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideIn: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
};
