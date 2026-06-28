import { projects } from '../../data/projects';
import { useProjectFilter } from '../../hooks/useProjectFilter';
import { FilterPills } from '../ui/FilterPills';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Projects.module.css';

export function Projects() {
  const { category, setCategory, filtered, counts } = useProjectFilter(projects);

  return (
    <section className={styles.section} id="proyectos">
      <SectionTitle
        index="04"
        title="Proyectos"
        subtitle="Filtra por categoría: Android, web, juegos, IA, herramientas y patrones de diseño."
      />

      <FilterPills active={category} counts={counts} onChange={setCategory} />

      <div className={styles.grid} key={category}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>No hay proyectos en esta categoría.</p>
      )}
    </section>
  );
}
