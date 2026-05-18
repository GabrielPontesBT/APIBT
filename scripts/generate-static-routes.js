/**
 * generate-static-routes.js
 *
 * Después de `ng build`, copia dist/api-docs/index.html a cada ruta de
 * documento (/{version}/{slug}/index.html) para que el servidor pueda
 * servir cada URL directamente sin depender de un fallback a index.html.
 */

const fs   = require('fs');
const path = require('path');

const DIST_DIR  = path.resolve(__dirname, '../dist/api-docs');
const NAV_DIR   = path.join(DIST_DIR, 'assets/navigation');
const INDEX_SRC = path.join(DIST_DIR, 'index.html');

const VERSIONS = ['v2r2', 'v2r3', 'v3r1', 'bpay', 'v4'];

// ── Utilidades ────────────────────────────────────────────────────────────────

function collectFileSlugs(nodes, acc = []) {
  for (const node of nodes) {
    if (node.type === 'file' && node.slug) acc.push(node.slug);
    if (node.children?.length) collectFileSlugs(node.children, acc);
  }
  return acc;
}

function writeHtmlAt(routePath) {
  const fullPath = path.join(DIST_DIR, routePath + '.html');
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.copyFileSync(INDEX_SRC, fullPath);
}

// ── Main ──────────────────────────────────────────────────────────────────────

if (!fs.existsSync(INDEX_SRC)) {
  console.error('ERROR: No se encontró dist/api-docs/index.html. Ejecutá ng build primero.');
  process.exit(1);
}

console.log('='.repeat(50));
console.log('Generando rutas estáticas...');
console.log('='.repeat(50));

let total = 0;

for (const version of VERSIONS) {
  const sidebarPath = path.join(NAV_DIR, `sidebar-${version}.json`);
  if (!fs.existsSync(sidebarPath)) {
    console.warn(`  WARN: No encontrado sidebar-${version}.json, se omite.`);
    continue;
  }

  const nodes = JSON.parse(fs.readFileSync(sidebarPath, 'utf8'));
  const slugs = collectFileSlugs(nodes);

  for (const slug of slugs) {
    writeHtmlAt(`${version}/${slug}`);
    total++;
  }

  console.log(`  [${version}] ${slugs.length} rutas generadas`);
}

console.log('='.repeat(50));
console.log(`Total: ${total} archivos HTML generados.`);
console.log('='.repeat(50));
