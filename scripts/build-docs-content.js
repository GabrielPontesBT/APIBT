/**
 * build-docs-content.js
 *
 * Recorre los archivos Markdown de documentación, parsea el formato real usado
 * en la documentación Bantotal (comentarios HTML, ::: tabs, @tab, ::: details,
 * bloques SDT y metadatos del método) y genera un archivo JSON por documento
 * dentro de src/assets/docs/content.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT_DIR = path.resolve(__dirname, '..');
const MD_DIR = path.resolve(__dirname, './archivos-markdown');
const OUT_DIR = path.resolve(ROOT_DIR, './src/assets/docs/content');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } else {
    // No hacer nada
  }
}

function cleanDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  } else {
    fs.rmSync(dirPath, { recursive: true, force: true });
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function walkMarkdownFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      return walkMarkdownFiles(fullPath);
    } else {
      if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        return [fullPath];
      } else {
        return [];
      }
    }
  });
}

function stripAccents(text) {
  return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeWhitespace(text) {
  return String(text || '')
    .replace(/\r\n/g, '\n')
    .replace(/\t/g, '  ')
    .trim();
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

function getOutputJsonPath(slug) {
  return path.join(OUT_DIR, `${slug}.json`);
}

function extractBlock(content, start, end) {
  const startIndex = content.indexOf(start);

  if (startIndex === -1) {
    return '';
  } else {
    const endIndex = content.indexOf(end, startIndex + start.length);

    if (endIndex === -1) {
      return '';
    } else {
      return content.slice(startIndex + start.length, endIndex).trim();
    }
  }
}

function extractBlockWithAlternatives(content, pairs) {
  for (const pair of pairs) {
    const block = extractBlock(content, pair.start, pair.end);

    if (block) {
      return block;
    } else {
      // No hacer nada
    }
  }

  return '';
}

function stripMarkdownLinks(text) {
  return String(text || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
}

function parseTable(md) {
  const lines = String(md || '')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line);

  if (lines.length < 2) {
    return [];
  } else {
    const headers = lines[0]
      .split('|')
      .map((header) => stripMarkdownLinks(header.trim()))
      .filter((header) => header);

    return lines.slice(2).map((line) => {
      const cols = line.split('|').map((col) => col.trim());
      const obj = {};

      headers.forEach((header, index) => {
        obj[header] = cols[index] || '';
      });

      return obj;
    });
  }
}

function extractMethodMeta(content) {
  const block = extractBlockWithAlternatives(content, [
    {
      start: '<!-- ABRE DATOS DEL MÉTODO -->',
      end: '<!-- CIERRA DATOS DEL MÉTODO -->'
    },
    {
      start: '<!-- ABRE LOS DATOS DEL MÉTODO -->',
      end: '<!-- CIERRA LOS DATOS DEL MÉTODO -->'
    }
  ]);

  if (!block) {
    return {
      description: '',
      pubName: '',
      programa: '',
      scope: ''
    };
  } else {
    const descriptionMatch = block.match(/::: note\s+([\s\S]*?)(?=\n\s*\*\*Nombre publicación:\*\*|\n\s*\*\*Programa:\*\*|\n\s*\*\*Global\/País:\*\*|:::$)/i);
    const pubNameMatch = block.match(/\*\*Nombre publicación:\*\*\s*(.+)/i);
    const programaMatch = block.match(/\*\*Programa:\*\*\s*(.+)/i);
    const scopeMatch = block.match(/\*\*Global\/País:\*\*\s*(.+)/i);

    return {
      description: normalizeWhitespace(descriptionMatch ? descriptionMatch[1].replace(/:::$/, '').trim() : ''),
      pubName: normalizeWhitespace(pubNameMatch ? pubNameMatch[1] : ''),
      programa: normalizeWhitespace(programaMatch ? programaMatch[1] : ''),
      scope: normalizeWhitespace(scopeMatch ? scopeMatch[1] : '')
    };
  }
}

function extractApiTabs(content) {
  const block = extractBlockWithAlternatives(content, [
    {
      start: '<!-- ABRE TABLA DE DATOS -->',
      end: '<!-- CIERRA TABLA DE DATOS -->'
    },
    {
      start: '<!-- ABRE LA TABLA DE DATOS -->',
      end: '<!-- CIERRA LA TABLA DE DATOS -->'
    }
  ]);

  if (!block) {
    return {
      inputData: [],
      outputData: [],
      errors: []
    };
  } else {
    const sections = {};
    const tabRegex = /@tab\s*([^\n]+)\n([\s\S]*?)(?=(?:@tab|:::|$))/g;
    let match = tabRegex.exec(block);

    while (match !== null) {
      sections[match[1].trim()] = match[2].trim();
      match = tabRegex.exec(block);
    }

    const inputData = parseTable(sections['Datos de Entrada'] || '');
    const outputData = parseTable(sections['Datos de Salida'] || '');
    const errorsBlock = sections['Errores'] || '';
    const errors = errorsBlock.includes('No aplica') ? [] : parseTable(errorsBlock);

    return {
      inputData,
      outputData,
      errors
    };
  }
}

function extractExamples(content) {
  const invocationBlock = extractBlockWithAlternatives(content, [
    {
      start: '<!-- ABRE EJEMPLO DE INVOCACIÓN -->',
      end: '<!-- CIERRA EJEMPLO DE INVOCACIÓN -->'
    },
    {
      start: '<!-- ABRE EL EJEMPLO DE INVOCACIÓN -->',
      end: '<!-- CIERRA EL EJEMPLO DE INVOCACIÓN -->'
    }
  ]);

  const responseBlock = extractBlockWithAlternatives(content, [
    {
      start: '<!-- ABRE EJEMPLO DE RESPUESTA -->',
      end: '<!-- CIERRA EJEMPLO DE RESPUESTA -->'
    },
    {
      start: '<!-- ABRE EL EJEMPLO DE RESPUESTA -->',
      end: '<!-- CIERRA EL EJEMPLO DE RESPUESTA -->'
    }
  ]);

  function extractCode(block, language) {
    const regex = new RegExp('```' + language + '[\\s\\S]*?```', 'm');
    const match = String(block || '').match(regex);

    if (!match) {
      return '';
    } else {
      return match[0]
        .replace(new RegExp('```' + language, 'g'), '')
        .replace(/```/g, '')
        .trim();
    }
  }

  return {
    invocation: {
      xml: extractCode(invocationBlock, 'xml'),
      json: extractCode(invocationBlock, 'json')
    },
    response: {
      xml: extractCode(responseBlock, 'xml'),
      json: extractCode(responseBlock, 'json')
    }
  };
}

function extractBackendConfig(content) {
  let block = extractBlockWithAlternatives(content, [
    {
      start: '<!-- ABRE CONFIGURACIÓN BACKEND -->',
      end: '<!-- CIERRA CONFIGURACIÓN BACKEND -->'
    },
    {
      start: '<!-- ABRE LA CONFIGURACION BACKEND -->',
      end: '<!-- CIERRA LA CONFIGURACION BACKEND -->'
    }
  ]);

  if (!block) {
    return {
      hasBackendConfig: false,
      backendText: ''
    };
  } else {
    const infoTag = '::: info Configuración Backend';
    const infoIndex = block.indexOf(infoTag);

    if (infoIndex >= 0) {
      block = block.slice(infoIndex + infoTag.length).trim();
    } else {
      // No hacer nada
    }

    return {
      hasBackendConfig: true,
      backendText: block.replaceAll(':::', '').trim()
    };
  }
}

function extractSdts(content) {
  const block = extractBlockWithAlternatives(content, [
    {
      start: '<!-- ABRE SDT -->',
      end: '<!-- CIERRA SDT -->'
    },
    {
      start: '<!-- ABRE EL SDT -->',
      end: '<!-- CIERRA EL SDT -->'
    }
  ]);

  if (!block) {
    return [];
  } else {
    const headerRegex = /###\s*([A-Za-z0-9_]+)/g;
    const entries = Array.from(block.matchAll(headerRegex));
    const sdts = [];

    for (let index = 0; index < entries.length; index += 1) {
      const typeName = entries[index][1];
      const startIndex = entries[index].index + entries[index][0].length;
      const endIndex = index + 1 < entries.length ? entries[index + 1].index : block.length;
      const section = block.slice(startIndex, endIndex);

      const tableHeaderRegex = /Nombre\s*\|\s*Tipo\s*\|\s*Comentarios/i;
      const tableStart = section.search(tableHeaderRegex);

      if (tableStart < 0) {
        continue;
      } else {
        let tableMd = section.slice(tableStart);

        tableMd = tableMd
          .split('\n')
          .filter((line) => !line.trim().startsWith(':::'))
          .join('\n');

        const fields = parseTable(tableMd);

        sdts.push({
          typeName,
          fields
        });
      }
    }

    return sdts;
  }
}

function extractBlockVals(content, start, endLine) {
  const startIndex = content.indexOf(start);

  if (startIndex === -1) {
    return '';
  } else {
    const rest = content.slice(startIndex + start.length);
    const lines = rest.split('\n');
    const endIndex = lines.findIndex((line) => line.trim() === endLine);

    if (endIndex === -1) {
      return rest.trim();
    } else {
      return lines.slice(0, endIndex).join('\n').trim();
    }
  }
}

function extractValues(content) {
  const valuesBlock = extractBlock(content, '<!-- ABRE VALORES -->', '<!-- CIERRA VALORES -->');

  if (!valuesBlock) {
    return [];
  } else {
    const inputOutputBlock = extractBlock(content, '@tab Datos de Entrada', '@tab Datos de Salida');
    const nomValRegex = /^.*\[valores\].*$/gm;
    const entries = Array.from(inputOutputBlock.matchAll(nomValRegex));
    const values = [];

    for (let index = 0; index < entries.length; index += 1) {
      const elementValLine = entries[index][0];
      const elementValName = elementValLine.split('|')[0].trim();
      const idMatch = elementValLine.match(/\(#(valores\d*)\)/);

      if (!idMatch) {
        continue;
      } else {
        let elementValNameId = idMatch[1];
        elementValNameId = elementValNameId[0].toUpperCase() + elementValNameId.slice(1);

        let blockElementValNameId = extractBlockVals(content, '### ' + elementValNameId, ':::');
        const headerTable = (blockElementValNameId.match(/^(.*\|.*)$/m) || [])[1] || '';
        const listHeader = headerTable
          .split('|')
          .map((line) => line.trim())
          .filter((line) => line)
          .join(',');

        blockElementValNameId = blockElementValNameId + ':::';

        let blockVals = extractBlock(blockElementValNameId, headerTable, ':::');
        blockVals = headerTable + '\n' + blockVals;

        const description = extractBlock(blockElementValNameId, '::: center ', headerTable);
        const fields = parseTable(blockVals);

        values.push({
          elementValName,
          listHeader,
          fields,
          description: normalizeWhitespace(description)
        });
      }
    }

    return values;
  }
}

function extractFirstHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);

  if (match) {
    return match[1].trim();
  } else {
    return '';
  }
}

function buildPageTitle(frontmatterData, content, slug) {
  if (frontmatterData.title) {
    return String(frontmatterData.title).trim();
  } else {
    const heading = extractFirstHeading(content);

    if (heading) {
      return heading;
    } else {
      const lastSlugSegment = slug.split('/').pop() || 'sin-titulo';

      return lastSlugSegment
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
    }
  }
}

function buildDocJson(mdFilePath) {
  const raw = fs.readFileSync(mdFilePath, 'utf8');
  const parsed = matter(raw);
  const content = parsed.content || '';
  const slug = buildSlugFromFile(mdFilePath);

  const pageTitle = buildPageTitle(parsed.data || {}, content, slug);
  const methodMeta = extractMethodMeta(content);
  const apiTabs = extractApiTabs(content);
  const examples = extractExamples(content);
  const backendConfig = extractBackendConfig(content);
  const structuredTypes = extractSdts(content);
  const valuesTable = extractValues(content);

  return {
    slug,
    pageTitle,
    description: methodMeta.description,
    pubName: methodMeta.pubName,
    programa: methodMeta.programa,
    scope: methodMeta.scope || 'Global',
    hasBackendConfig: backendConfig.hasBackendConfig,
    backendText: backendConfig.backendText,
    backendData: [],
    inputData: apiTabs.inputData,
    outputData: apiTabs.outputData,
    errors: apiTabs.errors,
    examples,
    structuredTypes,
    valuesTable
  };
}

function writeDocJson(docJson) {
  const outPath = getOutputJsonPath(docJson.slug);
  const outDir = path.dirname(outPath);

  ensureDir(outDir);
  fs.writeFileSync(outPath, JSON.stringify(docJson, null, 2), 'utf8');
}

function main() {
  console.log('--------------------------------------------------');
  console.log('Generando contenido JSON de documentación...');
  console.log(`Markdown source: ${MD_DIR}`);
  console.log(`Output target  : ${OUT_DIR}`);
  console.log('--------------------------------------------------');

  if (!fs.existsSync(MD_DIR)) {
    console.error(`No existe la carpeta de origen: ${MD_DIR}`);
    process.exit(1);
  } else {
    cleanDir(OUT_DIR);

    const mdFiles = walkMarkdownFiles(MD_DIR);

    if (mdFiles.length === 0) {
      console.warn('No se encontraron archivos .md para procesar.');
    } else {
      mdFiles.forEach((mdFilePath) => {
        try {
          const docJson = buildDocJson(mdFilePath);
          writeDocJson(docJson);
          console.log(`OK  ${docJson.slug}`);
        } catch (error) {
          console.error(`ERROR procesando ${mdFilePath}`);
          console.error(error);
        }
      });
    }

    console.log('--------------------------------------------------');
    console.log(`Documentos procesados: ${mdFiles.length}`);
    console.log('Proceso finalizado.');
    console.log('--------------------------------------------------');
  }
}

main();
