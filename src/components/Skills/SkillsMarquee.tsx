import { motion } from "framer-motion";
import { skills } from "../../data/data";
import SkillItem from "./SkillItem";

const SkillsMarquee = () => {
  const totalWidth = skills.length * 120;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden rounded-xl bg-secondary py-6"
    >
      <div className="relative">
        {/* Left fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent" />

        <motion.div
          className="flex"
          animate={{
            x: [`0px`, `-${totalWidth}px`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <SkillItem key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </motion.div>

        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent" />
      </div>
    </motion.div>
  );
};

export default SkillsMarquee;
