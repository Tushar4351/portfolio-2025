import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/data";
import { SlidingLogo } from "../components/SlidingTextLogoEffect";
import { GoArrowUpRight } from "react-icons/go";

const MyInformation = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-3"
      >
        <div className="col-span-1 flex flex-col md:flex-row">
          <motion.a
            href="https://maps.apple.com/?address=Ichapur,%20North%20Barrackpur,%20743144,%20West%20Bengal,%20India&auid=1375702232826506223&ll=22.805642,88.372861&lsp=7618&q=My%20Location&t=m"
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
          >
            <motion.img
              src="/location.png"
              alt="my location"
              className="h-full w-full object-cover rounded-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <div className="absolute top-1/2 left-1/2 size-20 rounded-full -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <motion.img
                src="/face.png"
                alt="my logo"
                className="size-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              />
            </div>
          </motion.a>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                <SlidingLogo
                  FirstIcon={link.icon}
                  SecondIcon={GoArrowUpRight}
                  name={link.title}
                  className="bg-secondary hover:bg-gray-200/70"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyInformation;
