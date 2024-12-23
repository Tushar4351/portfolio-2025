import { useRef } from "react";
import { services } from "../data/data";
import { motion } from "framer-motion";

const Services = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * 3 }}
      className="flex flex-col space-y-4 rounded-xl h-[500px] md:h-[400px] lg:h-[320px] xl: bg-secondary"
    >
      <div className="flex flex-col gap-12 md:gap-3 md:flex-row justify-between p-8 md:px-10 md:pt-10 md:pb-0">
        <h2 className="text-2xl font-semibold h-auto md:w-1/2 text-gray-900">
          So, What do I even do?
        </h2>
        <p className="text-primary h-auto md:w-1/2">
          I create software solutions, specialize in web technologies, design
          responsive UIs, manage teams, and deliver impactful projects with
          technical expertise, leadership, and effective communication skills.
        </p>
      </div>
      <div className="flex-1 relative" ref={constraintsRef}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="inline-flex absolute text-md bg-primary text-white items-center gap-2 px-6 py-2 rounded-full"
            style={{
              left: service.left,
              top: service.top,
            }}
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: index * 0.2,
            }}
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.1 }}
          >
            <span>
              <service.icon className="w-5 h-5" />
            </span>
            <span>{service.title}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
