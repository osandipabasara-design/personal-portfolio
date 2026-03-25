export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'group' | 'individual';
  period: string;
  technologies: string[];
  features?: string[];
  github?: string;
  live?: string;
  highlight?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool' | 'soft';
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  path: string;
}
