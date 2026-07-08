/**
 * build-docs-content-v4.js
 *
 * Generador de contenido JSON para V4. Diferencias respecto a versiones anteriores:
 *   - Campo **Módulo:** / **Module:** en metadatos del método.
 *   - **Alcance:** / **Scope:** en lugar de **Global/País:** para el scope.
 *   - @tab Body (nuevo) entre Datos de Entrada y Datos de Salida.
 *   - Soporte bilingüe: nombres de campos y tabs en español e inglés.
 *   - Caracteres < y > en celdas HTML-escapados para evitar que bypassSecurityTrustHtml
 *     los interprete como etiquetas y los elimine (ej: String $<(length: 36)>$).
 *   - SDT con soporte de encabezados en inglés y español.
 *   - No usa shared/: V4 es una versión independiente.
 *   - Solo limpia src/assets/docs/content/g4/, no toca las demás versiones.
 */

const fs   = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT_DIR = path.resolve(__dirname, '..');
const V4_DIR   = path.resolve(__dirname, './G4');
const OUT_DIR  = path.resolve(ROOT_DIR, './src/assets/docs/content/g4');

// ── Filesystem ─────────────────────────────────────────────────────────────────

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function cleanDir(dirPath) {
  if (fs.existsSync(dirPath)) fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function walkMarkdownFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md') && entry.name.toUpperCase() !== 'CHAT.MD') return [fullPath];
    return [];
  });
}

// ── Texto ──────────────────────────────────────────────────────────────────────

function stripAccents(text) {
  return String(text || '').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function normalizeWhitespace(text) {
  return String(text || '').replace(/\r\n/g, '\n').replace(/\t/g, '  ').trim();
}

function slugifySegment(text) {
  return stripAccents(String(text || ''))
    .toLowerCase()
    .replace(/&/g, ' y ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildSlugFromRelPath(relPath) {
  return relPath.replace(/\.md$/i, '').split('/').map(slugifySegment).join('/');
}

function getOutputJsonPath(slug) {
  return path.join(OUT_DIR, `${slug}.json`);
}

function stripMarkdownLinks(text) {
  return String(text || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim();
}

function markdownLinksToHtml(text, baseRelPath) {
  return String(text || '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      if (baseRelPath && href.toLowerCase().endsWith('.md')) {
        const dir = path.dirname(baseRelPath).replace(/\\/g, '/');
        const resolved = path.posix.normalize(`${dir}/${href}`);
        return `<a href="/${buildSlugFromRelPath(resolved)}">${label}</a>`;
      }
      return `<a href="${href}">${label}</a>`;
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/**
 * Escapa < y > que NO pertenecen a etiquetas <a> generadas por markdownLinksToHtml.
 * Sin esto, bypassSecurityTrustHtml inyecta el valor como HTML crudo y el browser
 * elimina cualquier contenido entre < > que no reconozca como etiqueta válida
 * (ej: tipos genéricos como List<String>, o notaciones como $<(length: 36)>$).
 *
 * Solo protegemos <a> y </a> porque son las únicas etiquetas que generamos nosotros.
 * Cualquier otro <Word> es un tipo de dato que debe escaparse.
 */
function escapeNonTagHtml(text) {
  const links = [];
  // Solo proteger las etiquetas HTML que generamos nosotros: <a> y <strong>
  let result = String(text || '').replace(/<\/?(?:a|strong)(\s[^>]*)?>/g, tag => {
    const idx = links.length;
    links.push(tag);
    return `\x00${idx}\x00`;
  });
  result = result.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  result = result.replace(/\x00(\d+)\x00/g, (_, i) => links[parseInt(i, 10)]);
  return result;
}

// ── Directivas VuePress (::: tipo ... :::) ─────────────────────────────────────

function stripVpressDirectives(text) {
  return String(text || '').replace(/:::[ \t]*\w[^\n]*\n[\s\S]*?:::/g, '').trim();
}

function extractVpressDirectiveContent(text) {
  const results = [];
  const re = /:::[ \t]*\w[^\n]*\n([\s\S]*?):::/g;
  let m;
  while ((m = re.exec(String(text || ''))) !== null) {
    const content = m[1].trim();
    if (content) results.push(content);
  }
  return results.join('\n\n');
}

// ── Bloques ────────────────────────────────────────────────────────────────────

function extractBlock(content, start, end) {
  const startIndex = content.indexOf(start);
  if (startIndex === -1) return '';
  const endIndex = content.indexOf(end, startIndex + start.length);
  if (endIndex === -1) return '';
  return content.slice(startIndex + start.length, endIndex).trim();
}

function extractBlockWithAlternatives(content, pairs) {
  for (const pair of pairs) {
    const block = extractBlock(content, pair.start, pair.end);
    if (block) return block;
  }
  return '';
}

// ── Tabla Markdown ─────────────────────────────────────────────────────────────

function parseTable(md, relPath) {
  const lines = String(md || '').split('\n').map(l => l.trim()).filter(l => l);
  if (lines.length < 2) return [];

  const headers = lines[0].split('|').map(h => stripMarkdownLinks(h.trim())).filter(h => h);
  return lines.slice(2).map(line => {
    const cols = line.split('|').map(col => {
      // Transforma la notación de tamaño KaTeX $<contenido>$ → <strong>contenido</strong>
      // Ej: String $<(length: 36)>$ → String <strong>(length: 36)</strong>
      const normalized = col.trim().replace(/\$<([^>]*)>\$/g, '<strong>$1</strong>');
      return escapeNonTagHtml(markdownLinksToHtml(normalized, relPath));
    });
    const obj = {};
    headers.forEach((header, i) => { obj[header] = cols[i] || ''; });
    return obj;
  });
}

// ── Metadatos del método (formato V4, bilingüe) ────────────────────────────────
//
// Campos soportados (español / inglés):
//   Nombre publicación / Publication Name  → pubName
//   Módulo             / Module            → modulo
//   Programa           / Program           → programa
//   Alcance            / Scope             → scope
//   (también acepta Global/País por compatibilidad)

function extractMethodMeta(content, relPath) {
  const block = extractBlockWithAlternatives(content, [
    { start: '<!-- ABRE DATOS DEL MÉTODO -->',     end: '<!-- CIERRA DATOS DEL MÉTODO -->'     },
    { start: '<!-- ABRE LOS DATOS DEL MÉTODO -->', end: '<!-- CIERRA LOS DATOS DEL MÉTODO -->' },
    { start: '<!-- ABRE DATOS DEL METODO -->',     end: '<!-- CIERRA DATOS DEL METODO -->'     },
    { start: '<!-- OPEN METHOD DATA -->',           end: '<!-- CLOSE METHOD DATA -->'           },
  ]);

  if (!block) return { description: '', pubName: '', modulo: '', programa: '', scope: '' };

  const descMatch   = block.match(/::: note\s+([\s\S]*?)(?=\n\s*\*\*(?:Nombre publicación|Publication Name|Módulo|Module|Programa|Program|Alcance|Scope|Global\/País):\*\*|:::$)/i);
  const pubMatch    = block.match(/\*\*(?:Nombre publicación|Publication Name):\*\*\s*(.+)/i);
  const moduloMatch = block.match(/\*\*(?:Módulo|Module):\*\*\s*(.+)/i);
  const progMatch   = block.match(/\*\*(?:Programa|Program):\*\*\s*(.+)/i);
  const scopeMatch    = block.match(/\*\*(?:Alcance|Scope|Global\/País):\*\*\s*(.+)/i);
  const endpointMatch = block.match(/\*\*(?:Endpoint):\*\*\s*(.+)/i);

  return {
    description: markdownLinksToHtml(
      normalizeWhitespace(descMatch ? descMatch[1].replace(/:::$/, '').trim() : ''),
      relPath
    ),
    pubName:   normalizeWhitespace(pubMatch      ? pubMatch[1]      : ''),
    modulo:    normalizeWhitespace(moduloMatch   ? moduloMatch[1]   : ''),
    programa:  normalizeWhitespace(progMatch     ? progMatch[1]     : ''),
    scope:     normalizeWhitespace(scopeMatch    ? scopeMatch[1]    : ''),
    endpoint:  normalizeWhitespace(endpointMatch ? endpointMatch[1] : ''),
  };
}

// ── Tabs (formato V4, bilingüe) ────────────────────────────────────────────────
//
// Tabs soportadas (español / inglés):
//   Datos de Entrada / Input Data   → inputData
//   Body                            → bodyData  (nuevo en V4)
//   Datos de Salida  / Output Data  → outputData
//   Errores          / Errors       → errors

function extractApiTabs(content, relPath) {
  const block = extractBlockWithAlternatives(content, [
    { start: '<!-- ABRE TABLA DE DATOS -->',    end: '<!-- CIERRA TABLA DE DATOS -->'    },
    { start: '<!-- ABRE LA TABLA DE DATOS -->', end: '<!-- CIERRA LA TABLA DE DATOS -->' },
    { start: '<!-- OPEN DATA TABLE -->',         end: '<!-- CLOSE DATA TABLE -->'         },
  ]);

  if (!block) return { inputData: [], bodyData: [], outputData: [], errors: [], errorsNote: '' };

  const sections = {};
  // Detenemos solo en @tab o fin de bloque; los ::: internos (tip, warning, etc.)
  // los maneja cada sección individualmente con stripVpressDirectives.
  const tabRegex = /@tab\s*([^\n]+)\n([\s\S]*?)(?=@tab|$)/g;
  let match;
  while ((match = tabRegex.exec(block)) !== null) {
    // Quitar el ::: de cierre del bloque externo que puede quedar al final del último tab
    sections[match[1].trim()] = match[2].trim().replace(/\n?:::\s*$/, '').trim();
  }

  const inputRaw   = sections['Datos de Entrada'] || sections['Input Data']  || '';
  const bodyRaw    = sections['Body']             || '';
  const headersRaw = sections['Headers']          || '';
  const outputRaw  = sections['Datos de Salida']  || sections['Output Data'] || '';
  const errorsRaw  = sections['Errores']          || sections['Errors']      || '';

  // Para cada tab, extraer la nota de directivas (::: comment) y parsear solo la tabla
  const headersNote = extractVpressDirectiveContent(headersRaw);
  const headersData = parseTable(stripVpressDirectives(headersRaw), relPath);
  const inputNote   = extractVpressDirectiveContent(inputRaw);
  const bodyNote    = extractVpressDirectiveContent(bodyRaw);
  const outputNote  = extractVpressDirectiveContent(outputRaw);

  let errors = [];
  let errorsNote = '';

  if (!errorsRaw || /^No aplica|^N\/A/i.test(errorsRaw.trim())) {
    errors = [];
  } else {
    const allLines   = errorsRaw.split('\n').map(l => l.trim());
    const tableLines = allLines.filter(l => l.includes('|'));
    // Excluir marcadores ::: y líneas vacías; conservar solo el texto del warning/note
    const noteLines  = allLines.filter(l => l && !l.includes('|') && !/^:::/.test(l));
    errors     = tableLines.length ? parseTable(tableLines.join('\n'), relPath) : [];
    errorsNote = noteLines.join('\n\n');
  }

  return {
    headersData,
    headersNote,
    inputNote,
    inputData:   parseTable(stripVpressDirectives(inputRaw),  relPath),
    bodyNote,
    bodyData:    parseTable(stripVpressDirectives(bodyRaw),   relPath),
    outputNote,
    outputData:  parseTable(stripVpressDirectives(outputRaw), relPath),
    errors,
    errorsNote,
  };
}

// ── SDT (bilingüe) ─────────────────────────────────────────────────────────────

function extractSdts(content) {
  const block = extractBlockWithAlternatives(content, [
    { start: '<!-- ABRE SDT -->',    end: '<!-- CIERRA SDT -->'    },
    { start: '<!-- ABRE EL SDT -->', end: '<!-- CIERRA EL SDT -->' },
    { start: '<!-- OPEN SDT -->',    end: '<!-- CLOSE SDT -->'     },
  ]);

  if (!block) return [];

  const headerRegex = /###\s*([A-Za-z0-9_]+)/g;
  const entries = Array.from(block.matchAll(headerRegex));
  const sdts = [];

  for (let i = 0; i < entries.length; i++) {
    const typeName   = entries[i][1];
    const startIdx   = entries[i].index + entries[i][0].length;
    const endIdx     = i + 1 < entries.length ? entries[i + 1].index : block.length;
    const section    = block.slice(startIdx, endIdx);

    // Acepta encabezados de tabla en español e inglés
    const tableHeaderRegex = /(?:Nombre|Name)\s*\|\s*(?:Tipo|Type)\s*\|\s*(?:Comentarios|Comments)/i;
    const tableStart = section.search(tableHeaderRegex);
    if (tableStart < 0) continue;

    const tableMd = section.slice(tableStart)
      .split('\n')
      .filter(line => !line.trim().startsWith(':::'))
      .join('\n');

    const fields = parseTable(tableMd);
    sdts.push({ typeName, fields });
  }

  return sdts;
}

// ── Configuración Backend (Headers y similares) ────────────────────────────────

function extractHeadersConfig(content, relPath) {
  const block = extractBlockWithAlternatives(content, [
    { start: '<!-- ABRE CONFIGURACIÓN BACKEND -->', end: '<!-- CIERRA CONFIGURACIÓN BACKEND -->' },
    { start: '<!-- ABRE LA CONFIGURACION BACKEND -->', end: '<!-- CIERRA LA CONFIGURACION BACKEND -->' },
  ]);

  if (!block) return { headersData: [], headersNote: '' };

  // Extraer el contenido interior del bloque ::: info/note/etc exterior (greedy hasta el último :::)
  const outerInner = block.match(/:::[ \t]*\w[^\n]*\n([\s\S]*)\n*:::\s*$/);
  const inner = outerInner ? outerInner[1] : block;

  // Extraer el comentario del bloque ::: comment interior
  const commentMatch = inner.match(/:::[ \t]*comment[^\n]*\n([\s\S]*?):::/);
  const headersNote = commentMatch ? commentMatch[1].trim() : '';

  // Quitar el bloque ::: comment y parsear lo que queda como tabla
  const tableText = inner.replace(/:::[ \t]*comment[^\n]*\n[\s\S]*?:::/g, '').trim();
  const headersData = parseTable(tableText, relPath);

  return { headersData, headersNote };
}

// ── Ejemplos ───────────────────────────────────────────────────────────────────

function extractExamples(content) {
  const invocationBlock = extractBlockWithAlternatives(content, [
    { start: '<!-- ABRE EJEMPLO DE INVOCACIÓN -->',    end: '<!-- CIERRA EJEMPLO DE INVOCACIÓN -->'    },
    { start: '<!-- ABRE EL EJEMPLO DE INVOCACIÓN -->', end: '<!-- CIERRA EL EJEMPLO DE INVOCACIÓN -->' },
    { start: '<!-- ABRE EJEMPLO DE INVOCACION -->',    end: '<!-- CIERRA EJEMPLO DE INVOCACION -->'    },
    { start: '<!-- OPEN INVOCATION EXAMPLE -->',       end: '<!-- CLOSE INVOCATION EXAMPLE -->'        },
  ]);

  const responseBlock = extractBlockWithAlternatives(content, [
    { start: '<!-- ABRE EJEMPLO DE RESPUESTA -->',    end: '<!-- CIERRA EJEMPLO DE RESPUESTA -->'    },
    { start: '<!-- ABRE EL EJEMPLO DE RESPUESTA -->', end: '<!-- CIERRA EL EJEMPLO DE RESPUESTA -->' },
    { start: '<!-- OPEN RESPONSE EXAMPLE -->',        end: '<!-- CLOSE RESPONSE EXAMPLE -->'         },
  ]);

  function extractCode(block, language) {
    const regex = new RegExp('```' + language + '[\\s\\S]*?```', 'm');
    const match = String(block || '').match(regex);
    if (!match) return '';
    return match[0].replace(new RegExp('```' + language, 'g'), '').replace(/```/g, '').trim();
  }

  function extractAllTabs(block) {
    const tabs = [];
    const tabRegex = /@tab\s*([^\n]+)\n([\s\S]*?)(?=(?:@tab|:::|$))/g;
    let match;
    while ((match = tabRegex.exec(block)) !== null) {
      const name = match[1].trim();
      const body = match[2].trim();
      const codeMatch = body.match(/```(\w+)\s*([\s\S]*?)```/);
      if (codeMatch) {
        tabs.push({ name, lang: codeMatch[1], code: codeMatch[2].trim() });
      }
    }
    return tabs;
  }

  return {
    invocation: { json: extractCode(invocationBlock, 'json'), xml: '', tabs: extractAllTabs(invocationBlock) },
    response:   { json: extractCode(responseBlock,   'json'), xml: '', tabs: extractAllTabs(responseBlock)   },
  };
}

// ── Título ─────────────────────────────────────────────────────────────────────

function extractFirstHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function buildPageTitle(frontmatterData, content, slug) {
  if (frontmatterData.title) return String(frontmatterData.title).trim();
  const heading = extractFirstHeading(content);
  if (heading) return heading;
  const last = slug.split('/').pop() || 'sin-titulo';
  return last.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

// ── JSON de cada documento ─────────────────────────────────────────────────────

function buildDocJson(mdFilePath, relPath) {
  const raw     = fs.readFileSync(mdFilePath, 'utf8');
  const parsed  = matter(raw);
  const content = parsed.content || '';
  const slug    = buildSlugFromRelPath(relPath);

  const pageTitle      = buildPageTitle(parsed.data || {}, content, slug);
  const methodMeta     = extractMethodMeta(content, relPath);
  const apiTabs        = extractApiTabs(content, relPath);
  const headersConfig  = extractHeadersConfig(content, relPath);
  const examples       = extractExamples(content);
  const structuredTypes = extractSdts(content);

  return {
    slug,
    pageTitle,
    description:      methodMeta.description,
    pubName:          methodMeta.pubName,
    modulo:           methodMeta.modulo,
    programa:         methodMeta.programa,
    scope:            methodMeta.scope || 'Global',
    method:           normalizeWhitespace(parsed.data?.type || ''),
    endpoint:         methodMeta.endpoint,
    // V4 no usa configuración backend; se incluyen los campos vacíos
    // para mantener compatibilidad con el modelo DocPage del frontend
    hasBackendConfig: false,
    backendText:      '',
    backendData:      [],
    headersData:      headersConfig.headersData.length ? headersConfig.headersData : apiTabs.headersData,
    headersNote:      headersConfig.headersData.length ? headersConfig.headersNote : apiTabs.headersNote,
    inputNote:        apiTabs.inputNote,
    inputData:        apiTabs.inputData,
    bodyNote:         apiTabs.bodyNote,
    bodyData:         apiTabs.bodyData,
    outputNote:       apiTabs.outputNote,
    outputData:       apiTabs.outputData,
    errors:           apiTabs.errors,
    errorsNote:       apiTabs.errorsNote,
    examples,
    structuredTypes,
    valuesTable:      [],
  };
}

function writeDocJson(docJson) {
  const outPath = getOutputJsonPath(docJson.slug);
  ensureDir(path.dirname(outPath));
  fs.writeFileSync(outPath, JSON.stringify(docJson, null, 2), 'utf8');
}

// ── Main ───────────────────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(50));
  console.log('Generando contenido JSON para V4...');
  console.log(`Origen:  ${V4_DIR}`);
  console.log(`Destino: ${OUT_DIR}`);
  console.log('='.repeat(50));

  if (!fs.existsSync(V4_DIR)) {
    console.warn(`WARN: la carpeta de origen no existe todavía: ${V4_DIR}`);
    console.warn('Créala y agrega los archivos .md para comenzar a documentar V4.');
    return;
  }

  cleanDir(OUT_DIR);

  const files = walkMarkdownFiles(V4_DIR);
  console.log(`\nArchivos encontrados: ${files.length}`);

  let ok = 0;
  let errCount = 0;

  for (const absPath of files) {
    const relPath = path.relative(V4_DIR, absPath).replace(/\\/g, '/');
    try {
      const docJson = buildDocJson(absPath, relPath);
      writeDocJson(docJson);
      ok++;
    } catch (err) {
      console.error(`  ERROR procesando ${relPath}: ${err.message}`);
      errCount++;
    }
  }

  console.log(`\nOK: ${ok} documentos  |  Errores: ${errCount}`);
  console.log('='.repeat(50));
  console.log('Proceso finalizado.');
  console.log('='.repeat(50));
}

main();
