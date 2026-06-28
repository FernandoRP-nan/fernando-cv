import { useLanguage } from '../../i18n/LanguageProvider';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {year} {t.profile.name.split(' ')[0]} Rodríguez — CV
      </p>
      <p className={styles.made}>{t.footer.made}</p>
    </footer>
  );
}
