export interface Header {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
    resume: string;
  };
}

export interface Home {
  blurb: string;
  tech_stack: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

export interface Project {
  name: string;
  description: string;
  tech_stack: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  expected_graduation?: string;
  program?: string;
}

export interface Achievement {
  title: string;
  period: string;
}

export interface Contact {
  email: string;
  form_fields: string[];
  scheduling_link: string;
}

export interface Footer {
  copyright: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Portfolio {
  header: Header;
  home: Home;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  contact: Contact;
  footer: Footer;
}
