import { useLanguage } from '../../i18n/LanguageProvider';
import { SectionTitle } from '../ui/SectionTitle';
import styles from './Skills.module.css';

export function Skills() {
  const { t } = useLanguage();
  const { skills } = t.sections;

  return (
    <section className={styles.section} id="skills">
      <SectionTitle index="03" title={skills.title} subtitle={skills.subtitle} />

      <div className={styles.grid}>
        {t.skillGroups.map((group) => (
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
