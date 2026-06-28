import type { ProjectCategory } from '../types';

/** Colores por categoría (independientes del idioma) */
export const CATEGORY_ACCENTS: Record<ProjectCategory, string> = {
  all: '#f0f0f5',
  android: '#3ddc84',
  web: '#61dafb',
  games: '#ff6b9d',
  ai: '#a78bfa',
  tools: '#fbbf24',
  patterns: '#fb923c',
};

export const CATEGORY_IDS: Exclude<ProjectCategory, 'all'>[] = [
  'android',
  'web',
  'games',
  'ai',
  'tools',
  'patterns',
];
