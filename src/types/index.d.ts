//Navbar types

interface NavigationItem {
  id: number;
  title: string;
  url: string;
  icon?: IconType;
  gradient?: string;
  iconColor?: string;
}
// Solical Links types
interface SocialLink {
  id: number;
  title: string;
  url: string;
  icon: IconType;
}
//Services types
interface Service {
  id: number;
  title: string;
  icon: IconType;
  top: string;
  left: string;
}

// Heading Types
interface SectionHeadingProps {
  title: string;
  link?: string;
}
interface MainHeadingProps {
  title: string;
  description: string;
}
// Projects card types
interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  backGround: string;
}
interface CardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  backGround: string;
  link: string;
}
//Skills types
interface SkillBarProps {
  name: string;
  percentage: number;
  src: string;
}

interface Skill {
  name: string;
  percentage: number;
  src: string;
}

// Text and Logo Animation Types

interface SlidingTextProps {
  firstText: string;
  secondText: string;
  className?: string;
  duration?: number;
  logo?: string;
}
interface SlidingLogoProps {
  FirstIcon: IconType;
  SecondIcon: IconType;
  className?: string;
  duration?: number;
  name?: string;
}

//Slider types

interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

interface SliderIndicatorsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}
interface SliderItemProps {
  image: string;
  isActive: boolean;
  direction: number;
}

//Footer types

interface LinkItem {
  name: string;
  href: string;
}

interface FooterNavigationSection {
  title: string;
  links: LinkItem[];
}

//Process Steps types

interface StepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

//Contact Form types
interface FormDatas {
  name: string;
  email: string;
  message: string;
}

//image container types
interface ImageProps {
  image: string;
  alt: string;
}

//projects 
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details: {
    client: string;
    date: string;
    role: string;
    technologies: string[];
  };
  fullDescription: string;
}