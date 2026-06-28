import { profile, education, softSkills } from '../../data/profile';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.section} id="perfil">
      <SectionTitle
        index="01"
        title="Perfil"
        subtitle="Formación, objetivo y habilidades blandas que complementan el stack técnico."
      />

      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>Objetivo</h3>
          <p>{profile.objective}</p>
        </article>

        <article className={styles.card}>
          <h3>Educación</h3>
          <p className={styles.degree}>{education.degree}</p>
          <p className={styles.meta}>{education.institution}</p>
          <p className={styles.meta}>{education.period}</p>
        </article>

        <article className={styles.card}>
          <h3>Idiomas</h3>
          <ul>
            {profile.languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.wide}`}>
          <h3>Habilidades blandas</h3>
          <ul className={styles.softList}>
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
