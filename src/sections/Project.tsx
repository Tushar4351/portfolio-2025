import { cardData } from "../data/data";
import ProjectCard from "../components/ProjectCard";
const Project = () => {
  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default Project;
