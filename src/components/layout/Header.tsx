import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageProvider';
import { MobileNav } from './MobileNav';
import styles from './Header.module.css';

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <a href="#inicio" className={styles.logo}>
          FR<span>P</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={styles.langSwitch} role="group" aria-label="Language">
            <button
              type="button"
              className={locale === 'es' ? styles.langActive : ''}
              onClick={() => setLocale('es')}
              aria-pressed={locale === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              className={locale === 'en' ? styles.langActive : ''}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
          </div>
          <a
            href={t.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            LinkedIn
          </a>
          <a href={t.profile.github} target="_blank" rel="noreferrer" className={styles.cta}>
            GitHub
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
