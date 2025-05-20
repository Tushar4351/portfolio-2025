import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiCalendar,
  FiTag,
  FiLayers,
  FiTarget,
  FiUsers,
  FiFeather,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

interface SingleProjectProps {
  project: Project;
}

const SingleProjectContainer = ({ project }: SingleProjectProps) => {
  const {
    title,
    shortDescription,
    image,
    mainImage,
    logo,
    category,
    links,
    technologies,
    fullDescription,
    features,
    useCases,
    purpose,
    date,
  } = project;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: {
      y: -5,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7 + i * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-6.2rem)] lg:overflow-hidden mt-2 ">
      {/* left side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 mt-16 lg:mt-0 h-[500px] sm:h-[710px] lg:h-full"
      >
        <motion.div
          className="h-full lg:sticky lg:top-0 relative overflow-hidden"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <video
            autoPlay
            muted
            loop
           className="object-cover rounded-xl w-full h-full"
            src={mainImage || "/placeholder.svg"}
          />
        </motion.div>
      </motion.div>
      {/* right side */}

      <motion.div
        className="w-full lg:w-1/2 lg:overflow-y-auto  bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header section */}
        <motion.div
          className="bg-black text-white p-6 rounded-2xl mb-3 overflow-hidden relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.2),transparent_70%)]"></div>

          <div className="relative z-10 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <motion.img
                src={logo || "/placeholder.svg"}
                alt={`${title} logo`}
                className="w-12 h-12 rounded-lg object-contain bg-gray-800 p-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              />
              <motion.div
                className="flex items-center gap-2 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <FiCalendar className="text-gray-300" />
                <span>{date}</span>
                <span className="mx-1">•</span>
                <FiTag className="text-gray-300" />
                <span>{category}</span>
              </motion.div>
            </div>

            <motion.h1
              className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              {title}
            </motion.h1>

            <motion.p className="text-gray-300 mb-4" variants={textReveal}>
              {shortDescription}
            </motion.p>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              >
                <FiExternalLink />
                <span>Live Site</span>
              </a>
              <a
                href={links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Technologies */}
          <motion.div
            className="bg-secondary p-5 rounded-2xl shadow-sm border border-gray-100"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiLayers className="text-xl text-black" />
              <h2 className="text-xl font-semibold">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white text-gray-800 rounded-full text-sm font-medium border border-gray-200"
                  custom={index}
                  variants={techBadgeVariants}
                  whileHover="hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Purpose */}
          <motion.div
            className="bg-black text-white p-5 rounded-2xl overflow-hidden relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-black to-emerald-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.2),transparent_70%)]"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <FiTarget className="text-xl text-white" />
                <h2 className="text-xl font-semibold">Purpose</h2>
              </div>
              <motion.p
                className="text-gray-300 leading-relaxed"
                variants={textReveal}
              >
                {purpose}
              </motion.p>
            </div>
          </motion.div>

          {/* Features - spans full width */}
          <motion.div
            className="bg-secondary p-5 rounded-2xl shadow-sm border border-gray-100 md:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiFeather className="text-xl text-black" />
              <h2 className="text-xl font-semibold">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  custom={index}
                  variants={listItemVariants}
                >
                  <div className="mt-1.5 min-w-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            className="bg-secondary p-5 rounded-2xl shadow-sm border border-gray-100 md:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 mb-4">
              <FiUsers className="text-xl text-black" />
              <h2 className="text-xl font-semibold">Use Cases</h2>
            </div>
            <ul className="space-y-2">
              {useCases.map((useCase, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  custom={index}
                  variants={listItemVariants}
                >
                  <div className="mt-1.5 min-w-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About */}
          <motion.div
            className="bg-gray-900 text-white p-5 rounded-2xl overflow-hidden relative md:col-span-2"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-900 via-black to-amber-900 opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,113,133,0.2),transparent_70%)]"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineSparkles className="text-xl text-white" />
                <h2 className="text-xl font-semibold">About</h2>
              </div>
              <motion.p
                className="text-gray-300 leading-relaxed text-sm"
                variants={textReveal}
              >
                {fullDescription}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Full description - spans full width */}
        {/* <motion.div
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mt-4"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineSparkles className="text-xl text-black" />
            <h2 className="text-xl font-semibold">Project Details</h2>
          </div>
          <motion.p
            className="text-gray-700 leading-relaxed"
            variants={textReveal}
          >
            {fullDescription}
          </motion.p>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default SingleProjectContainer;
