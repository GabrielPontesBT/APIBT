/**
 * validate-docs.js
 *
 * Valida la integridad básica de la documentación generada, verificando slugs
 * duplicados, archivos JSON faltantes, referencias inválidas en sidebar.json
 * y campos mínimos requeridos dentro de cada documento generado.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const MD_DIR = path.resolve(__dirname, './archivos-markdown');
const CONTENT_DIR = path.resolve(ROOT_DIR, './src/assets/docs/content');
const SIDEBAR_FILE = path.resolve(ROOT_DIR, './src/assets/navigation/sidebar.json');

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

function buildSlugFromFile(mdFilePath) {
  const relativePath = path.relative(MD_DIR, mdFilePath);
  const parts = relativePath.replace(/\.md$/i, '').split(path.sep);
  return parts.map((part) => slugifySegment(part)).join('/');
}

function walkFiles(dirPath, extensionFilter = null) {
  if (!fs.existsSync(dirPath)) {
    return [];
  } else {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    return entries.flatMap((entry) => {
      const entryPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        return walkFiles(entryPath, extensionFilter);
      } else {
        if (!extensionFilter) {
          return [entryPath];
        } else {
          if (entry.isFile() && entry.name.toLowerCase().endsWith(extensionFilter.toLowerCase())) {
            return [entryPath];
          } else {
            return [];
          }
        }
      }
    });
  }
}

function readJsonFile(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

function flattenSidebarNodes(nodes, result = []) {
  if (!Array.isArray(nodes)) {
    return result;
  } else {
    nodes.forEach((node) => {
      result.push(node);

      if (Array.isArray(node.children) && node.children.length > 0) {
        flattenSidebarNodes(node.children, result);
      } else {
        // No hacer nada
      }
    });

    return result;
  }
}

function validateDuplicateSlugs(mdFiles) {
  const slugMap = new Map();
  const errors = [];

  mdFiles.forEach((filePath) => {
    const slug = buildSlugFromFile(filePath);

    if (!slugMap.has(slug)) {
      slugMap.set(slug, [filePath]);
    } else {
      slugMap.get(slug).push(filePath);
    }
  });

  slugMap.forEach((paths, slug) => {
    if (paths.length > 1) {
      errors.push({
        type: 'DUPLICATE_SLUG',
        slug,
        files: paths
      });
    } else {
      // No hacer nada
    }
  });

  return errors;
}

function validateGeneratedJsonFiles(mdFiles) {
  const errors = [];

  mdFiles.forEach((mdFilePath) => {
    const slug = buildSlugFromFile(mdFilePath);
    const jsonPath = path.join(CONTENT_DIR, `${slug}.json`);

    if (!fs.existsSync(jsonPath)) {
      errors.push({
        type: 'MISSING_JSON',
        slug,
        mdFile: mdFilePath,
        expectedJson: jsonPath
      });
    } else {
      // No hacer nada
    }
  });

  return errors;
}

function validateJsonStructure(jsonFiles) {
  const errors = [];
  const requiredFields = [
    'slug',
    'pageTitle',
    'description',
    'pubName',
    'programa',
    'scope',
    'hasBackendConfig',
    'backendText',
    'inputData',
    'outputData',
    'errors',
    'examples',
    'structuredTypes',
    'valuesTable'
  ];

  jsonFiles.forEach((jsonPath) => {
    const doc = readJsonFile(jsonPath);

    if (!doc) {
      errors.push({
        type: 'INVALID_JSON',
        file: jsonPath
      });
      return;
    } else {
      // No hacer nada
    }

    requiredFields.forEach((fieldName) => {
      if (!(fieldName in doc)) {
        errors.push({
          type: 'MISSING_REQUIRED_FIELD',
          file: jsonPath,
          field: fieldName
        });
      } else {
        // No hacer nada
      }
    });

    if (typeof doc.slug !== 'string' || !doc.slug.trim()) {
      errors.push({
        type: 'INVALID_FIELD',
        file: jsonPath,
        field: 'slug',
        detail: 'Debe ser un string no vacío'
      });
    } else {
      // No hacer nada
    }

    if (typeof doc.pageTitle !== 'string' || !doc.pageTitle.trim()) {
      errors.push({
        type: 'INVALID_FIELD',
        file: jsonPath,
        field: 'pageTitle',
        detail: 'Debe ser un string no vacío'
      });
    } else {
      // No hacer nada
    }

    if (!doc.examples || typeof doc.examples !== 'object') {
      errors.push({
        type: 'INVALID_FIELD',
        file: jsonPath,
        field: 'examples',
        detail: 'Debe existir y ser un objeto'
      });
    } else {
      const hasInvocation = doc.examples.invocation && typeof doc.examples.invocation === 'object';
      const hasResponse = doc.examples.response && typeof doc.examples.response === 'object';

      if (!hasInvocation) {
        errors.push({
          type: 'INVALID_FIELD',
          file: jsonPath,
          field: 'examples.invocation',
          detail: 'Debe existir y ser un objeto'
        });
      } else {
        // No hacer nada
      }

      if (!hasResponse) {
        errors.push({
          type: 'INVALID_FIELD',
          file: jsonPath,
          field: 'examples.response',
          detail: 'Debe existir y ser un objeto'
        });
      } else {
        // No hacer nada
      }
    }

    ['inputData', 'outputData', 'errors', 'structuredTypes', 'valuesTable'].forEach((fieldName) => {
      if (!Array.isArray(doc[fieldName])) {
        errors.push({
          type: 'INVALID_FIELD',
          file: jsonPath,
          field: fieldName,
          detail: 'Debe ser un array'
        });
      } else {
        // No hacer nada
      }
    });
  });

  return errors;
}

function validateSidebarAgainstDocuments() {
  const errors = [];

  if (!fs.existsSync(SIDEBAR_FILE)) {
    errors.push({
      type: 'MISSING_SIDEBAR',
      file: SIDEBAR_FILE
    });
    return errors;
  } else {
    // No hacer nada
  }

  const sidebar = readJsonFile(SIDEBAR_FILE);

  if (!Array.isArray(sidebar)) {
    errors.push({
      type: 'INVALID_SIDEBAR',
      file: SIDEBAR_FILE,
      detail: 'El contenido debe ser un array'
    });
    return errors;
  } else {
    // No hacer nada
  }

  const flatNodes = flattenSidebarNodes(sidebar, []);

  flatNodes.forEach((node) => {
    if (!node || typeof node !== 'object') {
      errors.push({
        type: 'INVALID_SIDEBAR_NODE',
        detail: 'Nodo inválido en sidebar.json'
      });
      return;
    } else {
      // No hacer nada
    }

    if (!node.type || !['folder', 'file'].includes(node.type)) {
      errors.push({
        type: 'INVALID_SIDEBAR_NODE',
        slug: node.slug || '',
        detail: 'El nodo debe tener type = folder o file'
      });
    } else {
      // No hacer nada
    }

    if (typeof node.label !== 'string' || !node.label.trim()) {
      errors.push({
        type: 'INVALID_SIDEBAR_NODE',
        slug: node.slug || '',
        detail: 'El nodo debe tener label no vacío'
      });
    } else {
      // No hacer nada
    }

    if (typeof node.slug !== 'string' || !node.slug.trim()) {
      errors.push({
        type: 'INVALID_SIDEBAR_NODE',
        detail: 'El nodo debe tener slug no vacío'
      });
      return;
    } else {
      // No hacer nada
    }

    if (node.type === 'file') {
      const expectedJsonPath = path.join(CONTENT_DIR, `${node.slug}.json`);

      if (!fs.existsSync(expectedJsonPath)) {
        errors.push({
          type: 'SIDEBAR_BROKEN_LINK',
          slug: node.slug,
          expectedJson: expectedJsonPath
        });
      } else {
        // No hacer nada
      }
    } else {
      if (node.children && !Array.isArray(node.children)) {
        errors.push({
          type: 'INVALID_SIDEBAR_NODE',
          slug: node.slug,
          detail: 'children debe ser un array cuando existe'
        });
      } else {
        // No hacer nada
      }
    }
  });

  return errors;
}

function printErrors(title, errors) {
  if (errors.length === 0) {
    console.log(`OK  ${title}`);
    return;
  } else {
    console.log(`ERROR  ${title} (${errors.length})`);

    errors.forEach((error, index) => {
      console.log(`  ${index + 1}. ${error.type}`);

      Object.keys(error).forEach((key) => {
        if (key === 'type') {
          return;
        } else {
          const value = Array.isArray(error[key])
            ? error[key].join(' | ')
            : error[key];
          console.log(`     - ${key}: ${value}`);
        }
      });
    });
  }
}

function main() {
  console.log('--------------------------------------------------');
  console.log('Validando documentación generada...');
  console.log(`Markdown source : ${MD_DIR}`);
  console.log(`Content target  : ${CONTENT_DIR}`);
  console.log(`Sidebar target  : ${SIDEBAR_FILE}`);
  console.log('--------------------------------------------------');

  const mdFiles = walkFiles(MD_DIR, '.md');
  const jsonFiles = walkFiles(CONTENT_DIR, '.json');

  const duplicateSlugErrors = validateDuplicateSlugs(mdFiles);
  const missingJsonErrors = validateGeneratedJsonFiles(mdFiles);
  const jsonStructureErrors = validateJsonStructure(jsonFiles);
  const sidebarErrors = validateSidebarAgainstDocuments();

  printErrors('Slugs duplicados', duplicateSlugErrors);
  printErrors('JSON faltantes', missingJsonErrors);
  printErrors('Estructura de JSON', jsonStructureErrors);
  printErrors('Integridad de sidebar', sidebarErrors);

  const totalErrors =
    duplicateSlugErrors.length +
    missingJsonErrors.length +
    jsonStructureErrors.length +
    sidebarErrors.length;

  console.log('--------------------------------------------------');

  if (totalErrors > 0) {
    console.log(`Validación finalizada con errores: ${totalErrors}`);
    console.log('--------------------------------------------------');
    process.exit(1);
  } else {
    console.log('Validación finalizada correctamente.');
    console.log('--------------------------------------------------');
    process.exit(0);
  }
}

main();
