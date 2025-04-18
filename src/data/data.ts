import { FaInstagram, FaGithub } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbCodeCircle2 } from "react-icons/tb";
import { PiUserSoundBold, PiHandFist } from "react-icons/pi";
import { SiEngadget } from "react-icons/si";
import { HiWindow } from "react-icons/hi2";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import type { Variants } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

export const navigationData: NavigationItem[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: GoArrowUpRight,
    gradient: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.15) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: GoArrowUpRight,
    gradient: "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(234,88,12,0.15) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
    icon: GoArrowUpRight,
    gradient: "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(22,163,74,0.15) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
    icon: GoArrowUpRight,
    gradient: "radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.15) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
];

//menu types

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

export const cardData: CardProps[] = [
  {
    id: 1,
    title: "Nexcartia",
    description: "Ecommerce website with secure shopping features.",
    icon: "N",
    image: "/project3.avif",
    backGround: "bg-blue-500",
    link: "https://nexcartia.example.com",
  },
  {
    id: 2,
    title: "SnippetGenius",
    description: "Store code snippets and use AI for code generation.",
    icon: "S",
    image: "/project2.avif",
    backGround: "bg-green-500",
    link: "https://snippetgenius.example.com",
  },
  {
    id: 3,
    title: "SimplifyEfforts",
    description:
      "AI-powered tool for photo enhancement and background removal.",
    icon: "S",
    image: "/project1.avif",
    backGround: "bg-yellow-500",
    link: "https://simplifyefforts.example.com",
  },
  {
    id: 4,
    title: "Anonymous Message",
    description: "Send messages anonymously to anyone.",
    icon: "A",
    image: "anonymous-message-image.jpg",
    backGround: "bg-purple-500",
    link: "https://anonymousmessage.example.com",
  },
  {
    id: 5,
    title: "Doctor Appointment Booking App",
    description: "Book doctor appointments easily and efficiently.",
    icon: "D",
    image: "doctor-appointment-image.jpg",
    backGround: "bg-red-500",
    link: "https://doctorapp.example.com",
  },
  {
    id: 6,
    title: "Docxtract",
    description: "Extract data from documents (beta).",
    icon: "D",
    image: "docxtract-image.jpg",
    backGround: "bg-pink-500",
    link: "https://docxtract.example.com",
  },
];

export const skills: Skill[] = [
  { name: "HTML", percentage: 90, src: "/html.png" },
  { name: "CSS", percentage: 80, src: "/css.png" },
  {
    name: "Bootstrap",
    percentage: 70,
    src: "/bootstrap.png",
  },
  {
    name: "Tailwind",
    percentage: 90,
    src: "/tailwind.png",
  },
  {
    name: "JavaScript",
    percentage: 70,
    src: "/javascript.png",
  },
  {
    name: "TypeScript",
    percentage: 70,
    src: "/typescript.png",
  },
  { name: "Next.js", percentage: 75, src: "/nextjs.png" },
  { name: "Astro", percentage: 65, src: "/astro.png" },
  { name: "Java", percentage: 67, src: "/java.png" },
  { name: "C", percentage: 85, src: "/c.png" },
  { name: "Node.js", percentage: 70, src: "/nodejs.png" },
  {
    name: "PostgreSQL",
    percentage: 70,
    src: "/postgresql.png",
  },
  { name: "MongoDB", percentage: 68, src: "/mongodb.png" },
];

export const footerNavigationData: FooterNavigationSection[] = [
  {
    title: "Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "CMS",
    links: [
      { name: "Work", href: "#" },
      { name: "Work Single", href: "#" },
    ],
  },
  {
    title: "Utility",
    links: [{ name: "404", href: "#" }],
  },
];

export const aboutTitleData: MainHeadingProps = {
  title: "About Me",
  description:
    "I am a self-motivated and ambitious B.Tech graduate with a passion for technology, aspiring to excel as a Software Engineer. Proficient in various programming languages and equipped with a strong project portfolio, I thrive on solving challenges and delivering innovative solutions. I seek to join a dynamic team where I can contribute to organizational success while continuously learning and refining my skills. Dedicated to growth, I aim to make a meaningful impact in the field of software engineering.",
};

export const workTitleData: MainHeadingProps = {
  title: "My Projects",
  description:
    "Combining a deep understanding of user experience with a knack for transforming ideas into visually stunning and functional interfaces. I specialize in building web applications using modern technologies both frontend and backend. My projects showcase my ability to deliver end-to-end solutions from concept to deployment. With a focus on user-centric design, seamless functionality, and secure integrations, I aim to craft impactful software solutions that address real-world challenges.",
};

export const steps = [
  {
    number: "01",
    title: "Discovery call",
    description: "We'll discuss your goals and vision",
  },
  {
    number: "02",
    title: "Custom design",
    description: "I'll understand your design tailored to your needs",
  },
  {
    number: "03",
    title: "Development",
    description: "The design comes to life with clean, efficient code",
  },
  {
    number: "04",
    title: "Launch",
    description: "I'll help you get your website live and ready for the world",
  },
];

export const projects: Project[] = [
  {
    id: "modern-portfolio",
    title: "Modern Portfolio",
    description: "A minimalist portfolio website with smooth animations",
    image: "/placeholder1.jpg",
    category: "Web Design",
    details: {
      client: "Personal Project",
      date: "March 2024",
      role: "Full Stack Developer",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    fullDescription:
      "A comprehensive portfolio website showcasing modern design principles and smooth animations. Built with performance and user experience in mind.",
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform",
    image: "/placeholder2.jpg",
    category: "Web Development",
    details: {
      client: "RetailCo",
      date: "February 2024",
      role: "Frontend Developer",
      technologies: ["Next.js", "Redux", "Stripe"],
    },
    fullDescription:
      "A modern e-commerce platform with real-time inventory management, secure payments, and responsive design.",
  },
];
