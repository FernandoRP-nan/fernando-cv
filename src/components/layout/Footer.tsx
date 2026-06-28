import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {year} {profile.name.split(' ')[0]} Rodríguez — CV interactivo
      </p>
      <p className={styles.made}>React · TypeScript · Vite · GitHub Pages</p>
    </footer>
  );
}
