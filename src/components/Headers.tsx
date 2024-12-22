import React, { useState } from "react";
import { GoArrowUpRight, GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";
export const HomeHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="/about"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-lg mx-auto p-10 flex flex-col justify-between bg-secondary rounded-xl relative "
      whileHover={{
        backgroundColor: "rgba(229, 231, 235, 0.7)",
        transition: { duration: 0.3 },
      }}
    >
      {isHovered && (
        <motion.div
          className="absolute top-4 right-4"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <GoArrowUpRight className="w-6 h-6 text-gray-600" />
        </motion.div>
      )}

      <div className="flex items-center space-x-4 ">
        <div className="w-16 h-16 flex overflow-hidden rounded-full">
          <img
            src="/Tushar_favicon.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Tushar Bhowal</h1>
          <p className="text-gray-500">Software Developer</p>
        </div>
      </div>

      <div className="p-2">
        <p className="text-primary ">
          I'm Tushar Bhowal, a software developer from India. I build
          innovative, user-friendly applications that solve real-world problems,
          blending creativity, functionality, and technology to deliver
          impactful digital experiences.
        </p>
      </div>
    </motion.a>
  );
};

//section heading funtion
interface SectionHeadingProps {
  title: string;
  link?: string;
}
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  link,
}) => {
  return (
    <div className="flex items-center text-black font-normal justify-between px-4 py-4 rounded-xl bg-secondary transition-colors duration-200">
      <div className="flex items-center space-x-2">
        <h2 className="flex items-center text-md ">
          {title}
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <GoArrowDown className="ml-2 w-4 h-4 text-gray-600" />
          </motion.div>
        </h2>
      </div>
      {link && (
        <a href="/projects" className="text-sm underline underline-offset-4">
          {link}
        </a>
      )}
    </div>
  );
};
