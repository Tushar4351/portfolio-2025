import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderItemProps {
  image: string;
  isActive: boolean;
  index: number;
}

const SliderItem: React.FC<SliderItemProps> = ({ image, isActive, index }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={image}
            className="block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            alt={`Slide ${index + 1}`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SliderItem;