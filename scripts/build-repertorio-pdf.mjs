#!/usr/bin/env node
/**
 * Genera public/repertorio-lady-jarana.pdf a partir de src/data/repertorio.ts.
 * 3 hojas: portada, repertorio (2 columnas continuas), contraportada.
 * Uso: `npm run repertorio:pdf`
 */
import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ----- cargar data (TS -> JS al vuelo) -----
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
  grisClaro: '#A89B92',
};

const PAGE = { width: 595.28, height: 841.89 }; // A4 portrait pt
const MARGIN = 40;

const palmeraPath = path.join(ROOT, 'public/personajes/palmera-jaranera.png');
const palmeraExists = fs.existsSync(palmeraPath);

const outDir = path.join(ROOT, 'public');
const outPath = path.join(outDir, 'repertorio-lady-jarana.pdf');

const doc = new PDFDocument({
  size: 'A4',
  // Bottom margin a 0 para que pdfkit no auto-pagine cuando dibujamos en el
  // pie. Posicionamos a mano todos los textos, no usamos flow vertical.
  margins: { top: MARGIN, bottom: 0, left: MARGIN, right: MARGIN },
  info: {
    Title: 'Repertorio Lady Jarana',
    Author: 'Lady Jarana',
    Subject: 'Repertorio en directo — bodas, verbenas y fiestas',
    Keywords:
      'Lady Jarana, repertorio, banda, bodas, verbenas, pop-rock, rumba, latineo',
  },
});

doc.pipe(fs.createWriteStream(outPath));

function drawBackground(color) {
  doc.save();
  doc.rect(0, 0, PAGE.width, PAGE.height).fill(color);
  doc.restore();
}

// ============== PÁGINA 1 · PORTADA ==============
drawBackground(COLORS.rojo);

// Banda diagonal de sol
doc.save();
doc.rotate(-7, { origin: [PAGE.width / 2, 230] });
doc.rect(-100, 195, PAGE.width + 200, 95).fill(COLORS.sol);
doc.restore();

// Palmera bottom-right (sin pisar el texto)
if (palmeraExists) {
  doc.image(palmeraPath, PAGE.width - 240, 470, { width: 230 });
}

doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(12)
  .text('LADY JARANA', MARGIN, 80, { characterSpacing: 4 });

doc
  .fillColor(COLORS.crema)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('PRESS KIT · REPERTORIO EN DIRECTO', MARGIN, 98, {
    characterSpacing: 2,
  });

// Título grande dentro de la banda diagonal
doc.save();
doc.rotate(-7, { origin: [PAGE.width / 2, 230] });
doc
  .fillColor(COLORS.negro)
  .font('Helvetica-BoldOblique')
  .fontSize(50)
  .text('EL REPERTORIO', MARGIN, 213, { width: PAGE.width - MARGIN * 2 });
doc.restore();

// Slogan
const sloganLines = [
  { color: COLORS.crema, text: `${TOTAL_CANCIONES} canciones,` },
  { color: COLORS.sol, text: 'una intención:' },
  { color: COLORS.crema, text: 'que no pares' },
  { color: COLORS.crema, text: 'de bailar.' },
];
sloganLines.forEach((l, i) => {
  doc
    .fillColor(l.color)
    .font('Helvetica-BoldOblique')
    .fontSize(46)
    .text(l.text, MARGIN, 320 + i * 52);
});

doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(11)
  .text(
    'Pop-rock español, rumba catalana, latineo de verbena y los himnos\nque cantan hasta los suegros. Esto es lo que sonará en tu boda,\nverbena o fiesta de empresa.',
    MARGIN,
    560,
    { width: 330, lineGap: 4 },
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
statBox(MARGIN + 145, String(REPERTORIO.length), 'bloques');
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

// ============== PÁGINA 2 · REPERTORIO (2 columnas continuas) ==============
doc.addPage();
drawBackground(COLORS.crema);

// Banda superior
doc.save();
doc.rect(0, 0, PAGE.width, 50).fill(COLORS.negro);
doc.restore();
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('LADY JARANA · REPERTORIO', MARGIN, 19, { characterSpacing: 3 });
doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('ladyjarana.com', PAGE.width - MARGIN - 100, 19, {
    width: 100,
    align: 'right',
    characterSpacing: 1.5,
  });

// Título de la página
doc
  .fillColor(COLORS.negro)
  .font('Helvetica-BoldOblique')
  .fontSize(34)
  .text('El show, canción a canción', MARGIN, 72, {
    width: PAGE.width - MARGIN * 2,
  });
doc
  .fillColor(COLORS.gris)
  .font('Helvetica-Oblique')
  .fontSize(10.5)
  .text(
    'Cuatro bloques que se enlazan en directo. Sin pausas de "vamos a beber agua". El orden y la duración los adaptamos a tu fiesta.',
    MARGIN,
    115,
    { width: PAGE.width - MARGIN * 2, lineGap: 2 },
  );

// Distribución 2 columnas:
//   Col 1 (izquierda): Bloque 1 (Pop-rock, 16 canciones)
//   Col 2 (derecha): Bloques 2, 3, 4 (rumba + latineo + verbeneras)
const colGap = 28;
const colWidth = (PAGE.width - MARGIN * 2 - colGap) / 2;
const colX = [MARGIN, MARGIN + colWidth + colGap];
const contentTop = 158;

function drawBlockHeader(x, y, idx, bloque) {
  // Número grande rojo
  doc
    .fillColor(COLORS.rojo)
    .font('Helvetica-BoldOblique')
    .fontSize(28)
    .text(String(idx + 1).padStart(2, '0'), x, y - 4, { width: 34 });
  // Título
  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-Bold')
    .fontSize(12)
    .text(bloque.titulo, x + 38, y + 1, {
      width: colWidth - 38 - 38,
    });
  // Contador derecha
  doc.save();
  doc.lineWidth(1.5).strokeColor(COLORS.negro);
  doc
    .roundedRect(x + colWidth - 36, y, 36, 18, 9)
    .fillAndStroke(COLORS.sol, COLORS.negro);
  doc.restore();
  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text(String(bloque.canciones.length), x + colWidth - 36, y + 5, {
      width: 36,
      align: 'center',
    });
  // Línea bajo el bloque
  doc
    .strokeColor(COLORS.negro)
    .lineWidth(1.2)
    .moveTo(x, y + 28)
    .lineTo(x + colWidth, y + 28)
    .stroke();
}

function drawSong(x, y, num, cancion) {
  // Número
  doc
    .fillColor(COLORS.rojo)
    .font('Helvetica-Bold')
    .fontSize(9)
    .text(String(num).padStart(2, '0'), x, y + 1, { width: 20 });

  // Título
  doc
    .fillColor(COLORS.negro)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text(cancion.titulo, x + 22, y, {
      width: colWidth - 22,
      lineBreak: false,
      ellipsis: true,
    });

  // Artista (+ medley si aplica)
  if (cancion.artista) {
    let sub = cancion.artista;
    if (cancion.medley) sub += `  ·  medley con ${cancion.medley}`;
    doc
      .fillColor(COLORS.gris)
      .font('Helvetica-Oblique')
      .fontSize(8)
      .text(sub, x + 22, y + 12, {
        width: colWidth - 22,
        lineBreak: false,
        ellipsis: true,
      });
  }
}

const BLOCK_HEADER_H = 38;
const SONG_ROW_H = 24;
const BLOCK_GAP = 8; // separación extra entre bloques en una misma columna

function renderColumn(colIdx, bloques) {
  let y = contentTop;
  bloques.forEach((bloque, i) => {
    const baseIdx = REPERTORIO.indexOf(bloque);
    drawBlockHeader(colX[colIdx], y, baseIdx, bloque);
    y += BLOCK_HEADER_H;
    bloque.canciones.forEach((cancion, j) => {
      drawSong(colX[colIdx], y, j + 1, cancion);
      y += SONG_ROW_H;
    });
    if (i < bloques.length - 1) y += BLOCK_GAP;
  });
}

renderColumn(0, [REPERTORIO[0]]);
renderColumn(1, [REPERTORIO[1], REPERTORIO[2], REPERTORIO[3]]);

// Footer página 2
doc
  .strokeColor(COLORS.cremaOscuro)
  .lineWidth(1)
  .moveTo(MARGIN, PAGE.height - 50)
  .lineTo(PAGE.width - MARGIN, PAGE.height - 50)
  .stroke();
doc
  .fillColor(COLORS.gris)
  .font('Helvetica')
  .fontSize(8)
  .text(
    `Repertorio Lady Jarana · ${TOTAL_CANCIONES} temas · pídenos versión a medida por WhatsApp`,
    MARGIN,
    PAGE.height - 38,
    { width: PAGE.width - MARGIN * 2, align: 'center' },
  );
const footerText =
  'ESCÚCHALO ENTERO EN SPOTIFY · ' +
  SPOTIFY_PLAYLIST_URL.replace('https://', '');
const footerY = PAGE.height - 24;
doc
  .fillColor(COLORS.rojo)
  .font('Helvetica-Bold')
  .fontSize(8)
  .text(footerText, MARGIN, footerY, {
    width: PAGE.width - MARGIN * 2,
    align: 'center',
    characterSpacing: 1,
    link: SPOTIFY_PLAYLIST_URL,
    underline: true,
  });
// Anotación explícita para máxima compat. móvil
doc.link(MARGIN, footerY - 2, PAGE.width - MARGIN * 2, 12, SPOTIFY_PLAYLIST_URL);

// ============== PÁGINA 3 · CONTRAPORTADA ==============
doc.addPage();
drawBackground(COLORS.negro);

doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(12)
  .text('LADY JARANA', MARGIN, 80, { characterSpacing: 4 });

doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(40)
  .text('¿Te encajan', MARGIN, 130);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica-BoldOblique')
  .fontSize(40)
  .text('estas canciones', MARGIN, 176);
doc
  .fillColor(COLORS.sol)
  .font('Helvetica-BoldOblique')
  .fontSize(40)
  .text('para tu fiesta?', MARGIN, 222);

doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(13)
  .text(
    'Cuéntanos fecha y sitio y te decimos en minutos si estamos disponibles,\nqué formato encaja y a qué precio. Sin formularios, WhatsApp directo.',
    MARGIN,
    300,
    { lineGap: 4 },
  );

// Caja de contacto
const ctaY = 400;
doc.save();
doc.lineWidth(3).strokeColor(COLORS.sol);
doc.roundedRect(MARGIN, ctaY, PAGE.width - MARGIN * 2, 200, 12).stroke();
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
  .text('ladyjaranamusic@gmail.com', MARGIN + 20, ctaY + 82);
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(11)
  .text('Instagram  @lady.jarana', MARGIN + 20, ctaY + 105, {
    link: 'https://instagram.com/lady.jarana',
  });

doc
  .fillColor(COLORS.sol)
  .font('Helvetica-Bold')
  .fontSize(10)
  .text('PLAYLIST OFICIAL EN SPOTIFY', MARGIN, 650, { characterSpacing: 3 });

// Texto del link visible
const spotifyX = MARGIN;
const spotifyY = 668;
const spotifyW = 380;
const spotifyH = 14;
doc
  .fillColor(COLORS.crema)
  .font('Helvetica')
  .fontSize(10)
  .text(SPOTIFY_PLAYLIST_URL, spotifyX, spotifyY, {
    link: SPOTIFY_PLAYLIST_URL,
    underline: true,
  });
// Anotación explícita por encima del texto para que los visores móviles
// (Apple Books, Drive, etc) la reconozcan sí o sí.
doc.link(spotifyX, spotifyY - 2, spotifyW, spotifyH, SPOTIFY_PLAYLIST_URL);

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
  `\n✅ Generado ${path.relative(ROOT, outPath)} — ${(stat.size / 1024).toFixed(1)} KB\n`,
);
