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
import LogoChrysalis from '/public/images/logos/chrysalis-logo.png';

import ProjectConstruction from '/public/images/project-construction.png';
import ProjectOrbit from '/public/images/project-orbit.png';


import {
  GroupedExperienceDetails,
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

export const EXPERIENCES: GroupedExperienceDetails[] = [
  {
    logo: LogoChrysalis,
    darkModeLogo: LogoChrysalis,
    logoAlt: 'Chrysalis Software & Systems Pvt. Ltd',
    company: 'Chrysalis Software & Systems Pvt. Ltd',
    location: 'Pune',
    startDate: new Date(2024, 6), // July 2024
    endDate: new Date(2025, 6),   // July 2025
    roles: [
      {
        position: 'Software Developer',
        type: 'Full time',
        startDate: new Date(2024, 10), // Nov 2024
        endDate: new Date(2025, 6),    // July 2025
        summary: [
          'Contributed to scalable React and Web Apps.',
          'Integrated Firebase Authentication, Firestore, Messaging.',
          'Optimized native app performance.',
        ],
      },
      {
        position: 'Software Developer (Internship)',
        type: 'Internship',
        startDate: new Date(2024, 6), // July 2024
        endDate: new Date(2024, 9),   // October 2024
        summary: [
          'Supported mobile and web dev, focusing on front-end and backend integration.',
        ],
      },
    ],
  },
  {
    logo: LogoIdeasToImpacts,
    darkModeLogo: LogoIdeasToImpactsDark,
    logoAlt: 'Ideas To Impacts Digital',
    company: 'Ideas To Impacts Digital Pvt. Ltd, Pune',
    location: 'Pune',
    startDate: new Date(2022, 0),
    endDate: new Date(2022, 3),
    roles: [
      {
        position: 'Data Annotator',
        type: 'Internship',
        startDate: new Date(2022, 0),
        endDate: new Date(2022, 3),
        summary: [
          'Annotated image datasets for AI training.',
          'Created quality reports with metrics.',
        ],
      },
    ],
  },
];


// export const EXPERIENCES: ExperienceDetails[] = [
//   {
//     logo: LogoChrysalis,
//     darkModeLogo: LogoChrysalis,
//     logoAlt: 'Chrysalis Software & Systems Pvt. Ltd',
//     position: 'Software Developer',
//     company: 'Chrysalis Software & Systems Pvt. Ltd',
//     type: 'Internship',
//     startDate: new Date(2024, 6), // July 2024
//     endDate: new Date(2024, 9),   // October 2024
//     summary: [
//       'Supported mobile and web development projects, focusing on front-end functionality and backend API connectivity.',
//     ],
//   },
//   {
//     logo: LogoChrysalis,
//     darkModeLogo: LogoChrysalis,
//     logoAlt: 'Chrysalis Software & Systems Pvt. Ltd',
//     position: 'Software Developer',
//     company: 'Chrysalis Software & Systems Pvt. Ltd',
//     type: 'Full time',
//     startDate: new Date(2024, 10), // November 2024
//     endDate: new Date(2025, 6),    // July 2025
//     summary: [
//       'Contributed to the development of scalable React apps and Web Apps for client use cases.',
//       'Integrated Firebase Authentication, Firestore, and push notifications using Firebase Messaging.',
//       'Implemented native features and optimized performance.',
//     ],
//   },
//   {
//     logo: LogoIdeasToImpacts,
//     darkModeLogo: LogoIdeasToImpactsDark,
//     logoAlt: 'Ideas To Impacts Digital',
//     position: 'Data Annotator',
//     company: 'Ideas To Impacts Digital Pvt. Ltd, Pune',
//     type: 'Internship',
//     startDate: new Date(2022, 0), // January 2022
//     endDate: new Date(2022, 3),   // April 2022
//     summary: [
//       'Annotated image datasets for AI model training.',
//       'Delivered clean, documented datasets with detailed quality metrics reports.',
//     ],
//   },
// ];


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
