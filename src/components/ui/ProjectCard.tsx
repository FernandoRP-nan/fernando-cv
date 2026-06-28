import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Project } from '../../types';
import { CATEGORY_ACCENTS } from '../../data/categories';
import { useLanguage } from '../../i18n/LanguageProvider';
import { Chip } from './SectionTitle';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { t } = useLanguage();
  const labels = t.sections.projects;
  const [imageFailed, setImageFailed] = useState(false);
  const primaryCategory = project.categories[0];
  const accent = CATEGORY_ACCENTS[primaryCategory] ?? '#f0f0f5';
  const imageSrc =
    project.imageUrl && !imageFailed
      ? `${import.meta.env.BASE_URL}${project.imageUrl.replace(/^\//, '')}`
      : null;

  return (
    <article
      className={`${styles.card} ${project.featured && !compact ? styles.featured : ''} ${compact ? styles.compact : ''} ${imageSrc ? styles.hasThumb : ''}`}
      style={{ '--card-accent': accent } as CSSProperties}
    >
      {imageSrc && (
        <div className={styles.thumb}>
          <img
            src={imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        </div>
      )}

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
          {!compact && <span className={styles.status}>{t.status[project.status]}</span>}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        {project.period && <p className={styles.period}>{project.period}</p>}
        <p className={styles.description}>{project.description}</p>
      </div>

      {!compact && (
        <>
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
        </>
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
