import React, { useState } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

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

interface SlidingLogoProps {
  FirstIcon: IconType;
  SecondIcon: IconType;
  className?: string;
  duration?: number;
  name?: string;
}
export const SlidingLogo: React.FC<SlidingLogoProps> = ({
  FirstIcon,
  SecondIcon,
  className = "",
  duration = 0.3,
  name,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`gap flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-sm">{name}</span>
      <div className="relative w-5 h-8 overflow-hidden">
        <motion.div
          animate={{ y: isHovered ? -32 : 0 }}
          transition={{
            duration,
            ease: "easeInOut",
          }}
          className="absolute w-full"
        >
          <div className="h-8 flex items-center justify-center">
            <FirstIcon
              className={`w-5 h-5 ${
                name == "Contact Me" ? "text-white" : "text-gray-500"
              } `}
            />
          </div>
          <div className="h-8 flex items-center justify-center">
            <SecondIcon
              className={`w-5 h-5 ${
                name == "Contact Me" ? "text-white" : "text-gray-500"
              } `}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
