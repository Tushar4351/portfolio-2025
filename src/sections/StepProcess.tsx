import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Steps from "../components/Steps";
import { steps } from "../data/data";
import { useState } from "react";
const StepProcess = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col rounded-xl bg-secondary py-8 md:py-12"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary flex items-center gap-4 text-white rounded-3xl mx-6 p-8  mb-6 relative"
      >
        <div className="text-6xl sm:text-9xl font-bold ">4</div>
        <div>
          <h2 className="text-md sm:text-2xl font-medium mb-2">Step process</h2>
          <p className="text-sm t">
            A proven workflow{" "}
            <span className="text-white/60">that ensures </span>
            <br />
            <span className="text-white/60">
              {" "}
              seamless collaboration and
            </span>{" "}
            <br />
            outstanding results.
          </p>
        </div>

        <div className="absolute top-4 right-4">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white/30 rounded-full" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Steps Section */}
      <div className="space-y-4 px-8 sm:px-12">
        {steps.map((step, index) => (
          <Steps key={step.number} {...step} index={index} />
        ))}
      </div>

      {/* Launch Button */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 mx-auto mt-6 text-gray-800 font-medium cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Launch your business
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <GoArrowUpRight className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default StepProcess;
