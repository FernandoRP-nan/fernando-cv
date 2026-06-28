import { useLanguage } from '../../i18n/LanguageProvider';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './About.module.css';

export function About() {
  const { t } = useLanguage();
  const { about } = t.sections;

  return (
    <section className={styles.section} id="perfil">
      <SectionTitle index="01" title={about.title} subtitle={about.subtitle} />

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.wide}`}>
          <h3>{about.summary}</h3>
          <p>{t.profile.summary}</p>
        </article>

        <article className={styles.card}>
          <h3>{about.focus}</h3>
          <ul className={styles.focusList}>
            {t.profile.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h3>{about.objective}</h3>
          <p>{t.profile.objective}</p>
        </article>

        <article className={styles.card}>
          <h3>{about.education}</h3>
          <p className={styles.degree}>{about.degree}</p>
          <p className={styles.meta}>{about.institution}</p>
          <p className={styles.meta}>{about.period}</p>
        </article>

        <article className={styles.card}>
          <h3>{about.languages}</h3>
          <ul>
            {t.profile.languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.wide}`}>
          <h3>{about.softSkills}</h3>
          <ul className={styles.softList}>
            {t.profile.softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
