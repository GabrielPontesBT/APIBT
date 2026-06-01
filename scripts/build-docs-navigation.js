/**
 * build-docs-navigation.js
 *
 * Para cada versión definida en VERSIONS, hace merge de shared/ + carpeta de
 * versión (la versión tiene precedencia sobre shared) y genera un archivo
 * sidebar-{id}.json en src/assets/navigation/.
 *
 * BPay no usa shared/ y genera su propio sidebar.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT_DIR      = path.resolve(__dirname, '..');
const SHARED_DIR    = path.resolve(__dirname, './shared');
const NAV_OUT_DIR   = path.resolve(ROOT_DIR, './src/assets/navigation');
const RELEASES_DIR  = path.resolve(ROOT_DIR, './src/assets/releases');

const VERSIONS = [
  { id: 'v2r2', folder: 'V2R2', useShared: true },
  { id: 'v2r3', folder: 'V2R3', useShared: true },
  { id: 'v3r1', folder: 'V3R1', useShared: true },
  { id: 'bpay', folder: 'BPay', useShared: false },
  { id: 'g4',   folder: 'G4',   useShared: false, labelMap: loadLabelMap('g4-labels.json') },
];

function loadLabelMap(fileName) {
  const filePath = path.resolve(__dirname, fileName);
  if (!fs.existsSync(filePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    console.warn(`  WARN: no se pudo leer el archivo de labels: ${fileName}`);
    return {};
  }
}

// ── Utilidades ────────────────────────────────────────────────────────────────

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function stripAccents(text) {
  return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function slugifySegment(text) {
  return stripAccents(String(text || ''))
    .toLowerCase()
    .replace(/&/g, ' y ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function humanizeLabel(text) {
  return String(text || '')
    .replace(/\.md$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() || 'Sin título';
}

function getEntryOrderPriority(name) {
  const normalized = String(name || '').replace(/\.md$/i, '').trim().toLowerCase();
  return normalized === 'novedades' ? 0 : 999;
}

function extractFirstHeading(content) {
  const match = String(content || '').match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function buildTitleFromSlugSegment(text) {
  return String(text || '').trim()
    .split(/[-_]/g)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || 'Sin título';
}

function getPageTitleFromMarkdown(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);
    const frontmatterTitle = parsed?.data?.title;
    if (frontmatterTitle && String(frontmatterTitle).trim()) {
      return String(frontmatterTitle).trim();
    }
    const heading = extractFirstHeading(parsed?.content || '');
    if (heading) return heading;
    return buildTitleFromSlugSegment(path.basename(filePath, '.md'));
  } catch {
    return buildTitleFromSlugSegment(path.basename(filePath, '.md'));
  }
}

// ── Merge de archivos ─────────────────────────────────────────────────────────

/**
 * Devuelve un Map de { relPath → absolutePath } con todos los archivos .md
 * que conforman esta versión. Los archivos de versionDir sobreescriben sharedDir.
 * La deduplicación se hace por slug normalizado para que archivos con el mismo
 * nombre pero distinto acento (ej: ObtenerPrestamos vs ObtenerPréstamos) no
 * generen entradas duplicadas en la navegación.
 */
function buildMergedFileMap(versionDir, useShared) {
  const slugMap = new Map(); // slugKey → { relPath, absPath }

  function walk(dir, baseDir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      if (entry.name.toLowerCase() === 'readme.md') continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath, baseDir);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        const slugKey = relPath.split('/').map(seg =>
          slugifySegment(seg.replace(/\.md$/i, ''))
        ).join('/');
        slugMap.set(slugKey, { relPath, absPath: fullPath });
      }
    }
  }

  if (useShared) walk(SHARED_DIR, SHARED_DIR);
  walk(versionDir, versionDir); // versión sobreescribe shared (por slug, no por relPath)

  const fileMap = new Map();
  for (const [, { relPath, absPath }] of slugMap) {
    fileMap.set(relPath, absPath);
  }
  return fileMap;
}

// ── Construcción del árbol ────────────────────────────────────────────────────

/**
 * Construye el árbol de navegación a partir de un Map de relPath → absolutePath.
 * Recrea la jerarquía de carpetas implícita en los paths relativos.
 */
function buildTreeFromFileMap(fileMap, labelMap = {}) {
  // Agrupar por carpeta raíz de forma recursiva usando un árbol intermedio
  const root = {}; // árbol de nodos intermedios

  for (const [relPath, absPath] of fileMap.entries()) {
    const parts = relPath.split('/');
    let node = root;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!node[part]) node[part] = { __isDir: true, __children: {}, __name: part };
      node = node[part].__children;
    }
    const fileName = parts[parts.length - 1];
    node[fileName] = { __isDir: false, __name: fileName, __absPath: absPath, __relPath: relPath };
  }

  return convertToNavNodes(root, '', labelMap);
}

function sortNodeEntries(entries) {
  return [...entries].sort(([, a], [, b]) => {
    const aIsDir = a.__isDir ? 0 : 1;
    const bIsDir = b.__isDir ? 0 : 1;
    if (aIsDir !== bIsDir) return aIsDir - bIsDir;
    const aPrio = getEntryOrderPriority(a.__name);
    const bPrio = getEntryOrderPriority(b.__name);
    if (aPrio !== bPrio) return aPrio - bPrio;
    return a.__name.localeCompare(b.__name, 'es', { sensitivity: 'base' });
  });
}

function convertToNavNodes(nodeMap, parentSlug, labelMap = {}) {
  const children = [];
  const sorted = sortNodeEntries(Object.entries(nodeMap));

  for (const [, node] of sorted) {
    if (node.__isDir) {
      const folderSlugSegment = slugifySegment(node.__name);
      const folderSlug = parentSlug ? `${parentSlug}/${folderSlugSegment}` : folderSlugSegment;
      const folderChildren = convertToNavNodes(node.__children, folderSlug, labelMap);
      children.push({
        type: 'folder',
        label: labelMap[node.__name] ?? humanizeLabel(node.__name),
        slug: folderSlug,
        children: folderChildren,
      });
    } else {
      const fileBaseName = node.__name.replace(/\.md$/i, '');
      const fileSlugSegment = slugifySegment(fileBaseName);
      const fileSlug = parentSlug ? `${parentSlug}/${fileSlugSegment}` : fileSlugSegment;
      const pageTitle = getPageTitleFromMarkdown(node.__absPath);
      children.push({
        type: 'file',
        label: pageTitle || humanizeLabel(fileBaseName),
        pageTitle,
        slug: fileSlug,
      });
    }
  }

  return children;
}

function removeEmptyFolders(nodes) {
  return nodes
    .map(node => {
      if (node.type === 'folder') {
        return { ...node, children: removeEmptyFolders(node.children || []) };
      }
      return node;
    })
    .filter(node => node.type !== 'folder' || node.children.length > 0);
}

// ── Marcado de "Nuevo" desde el último release ────────────────────────────────

function normalizeReleaseKey(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim();
}

/**
 * Lee el archivo de releases y el mapa pubname→slug de una versión y devuelve
 * un Set con los slugs (sin prefijo de versión) que pertenecen al último release.
 * El último bloque "Release X" del archivo es el más reciente (parseReleaseList lo invierte).
 */
function getLatestReleaseSlugs(versionId) {
  const releasesFile = path.join(RELEASES_DIR, `Releases-${versionId}.txt`);
  const slugsFile    = path.join(RELEASES_DIR, `pubname-slugs-${versionId}.json`);

  if (!fs.existsSync(releasesFile) || !fs.existsSync(slugsFile)) return new Set();

  // Leer el mapa pubname → path[]
  const pathEntries = JSON.parse(fs.readFileSync(slugsFile, 'utf8'));
  const pathMap = new Map(pathEntries.map(e => [e.key, e.path]));

  // Recolectar bloques de release; el último en el archivo es el más reciente
  const lines = fs.readFileSync(releasesFile, 'utf8').split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  let latestPubNames = [];
  let currentPubNames = [];

  for (const line of lines) {
    if (/^Release\s+/i.test(line)) {
      currentPubNames = [];
    } else {
      currentPubNames.push(line);
    }
    // Cada vez que encontramos un nuevo bloque, el anterior queda en currentPubNames.
    // Al terminar el loop, currentPubNames tiene el último bloque.
    latestPubNames = currentPubNames;
  }

  const slugs = new Set();
  for (const line of latestPubNames) {
    const key = normalizeReleaseKey(line);
    const slugPath = pathMap.get(key);
    if (slugPath && slugPath.length > 0) {
      slugs.add(slugPath.join('/'));
    }
  }

  return slugs;
}

/**
 * Recorre el árbol de nodos y marca con isNew:true los archivos cuyo slug
 * esté en newSlugs. Elimina isNew del resto para que el JSON quede limpio.
 */
function markNewNodes(nodes, newSlugs) {
  for (const node of nodes) {
    if (node.type === 'file') {
      if (newSlugs.has(node.slug)) {
        node.isNew = true;
      } else {
        delete node.isNew;
      }
    }
    if (Array.isArray(node.children) && node.children.length) {
      markNewNodes(node.children, newSlugs);
    }
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(50));
  console.log('Generando sidebars por versión...');
  console.log('='.repeat(50));

  ensureDir(NAV_OUT_DIR);

  for (const version of VERSIONS) {
    const versionDir = path.resolve(__dirname, version.folder);
    const outFile = path.join(NAV_OUT_DIR, `sidebar-${version.id}.json`);

    console.log(`\n[${version.id}] Procesando...`);

    if (!fs.existsSync(versionDir)) {
      console.warn(`  WARN: carpeta no encontrada: ${versionDir}`);
      continue;
    }

    const fileMap = buildMergedFileMap(versionDir, version.useShared);
    console.log(`  Archivos totales (shared + override): ${fileMap.size}`);

    const tree = buildTreeFromFileMap(fileMap, version.labelMap ?? {});
    const cleanTree = removeEmptyFolders(tree);

    // Marcar nodos del último release con isNew: true
    const newSlugs = getLatestReleaseSlugs(version.id);
    if (newSlugs.size > 0) {
      markNewNodes(cleanTree, newSlugs);
      console.log(`  Nuevo: ${newSlugs.size} slugs del último release marcados`);
    }

    fs.writeFileSync(outFile, JSON.stringify(cleanTree, null, 2), 'utf8');
    console.log(`  OK → ${path.relative(ROOT_DIR, outFile)}`);
  }

  console.log('\n' + '='.repeat(50));
  console.log('Sidebars generados correctamente.');
  console.log('='.repeat(50));
}

main();
