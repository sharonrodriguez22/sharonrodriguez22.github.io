// @ts-check
import { defineConfig } from 'astro/config';

// Sitio de usuario de GitHub Pages: se publica en la raiz del dominio,
// por eso `base` queda en '/' y no hace falta configurarlo.
export default defineConfig({
  site: 'https://sharonrodriguez22.github.io',
  build: {
    format: 'directory',
  },
});
