import { SkillBar } from "../components/SkillsBar";
import { skills } from "../data/data";
import { motion } from "framer-motion";

const Skill = () => {
  console.log(skills);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-secondary rounded-xl "
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-10 flex flex-col gap-12 md: md:flex-row "
      >
        <h1 className="text-2xl md:w-1/2 font-semibold mb-4">
          My Skills, your advantage
        </h1>
        <p className=" md:w-1/2">
          My skills is a blend of creativity and technology, allowing me to
          deliver top-notch development and strategy for every project.
        </p>
      </motion.div>

      <div className="space-y-4 p-8 md:p-10 ">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            src={skill.src}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
