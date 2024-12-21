import React from 'react';
import { motion } from 'framer-motion';

interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({ onPrevious, onNext }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex absolute top-1/2 left-4 z-30 -translate-y-1/2 justify-center items-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
        onClick={onPrevious}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex absolute top-1/2 right-4 z-30 -translate-y-1/2 justify-center items-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
        onClick={onNext}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </>
  );
};

export default SliderControls;