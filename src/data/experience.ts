export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'fanatics',
    role: 'Software Developer 2',
    company: 'Fanatics',
    location: 'Hyderabad, IN',
    period: 'Feb 2026 — Present',
    description: [
      'Developing scalable e-commerce features using React and Spring Boot across frontend and backend systems.',
      'Led development of split cart workflows, single page checkout, AI agentic workflows (n8n) and shared reusable UI component migrations.',
    ],
    tech: ['React', 'Spring Boot', 'n8n', 'TypeScript'],
    current: true,
  },
  {
    id: 'oracle-senior',
    role: 'Senior Applications Engineer',
    company: 'Oracle',
    location: 'Hyderabad, IN',
    period: 'Oct 2025 — Feb 2026',
    description: [
      'Led the development of the "Configure Actions" flow using VBCS for frontend and Oracle ADF for backend.',
      'Developed multiple AI agents to automate and optimize user workflows.',
    ],
    tech: ['VBCS', 'Oracle ADF', 'AI Agents', 'Java'],
  },
  {
    id: 'oracle-ic2',
    role: 'Applications Developer 2',
    company: 'Oracle',
    location: 'Hyderabad, IN',
    period: 'Jun 2023 — Sep 2025',
    description: [
      'Built features for Fusion HCM using Oracle VBCS. Designed reusable UI components for dynamic form and table rendering.',
      'Delivered multiple Employment and Offer flow enhancements across backend (ADF) and frontend (VBCS).',
    ],
    tech: ['VBCS', 'ADF', 'Docker', 'JavaScript'],
  },
  {
    id: 'asymmetri',
    role: 'Fullstack Web Developer Intern',
    company: 'Asymmetri',
    location: 'Remote',
    period: 'Dec 2021 — Apr 2023',
    description: [
      'Developed client-facing apps using Next.js, Svelte, Astro, Laravel and backend in ExpressJS, NestJS, Gin (Go).',
    ],
    tech: ['Next.js', 'Svelte', 'Astro', 'Go', 'NestJS'],
  },
  {
    id: 'skilzen',
    role: 'Frontend Developer Intern',
    company: 'SkilZen',
    location: 'Remote',
    period: 'Jul 2021 — Sep 2021',
    description: [
      'Built responsive UI components from Figma. Managed AWS EC2/RDS deployments with CI/CD pipelines.',
    ],
    tech: ['React', 'AWS', 'Typesense', 'CI/CD'],
  },
  {
    id: 'accellor',
    role: 'Software Development Intern',
    company: 'Accellor (PopcornApps)',
    location: 'Hyderabad, IN',
    period: 'Apr 2020 — Mar 2021',
    description: [
      'Created JS utilities for file management on Amazon S3. Resolved bugs and added features in a NestJS enterprise app.',
    ],
    tech: ['NestJS', 'AWS S3', 'JavaScript'],
  },
];

export const skills = {
  languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Go', 'Rust', 'SQL', 'C/C++', 'Dart'],
  frameworks: ['React', 'Next.js', 'Astro', 'Svelte', 'Flutter', 'Express', 'Spring Boot', 'Gin', 'Langchain'],
  tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Linux', 'NeoVIM', 'n8n'],
};

export const socials = [
  { name: 'GitHub', url: 'https://github.com/gopal-kaul', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/gopal-kaul', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/kaulmegops', icon: 'instagram' },
  { name: 'X / Twitter', url: 'https://twitter.com/kaulmegops', icon: 'twitter' },
  { name: 'Spotify', url: 'https://open.spotify.com/user/1xr1nqgy1t0n47dhj23h1xaev', icon: 'spotify' },
];
