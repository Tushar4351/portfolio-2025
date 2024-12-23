import { cardData } from "../data/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-3"
    >
      {cardData.slice(0, 3).map((card, i) => (
        <a
          className="sticky"
          style={{
            top: `calc(0px + ${i * 40}px`,
          }}
          key={card.id}
          href={card.link}
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
  );
};

export default Project;
