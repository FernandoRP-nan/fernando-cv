import { useLanguage } from '../../i18n/LanguageProvider';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './Hero.module.css';

const PDF_PATHS = {
  es: `${import.meta.env.BASE_URL}cv/Fernando-Rodriguez-Prianti-CV.pdf`,
  en: `${import.meta.env.BASE_URL}cv/Fernando-Rodriguez-Prianti-CV-en.pdf`,
};

export function Hero() {
  const { locale, t } = useLanguage();
  usePageMeta(locale, t);

  const initials = t.profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <div className={styles.badges}>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <span className={styles.available}>{t.hero.available}</span>
        </div>
        <h1 className={styles.name}>
          Fernando
          <span className={styles.surname}> Rodríguez Prianti</span>
        </h1>
        <p className={styles.role}>{t.hero.role}</p>
        <p className={styles.summary}>{t.hero.summary}</p>

        <div className={styles.actions}>
          <a href="#proyectos" className={styles.primary}>
            {t.hero.ctaProjects}
          </a>
          <a href={`mailto:${t.profile.email}`} className={styles.secondary}>
            {t.hero.ctaContact}
          </a>
          <a href={PDF_PATHS[locale]} download className={styles.pdf}>
            {t.hero.ctaPdf}
          </a>
        </div>

        <div className={styles.stats}>
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.orbit}>
          {t.hero.orbit.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
