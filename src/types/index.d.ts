//Navbar types

interface NavigationItem {
  id: number;
  title: string;
  url: string;
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
  icon: string;
  description: string;
}
interface Skill {
  name: string;
  description: string;
  percentage: number;
  icon: string;
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
