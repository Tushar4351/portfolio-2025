import { GoArrowUpRight } from "react-icons/go";
interface CardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  backGround: string;
}
const ProjectCard = ({
  title,
  description,
  icon,
  image,
  backGround,
}: CardProps) => {
  return (
    <div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-1 left-1 right-1 ">
        <div className="flex items-start rounded-full justify-between bg-white p-2">
          <div className="flex items-center justify-center gap-3 ">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm`}
            >
              <div
                className={`w-12 h-12 rounded-full ${backGround} flex items-center justify-center text-white font-bold`}
              >
                {icon}
              </div>
            </div>
            <div>
              <h2 className="">{title}</h2>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-200 rounded-full w-12 h-12">
            <GoArrowUpRight className=" w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;