import { useLanguage } from '../../i18n/LanguageProvider';
import { ProjectCard } from '../ui/ProjectCard';
import styles from './FeaturedProjects.module.css';

export function FeaturedProjects() {
  const { t } = useLanguage();
  const { featuredTitle } = t.sections.projects;

  const highlights = t.highlightProjectIds
    .map((id) => t.projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (highlights.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>{featuredTitle}</h3>
      <div className={styles.row}>
        {highlights.map((project) => (
          <ProjectCard key={project.id} project={project} compact />
        ))}
      </div>
    </div>
  );
}
