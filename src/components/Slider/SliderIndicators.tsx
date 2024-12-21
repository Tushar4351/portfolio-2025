import React from 'react';
import { motion } from 'framer-motion';

interface SliderIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const SliderIndicators: React.FC<SliderIndicatorsProps> = ({ total, current, onSelect }) => {
  return (
    <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          className={`w-3 h-3 rounded-full ${
            current === index ? 'bg-white' : 'bg-white/50'
          }`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default SliderIndicators;