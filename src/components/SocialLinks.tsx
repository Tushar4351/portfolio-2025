import React from "react";
import { socialLinks } from "../data/data";
import { BiEnvelope } from "react-icons/bi";
import { SlidingLogo } from "./SlidingTextLogoEffect";
import { GoArrowUpRight } from "react-icons/go";
const SocialLinks = () => {
  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm">
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

      <a href="/contact">
        <SlidingLogo
          FirstIcon={BiEnvelope}
          SecondIcon={GoArrowUpRight}
          name="Contact Me"
          className="bg-black text-white"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
