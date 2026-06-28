import type { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ index, title, subtitle }: SectionTitleProps) {
  return (
    <header className={styles.header}>
      <span className={styles.index}>{index}</span>
      <div>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </header>
  );
}

interface ChipProps {
  children: ReactNode;
  accent?: string;
}

export function Chip({ children, accent }: ChipProps) {
  return (
    <span className={styles.chip} style={accent ? { borderColor: accent, color: accent } : undefined}>
      {children}
    </span>
  );
}
