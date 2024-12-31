import { useState } from "react";
import { MainHeading } from "../components/Headers";
import ProjectCard from "../components/ProjectCard";
import { cardData, workTitleData } from "../data/data";
import Footer from "../sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { SlidingLogo } from "../components/SlidingTextLogoEffect";
import { BiEnvelope } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

interface ProjectCardProps {
  project: Project;
}

const ProjectContainer = ({ project }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(
    "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  );

  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-6.2rem)] lg:overflow-hidden mt-2">
      <motion.div
        className="w-full lg:w-1/2 mt-16 lg:mt-0 h-[500px] sm:h-[710px] lg:h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full lg:sticky lg:top-0 relative overflow-hidden bg-gray-100 rounded-xl"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImage}
              className="object-cover w-full h-full absolute inset-0"
              src={currentImage}
              alt="Project preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.15,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* right side */}
      <div className="w-full lg:w-1/2 lg:overflow-y-auto">
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <MainHeading
              title={workTitleData.title}
              description={workTitleData.description}
            />
          </motion.div>
          {/* project */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            {cardData.map((card, i) => (
              <a
                className="sticky "
                style={{
                  top: `calc(0px + ${i * 40}px`,
                }}
                key={card.id}
                href={`/projects/${project.id}`}
                onMouseEnter={() => setCurrentImage(card.image)}
                onMouseLeave={() =>
                  setCurrentImage(
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9"
                  )
                }
              >
                <ProjectCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  image={card.image}
                  backGround={card.backGround}
                />
              </a>
            ))}
          </motion.div>
          <a href="/contact">
            <SlidingLogo
              FirstIcon={BiEnvelope}
              SecondIcon={GoArrowUpRight}
              name="Contact Me"
              className="bg-black text-white"
            />
          </a>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
