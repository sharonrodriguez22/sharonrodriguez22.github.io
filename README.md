# sharonrodriguez22.github.io

Sitio portfolio / CV de **Sharon Rodríguez Liendo** — QA Automation Engineer.
Hecho con [Astro](https://astro.build), bilingüe ES/EN, publicado automáticamente
en GitHub Pages mediante GitHub Actions.

🔗 https://sharonrodriguez22.github.io

---

## Puesta en marcha (una sola vez)

1. **Crear el repositorio** en GitHub con el nombre exacto:

   ```
   sharonrodriguez22.github.io
   ```

   El nombre tiene que coincidir con tu usuario de GitHub. Si el repo se llama
   distinto, la URL cambia y hay que ajustar `site` en `astro.config.mjs`.

2. **Subir el proyecto:**

   ```bash
   git init
   git add .
   git commit -m "Sitio portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/sharonrodriguez22/sharonrodriguez22.github.io.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   `Settings` → `Pages` → en **Source** elegí **GitHub Actions**.
   Sin este paso el workflow corre pero no publica.

4. Listo. Cada `git push` a `main` vuelve a buildear y publicar (1–2 minutos).
   El progreso se ve en la pestaña **Actions**.

---

## Trabajar en local

```bash
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # generar el sitio en dist/
npm run preview  # ver el build antes de publicar
```

---

## Cómo actualizar el contenido

**Casi todo se edita en un solo archivo:** [`src/data/content.ts`](src/data/content.ts)

Ahí están las dos versiones del sitio, `es` y `en`, con la misma estructura.
Si agregás algo en una, agregalo en la otra.

| Qué querés cambiar | Dónde |
| --- | --- |
| Textos, experiencia, proyectos, skills, certificaciones | `src/data/content.ts` |
| Mail, LinkedIn, GitHub, ruta de la foto | `profile` al inicio de `src/data/content.ts` |
| Colores, tipografías, espaciados | `src/styles/global.css` (bloque `:root`) |
| El CV en PDF | reemplazá los archivos en `public/cv/` manteniendo el nombre |
| La foto | reemplazá `public/img/sharon-portrait.jpg` (cuadrada, ~720×720) |

### Ejemplo: agregar una certificación

En `src/data/content.ts`, dentro de `es.certs.items` (y su equivalente en `en`):

```ts
{ name: 'Nombre del curso', org: 'Institución', year: '2026' },
```

---

## Estructura

```
.
├── .github/workflows/deploy.yml   # build + deploy a GitHub Pages
├── public/
│   ├── cv/                        # CV en PDF (ES y EN)
│   ├── img/                       # foto de perfil
│   └── favicon.svg
├── src/
│   ├── components/                # una sección del sitio por archivo
│   ├── data/content.ts            # ← todo el contenido, ES y EN
│   ├── layouts/Base.astro         # head, header, footer, SEO
│   ├── pages/
│   │   ├── index.astro            # versión español  →  /
│   │   └── en/index.astro         # versión inglés   →  /en/
│   └── styles/global.css          # tokens de diseño y estilos
└── astro.config.mjs
```

---

## Notas

- El sitio es 100% estático: no hay servidor, base de datos ni claves.
- El teléfono no está publicado a propósito; está solo en el PDF del CV.
- Los enlaces externos abren en pestaña nueva con `rel="noopener noreferrer"`.
- Incluye metadatos Open Graph y JSON-LD (`schema.org/Person`) para que el
  enlace se vea bien al compartirlo en LinkedIn o WhatsApp.
