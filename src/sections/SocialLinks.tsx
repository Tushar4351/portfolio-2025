import React from "react";
import { socialLinks } from "../data/data";
import { BiEnvelope } from "react-icons/bi";
import { SlidingLogo } from "../components/SlidingTextLogoEffect";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="hidden md:flex flex-col gap-2">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * (link.id + 1) }}
          >
            <SlidingLogo
              FirstIcon={link.icon}
              SecondIcon={GoArrowUpRight}
              name={link.title}
              className="bg-secondary hover:bg-gray-200/70"
            />
          </motion.a>
        ))}
      </div>

      <motion.a
        href="/contact"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * 5 }}
        className="mt-2 md:mt-0"
      >
        <SlidingLogo
          FirstIcon={BiEnvelope}
          SecondIcon={GoArrowUpRight}
          name="Contact Me"
          className="bg-black text-white"
        />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
