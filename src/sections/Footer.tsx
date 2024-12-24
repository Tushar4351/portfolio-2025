import { SlidingLogo } from "../components/SlidingTextLogoEffect";
import { footerNavigationData } from "../data/data";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-black text-gray-400 rounded-xl px-16 pt-16 pb-12"
    >
      {/* Profile & Templates Section */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-10 md:flex-row justify-between items-center mb-16"
      >
        <div className="flex items-center gap-3">
          <img
            src="/Tushar_favicon.png"
            alt="Profile"
            className="rounded-full w-8 h-8 sm:w-14 sm:h-14"
          />
          <div>
            <h2 className="text-white text-lg sm:text-2xl">Tushar Bhowal</h2>
            <p className="text-white/60 text-sm">Software Developer</p>
          </div>
        </div>
        <SlidingLogo
          FirstIcon={GoArrowUpRight}
          SecondIcon={GoArrowUpRight}
          name="Download Resume"
          className="bg-secondary py-[1px] rounded-md text-primary"
        />
      </motion.div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-3 gap-16 mb-16">
        {footerNavigationData.map((section, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            key={section.title}
          >
            <h3 className="text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.1 + linkIndex * 0.05,
                  }}
                >
                  <a
                    href={link.href}
                    className="hover:text-white text-white/60"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Footer Credits */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-sm border-t border-gray-800 pt-8 text-white/60"
      >
        © Create By{" "}
        <a href="#" className="text-white">
          Tushar
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
