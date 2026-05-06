# Lady Jarana — Web Oficial

Web oficial de **Lady Jarana**, banda de Rumba & Rock de Barcelona.

**Stack:** Next.js 14+ · TypeScript · Tailwind CSS · Framer Motion · Resend

---

## 1. Arrancar el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 2. Cambiar contenido

### Textos
Los textos principales de cada seccion estan en `src/components/sections/`. Cada seccion tiene su propio archivo:
- `Hero.tsx` — cabecera principal
- `Bio.tsx` — sobre la banda
- `Estilo.tsx` — estilos musicales
- `Integrantes.tsx` — miembros (datos en `src/lib/integrantes.ts`)
- `Formatos.tsx` — duo/trio/cuarteto (datos en `src/lib/formatos.ts`)
- `Trayectoria.tsx` — timeline de eventos (datos en `src/lib/trayectoria.ts`)

### Imagenes
Coloca las fotos en `public/images/` con estos nombres:
- `victor.jpg`, `alejo.jpg`, `ivan.jpg`, `diego.jpg` — fotos individuales
- `banda-completa.jpg` — foto grupal para la seccion Bio
- `barceloneta.jpg`, `centro-asturiano.jpg`, `barbera.jpg`, `sant-adria.jpg`, `boda-cangavarro.jpg`, `boda-privada.jpg` — fotos de eventos

Para las miniaturas de video, usa `public/thumbnails/`.

---

## 3. Anadir un evento nuevo a la trayectoria

Abre `src/lib/trayectoria.ts` y anade un nuevo objeto al array:

```ts
{
  fecha: 'Marzo 2026',
  tipo: 'fiesta-mayor',  // opciones: 'concierto' | 'fiesta-mayor' | 'boda' | 'sala'
  lugar: 'Nombre del lugar',
  descripcion: 'Descripcion corta del evento.',
  imagen: '/images/nombre-imagen.jpg',
}
```

---

## 4. Anadir un video de Google Drive

1. Sube el video a Google Drive
2. Click derecho > **Compartir** > Cambia a **"Cualquier persona con el enlace puede ver"**
3. Copia el enlace. El ID del archivo es la parte entre `/d/` y `/view`:
   `https://drive.google.com/file/d/ESTE_ES_EL_ID/view`
4. Abre `src/lib/videos.ts` y anade:

```ts
{
  id: 'PEGA_EL_ID_AQUI',
  title: 'Nombre del video',
  description: 'Descripcion corta',
  thumbnail: '/thumbnails/nombre.jpg',
  aspectRatio: '16:9',
}
```

> **Tip:** si los videos de Drive van lentos, considera subirlos a YouTube como "no listados" y usar embeds de YouTube. Es mas rapido y fiable.

---

## 5. Cambiar el dossier PDF

Reemplaza el archivo `public/dossier-lady-jarana.pdf` con la nueva version. El nombre debe ser exactamente ese.

---

## 6. Desplegar en Vercel

1. Sube el codigo a GitHub (ya esta en el repo)
2. Ve a [vercel.com](https://vercel.com) e importa el repositorio
3. En **Settings > Environment Variables**, anade:
   - `RESEND_API_KEY` — tu API key de Resend
   - `RESEND_FROM_EMAIL` — email verificado en Resend
   - `CONTACT_EMAIL` — email donde quieres recibir las solicitudes
4. Click en **Deploy**

---

## 7. Configurar el formulario de contratacion

1. Crea una cuenta en [resend.com](https://resend.com)
2. Verifica tu dominio (ladyjarana.com) o usa el dominio de prueba
3. Copia tu API key
4. Anade las variables de entorno (ver `.env.example`)

Sin configurar Resend, el formulario sigue funcionando pero los datos solo aparecen en los logs del servidor.

---

## 8. SEO checklist post-lanzamiento

- [ ] Dar de alta en [Google Search Console](https://search.google.com/search-console)
- [ ] Verificar propiedad del dominio
- [ ] Enviar sitemap: `https://ladyjarana.com/sitemap.xml`
- [ ] Verificar metadatos con [metatags.io](https://metatags.io)
- [ ] Probar Open Graph con [opengraph.xyz](https://opengraph.xyz)
- [ ] Crear perfil de Google My Business
- [ ] Conectar Google Analytics (opcional)

---

## Estructura del proyecto

```
src/
  app/                    -- Paginas (Next.js App Router)
    page.tsx              -- Home
    contratar/            -- Formulario de contratacion
    galeria/              -- Galeria de videos
    dossier/              -- Descarga del dossier
    aviso-legal/
    politica-privacidad/
    politica-cookies/
    api/contratar/        -- API del formulario
  components/
    sections/             -- Secciones del home
    ui/                   -- Componentes reutilizables
    Navbar.tsx
    Footer.tsx
  lib/                    -- Datos y configuracion
    videos.ts             -- IDs de videos de Google Drive
    integrantes.ts
    formatos.ts
    trayectoria.ts
    testimonios.ts        -- Activar cuando haya testimonios
    metadata.ts           -- SEO y Schema.org
public/
  images/                 -- Fotos de la banda y eventos
  thumbnails/             -- Miniaturas de videos
  logo/                   -- Logo de Lady Jarana
  dossier-lady-jarana.pdf -- Dossier descargable
```

---

**Lady Jarana** — Fiesta mayor desde Barcelona
