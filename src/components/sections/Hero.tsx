import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export function Hero() {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Portfolio & CV interactivo</p>
        <h1 className={styles.name}>
          Fernando
          <span className={styles.surname}> Rodríguez Prianti</span>
        </h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.summary}>{profile.summary}</p>

        <div className={styles.actions}>
          <a href="#proyectos" className={styles.primary}>
            Ver proyectos
          </a>
          <a href={`mailto:${profile.email}`} className={styles.secondary}>
            Contactar
          </a>
        </div>

        <div className={styles.stats}>
          <div>
            <strong>4+</strong>
            <span>Años de experiencia</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Proyectos destacados</span>
          </div>
          <div>
            <strong>8</strong>
            <span>Stack principal</span>
          </div>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.orbit}>
          <span>Kotlin</span>
          <span>Angular</span>
          <span>Godot</span>
          <span>Python</span>
        </div>
      </div>
    </section>
  );
}
