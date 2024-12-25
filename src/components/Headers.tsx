import React, { useState } from "react";
import { GoArrowUpRight, GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";

export const HomeHeader = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const pathname = window.location.pathname;
  // console.log(pathname);

  return (
    <motion.a
      href="/about"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-8 md:p-10 flex flex-col gap-12 md:gap-20 bg-secondary rounded-xl relative "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 2 }}
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
          I'm Tushar Bhowal, a software developer from India. I create
          innovative, impactful solutions by blending creativity and
          functionality in every project.
        </p>
      </div>
    </motion.a>
  );
};

//section heading funtion

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 2 }}
      className="flex items-center text-black font-normal justify-between px-4 py-4 rounded-xl bg-secondary transition-colors duration-200"
    >
      <div className="flex items-center space-x-2">
        <h2 className="flex items-center text-lg font-medium ">
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
        <motion.a
          whileHover={{ x: 5 }}
          href="/projects"
          className="text-sm underline underline-offset-4"
        >
          {link}
        </motion.a>
      )}
    </motion.div>
  );
};

export const MainHeading: React.FC<MainHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="p-10 md:p-12 flex flex-col gap-12 md:gap-32 text-primary  bg-secondary rounded-xl relative "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 4 }}
      whileHover={{
        backgroundColor: "rgba(229, 231, 235, 0.7)",
        transition: { duration: 0.3 },
      }}
    >
      <h1 className="text-3xl">{title}</h1>
      <p className="">{description}</p>
    </motion.div>
  );
};
