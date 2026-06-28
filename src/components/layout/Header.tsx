import { profile } from '../../data/profile';
import styles from './Header.module.css';

const NAV = [
  { href: '#perfil', label: 'Perfil' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo}>
        FR<span>P</span>
      </a>
      <nav className={styles.nav} aria-label="Navegación principal">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a href={profile.github} target="_blank" rel="noreferrer" className={styles.cta}>
        GitHub
      </a>
    </header>
  );
}
