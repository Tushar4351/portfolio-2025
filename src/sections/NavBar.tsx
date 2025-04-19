import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hamburgerLineVariants, menuVariants } from "../data/data";
import { FaFolder } from "react-icons/fa6";
import { SlidingText } from "../components/SlidingTextLogoEffect";
import GlowNavigation from "../components/GlowNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return null;
  }

// Navigation links animation variants
const navLinksVariants = {
  hidden: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    }
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * custom,
      duration: 0.3,
    }
  }),
  exit: (custom: number) => ({
    opacity: 0,
    y: -10,
    transition: {
      delay: 0.02 * custom,
      duration: 0.2,
    }
  })
};

  // Container animation variants
  const containerVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          delay: 0.2,
          duration: 0.4,
        },
        opacity: {
          duration: 0.1,
        },
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          delay: 0.1,
          duration: 0.4,
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          delay: 0.2,
          duration: 0.4,
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${isOpen ? "" : ""}`}
    >
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="mx-auto px-4 py-4 lg:py-2 bg-primary rounded-xl w-full"
      >
        <div
          className={`flex flex-col lg:flex-row lg:justify-between lg:items-center ${
            isOpen ? "gap-8" : ""
          } `}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-white text-2xl w-auto h-auto ${
                isOpen ? "" : ""
              } font-bold`}
            >
              <SlidingText
                firstText="Tushar"
                secondText="Bhowal"
                logo="/Tushar_favicon.png"
              />
            </motion.a>

            {/* Hamburger Menu for Mobile */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setIsOpen(!isOpen)}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={hamburgerLineVariants}
                  animate={isOpen ? "open" : "closed"}
                  className="w-6 h-0.5 bg-white my-0.5 transform transition-transform duration-300"
                />
              ))}
            </button>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="mobile-menu-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden flex flex-col gap-8 my-4 overflow-hidden"
              >
                {/* Navigation Links */}
                <motion.div className="flex flex-col space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="glow-navigation"
                      variants={navLinksVariants}
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <GlowNavigation />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col space-y-4 mt-4">
                  <AnimatePresence mode="wait">
                    <motion.a
                      key="contact-button"
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      variants={navLinksVariants}
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="shadow-[0_0_0_3px_#000000_inset] px-4 py-[0.5rem] bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex items-center justify-center gap-2"
                    >
                      Contact Me
                      <span>
                        <img
                          src="/send.png"
                          alt="Send icon"
                          className="w-4 h-4"
                        />
                      </span>
                    </motion.a>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.a
                      key="projects-button"
                      href="/projects"
                      whileHover={{ scale: 1.05 }}
                      variants={navLinksVariants}
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="inline-flex h-11 animate-shimmer items-center justify-center rounded-lg border border-black bg-[linear-gradient(110deg,white,45%,#1e2631,55%,white)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
                    >
                      Projects
                      <span>
                        <FaFolder className="w-4 h-4" />
                      </span>
                    </motion.a>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation Links - unchanged */}
          <div className="hidden lg:flex xl:pl-9 items-center space-x-8">
            <GlowNavigation />
          </div>

          {/* Desktop CTA Buttons - unchanged */}
          <div className="hidden lg:flex text-lg font-medium items-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="shadow-[0_0_0_3px_#000000_inset] px-4 py-[0.3rem] bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-lg transform hover:-translate-y-1 transition duration-400 flex items-center justify-center gap-2"
            >
              Contact Me
              <span>
                <img src="/send.png" alt="Send icon" className="w-4 h-4" />
              </span>
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex h-10 animate-shimmer items-center justify-center rounded-lg border border-black bg-[linear-gradient(110deg,white,45%,#1e2631,55%,white)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
            >
              Projects
              <span>
                <FaFolder className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
