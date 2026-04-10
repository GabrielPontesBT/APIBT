/**
 * build-docs-search.js
 *
 * Recorre los archivos JSON generados de la documentación, extrae los campos
 * más relevantes para búsqueda y genera un índice liviano en
 * src/assets/docs/search-index.json para que el buscador del frontend pueda
 * encontrar páginas sin tener que cargar cada documento completo.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.resolve(ROOT_DIR, './src/assets/docs/content');
const OUT_FILE = path.resolve(ROOT_DIR, './src/assets/docs/search-index.json');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } else {
    // No hacer nada
  }
}

function walkJsonFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  } else {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    return entries.flatMap((entry) => {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        return walkJsonFiles(fullPath);
      } else {
        if (entry.isFile() && entry.name.toLowerCase().endsWith('.json')) {
          return [fullPath];
        } else {
          return [];
        }
      }
    });
  }
}

function normalizeWhitespace(text) {
  return String(text || '')
    .replace(/\r\n/g, '\n')
    .replace(/\t/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function uniqueStrings(values) {
  return [...new Set(values.filter((value) => !!String(value || '').trim()))];
}

function safeReadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

function collectTableText(rows) {
  if (!Array.isArray(rows)) {
    return [];
  } else {
    return rows.flatMap((row) => {
      if (!row || typeof row !== 'object') {
        return [];
      } else {
        return Object.values(row).map((value) => normalizeWhitespace(value));
      }
    });
  }
}

function collectStructuredTypesText(structuredTypes) {
  if (!Array.isArray(structuredTypes)) {
    return [];
  } else {
    return structuredTypes.flatMap((item) => {
      const parts = [];

      if (item && typeof item === 'object') {
        if (item.typeName) {
          parts.push(normalizeWhitespace(item.typeName));
        } else {
          // No hacer nada
        }

        if (Array.isArray(item.fields)) {
          parts.push(...collectTableText(item.fields));
        } else {
          // No hacer nada
        }
      } else {
        // No hacer nada
      }

      return parts;
    });
  }
}

function collectValuesTableText(valuesTable) {
  if (!Array.isArray(valuesTable)) {
    return [];
  } else {
    return valuesTable.flatMap((item) => {
      const parts = [];

      if (item && typeof item === 'object') {
        if (item.elementValName) {
          parts.push(normalizeWhitespace(item.elementValName));
        } else {
          // No hacer nada
        }

        if (item.description) {
          parts.push(normalizeWhitespace(item.description));
        } else {
          // No hacer nada
        }

        if (Array.isArray(item.listHeader)) {
          parts.push(...item.listHeader.map((header) => normalizeWhitespace(header)));
        } else {
          // No hacer nada
        }

        if (Array.isArray(item.fields)) {
          parts.push(...collectTableText(item.fields));
        } else {
          // No hacer nada
        }
      } else {
        // No hacer nada
      }

      return parts;
    });
  }
}

function buildSearchableText(doc) {
  // Incluye segmentos del slug para que términos como "crear" o "contratar"
  // (que solo aparecen como nombres de carpeta) sean buscables
  const slugSegments = String(doc.slug || '')
    .split('/')
    .map(s => s.replace(/-/g, ' '));

  const parts = [
    normalizeWhitespace(doc.slug),
    ...slugSegments,
    normalizeWhitespace(doc.pageTitle),
    normalizeWhitespace(doc.description),
    normalizeWhitespace(doc.pubName),
    normalizeWhitespace(doc.programa),
    normalizeWhitespace(doc.scope),
    normalizeWhitespace(doc.backendText),
    ...collectTableText(doc.inputData),
    ...collectTableText(doc.outputData),
    ...collectTableText(doc.errors),
    ...collectStructuredTypesText(doc.structuredTypes),
    ...collectValuesTableText(doc.valuesTable)
  ];

  return uniqueStrings(parts).join(' ').trim();
}

function buildKeywords(doc) {
  const rawKeywords = [
    doc.pageTitle,
    doc.pubName,
    doc.programa,
    doc.scope
  ];

  return uniqueStrings(rawKeywords.map((value) => normalizeWhitespace(value)));
}

function extractVersion(filePath) {
  const relative = path.relative(CONTENT_DIR, filePath).replace(/\\/g, '/');
  return relative.split('/')[0] || '';
}

function buildSearchEntry(doc, filePath) {
  const searchableText = buildSearchableText(doc);
  const relativeFilePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');

  return {
    slug: normalizeWhitespace(doc.slug),
    pageTitle: normalizeWhitespace(doc.pageTitle),
    description: normalizeWhitespace(doc.description),
    pubName: normalizeWhitespace(doc.pubName),
    programa: normalizeWhitespace(doc.programa),
    scope: normalizeWhitespace(doc.scope),
    keywords: buildKeywords(doc),
    searchableText,
    version: extractVersion(filePath),
    sourceFile: relativeFilePath
  };
}

function isValidDoc(doc) {
  if (!doc || typeof doc !== 'object') {
    return false;
  } else {
    if (typeof doc.slug !== 'string' || !doc.slug.trim()) {
      return false;
    } else {
      if (typeof doc.pageTitle !== 'string' || !doc.pageTitle.trim()) {
        return false;
      } else {
        return true;
      }
    }
  }
}

function writeSearchIndex(searchIndex) {
  const outDir = path.dirname(OUT_FILE);
  ensureDir(outDir);
  fs.writeFileSync(OUT_FILE, JSON.stringify(searchIndex, null, 2), 'utf8');
}

function main() {
  console.log('--------------------------------------------------');
  console.log('Generando índice de búsqueda de documentación...');
  console.log(`Content source : ${CONTENT_DIR}`);
  console.log(`Output target  : ${OUT_FILE}`);
  console.log('--------------------------------------------------');

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`No existe la carpeta de contenido: ${CONTENT_DIR}`);
    process.exit(1);
  } else {
    const jsonFiles = walkJsonFiles(CONTENT_DIR);
    const searchIndex = [];
    let skippedFiles = 0;

    jsonFiles.forEach((filePath) => {
      const doc = safeReadJson(filePath);

      if (!isValidDoc(doc)) {
        skippedFiles += 1;
        console.warn(`SKIP ${filePath} -> JSON inválido o incompleto`);
      } else {
        const entry = buildSearchEntry(doc, filePath);
        searchIndex.push(entry);
        console.log(`OK  ${entry.slug}`);
      }
    });

    searchIndex.sort((a, b) => {
      return a.pageTitle.localeCompare(b.pageTitle, 'es', { sensitivity: 'base' });
    });

    writeSearchIndex(searchIndex);

    console.log('--------------------------------------------------');
    console.log(`Documentos indexados : ${searchIndex.length}`);
    console.log(`Documentos omitidos  : ${skippedFiles}`);
    console.log('Proceso finalizado.');
    console.log('--------------------------------------------------');
  }
}

main();
