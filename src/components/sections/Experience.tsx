import { experiences } from '../../data/experience';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section className={styles.section} id="experiencia">
      <SectionTitle
        index="02"
        title="Experiencia"
        subtitle="Trayectoria profesional en empresas, consultoría y desarrollo móvil."
      />

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <article key={exp.id} className={styles.item}>
            <div className={styles.marker}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className={styles.body}>
              <header>
                <h3>{exp.company}</h3>
                {exp.role && <p className={styles.role}>{exp.role}</p>}
                <p className={styles.meta}>
                  {exp.location} · {exp.period}
                </p>
              </header>
              <ul>
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
