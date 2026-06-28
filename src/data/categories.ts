import type { CategoryMeta } from '../types';

export const CATEGORIES: CategoryMeta[] = [
  { id: 'all', label: 'Todos', accent: '#f0f0f5' },
  { id: 'android', label: 'Android', accent: '#3ddc84' },
  { id: 'web', label: 'Web', accent: '#61dafb' },
  { id: 'games', label: 'Juegos', accent: '#ff6b9d' },
  { id: 'ai', label: 'IA / Algoritmos', accent: '#a78bfa' },
  { id: 'tools', label: 'Herramientas', accent: '#fbbf24' },
  { id: 'patterns', label: 'Patrones', accent: '#fb923c' },
];

export const categoryMap = Object.fromEntries(
  CATEGORIES.map((category) => [category.id, category]),
) as Record<string, CategoryMeta>;
