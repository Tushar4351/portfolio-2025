import React from 'react';
import { motion } from 'framer-motion';

interface SliderIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const SliderIndicators: React.FC<SliderIndicatorsProps> = ({ total, current, onSelect }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-black/30 rounded-full p-2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onSelect(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            current === index ? 'bg-white' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  );
};

export default SliderIndicators;