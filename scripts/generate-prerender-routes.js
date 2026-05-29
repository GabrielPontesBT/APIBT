/**
 * generate-prerender-routes.js
 *
 * Lee los sidebar JSON de cada versión y genera prerender-routes.txt
 * con una ruta por línea para que Angular la use durante el build.
 */

const fs   = require('fs');
const path = require('path');

const NAV_DIR    = path.resolve(__dirname, '../src/assets/navigation');
const OUT_FILE   = path.resolve(__dirname, '../prerender-routes.txt');
const VERSIONS   = ['v2r2', 'v2r3', 'v3r1', 'bpay', 'g4'];

function collectFileSlugs(nodes, acc = []) {
  for (const node of nodes) {
    if (node.type === 'file' && node.slug) acc.push(node.slug);
    if (node.children?.length) collectFileSlugs(node.children, acc);
  }
  return acc;
}

const routes = ['/'];

for (const version of VERSIONS) {
  const sidebarPath = path.join(NAV_DIR, `sidebar-${version}.json`);
  if (!fs.existsSync(sidebarPath)) {
    console.warn(`  WARN: No encontrado sidebar-${version}.json, se omite.`);
    continue;
  }

  const nodes = JSON.parse(fs.readFileSync(sidebarPath, 'utf8'));
  const slugs = collectFileSlugs(nodes);

  for (const slug of slugs) {
    routes.push(`/${version}/${slug}`);
  }

  console.log(`  [${version}] ${slugs.length} rutas`);
}

fs.writeFileSync(OUT_FILE, routes.join('\n'), 'utf8');
console.log(`\nprerender-routes.txt generado con ${routes.length} rutas.`);
