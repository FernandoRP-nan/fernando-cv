import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Lenguajes',
    items: ['Java', 'Kotlin', 'Python', 'C++', 'C#', 'JavaScript', 'PHP', 'TypeScript'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    items: ['Angular', 'Laravel', 'Flutter', 'Jetpack Compose', 'Spring Boot', 'React', 'Electron', 'Firebase'],
  },
  {
    id: 'databases',
    title: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Room'],
  },
  {
    id: 'practices',
    title: 'Prácticas & arquitectura',
    items: ['MVVM', 'Clean Code', 'Inyección de dependencias', 'Patrones de diseño', 'Consumo de API', 'Gradle'],
  },
  {
    id: 'tools',
    title: 'Herramientas',
    items: ['Android Studio', 'VS Code', 'Git', 'GitHub', 'IntelliJ', 'Docker', 'Figma', 'Adobe XD', 'SAP PI PO'],
  },
  {
    id: 'security',
    title: 'Seguridad',
    items: ['Encriptación', 'Tokenización', 'Autenticación por roles'],
  },
];
