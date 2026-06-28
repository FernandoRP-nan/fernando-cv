# Fernando Rodríguez Prianti — CV Interactivo

Portfolio y currículum web modular, desplegado en GitHub Pages.

**URL:** https://FernandoRP-nan.github.io/fernando-cv

## Stack

- React 19 + TypeScript
- Vite 8
- CSS Modules (sin frameworks UI genéricos)
- GitHub Actions → GitHub Pages

## Arquitectura

```
src/
├── data/          # Contenido del CV (profile, experience, skills, projects)
├── types/         # Interfaces compartidas
├── hooks/         # Lógica reutilizable (filtros)
├── components/
│   ├── layout/    # Header, Footer
│   ├── sections/  # Secciones del CV
│   └── ui/        # Componentes atómicos
└── styles/        # Tokens y estilos globales
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue

1. Crear repo `fernando-cv` en GitHub
2. Push de la rama `main`
3. En **Settings → Pages → Build and deployment**, seleccionar **GitHub Actions**
4. El workflow `.github/workflows/deploy.yml` publica automáticamente

Despliegue manual alternativo:

```bash
npm run deploy
```

## Agregar proyectos

Edita `src/data/projects.ts`. Cada proyecto incluye:

- `categories`: `android` | `web` | `games` | `ai` | `tools` | `patterns`
- `technologies`: stack usado
- `patterns`: MVVM, Clean Code, etc.
- `featured`: destaca en grid amplio

## Licencia

Privado — uso personal.
