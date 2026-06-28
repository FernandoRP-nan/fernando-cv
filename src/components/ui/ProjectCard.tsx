import type { CSSProperties } from 'react';
import type { Project } from '../../types';
import { categoryMap } from '../../data/categories';
import { Chip } from './SectionTitle';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const statusLabels: Record<Project['status'], string> = {
  production: 'Producción',
  active: 'Activo',
  archived: 'Archivado',
  learning: 'Aprendizaje',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryCategory = project.categories[0];
  const accent = categoryMap[primaryCategory]?.accent ?? '#f0f0f5';

  return (
    <article
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      style={{ '--card-accent': accent } as CSSProperties}
    >
      <div className={styles.header}>
        <div className={styles.meta}>
          {project.categories.map((cat) => (
            <Chip key={cat} accent={categoryMap[cat]?.accent}>
              {categoryMap[cat]?.label}
            </Chip>
          ))}
          {project.visibility === 'private' && (
            <Chip accent="#fbbf24">Código privado</Chip>
          )}
          <span className={styles.status}>{statusLabels[project.status]}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.section}>
        <span className={styles.label}>Tecnologías</span>
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
          <span className={styles.label}>Modelos & patrones</span>
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
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.link}>
              Repositorio →
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.link}>
              {project.visibility === 'private' ? 'Solicitar demo →' : 'Demo →'}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
