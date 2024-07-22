import { Github, Linkedin } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGitHub from '/public/images/logos/icon-github.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import LogoThymeleaf from '/public/images/logos/logo-thymeleaf.svg';
import LogoSpringBoot from '/public/images/logos/icon-spring-boot.svg';
import LogoCanva from '/public/images/logos/icon-canva.svg';
import LogoIntelliJIdea from '/public/images/logos/icons-intellij-idea.svg';
import LogoGitHubDark from '/public/images/logos/icon-github-dark.svg';

import LogoTDS from '/public/images/logos/logo-tds.svg';
import LogoTDSDark from '/public/images/logos/logo-tds-dark.svg';
import LogoIdeasToImpacts from '/public/images/logos/logo-i2id.svg';
import LogoIdeasToImpactsDark from '/public/images/logos/logo-i2id-dark.svg';

import ProjectConstruction from '/public/images/project-construction.png';
import ProjectOrbit from '/public/images/project-orbit.png';


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  EducationDetails,
  TestimonialDetails
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/adityaiam',
  LIINKEDIN: 'https://www.linkedin.com/in/adityaingale',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/adityaiam',
  },
  {
    icon: IoLogoWhatsapp,
    url: 'https://wa.me/918485846179',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/adityaingale',
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Java',
    logo: LogoJava,
  },
  {
    label: 'Spring Boot',
    logo:LogoSpringBoot
  },
  {
    label: 'Thymeleaf',
    logo:LogoThymeleaf
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
  },
  // {
  //   label: 'Typescript',
  //   logo: LogoTypescript,
  //   // url: 'https://www.typescriptlang.org/',
  // },
  {
    label: 'React',
    logo: LogoReact,
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
  },
  {
    label: 'Figma',
    logo: LogoFigma,
  },
  {
    label: 'Canva',
    logo: LogoCanva,
  },
  {
    label: 'GitHub',
    logo: LogoGitHub,
    darkModeLogo: LogoGitHubDark,
  },
  {
    label: 'IntelliJ IDEA',
    logo: LogoIntelliJIdea,
    // darkModeLogo: LogoIntelliJIdea,
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoTDS,
    darkModeLogo: LogoTDSDark,
    logoAlt: 'TDS Group',
    position: 'Team Lead',
    company: 'TDS Management Consultant Pvt. Ltd',
    type: 'Full time',
    startDate: new Date(2024, 0),
    endDate: new Date(2022, 4),
    currentlyWorkHere: true,
    summary: [
      'My responsibilities include overseeing daily operations, ensuring team productivity, and creating detailed Excel reports to track our progress.',
      'I am dedicated to fostering a positive work environment and achieving our project goals effectively.',
    ],
  },
  {
    logo: LogoIdeasToImpacts,
    darkModeLogo: LogoIdeasToImpactsDark,
    logoAlt: 'Ideas To Impacts Digital',
    position: 'Data Annotator',
    company: 'Ideas To Impacts Digital Pvt. Ltd, Pune',
    type: 'Internship',
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 3),
    summary: [
      'Gathered and processed image data from various sources to ensure accuracy and consistency for analysis and algorithm training.',
      'Created documentation and reports detailing the annotation process, dataset statistics, and quality metrics to provide insights for model evaluation and improvement.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Live Meeting Application',
    description:
      'Video conferencing tool that enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.',
    url: 'https://orbit-olive.vercel.app/',
    view: 'Live',
    previewImage: ProjectOrbit,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Shadcn',
      'Clerk',
      'getstream',
    ],
  },
  {
    name: 'Raw Material Management System',
    description:
      'The Management System for Construction Company offers a streamlined platform for customers and administrators. Administrators access a dynamic dashboard with graphical representations, enabling project creation, raw material management, customer oversight, supplier management, and contact tracking',
    url: '#',
    view: 'GitHub',
    previewImage: ProjectConstruction,
    technologies: [
      'Java',
      'Thymleaf',
      'Spring MVC',
      'HTML5',
      'CSS3',
      'SQL',
      'JDBC',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [

];


export const EDUCATION: EducationDetails[] = [
  {
    classn: 'Master of Computer Applications',
    university: 'SAVITRIBAI PHULE PUNE UNIVERSITY, PUNE.',
    status: 'Pursuing',
    startDate: '2023',
    currentlyHere: true,
    marks: ''
  },
  {
    classn: 'Bachelor of Business Administration in Computer Applications ',
    university: 'SAVITRIBAI PHULE PUNE UNIVERSITY, PUNE.',
    status: 'Completed',
    startDate: '2020',
    endDate: '2023',
    marks: 'CGPA - 8.80'
  },
];
