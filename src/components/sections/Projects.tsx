import { useLanguage } from '../../i18n/LanguageProvider';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { FilterPills } from '../ui/FilterPills';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Projects.module.css';

export function Projects() {
  const { t } = useLanguage();
  const { projects } = t.sections;
  const { category, setCategory, filtered, counts } = useProjectFilter(t.projects);

  return (
    <section className={styles.section} id="proyectos">
      <SectionTitle index="04" title={projects.title} subtitle={projects.subtitle} />

      <FilterPills active={category} counts={counts} onChange={setCategory} />

      <div className={styles.grid} key={category}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && <p className={styles.empty}>{projects.empty}</p>}
    </section>
  );
}
