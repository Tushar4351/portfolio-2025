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
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.15) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(234,88,12,0.15) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(22,163,74,0.15) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
    icon: GoArrowUpRight,
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.15) 50%, rgba(185,28,28,0) 100%)",
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
    image: "/snippetgenius-hero.mp4",
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

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  mainImage?: string;
  logo: string;
  category: string;
  links: {
    liveUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
  };
  technologies: string[];
  fullDescription: string;
  features: string[];
  useCases: string[];
  purpose: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "nexcartia",
    title: "Nexcartia - E-Commerce Platform",
    shortDescription:
      "A robust full-stack e-commerce platform delivering a seamless shopping experience with advanced features and secure transactions.",
    image: "/assets/projects/nexcartia/nexcartia-hero.jpg",
    logo: "/assets/projects/nexcartia/nexcartia-logo.png",
    category: "E-Commerce",
    links: {
      liveUrl: "https://nexcartia-ecommerce.vercel.app",
      githubUrl: "https://github.com/Tushar4351/MERN-Ecommerce--App",
    },
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "Firebase",
    ],
    fullDescription:
      "Nexcartia is a cutting-edge e-commerce platform designed to provide a seamless and intuitive online shopping experience. Built with a focus on performance, scalability, and user satisfaction, Nexcartia integrates advanced features to cater to modern retail demands. The platform includes a dynamic product listing with robust search and filter capabilities, enabling users to find products effortlessly. The cart management system supports complex functionalities like shipping address handling and order placement, ensuring a smooth checkout process. Security is paramount, with JWT-based authentication and Google Sign-In for user trust and convenience. Stripe integration ensures secure and reliable payment processing, including support for coupon discounts to enhance user engagement. The admin dashboard empowers merchants with tools for product management (add, edit, delete), transaction tracking, and insightful data visualization using React Table. A data caching mechanism optimizes performance, reducing load times and improving scalability. Nexcartia is designed for businesses seeking a modern, reliable, and feature-rich e-commerce solution.",
    features: [
      "Dynamic product listing with advanced search and filter functionality",
      "Cart management with shipping address handling and order placement",
      "Secure JWT-based authentication with firebase integration",
      "Stripe-powered payment processing with coupon discount support",
      "Admin dashboard for product management and transaction tracking",
      "Data visualization with React Table for actionable insights",
      "Data caching mechanism for optimized performance",
    ],
    useCases: [
      "Small to medium-sized businesses launching online stores",
      "Retailers needing a scalable platform with robust inventory management",
      "Merchants requiring secure payment processing and user authentication",
      "Admins seeking comprehensive tools for product and transaction oversight",
    ],
    purpose:
      "To empower businesses with a modern e-commerce platform that combines a user-friendly interface, secure transactions, and powerful admin tools to drive sales and streamline operations.",
    date: "April 2024",
  },
  {
    id: "snippetgenius",
    title: "SnippetGenius - Code Snippet Manager",
    shortDescription:
      "A web application for storing, managing, and generating code snippets using AI, with secure payment integration.",
    image: "/assets/projects/snippetgenius/snippetgenius-hero.mp4",
    mainImage: "/snippetgenius-main.mp4",
    logo: "/assets/projects/snippetgenius/snippetgenius-logo.png",
    category: "Developer Tools",
    links: {
      liveUrl: "https://snippetgenius.vercel.app",
      githubUrl: "https://github.com/Tushar4351/Ai-code-snippet-manager",
    },
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Clerk Authentication",
      "Stripe",
      "React Context API",
    ],
    fullDescription:
      "SnippetGenius is a sophisticated web application tailored for developers to store, organize, and generate code snippets efficiently. Leveraging AI-driven code generation, SnippetGenius empowers users to create high-quality code snippets quickly, enhancing productivity and collaboration. The platform uses React Context API for seamless state management, ensuring a smooth user experience. Secure payment processing is integrated via Stripe, allowing users to access premium features through subscription plans. Clerk Authentication provides robust user authentication, ensuring data security and user privacy. Built with Next.js for server-side rendering and optimal performance, MongoDB for scalable data storage, and Tailwind CSS for a modern, responsive UI, SnippetGenius is designed for developers of all levels. The application supports features like snippet categorization, search, and AI-assisted code suggestions, making it an indispensable tool for coding workflows.",
    features: [
      "AI-driven code snippet generation for rapid development",
      "Secure snippet storage and organization with MongoDB",
      "Stripe integration for seamless subscription payments",
      "Clerk Authentication for secure user management",
      "React Context API for efficient state management",
      "Responsive UI with Tailwind CSS for cross-device compatibility",
      "Search and categorization for easy snippet retrieval",
    ],
    useCases: [
      "Developers storing and organizing reusable code snippets",
      "Teams collaborating on shared coding resources",
      "Freelancers offering premium coding services via subscriptions",
      "Learners experimenting with AI-generated code for education",
    ],
    purpose:
      "To streamline code management and generation for developers by providing an AI-powered, secure, and user-friendly platform for snippet storage and collaboration.",
    date: "June 2024",
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment Booking App",
    shortDescription:
      "An intuitive online platform for booking and managing doctor appointments with a focus on patient experience.",
    image: "/assets/projects/doctor-appointment/doctor-appointment-hero.jpg",
    logo: "/assets/projects/doctor-appointment/doctor-appointment-logo.png",
    category: "Healthcare",
    links: {
      liveUrl: "https://doctor-appointment-bookingapp.vercel.app",
      githubUrl:
        "https://github.com/Tushar4351/doctor-appointment-bookingapp-complete",
    },
    technologies: ["Next.js", "Tailwind CSS", "Strapi CMS"],
    fullDescription:
      "The Doctor Appointment Booking App is a user-centric platform designed to simplify the process of scheduling and managing medical appointments. Built with a focus on accessibility and patient satisfaction, the application allows users to browse available doctors, select appointment slots, and manage their bookings with ease. The platform leverages Strapi CMS for dynamic content management, enabling healthcare providers to update doctor profiles, availability, and services in real-time. Next.js ensures fast, SEO-friendly performance, while Tailwind CSS delivers a responsive and visually appealing interface. Features include intuitive booking management, appointment reminders, and patient experience tracking to ensure high satisfaction. The app is designed to bridge the gap between patients and healthcare providers, offering a seamless, reliable, and modern solution for appointment scheduling.",
    features: [
      "User-friendly interface for browsing and booking doctor appointments",
      "Real-time doctor availability and slot selection",
      "Strapi CMS for dynamic content and service management",
      "Appointment reminders and patient experience tracking",
      "Responsive design with Tailwind CSS for accessibility",
      "SEO-optimized performance with Next.js",
    ],
    useCases: [
      "Patients seeking convenient appointment scheduling",
      "Healthcare providers managing doctor availability and services",
      "Clinics aiming to improve patient satisfaction and engagement",
      "Mobile users requiring a responsive booking experience",
    ],
    purpose:
      "To enhance the healthcare experience by providing a streamlined, accessible, and efficient platform for patients to book and manage doctor appointments.",
    date: "August 2024",
  },
  {
    id: "simplifyefforts",
    title: "SimplifyEfforts - AI Photo Editor",
    shortDescription:
      "An AI-powered web application for advanced photo enhancement, editing, and credit-based transactions.",
    image: "/assets/projects/simplifyefforts/simplifyefforts-hero.jpg",
    logo: "/assets/projects/simplifyefforts/simplifyefforts-logo.png",
    category: "AI & Image Processing",
    links: {
      liveUrl: "https://simplifyefforts.vercel.app",
      githubUrl: "https://github.com/Tushar4351/Ai-Saas-Application",
    },
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Stripe",
    ],
    fullDescription:
      "SimplifyEfforts is an innovative web application that harnesses AI to revolutionize photo editing. Designed for both amateur and professional users, the platform offers advanced features like background removal, object removal, and image quality enhancement, all powered by cutting-edge AI algorithms. Users can purchase credits via Stripe for flexible access to premium editing tools, ensuring a scalable and user-friendly monetization model. Built with React and TypeScript for type-safe development, Next.js for optimal performance, and MongoDB with Mongoose for robust data management, SimplifyEfforts delivers a seamless and responsive experience. Tailwind CSS ensures a modern, visually appealing UI that adapts to various devices. The application is ideal for photographers, content creators, and businesses seeking high-quality photo editing solutions without complex software.",
    features: [
      "AI-powered background and object removal for precise editing",
      "Image quality enhancement for professional-grade results",
      "Stripe integration for credit-based transactions",
      "Type-safe development with TypeScript and React",
      "Scalable data management with MongoDB and Mongoose",
      "Responsive UI with Tailwind CSS for cross-device compatibility",
      "User-friendly credit purchase system for flexible access",
    ],
    useCases: [
      "Photographers enhancing images for portfolios or clients",
      "Content creators needing quick, high-quality edits for social media",
      "E-commerce businesses improving product visuals",
      "Casual users seeking accessible AI-powered photo editing tools",
    ],
    purpose:
      "To democratize advanced photo editing by providing an AI-driven, user-friendly platform that delivers professional results with ease and accessibility.",
    date: "October 2024",
  },
];
