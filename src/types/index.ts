export type ProjectCategory =
  | 'android'
  | 'web'
  | 'games'
  | 'ai'
  | 'tools'
  | 'patterns'
  | 'all';

export interface CategoryMeta {
  id: ProjectCategory;
  label: string;
  accent: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  objective: string;
  languages: { name: string; level: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role?: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Tiempo activo o en producción, p. ej. "2024 · 4 meses" */
  period?: string;
  categories: Exclude<ProjectCategory, 'all'>[];
  technologies: string[];
  patterns: string[];
  repoUrl?: string;
  demoUrl?: string;
  /** Ruta bajo public/, p. ej. /images/pokedex.webp */
  imageUrl?: string;
  visibility?: 'public' | 'private';
  featured: boolean;
  status: 'production' | 'active' | 'archived' | 'learning';
}
