import { motion } from "framer-motion";



export const SkillBar = ({ name, percentage, icon, description }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full mb-6 group bg-white rounded-xl"
    >
      <motion.div 
        className="absolute inset-0 bg-primary rounded-xl"
        initial={{ width: "0%" }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="relative flex items-center rounded-xl p-4 pr-16">
        <div className="w-12 h-12 rounded-xl bg-white/10 p-2 flex items-center justify-center mr-4">
          <img src={icon} alt={name} className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-white/60">{description}</p>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 rounded-full px-3 py-1">
          <span className="text-sm font-medium text-white">{percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
};