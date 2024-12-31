import React from "react";

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => (
  <div className="flex flex-col items-center w-24 mx-8">
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src={skill.src}
        alt={`${skill.name} icon`}
        className="w-auto h-auto max-w-full max-h-full object-contain"
      />
    </div>
    <span className="text-sm font-medium text-center mt-2 w-full truncate">
      {skill.name}
    </span>
  </div>
);

export default SkillItem;
