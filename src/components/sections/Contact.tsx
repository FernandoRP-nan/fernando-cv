import { useLanguage } from '../../i18n/LanguageProvider';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLanguage();
  const { contact } = t.sections;

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.card}>
        <p className={styles.eyebrow}>{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p>{contact.body}</p>

        <div className={styles.links}>
          <a href={`mailto:${t.profile.email}`}>{t.profile.email}</a>
          <a href={t.profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={t.profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>{t.profile.phone}</span>
        </div>
      </div>
    </section>
  );
}
