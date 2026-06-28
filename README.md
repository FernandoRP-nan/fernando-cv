# Fernando Rodríguez Prianti — CV Interactivo

Portfolio y currículum web modular, desplegado en GitHub Pages.

**URL:** https://FernandoRP-nan.github.io/fernando-cv

## Stack

- React 19 + TypeScript
- Vite 8
- CSS Modules
- i18n ES/EN
- GitHub Actions → GitHub Pages + PDF LaTeX (Tectonic)

## Arquitectura

```
src/
├── i18n/          # Contenido ES/EN (profile, projects, skills…)
├── types/         # Interfaces compartidas
├── hooks/         # Filtros, meta SEO
├── components/
│   ├── layout/    # Header, Footer, MobileNav
│   ├── sections/  # Secciones del CV
│   └── ui/        # Componentes atómicos
├── cv/            # Fuentes LaTeX (PDF generado en CI)
└── public/        # OG image, manifest, imágenes de proyectos
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Agregar proyectos

Edita `src/i18n/es.ts` y `src/i18n/en.ts`. Campos útiles:

- `imageUrl`: ruta bajo `public/` (ej. `images/mi-proyecto.webp`)
- `featured`: tarjeta ancha en grid
- `highlightProjectIds`: fila de destacados arriba del filtro

## PDF local

```bash
# Requiere tectonic
cd cv && tectonic -X compile main.tex --outdir ../public/cv
```

En CI se genera automáticamente al push en `main`.

## Licencia

Privado — uso personal.
