import type { CSSProperties } from 'react';
import type { Project } from '../../types';
import { CATEGORY_ACCENTS } from '../../data/categories';
import { useLanguage } from '../../i18n/LanguageProvider';
import { Chip } from './SectionTitle';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  const labels = t.sections.projects;
  const primaryCategory = project.categories[0];
  const accent = CATEGORY_ACCENTS[primaryCategory] ?? '#f0f0f5';

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      style={{ '--card-accent': accent } as CSSProperties}
    >
      <div className={styles.header}>
        <div className={styles.meta}>
          {project.categories.map((cat) => (
            <Chip key={cat} accent={CATEGORY_ACCENTS[cat]}>
              {t.categories[cat]}
            </Chip>
          ))}
          {project.visibility === 'private' && (
            <Chip accent="#fbbf24">{t.visibility.private}</Chip>
          )}
          <span className={styles.status}>{t.status[project.status]}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        {project.period && <p className={styles.period}>{project.period}</p>}
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>{labels.techLabel}</span>
        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.patterns.length > 0 && (
        <div className={styles.section}>
          <span className={styles.label}>{labels.patternsLabel}</span>
          <div className={styles.tags}>
            {project.patterns.map((pattern) => (
              <span key={pattern} className={`${styles.tag} ${styles.pattern}`}>
                {pattern}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.repoUrl || project.demoUrl) && (
        <div className={styles.links}>
          {project.repoUrl && project.visibility !== 'private' && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.link}>
              {labels.repoLink}
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.link}>
              {project.visibility === 'private' ? labels.requestDemo : labels.demoLink}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
