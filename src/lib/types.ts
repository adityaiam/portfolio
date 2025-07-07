import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  // url: string;
};

export interface GroupedExperienceDetails {
  logo: StaticImageData;
  darkModeLogo: StaticImageData;
  logoAlt: string;
  company: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  roles: {
    position: string;
    type: string;
    startDate: Date;
    endDate: Date;
    summary: string[];
  }[];
}

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  company: string;
  type: string,
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  view: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};


export type EducationDetails = {
  classn: string;
  university: string;
  status: string,
  currentlyHere?: boolean;
  startDate: string;
  endDate?: string;
  marks: string
};
