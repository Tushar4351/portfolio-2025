import { motion } from "framer-motion";
import { navigationData } from "../data/data";
import { FaFolder } from "react-icons/fa6";
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-3"
    >
      <div className="mx-auto px-4 py-5 bg-black rounded-3xl w-full my-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-2xl w-auto h-auto px-5 font-bold flex items-center gap-2"
          >
            <img className="w-7 h-7" src="/Tushar_favicon.png" />
            Tushar
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex pl-9 items-center space-x-8">
            {navigationData.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.url}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
                className="text-white text-lg font-medium hover:text-gray-300 transition-colors"
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex text-lg font-semibold items-center gap-5">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="shadow-[0_0_0_3px_#000000_inset] px-4 py-1 bg-transparent border-2 border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex items-center justify-center gap-2"
            >
              Contact Me{" "}
              <span>
                <img src="/send.png" alt="Send icon" className="w-4 h-4" />
              </span>
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex h-11 animate-shimmer items-center justify-center rounded-lg border border-black  bg-[linear-gradient(110deg,white,45%,#1e2631,55%,white)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
            >
              Projects{" "}
              <span>
                <FaFolder className="w-4 h-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
