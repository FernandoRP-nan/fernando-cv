import { profile } from '../../data/profile';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.card}>
        <p className={styles.eyebrow}>¿Colaboramos?</p>
        <h2>Construyamos algo juntos</h2>
        <p>Disponible para oportunidades full stack, Android y proyectos con impacto real.</p>

        <div className={styles.links}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>{profile.phone}</span>
        </div>
      </div>
    </section>
  );
}
