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
