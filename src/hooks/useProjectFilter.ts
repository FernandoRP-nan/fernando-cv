import { useMemo, useState } from 'react';
import type { Project, ProjectCategory } from '../types';

export function useProjectFilter(allProjects: Project[]) {
  const [category, setCategory] = useState<ProjectCategory>('all');

  const filtered = useMemo(() => {
    if (category === 'all') return allProjects;
    return allProjects.filter((project) => project.categories.includes(category));
  }, [allProjects, category]);

  const counts = useMemo(() => {
    const map: Partial<Record<ProjectCategory, number>> = { all: allProjects.length };
    allProjects.forEach((project) => {
      project.categories.forEach((cat) => {
        map[cat] = (map[cat] ?? 0) + 1;
      });
    });
    return map;
  }, [allProjects]);

  return { category, setCategory, filtered, counts };
}
