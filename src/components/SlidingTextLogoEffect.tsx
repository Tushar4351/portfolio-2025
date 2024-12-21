import React, { useState } from "react";
import { motion } from "framer-motion";

interface SlidingTextProps {
  firstText: string;
  secondText: string;
  className?: string;
  duration?: number;
  logo?: string;
}

export const SlidingText: React.FC<SlidingTextProps> = ({
  firstText,
  secondText,
  className = "",
  duration = 0.3,
  logo,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerWidth =
    Math.max(firstText.length, secondText.length) * 0.7 + "em";

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {logo && (
        <span>
          <img className="w-8 h-8" src={logo} />
        </span>
      )}
      <div
        className="relative h-8 overflow-hidden"
        style={{ width: containerWidth }}
      >
        <motion.div
          initial={false}
          animate={{ y: isHovered ? -30 : 0 }}
          transition={{ duration, ease: "easeInOut" }}
          className="absolute w-full flex flex-col items-start"
        >
          <span className="h-8 flex items-center">{firstText}</span>
          <span className="h-8 flex items-center">{secondText}</span>
        </motion.div>
      </div>
    </div>
  );
};
