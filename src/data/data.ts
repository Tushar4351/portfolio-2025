import type { Variants } from "framer-motion";

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
