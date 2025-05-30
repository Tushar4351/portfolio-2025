import React, { useState, useEffect } from "react";
import { HomeHeader, MainHeading } from "../components/Headers";
import { aboutTitleData } from "../data/data";
import { motion } from "framer-motion";
import { SocialLinksBottom, SocialLinksTop } from "../sections/SocialLinks";
import StepProcess from "../sections/StepProcess";
import Footer from "../sections/Footer";
import SkillsMarquee from "../components/Skills/SkillsMarquee";

const AboutContainer: React.FC<ImageProps> = ({ image, alt }) => {
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

  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-6.2rem)] lg:overflow-hidden mt-2">
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
          <img
            className="object-cover rounded-xl w-full h-full"
            src={image}
            alt={alt}
          />
        </motion.div>
      </motion.div>
      {/* right side */}
      <div className="w-full lg:w-1/2 lg:overflow-y-auto">
        <div className="flex flex-col gap-3">
          <div className="md:grid md:grid-cols-5 gap-3">
            <div className="md:col-span-3">
              <HomeHeader />
            </div>
            <div className="md:col-span-2">
              <SocialLinksTop />
            </div>
          </div>
          <MainHeading
            title={aboutTitleData.title}
            description={aboutTitleData.description}
          />
          <SkillsMarquee />
          <StepProcess />
          <SocialLinksBottom />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
