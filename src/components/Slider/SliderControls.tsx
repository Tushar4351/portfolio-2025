import React from "react";
import { motion } from "framer-motion";

interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <div className="absolute inset-0 z-20">
      <div className="relative w-full h-full flex items-center justify-between px-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevious}
          className="w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          className="w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-lg text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default SliderControls;
