import type { CSSProperties } from 'react';
import type { ProjectCategory } from '../../types';
import { CATEGORY_ACCENTS, CATEGORY_IDS } from '../../data/categories';
import { useLanguage } from '../../i18n/LanguageProvider';
import styles from './FilterPills.module.css';

interface FilterPillsProps {
  active: ProjectCategory;
  counts: Partial<Record<ProjectCategory, number>>;
  onChange: (category: ProjectCategory) => void;
}

export function FilterPills({ active, counts, onChange }: FilterPillsProps) {
  const { t } = useLanguage();
  const categories: ProjectCategory[] = ['all', ...CATEGORY_IDS];

  return (
    <div className={styles.wrapper} role="tablist" aria-label="Filter projects">
      {categories.map((id) => {
        const count = counts[id] ?? 0;
        if (id !== 'all' && count === 0) return null;
        const accent = CATEGORY_ACCENTS[id];

        return (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            className={`${styles.pill} ${active === id ? styles.active : ''}`}
            style={{ '--pill-accent': accent } as CSSProperties}
            onClick={() => onChange(id)}
          >
            {t.categories[id]}
            <span className={styles.count}>{count}</span>
          </button>
        );
      })}
    </div>
  );
}
