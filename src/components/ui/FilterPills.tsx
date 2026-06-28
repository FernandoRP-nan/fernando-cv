import type { CSSProperties } from 'react';
import type { ProjectCategory } from '../../types';
import { CATEGORIES } from '../../data/categories';
import styles from './FilterPills.module.css';

interface FilterPillsProps {
  active: ProjectCategory;
  counts: Partial<Record<ProjectCategory, number>>;
  onChange: (category: ProjectCategory) => void;
}

export function FilterPills({ active, counts, onChange }: FilterPillsProps) {
  return (
    <div className={styles.wrapper} role="tablist" aria-label="Filtrar proyectos">
      {CATEGORIES.map((category) => {
        const count = counts[category.id] ?? 0;
        if (category.id !== 'all' && count === 0) return null;

        return (
          <button
            key={category.id}
            role="tab"
            aria-selected={active === category.id}
            className={`${styles.pill} ${active === category.id ? styles.active : ''}`}
            style={{ '--pill-accent': category.accent } as CSSProperties}
            onClick={() => onChange(category.id)}
          >
            {category.label}
            <span className={styles.count}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}
