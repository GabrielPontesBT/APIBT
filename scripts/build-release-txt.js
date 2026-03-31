/**
 * build-release-txt.js
 *
 * Lee los archivos Excel de CATALOGO-SERVICIOS, parsea el nombre del archivo
 * para determinar a qué versiones aplica cada release, y genera:
 *   src/assets/releases/Releases-v2r2.txt
 *   src/assets/releases/Releases-v2r3.txt
 *   src/assets/releases/Releases-v3r1.txt
 *
 * Formato del nombre de archivo:
 *   V2R2 - Mayo 2025.xlsx              → solo v2r2
 *   V2R2_V2R3 - Noviembre 2021.xlsx    → v2r2 y v2r3
 *   V2R2_V2R3_V3R1 - Mayo 2022.xlsx   → v2r2, v2r3 y v3r1
 *   V3R1 - Noviembre 2025.xlsx         → solo v3r1
 *
 * Uso: node scripts/build-release-txt.js
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const CATALOGO_DIR = path.resolve('C:/Users/gpontes/Desktop/API/CATALOGO-SERVICIOS');
const OUT_DIR = path.resolve(__dirname, '../src/assets/releases');

const VERSION_IDS = ['v2r2', 'v2r3', 'v3r1'];

// ── Parseo de nombre de archivo ───────────────────────────────────────────────

/**
 * "V2R2_V2R3 - Mayo 2019.xlsx" → { versions: ['v2r2','v2r3'], titulo: 'Mayo 2019' }
 */
function parseFileName(fileName) {
  const base = path.basename(fileName, '.xlsx');
  const dashIdx = base.indexOf(' - ');
  if (dashIdx === -1) return null;

  const versionPart = base.slice(0, dashIdx).trim();   // "V2R2_V2R3"
  const tituloPart  = base.slice(dashIdx + 3).trim();  // "Mayo 2019"

  const versions = versionPart
    .split('_')
    .map(v => v.toLowerCase().trim())
    .filter(v => VERSION_IDS.includes(v));

  if (!versions.length || !tituloPart) return null;

  return { versions, titulo: tituloPart };
}

// ── Lectura del Excel ─────────────────────────────────────────────────────────

/**
 * Extrae los métodos del primer sheet del xlsx.
 * Formato nuevo: [null, Sistema, Subsistema, Servicio, Método]  → servicio=col3, método=col4
 * Formato viejo: [Sistema, Subsistema, Servicio, Método]         → servicio=col2, método=col3
 * Retorna array de strings "BTModulo.Metodo"
 */
function extractMethods(filePath) {
  const wb = XLSX.readFile(filePath);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  // Detectar formato: buscar la primera fila con datos
  const dataRows = rows.filter(row => row.some(c => c));
  const firstData = dataRows[0] || [];
  // Formato nuevo tiene null/vacío en col0; formato viejo tiene texto en col0
  const isNewFormat = !firstData[0];
  const colServicio = isNewFormat ? 3 : 2;
  const colMetodo   = isNewFormat ? 4 : 3;

  return rows
    .filter(row => row[colServicio] && row[colMetodo] && row[colServicio] !== 'Servicio')
    .map(row => `${String(row[colServicio]).trim()}.${String(row[colMetodo]).trim()}`);
}

// ── Ordenamiento cronológico ──────────────────────────────────────────────────

const MONTH_ORDER = {
  enero: 1, febrero: 2, marzo: 3, abril: 4,
  mayo: 5, junio: 6, julio: 7, agosto: 8,
  septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12
};

function scoreRelease(titulo) {
  const lower = titulo.toLowerCase();
  const [month = '', year = '0'] = lower.split(/\s+/);
  return Number(year) * 100 + (MONTH_ORDER[month] ?? 0);
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(50));
  console.log('build-release-txt.js');
  console.log(`Fuente: ${CATALOGO_DIR}`);
  console.log('='.repeat(50));

  if (!fs.existsSync(CATALOGO_DIR)) {
    console.error(`No se encontró la carpeta: ${CATALOGO_DIR}`);
    process.exit(1);
  }

  // { version → Map<titulo, string[]> }
  const releasesByVersion = {};
  for (const v of VERSION_IDS) {
    releasesByVersion[v] = new Map();
  }

  const xlsxFiles = fs.readdirSync(CATALOGO_DIR)
    .filter(f => f.endsWith('.xlsx'))
    .sort();

  console.log(`\nProcesando ${xlsxFiles.length} archivos Excel...\n`);

  for (const fileName of xlsxFiles) {
    const parsed = parseFileName(fileName);
    if (!parsed) {
      console.warn(`  SKIP: nombre no reconocido → ${fileName}`);
      continue;
    }

    const { versions, titulo } = parsed;
    const filePath = path.join(CATALOGO_DIR, fileName);

    let methods;
    try {
      methods = extractMethods(filePath);
    } catch (err) {
      console.error(`  ERROR leyendo ${fileName}: ${err.message}`);
      continue;
    }

    console.log(`  [${versions.join(',')}] ${titulo}: ${methods.length} métodos`);

    for (const v of versions) {
      if (!releasesByVersion[v].has(titulo)) {
        releasesByVersion[v].set(titulo, []);
      }
      // Agregar métodos evitando duplicados
      const existing = new Set(releasesByVersion[v].get(titulo));
      for (const m of methods) {
        existing.add(m);
      }
      releasesByVersion[v].set(titulo, [...existing]);
    }
  }

  // Escribir un .txt por versión, releases ordenados del más viejo al más reciente
  // (parseReleaseList los revierte al leerlos, quedando el más nuevo primero)
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const v of VERSION_IDS) {
    const releases = [...releasesByVersion[v].entries()]
      .sort((a, b) => scoreRelease(a[0]) - scoreRelease(b[0]));

    if (!releases.length) {
      console.warn(`\nWARN: no se encontraron releases para ${v}`);
      continue;
    }

    const lines = [];
    for (const [titulo, methods] of releases) {
      lines.push(`Release ${titulo}`);
      lines.push(...methods);
      lines.push('');
    }

    const outPath = path.join(OUT_DIR, `Releases-${v}.txt`);
    fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
    console.log(`\n  ✓ ${path.relative(process.cwd(), outPath)} (${releases.length} releases)`);
  }

  console.log('\n' + '='.repeat(50));
  console.log('Proceso finalizado.');
  console.log('='.repeat(50));
}

main();
