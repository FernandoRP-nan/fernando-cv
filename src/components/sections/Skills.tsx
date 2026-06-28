import { skillGroups } from '../../data/skills';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionTitle
        index="03"
        title="Stack técnico"
        subtitle="Tecnologías, herramientas y modelos que aplico en producción y proyectos personales."
      />

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <article key={group.id} className={styles.card}>
            <h3>{group.title}</h3>
            <div className={styles.items}>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
