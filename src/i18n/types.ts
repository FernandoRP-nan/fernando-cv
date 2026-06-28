import type { ProjectCategory } from '../types';

export type Locale = 'es' | 'en';

export interface LocaleStrings {
  nav: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    available: string;
    role: string;
    summary: string;
    ctaProjects: string;
    ctaContact: string;
    ctaPdf: string;
    stats: { value: string; label: string }[];
    orbit: string[];
  };
  sections: {
    about: { title: string; subtitle: string; summary: string; focus: string; objective: string; education: string; languages: string; softSkills: string; degree: string; institution: string; period: string };
    experience: { title: string; subtitle: string };
    skills: { title: string; subtitle: string };
    projects: { title: string; subtitle: string; featuredTitle: string; empty: string; techLabel: string; patternsLabel: string; repoLink: string; demoLink: string; requestDemo: string };
    contact: { eyebrow: string; title: string; body: string };
  };
  footer: { made: string };
  status: Record<'production' | 'active' | 'archived' | 'learning', string>;
  visibility: { private: string };
  categories: Record<ProjectCategory, string>;
  highlightProjectIds: string[];
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    summary: string;
    objective: string;
    focusAreas: string[];
    languages: { name: string; level: string }[];
    softSkills: string[];
  };
  experiences: {
    id: string;
    company: string;
    role?: string;
    location: string;
    period: string;
    highlights: string[];
    tags: string[];
  }[];
  skillGroups: { id: string; title: string; items: string[] }[];
  projects: {
    id: string;
    title: string;
    description: string;
    period?: string;
    categories: Exclude<ProjectCategory, 'all'>[];
    technologies: string[];
    patterns: string[];
    repoUrl?: string;
    demoUrl?: string;
    imageUrl?: string;
    visibility?: 'public' | 'private';
    featured: boolean;
    status: 'production' | 'active' | 'archived' | 'learning';
  }[];
}
