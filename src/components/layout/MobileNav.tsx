import { useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageProvider';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { t, locale, setLocale } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Navigation menu">
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label="Close menu" />
      <nav className={styles.panel}>
        <div className={styles.panelHeader}>
          <span className={styles.brand}>FRP</span>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {t.nav.map((item) => (
          <a key={item.href} href={item.href} className={styles.link} onClick={onClose}>
            {item.label}
          </a>
        ))}
        <div className={styles.socials}>
          <a href={t.profile.linkedin} target="_blank" rel="noreferrer" onClick={onClose}>
            LinkedIn
          </a>
          <a href={t.profile.github} target="_blank" rel="noreferrer" onClick={onClose}>
            GitHub
          </a>
          <a href={`mailto:${t.profile.email}`} onClick={onClose}>
            Email
          </a>
        </div>
        <div className={styles.langSwitch}>
          <button
            type="button"
            className={locale === 'es' ? styles.langActive : ''}
            onClick={() => setLocale('es')}
          >
            ES
          </button>
          <button
            type="button"
            className={locale === 'en' ? styles.langActive : ''}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
        </div>
      </nav>
    </div>
  );
}
