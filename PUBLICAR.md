# Cómo publicar el sitio y cómo actualizarlo después

Guía para Windows. Todo se hace una sola vez; después publicar es un comando.

---

## Antes de empezar: ¿tenés Git?

Abrí **PowerShell** (tecla Windows → escribí `powershell` → Enter) y probá:

```powershell
git --version
```

- Si responde algo como `git version 2.4x.x`, seguí al paso 1.
- Si dice que no reconoce el comando, instalalo desde https://git-scm.com/download/win
  (Siguiente, siguiente, sin cambiar nada.) Cerrá y volvé a abrir PowerShell.

> Node.js no hace falta para publicar: el sitio lo compila GitHub.
> Solo lo necesitás si querés ver los cambios en vivo con `npm run dev`.

---

## Paso 1 — Crear el repositorio en GitHub

1. Entrá a https://github.com/new
2. **Repository name:** `sharonrodriguez22.github.io`

   Tiene que ser exactamente así. GitHub reconoce el patrón `usuario.github.io`
   y publica el sitio en la raíz de tu dominio. Si le ponés otro nombre, la URL
   cambia y hay que tocar `astro.config.mjs`.
3. **Public.** Con cuenta gratuita, GitHub Pages solo funciona en repos públicos.
4. **No** marques nada de "Initialize this repository with…" — ni README, ni
   .gitignore, ni licencia. El repo tiene que quedar vacío.
5. **Create repository.**

---

## Paso 2 — Subir los archivos

En PowerShell, pegá esto línea por línea:

```powershell
cd "$env:USERPROFILE\OneDrive\Desktop\Portafolio"

git init
git add .
git commit -m "Sitio portfolio inicial"
git branch -M main
git remote add origin https://github.com/sharonrodriguez22/sharonrodriguez22.github.io.git
git push -u origin main
```

La primera vez te va a pedir iniciar sesión en GitHub: se abre una ventana del
navegador, autorizás y listo.

Si te pide identificarte antes del commit:

```powershell
git config --global user.name "Sharon Rodríguez Liendo"
git config --global user.email "sharonrodriguezliendo22@gmail.com"
```

---

## Paso 3 — Activar GitHub Pages

Este paso es el que la gente se saltea y después el sitio no aparece.

1. En tu repo → pestaña **Settings**
2. Menú de la izquierda → **Pages**
3. En **Source**, elegí **GitHub Actions** (no "Deploy from a branch")

No hay botón de guardar: se aplica solo.

---

## Paso 4 — Esperar el deploy

1. Pestaña **Actions** del repo.
2. Vas a ver el workflow *Deploy a GitHub Pages* corriendo.
3. Cuando los dos pasos tengan tilde verde (1–2 minutos), entrá a:

   **https://sharonrodriguez22.github.io**

Si algo falla, hacé clic en el paso rojo y el error queda a la vista.

---

## Actualizar el sitio después

Cada vez que cambies algo, son tres comandos:

```powershell
cd "$env:USERPROFILE\OneDrive\Desktop\Portafolio"
git add .
git commit -m "Describí el cambio"
git push
```

El push dispara el workflow y en 1–2 minutos el sitio queda actualizado.

---

## Cambiar la foto más adelante

Sí, cuando quieras. Es lo más simple de todo.

### Opción A — misma foto, archivo nuevo (recomendada)

1. Guardá la foto nueva como **`sharon-portrait.jpg`**
2. Reemplazá con ella el archivo en `public\img\`
3. `git add .` → `git commit -m "Foto nueva"` → `git push`

No hay que tocar ni una línea de código: el sitio siempre apunta a ese nombre.

**Que la foto sea cuadrada.** Mínimo 640×640 px. Si es rectangular, el círculo
del hero la recorta por el centro y puede comerte parte de la cabeza.

### Opción B — otro nombre de archivo

Poné la foto en `public\img\` y actualizá una línea en
`src\data\content.ts`:

```ts
photo: '/img/como-se-llame.jpg',
```

### Dos cosas que pueden confundirte

- **Seguís viendo la foto vieja.** Es la caché del navegador. `Ctrl + F5`.
- **LinkedIn o WhatsApp muestran la anterior** al compartir el link. Ellos
  guardan su propia copia. Para forzar que la actualicen, pegá tu URL en
  https://www.linkedin.com/post-inspector/

---

## Nota sobre `package-lock.json`

El workflow usa `npm install` en vez de `npm ci` porque el lockfile que quedó en
el repo está incompleto.

Si algún día instalás Node, podés dejarlo perfecto:

```powershell
cd "$env:USERPROFILE\OneDrive\Desktop\Portafolio"
npm install
git add package-lock.json
git commit -m "Lockfile completo"
git push
```

Después, si querés, en `.github\workflows\deploy.yml` podés volver a poner
`npm ci` en el paso *Install*: es más rápido y más reproducible. No es urgente —
con `npm install` el sitio publica igual.

---

## Cambiar cualquier otra cosa

Casi todo el contenido vive en **`src\data\content.ts`**: textos, experiencia,
proyectos, skills, certificaciones. Está dividido en `es` y `en` con la misma
estructura — si agregás algo en una, agregalo en la otra.

Los colores y tipografías están en el bloque `:root` de `src\styles\global.css`.

El detalle completo está en el README.

---

## Ver los cambios antes de publicar (opcional)

Si instalás Node.js (https://nodejs.org, versión LTS):

```powershell
cd "$env:USERPROFILE\OneDrive\Desktop\Portafolio"
npm install      # solo la primera vez
npm run dev
```

Abrí http://localhost:4321 y se actualiza solo mientras editás.
