/**
 * build-docs-navigation.js
 *
 * Recorre la carpeta de archivos Markdown de documentación, construye un árbol
 * de navegación jerárquico basado en carpetas y archivos, y genera el archivo
 * src/assets/navigation/sidebar.json con labels visibles, slugs técnicos y,
 * para los documentos, el pageTitle real extraído del markdown o frontmatter.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT_DIR = path.resolve(__dirname, '..');
const MD_DIR = path.resolve(__dirname, './archivos-markdown');
const OUT_FILE = path.resolve(ROOT_DIR, './src/assets/navigation/sidebar.json');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } else {
    // No hacer nada
  }
}

function stripAccents(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function slugifySegment(text) {
  return stripAccents(String(text || ''))
    .toLowerCase()
    .replace(/&/g, ' y ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function humanizeLabel(text) {
  const baseText = String(text || '')
    .replace(/\.md$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!baseText) {
    return 'Sin título';
  } else {
    return baseText;
  }
}

function getEntryOrderPriority(entry) {
  const name = String(entry.name || '')
    .replace(/\.md$/i, '')
    .trim()
    .toLowerCase();

  const priorityMap = {
    novedades: 0
  };

  if (name in priorityMap) {
    return priorityMap[name];
  } else {
    return 999;
  }
}

function sortEntries(entries) {
  return [...entries].sort((a, b) => {
    const aIsDir = a.isDirectory() ? 0 : 1;
    const bIsDir = b.isDirectory() ? 0 : 1;

    if (aIsDir !== bIsDir) {
      return aIsDir - bIsDir;
    } else {
      const aPriority = getEntryOrderPriority(a);
      const bPriority = getEntryOrderPriority(b);

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      } else {
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
      }
    }
  });
}

function extractFirstHeading(content) {
  const match = String(content || '').match(/^#\s+(.+)$/m);

  if (match) {
    return match[1].trim();
  } else {
    return '';
  }
}

function buildTitleFromSlugSegment(text) {
  const value = String(text || '').trim();

  if (!value) {
    return 'Sin título';
  } else {
    return value
      .split(/[-_]/g)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}

function getPageTitleFromMarkdown(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(raw);
    const frontmatterTitle = parsed?.data?.title;
    const headingTitle = extractFirstHeading(parsed?.content || '');

    if (frontmatterTitle && String(frontmatterTitle).trim()) {
      return String(frontmatterTitle).trim();
    } else {
      if (headingTitle) {
        return headingTitle;
      } else {
        const fileBaseName = path.basename(filePath, '.md');
        return buildTitleFromSlugSegment(fileBaseName);
      }
    }
  } catch (error) {
    const fileBaseName = path.basename(filePath, '.md');
    return buildTitleFromSlugSegment(fileBaseName);
  }
}

function buildTreeFromDirectory(dirPath, parentSlug = '') {
  const entries = sortEntries(
    fs.readdirSync(dirPath, { withFileTypes: true }).filter((entry) => {
      if (entry.name.startsWith('.')) {
        return false;
      } else {
        return true;
      }
    })
  );

  const children = [];

  entries.forEach((entry) => {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const folderSlugSegment = slugifySegment(entry.name);
      const folderSlug = parentSlug
        ? `${parentSlug}/${folderSlugSegment}`
        : folderSlugSegment;

      const folderChildren = buildTreeFromDirectory(entryPath, folderSlug);

      children.push({
        type: 'folder',
        label: humanizeLabel(entry.name),
        slug: folderSlug,
        children: folderChildren
      });
    } else {
      if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        const fileBaseName = entry.name.replace(/\.md$/i, '');
        const fileSlugSegment = slugifySegment(fileBaseName);
        const fileSlug = parentSlug
          ? `${parentSlug}/${fileSlugSegment}`
          : fileSlugSegment;

        children.push({
          type: 'file',
          label: humanizeLabel(fileBaseName),
          pageTitle: getPageTitleFromMarkdown(entryPath),
          slug: fileSlug
        });
      } else {
        // No hacer nada
      }
    }
  });

  return children;
}

function removeEmptyFolders(nodes) {
  return nodes
    .map((node) => {
      if (node.type === 'folder') {
        const cleanedChildren = removeEmptyFolders(node.children || []);

        return {
          ...node,
          children: cleanedChildren
        };
      } else {
        return node;
      }
    })
    .filter((node) => {
      if (node.type === 'folder') {
        return Array.isArray(node.children) && node.children.length > 0;
      } else {
        return true;
      }
    });
}

function writeSidebarJson(sidebarTree) {
  const outDir = path.dirname(OUT_FILE);
  ensureDir(outDir);
  fs.writeFileSync(OUT_FILE, JSON.stringify(sidebarTree, null, 2), 'utf8');
}

function main() {
  console.log('--------------------------------------------------');
  console.log('Generando navegación de documentación...');
  console.log(`Markdown source: ${MD_DIR}`);
  console.log(`Output target  : ${OUT_FILE}`);
  console.log('--------------------------------------------------');

  if (!fs.existsSync(MD_DIR)) {
    console.error(`No existe la carpeta de origen: ${MD_DIR}`);
    process.exit(1);
  } else {
    const sidebarTree = buildTreeFromDirectory(MD_DIR, '');
    const cleanedSidebarTree = removeEmptyFolders(sidebarTree);

    writeSidebarJson(cleanedSidebarTree);

    console.log('OK  sidebar.json generado correctamente');
    console.log('--------------------------------------------------');
    console.log('Proceso finalizado.');
    console.log('--------------------------------------------------');
  }
}

main();
