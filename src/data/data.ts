import type { Variants } from "framer-motion";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbCodeCircle2 } from "react-icons/tb";
import type { IconType } from "react-icons";
import { PiUserSoundBold, PiHandFist } from "react-icons/pi";
import { SiEngadget } from "react-icons/si";
import { HiWindow } from "react-icons/hi2";
import { HiOutlinePaintBrush } from "react-icons/hi2";
//write the navigation data
export interface NavigationItem {
  id: number;
  title: string;
  url: string;
}

export const navigationData: NavigationItem[] = [
  {
    id: 1,
    title: "About Me",
    url: "/about",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
  },
  {
    id: 3,
    title: "Skills",
    url: "/skills",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
];
interface MenuVariants extends Variants {
  closed: {
    height: string;
    transition: {
      duration: number;
      ease: string;
    };
  };
  open: {
    height: string;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

interface HamburgerLineVariants extends Variants {
  closed: {
    rotate: number;
    y: number;
  };
  open: (i: number) => {
    rotate: number;
    y: number;
    opacity: number;
  };
}

export const menuVariants: MenuVariants = {
  closed: {
    height: "auto",
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
  open: {
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const hamburgerLineVariants: HamburgerLineVariants = {
  closed: { rotate: 0, y: 0 },
  open: (i) => ({
    rotate: i === 1 ? 45 : i === 2 ? -45 : 0,
    y: i === 1 ? -2 : i === 2 ? -8 : 0,
    opacity: i === 0 ? 0 : 1,
  }),
};

//write the social links data with typescript
export interface SocialLink {
  id: number;
  title: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/tushaar_22",
    icon: FaInstagram,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tushar-bhowal-32bb74205",
    icon: TbBrandLinkedin,
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/Tushar4351",
    icon: FaGithub,
  },
  {
    id: 4,
    title: "Facebook",
    url: "https://www.facebook.com/tushar.bhowal.1",
    icon: RiFacebookCircleLine,
  },
];

interface Service {
  id: number;
  title: string;
  icon: IconType;
  top: string;
  left: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend",
    icon: HiWindow,
    top: "5%",
    left: "5%",
  },
  {
    id: 2,
    title: "Backend",
    icon: TbCodeCircle2,
    top: "30%",
    left: "0%",
  },
  {
    id: 3,
    title: "Innovation",
    icon: SiEngadget,
    top: "5%",
    left: "50%",
  },
  {
    id: 4,
    title: "Communication",
    icon: PiUserSoundBold,
    top: "30%",
    left: "40%",
  },
  {
    id: 5,
    title: "Leadership",
    icon: PiHandFist,
    top: "55%",
    left: "50%",
  },
  {
    id: 6,
    title: "Web Design",
    icon: HiOutlinePaintBrush,
    top: "60%",
    left: "1%",
  },
];
