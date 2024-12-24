import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SliderItem: React.FC<SliderItemProps> = ({
  image,
  isActive,
  direction,
}) => {
  return (
    <AnimatePresence initial={false} custom={direction}>
      {isActive && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <img src={image} alt="Slide" className="w-full h-full object-cover" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SliderItem;
