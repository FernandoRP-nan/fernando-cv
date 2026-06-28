import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'tierra-de-perros',
    company: 'Tierra de Perros',
    location: 'Xalapa, Veracruz',
    period: 'DIC 2024 — JUN 2025',
    tags: ['Angular', 'Laravel', 'PWA', 'Stripe', 'Seguridad'],
    highlights: [
      'PWA con Angular y Laravel, roles admin, usuario y trabajador.',
      'Integración de Stripe, notificaciones push y tokenización.',
      'Optimización multi-dispositivo con enfoque en UX.',
    ],
  },
  {
    id: 'bachilleres',
    company: 'Portal de Bachilleres Veracruz',
    location: 'Xalapa, Veracruz',
    period: 'SEP 2024 — DIC 2024',
    tags: ['PHP', 'Seguridad', 'Push Notifications'],
    highlights: [
      'Portal informativo gubernamental con PHP puro, sin frameworks.',
      'Vistas por rol: administrador y usuario normal.',
      'Notificaciones push, encriptación y tokenización.',
    ],
  },
  {
    id: 'satori',
    company: 'Satori Tech',
    role: 'Desarrollador Android Jr.',
    location: 'Mecatepec, CDMX',
    period: 'SEP 2022 — JUN 2024',
    tags: ['Kotlin', 'MVVM', 'Retrofit', 'Room', 'Gradle'],
    highlights: [
      'Frontend móvil con consumo de API en metodología ágil.',
      'MVVM, Clean Code, inyección de dependencias, Retrofit y Room.',
    ],
  },
  {
    id: 'grupo-modelo',
    company: 'Grupo Modelo',
    role: 'SAP PI PO Jr. Consultant (Freelance)',
    location: 'Xalapa, Veracruz',
    period: 'JUN 2022 — AGO 2022',
    tags: ['SAP ERP', 'Integración'],
    highlights: [
      'Soporte y mantenimiento en SAP ERP para optimizar procesos de negocio.',
    ],
  },
];
