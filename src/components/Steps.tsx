import React from "react";
import { motion } from "framer-motion";
const Steps: React.FC<StepProps> = ({ number, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm "
    >
      <div
        className={`flex items-center ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } justify-between relative`}
      >
        {/* Description (Left for even, Right for odd) */}
        <div
          className={`w-2/5 ${
            index % 2 === 0 ? "text-left pr-4" : "text-right pl-4"
          }`}
        >
          <p className="text-gray-500 text-md">{description}</p>
        </div>

        {/* Centered Dot and Number */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="relative p-2 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>

          <span className="text-primary text-sm sm:text-md font-medium">{number}</span>
        </div>

        {/* Title (Right for even, Left for odd) */}
        <motion.div
          initial={{
            x: index % 2 === 0 ? 50 : -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
          }}
          className={`w-2/5 ${
            index % 2 === 0 ? "text-right pl-4" : "text-left pr-4"
          }`}
        >
          <h3 className="font-medium text-primary text-md sm:text-xl">{title}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Steps;
