#!/usr/bin/env node
/**
 * Genera public/repertorio-lady-jarana.pdf a partir de src/data/repertorio.ts.
 * Uso: `npm run repertorio:pdf`
 */
import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ----- cargar data (TS -> JS al vuelo: leemos y eliminamos tipados sencillos) -----
const dataSrc = fs.readFileSync(
  path.join(ROOT, 'src/data/repertorio.ts'),
  'utf8',
);
const cleanedSrc = dataSrc
  .replace(/export type[\s\S]*?};\s*\n/g, '')
  .replace(/:\s*BloqueRepertorio\[\]/g, '')
  .replace(/export const/g, 'const')
  .replace(/\bas const\b/g, '')
  .concat('\nexport { REPERTORIO, TOTAL_CANCIONES, SPOTIFY_PLAYLIST_URL };');
const tmpDataPath = path.join(ROOT, '.repertorio-data.mjs');
fs.writeFileSync(tmpDataPath, cleanedSrc);
const { REPERTORIO, TOTAL_CANCIONES, SPOTIFY_PLAYLIST_URL } = await import(
  pathToFileURL(tmpDataPath).href
);
fs.unlinkSync(tmpDataPath);

// ----- paleta brand -----
const COLORS = {
  crema: '#FBF1DC',
  cremaOscuro: '#F4E4C2',
  negro: '#1F1A18',
  rojo: '#D63B36',
  rojoOscuro: '#A82A26',
  sol: '#F5B73C',
  naranja: '#F47A1F',
  azul: '#2B6FA3',
  gris: '#6B5D55',
};

const PAGE = { width: 595.28, height: 841.89 }; // A4 portrait pt
const MARGIN = 48;

const palmeraPath = path.join(ROOT, 'public/personajes/palmera-jaranera.png');
const palmeraExists = fs.existsSync(palmeraPath);

const outDir = path.join(ROOT, 'public');
const outPath = path.join(outDir, 'repertorio-lady-jarana.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  info: {
    Title: 'Repertorio Lady Jarana',
    Author: 'Lady Jarana',
    Subject: 'Repertorio en directo — bodas, verbenas y fiestas',
    Keywords:
      'Lady Jarana, repertorio, banda, bodas, verbenas, pop-rock, rumba, latineo',
  },
});

doc.pipe(fs.createWriteStream(outPath));

// ============== PORTADA ==============
function drawBackground(color) {
  doc.save();
  doc.rect(0, 0, PAGE.width, PAGE.height).fill(color);
  doc.restore();
}

drawBackground(COLORS.rojo);

// Banda de sol en diagonal
doc.save();
doc.rotate(-8, { origin: [PAGE.width / 2, 220] });
doc.rect(-80, 180, PAGE.width + 160, 90).fill(COLORS.sol);
doc.restore();

// Palmera
if (palmeraExists) {
  doc.image(palmeraPath, PAGE.width - 230, 480, { width: 220 });
}

doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(13)
  .text('LADY JARANA', MARGIN, 90, { characterSpacing: 4 });

doc
  .fillColor(COLORS.crema)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('PRESS KIT · REPERTORIO EN DIRECTO', MARGIN, 110, {
    characterSpacing: 2,
  });

doc.save();
doc.rotate(-8, { origin: [PAGE.width / 2, 220] });
doc
  .fillColor(COLORS.negro)
  .font('Helvetica-BoldOblique')
  .fontSize(54)
  .text('EL REPERTORIO', MARGIN, 200, { width: PAGE.width - MARGIN * 2 });
doc.restore();

doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(48)
  .text(`${TOTAL_CANCIONES} canciones,`, MARGIN, 320);
doc
  .fillColor(COLORS.sol)
  .font('Helvetica-BoldOblique')
  .fontSize(48)
  .text('una intención:', MARGIN, 370);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(48)
  .text('que no pares', MARGIN, 420);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(48)
  .text('de bailar.', MARGIN, 470);

doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(11)
  .text(
    'Pop-rock español, rumba catalana, latineo de verbena y los himnos\nque cantan hasta los suegros. Esto es lo que sonará en tu boda,\nverbena o fiesta de empresa.',
    MARGIN,
    550,
    { width: 320, lineGap: 4 },
  );

// Stats badges
const statsY = 640;
function statBox(x, value, label) {
  const w = 130;
  const h = 56;
  doc.save();
  doc.lineWidth(3).strokeColor(COLORS.negro);
  doc.roundedRect(x, statsY, w, h, 6).fillAndStroke(COLORS.crema, COLORS.negro);
  doc.restore();
  doc
    .fillColor(COLORS.rojo)
    .font('Helvetica-BoldOblique')
    .fontSize(22)
    .text(value, x, statsY + 8, { width: w, align: 'center' });
  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text(label.toUpperCase(), x, statsY + 36, {
      width: w,
      align: 'center',
      characterSpacing: 1.5,
    });
}
statBox(MARGIN, String(TOTAL_CANCIONES), 'canciones');
statBox(MARGIN + 145, String(REPERTORIO.length), 'estilos');
statBox(MARGIN + 290, '2-3h', 'show');

// Pie portada
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-Bold')
  .fontSize(9)
  .text('LADYJARANA.COM', MARGIN, PAGE.height - 80, { characterSpacing: 3 });
doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('WhatsApp · +34 627 281 459', MARGIN, PAGE.height - 65);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(9)
  .text('ladyjaranamusic@gmail.com · @lady.jarana', MARGIN, PAGE.height - 50);

// ============== PÁGINAS INTERIORES ==============
function pageHeader(title) {
  drawBackground(COLORS.crema);

  // banda superior
  doc.save();
  doc.rect(0, 0, PAGE.width, 64).fill(COLORS.negro);
  doc
    .fillColor(COLORS.crema)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text('LADY JARANA · REPERTORIO', MARGIN, 24, { characterSpacing: 3 });
  doc
    .fillColor(COLORS.sol)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text('ladyjarana.com', PAGE.width - MARGIN - 100, 24, {
      width: 100,
      align: 'right',
      characterSpacing: 1.5,
    });
  doc.restore();

  if (title) {
    doc
      .fillColor(COLORS.negro)
      .font('Helvetica-BoldOblique')
      .fontSize(28)
      .text(title, MARGIN, 90, { width: PAGE.width - MARGIN * 2 });
  }
}

function pageFooter(pageNum) {
  doc
    .fillColor(COLORS.gris)
    .font('Helvetica')
    .fontSize(8)
    .text(
      `Repertorio Lady Jarana · Página ${pageNum} · Pídenos versión a medida por WhatsApp`,
      MARGIN,
      PAGE.height - 30,
      { width: PAGE.width - MARGIN * 2, align: 'center' },
    );
}

let pageNum = 1; // portada
const EMOJI_FALLBACK = { '🎸': '♪', '💃': '♫', '🪇': '♬', '🎊': '✦' };

REPERTORIO.forEach((bloque, idx) => {
  doc.addPage();
  pageNum += 1;
  pageHeader();

  // Número grande + título bloque
  doc
    .fillColor(COLORS.rojo)
    .font('Helvetica-BoldOblique')
    .fontSize(72)
    .text(String(idx + 1).padStart(2, '0'), MARGIN, 96);

  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text(
      `BLOQUE ${idx + 1} DE ${REPERTORIO.length}`,
      MARGIN + 110,
      105,
      { characterSpacing: 3 },
    );
  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-BoldOblique')
    .fontSize(30)
    .text(bloque.titulo, MARGIN + 108, 120, {
      width: PAGE.width - MARGIN * 2 - 108,
    });
  doc
    .fillColor(COLORS.gris)
    .font('Helvetica-Oblique')
    .fontSize(11)
    .text(bloque.descripcion, MARGIN + 108, 162, {
      width: PAGE.width - MARGIN * 2 - 108,
      lineGap: 2,
    });

  // contador
  doc.save();
  doc.lineWidth(2.5).strokeColor(COLORS.negro);
  doc
    .roundedRect(PAGE.width - MARGIN - 110, 105, 110, 26, 12)
    .fillAndStroke(COLORS.sol, COLORS.negro);
  doc.restore();
  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text(`${bloque.canciones.length} CANCIONES`, PAGE.width - MARGIN - 110, 113, {
      width: 110,
      align: 'center',
      characterSpacing: 1.2,
    });

  // Lista canciones — 2 columnas
  const listTop = 220;
  const colWidth = (PAGE.width - MARGIN * 2 - 30) / 2;
  const colX = [MARGIN, MARGIN + colWidth + 30];
  const rowHeight = 32;
  const colRows = Math.ceil(bloque.canciones.length / 2);

  bloque.canciones.forEach((cancion, i) => {
    const col = i < colRows ? 0 : 1;
    const row = col === 0 ? i : i - colRows;
    const x = colX[col];
    const y = listTop + row * rowHeight;

    doc
      .fillColor(COLORS.rojo)
      .font('Helvetica-Bold')
      .fontSize(11)
      .text(String(i + 1).padStart(2, '0'), x, y, { width: 22 });

    doc
      .fillColor(COLORS.negro)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text(cancion.titulo, x + 24, y, { width: colWidth - 24, lineBreak: false });

    if (cancion.artista) {
      let sub = cancion.artista;
      if (cancion.medley) sub += `  ·  medley con ${cancion.medley}`;
      doc
        .fillColor(COLORS.gris)
        .font('Helvetica-Oblique')
        .fontSize(9)
        .text(sub, x + 24, y + 14, {
          width: colWidth - 24,
          lineBreak: false,
        });
    }

    // línea inferior
    doc
      .strokeColor(COLORS.cremaOscuro)
      .lineWidth(1)
      .moveTo(x, y + 28)
      .lineTo(x + colWidth, y + 28)
      .stroke();
  });

  pageFooter(pageNum);
});

// ============== CONTRAPORTADA ==============
doc.addPage();
pageNum += 1;
drawBackground(COLORS.negro);

doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(12)
  .text('LADY JARANA', MARGIN, 90, { characterSpacing: 4 });

doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(42)
  .text('¿Te encajan', MARGIN, 140);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(42)
  .text('estas canciones', MARGIN, 188);
doc
  .fillColor(COLORS.sol)
  .font('Helvetica-BoldOblique')
  .fontSize(42)
  .text('para tu fiesta?', MARGIN, 236);

doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(13)
  .text(
    'Cuéntanos fecha y sitio y te decimos en minutos si estamos disponibles,\nqué formato encaja y a qué precio. Sin formularios, WhatsApp directo.',
    MARGIN,
    310,
    { lineGap: 4 },
  );

// Caja de contacto
const ctaY = 400;
doc.save();
doc.lineWidth(3).strokeColor(COLORS.sol);
doc.roundedRect(MARGIN, ctaY, PAGE.width - MARGIN * 2, 180, 12).stroke();
doc.restore();

doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('BOOKING DIRECTO', MARGIN + 20, ctaY + 22, { characterSpacing: 3 });
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-Bold')
  .fontSize(22)
  .text('WhatsApp  ·  +34 627 281 459', MARGIN + 20, ctaY + 42);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(12)
  .text('ladyjaranamusic@gmail.com', MARGIN + 20, ctaY + 78);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(11)
  .text('Instagram  @lady.jarana', MARGIN + 20, ctaY + 100);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(11)
  .text('TikTok  @LadyJaranaOficial', MARGIN + 20, ctaY + 118);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(11)
  .text('YouTube  @ladyjarana', MARGIN + 20, ctaY + 136);

// Spotify
doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('PLAYLIST OFICIAL', MARGIN, 620, { characterSpacing: 3 });
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(10)
  .text(SPOTIFY_PLAYLIST_URL, MARGIN, 638, { link: SPOTIFY_PLAYLIST_URL });

// Pie
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-Bold')
  .fontSize(9)
  .text('LADYJARANA.COM', MARGIN, PAGE.height - 60, { characterSpacing: 3 });
doc
  .fillColor(COLORS.gris)
  .font('Helvetica-Oblique')
  .fontSize(8)
  .text(
    'Lady Jarana es un proyecto de 94 Music · Barcelona',
    MARGIN,
    PAGE.height - 45,
  );

doc.end();

await new Promise((res) => doc.on('end', res));
const stat = fs.statSync(outPath);
console.log(
  `\n✅ Generado ${path.relative(ROOT, outPath)} — ${(stat.size / 1024).toFixed(1)} KB · ${pageNum} páginas\n`,
);
