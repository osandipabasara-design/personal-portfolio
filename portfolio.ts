import { Project, Skill, Certificate } from '../types';

export const projects: Project[] = [
  {
    id: 'performedge',
    title: 'PerformEdge HR Dashboard',
    description:
      'An interactive HR analytics dashboard centralising IIT's HR data into a unified visualisation system. Generates real-time analytical insights for management decision-making.',
    type: 'group',
    period: 'Sep 2025 – Apr 2026',
    technologies: ['React', 'TypeScript', 'Python', 'MySQL', 'GitHub', 'Figma'],
    features: ['EIM Dashboard', 'Attendance Dashboard', 'Performance Dashboard'],
    github: 'https://github.com/PerformEdge/PerformEdge.git',
    highlight: true,
  },
  {
    id: 'estate-agent',
    title: 'Estate Agent Web App',
    description:
      'A responsive single-page estate agent application with dynamic property listing, filter/search, interactive UI, client-side routing and state management.',
    type: 'individual',
    period: 'Dec 2025 – Jan 2026',
    technologies: ['React', 'HTML5', 'CSS3'],
    github: 'https://github.com/osandipabasara-design/estate-agent-app-new.git',
    live: 'https://osandipabasara-design.github.io/estate-agent-app-new/',
    highlight: true,
  },
  {
    id: 'task-manager',
    title: 'Personal Task Manager',
    description:
      'A Python-based Task Management System with full CRUD functionality, interactive CLI, input validation and robust exception handling for structured data management.',
    type: 'individual',
    period: 'Mar 2025 – Apr 2025',
    technologies: ['Python'],
    features: ['CRUD operations', 'CLI interface', 'Input validation', 'Exception handling'],
  },
  {
    id: 'bluesanctuary',
    title: 'BlueSanctuary — Clean Water Site',
    description:
      'A responsive team web application promoting SDG 6: Clean Water and Sanitation, built with semantic HTML5/CSS3 and collaborative version control.',
    type: 'group',
    period: 'Apr 2025 – Jun 2025',
    technologies: ['HTML5', 'CSS3', 'GitHub'],
    features: ['Cross-browser compatibility', 'Responsive design', 'SDG 6 initiative'],
    github: 'https://github.com/realthash/Web-Design-CW',
  },
];

export const technicalSkills: Skill[] = [
  { name: 'Python', level: 80, category: 'language' },
  { name: 'JavaScript', level: 75, category: 'language' },
  { name: 'TypeScript', level: 65, category: 'language' },
  { name: 'SQL', level: 70, category: 'language' },
  { name: 'Java', level: 55, category: 'language' },
  { name: 'HTML / CSS', level: 85, category: 'language' },
  { name: 'React', level: 72, category: 'framework' },
  { name: 'Node.js', level: 50, category: 'framework' },
  { name: 'Git & GitHub', level: 75, category: 'tool' },
  { name: 'MySQL', level: 65, category: 'tool' },
  { name: 'Figma', level: 60, category: 'tool' },
  { name: 'Machine Learning', level: 45, category: 'tool' },
];

export const softSkills: Skill[] = [
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Team Collaboration', level: 85, category: 'soft' },
  { name: 'Time Management', level: 80, category: 'soft' },
  { name: 'Adaptability', level: 88, category: 'soft' },
];

export const certificates: Certificate[] = [
  { title: 'Python GUI Development with Tkinter', issuer: 'LinkedIn Learning', year: '2025' },
  { title: 'Machine Learning', issuer: 'IIT Campus (PD Course)', year: '2025' },
  { title: 'Industry Survival — SKILL UP 3.0', issuer: 'Leos of Sri Lanka & Maldives', year: '2025' },
];

export const education = [
  {
    institution: 'University of Westminster, UK',
    degree: 'BSc (Hons) Computer Science',
    period: '2025 – 2028',
    note: 'via IIT Sri Lanka · 2nd Year Undergraduate',
  },
  {
    institution: 'Rathnavali Balika Vidyalaya, Gampaha',
    degree: 'Secondary Education',
    period: '2023 – 2024',
    note: '',
  },
  {
    institution: 'Ananda Balika Vidyalaya, Colombo 10',
    degree: 'Secondary Education',
    period: '2016 – 2022',
    note: '',
  },
];
