import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  hamburgerLineVariants,
  menuVariants,
  navigationData,
} from "../data/data";
import { FaFolder } from "react-icons/fa6";
import { SlidingText } from "../components/SlidingTextLogoEffect";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(navigationData);

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
        className="mx-auto px-4 py-4 bg-primary rounded-xl w-full"
      >
        <div
          className={`flex flex-col lg:flex-row lg:justify-between lg:items-center  ${
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
                isOpen ? "" : "px-5"
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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden flex flex-col gap-8 my-4"
              >
                {/* Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navigationData.map((item, i) => (
                    <motion.a
                      key={item.id}
                      href={item.url}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (i + 1) }}
                      className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
                    >
                      <SlidingText
                        firstText={item.title}
                        secondText={item.title}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col space-y-4 mt-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * 1 }}
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

                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * 1 }}
                    className="inline-flex h-11 animate-shimmer items-center justify-center rounded-lg border border-black bg-[linear-gradient(110deg,white,45%,#1e2631,55%,white)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
                  >
                    Projects
                    <span>
                      <FaFolder className="w-4 h-4" />
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex xl:pl-9 items-center space-x-8">
            {navigationData.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.url}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
              >
                <SlidingText firstText={item.title} secondText={item.title} />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex text-lg font-semibold items-center gap-5">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="shadow-[0_0_0_3px_#000000_inset] px-4 py-[0.3rem] bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex items-center justify-center gap-2"
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
