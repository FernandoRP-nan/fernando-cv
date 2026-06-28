import { useEffect } from 'react';
import type { LocaleStrings } from '../i18n/types';

const SITE_URL = 'https://fernandorp-nan.github.io/fernando-cv/';
const OG_IMAGE = `${SITE_URL}og-image.svg`;

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function usePageMeta(locale: 'es' | 'en', t: LocaleStrings) {
  useEffect(() => {
    const title =
      locale === 'es'
        ? `${t.profile.name} | CV & Portfolio`
        : `${t.profile.name} | CV & Portfolio`;

    const description = t.profile.summary.slice(0, 160);

    document.title = title;
    document.documentElement.lang = locale;

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', SITE_URL, 'property');
    setMeta('og:image', OG_IMAGE, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:locale', locale === 'es' ? 'es_MX' : 'en_US', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', OG_IMAGE);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: t.profile.name,
      jobTitle: t.profile.role,
      url: SITE_URL,
      email: t.profile.email,
      telephone: t.profile.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Xalapa',
        addressRegion: 'Veracruz',
        addressCountry: 'MX',
      },
      sameAs: [t.profile.linkedin, t.profile.github],
      knowsAbout: t.skillGroups.flatMap((g) => g.items).slice(0, 12),
    };

    let script = document.getElementById('json-ld-person') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-person';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [locale, t]);
}
