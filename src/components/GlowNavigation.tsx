// src/components/GlowNavigation.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navigationData } from "../data/data";

// Animation variants
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export const GlowNavigation = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  // Determine active page based on current URL
  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    // Find matching navigation item
    const activeNavItem = navigationData.find((item) => {
      if (item.url.startsWith("#")) {
        return item.url === hash;
      }
      return item.url === pathname;
    });

    if (activeNavItem) {
      setActiveItem(activeNavItem.title);
    } else {
      // Default to home if no match
      setActiveItem("Home");
    }
  }, []);

  const handleItemClick = (title: string) => {
    setActiveItem(title);
  };

  return (
    <motion.div
      className="p-2 rounded-2xl h-[250px] lg:h-[60px] border border-black/40 shadow-lg  relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
        variants={navGlowVariants}
      />
      <ul className="flex flex-col lg:flex-row items-center gap-5 relative z-10">
        {navigationData.map((item) => {
          const Icon = item.icon;
          const isActive = item.title === activeItem;

          return (
            <motion.li key={item.id} className="relative w-full">
              <a href={item.url} onClick={() => handleItemClick(item.title)}>
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    animate={isActive ? "hover" : "initial"}
                    style={{
                      background: item.gradient,
                      opacity: isActive ? 1 : 0,
                      borderRadius: "16px",
                    }}
                  />
                  <motion.div
                    className={`flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl ${
                      isActive
                        ? "text-white"
                        : "text-white group-hover:text-white"
                    }`}
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? item.iconColor : "text-white"
                      } group-hover:${item.iconColor}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>{item.title}</span>
                  </motion.div>
                  <motion.div
                    className={`flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl ${
                      isActive
                        ? "text-white"
                        : "text-white group-hover:text-white"
                    }`}
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      rotateX: 90,
                    }}
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? item.iconColor : "text-foreground"
                      } group-hover:${item.iconColor}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>{item.title}</span>
                  </motion.div>
                </motion.div>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default GlowNavigation;
