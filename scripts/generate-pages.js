// scripts/generate-pages.js
var fs = require('fs');
var path = require('path');

var API_DOCS_DIR = path.resolve(__dirname, '../src/app/features/api-docs');
var PAGE_DIR = path.join(API_DOCS_DIR, 'api-doc-page');
var MODULE_FILE = path.join(API_DOCS_DIR, 'api-docs.module.ts');
var ROUTES_OUT = path.join(PAGE_DIR, 'api-docs-routing.module.ts');
var SIDEBAR_OUT = path.join(
  API_DOCS_DIR,
  '../../layout/sidebar/sidebar.component.html'
);

var ASSETS_OUT_ROOT = path.resolve(__dirname, '../src/assets/api-doc-page');
var INDEX_OUT = path.join(ASSETS_OUT_ROOT, 'index.json');
var MANIFEST_OUT = path.join(ASSETS_OUT_ROOT, 'manifest.json');

var COMPONENT_RE = /@Component\(\{\s*selector\s*:\s*['"`](.+?)['"`][\s\S]*?export\s+class\s+(\w+)/m;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function walk(dir) {
  return fs.readdirSync(dir).flatMap(function (name) {
    var full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      return walk(full);
    }

    if (
      name.endsWith('.component.ts') &&
      !name.endsWith('.spec.ts') &&
      !name.endsWith('-routing.module.ts')
    ) {
      return [full];
    }

    return [];
  });
}

function stripAccents(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizeIdent(str) {
  var v = stripAccents(str)
    .replace(/[^A-Za-z0-9_]/g, '')
    .replace(/^\d+/, '');

  return v || 'ComponentRef';
}

function humanLabel(str) {
  return String(str || '')
    .replace(/-/g, ' ')
    .replace(/   /g, '-')
    .replace(/([a-záéíóúñ])([A-ZÁÉÍÓÚÑ])/g, '$1 $2')
    .split(' ')
    .map(function (w) {
      return w ? w.charAt(0).toUpperCase() + w.slice(1) : w;
    })
    .join(' ');
}

function getMatch(content, re, def) {
  var m = content.match(re);
  return m ? m[1].trim() : (def || '');
}

function extractInfo(content, filePath, routePath, pageBaseName) {
  var pageTitle = getMatch(content, /pageTitle\s*=\s*['"`]([^'"`]+)['"`]/, '');
  var description = getMatch(content, /description\s*=\s*`([\s\S]*?)`/, '');
  var pubName = getMatch(content, /pubName\s*=\s*['"`]([^'"`]*)['"`]/, '');
  var programa = getMatch(content, /programa\s*=\s*['"`]([^'"`]*)['"`]/, '');
  var scope = getMatch(content, /scope\s*=\s*['"`]([^'"`]*)['"`]/, '');
  var hasBackendConfig = getMatch(content, /hasBackendConfig\s*=\s*(true|false)/, 'false') === 'true';
  var backendText = getMatch(content, /backendText\s*=\s*`([\s\S]*?)`/, '');

  return {
    filePath: filePath,
    routePath: routePath,
    url: '/' + routePath,
    pageBaseName: pageBaseName,
    pageTitle: pageTitle || humanLabel(pageBaseName),
    description: description,
    pubName: pubName,
    programa: programa,
    scope: scope,
    hasBackendConfig: hasBackendConfig,
    backendText: backendText
  };
}

function splitWords(value) {
  return String(value || '')
    .replace(/([a-záéíóúñ])([A-ZÁÉÍÓÚÑ])/g, '$1 $2')
    .replace(/[\/_.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
}

function normalizeText(value) {
  return stripAccents(String(value || ''))
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildKeywords(entry) {
  var rawParts = [
    entry.pageTitle,
    entry.description,
    entry.pubName,
    entry.programa,
    entry.scope,
    entry.routePath,
    entry.filePath,
    entry.pageBaseName
  ];

  var words = rawParts
    .flatMap(splitWords)
    .map(normalizeText)
    .flatMap(function (chunk) {
      return chunk.split(' ').filter(Boolean);
    });

  var unique = Array.from(new Set(words));

  return unique.sort();
}

function buildSearchText(entry) {
  return normalizeText([
    entry.pageTitle,
    entry.description,
    entry.pubName,
    entry.programa,
    entry.scope,
    entry.routePath,
    entry.filePath,
    entry.pageBaseName,
    (entry.keywords || []).join(' ')
  ].join(' '));
}

function inferPageBaseName(file) {
  var relDir = path.relative(PAGE_DIR, path.dirname(file));
  var dirParts = relDir.split(path.sep).filter(Boolean);

  var rootFolder = dirParts.length ? dirParts[0] : '';
  var fileBase = path.basename(file, '.component.ts');

  if (rootFolder && fileBase.indexOf(rootFolder) === 0) {
    var stripped = fileBase.slice(rootFolder.length);
    return stripped || fileBase;
  }

  return fileBase;
}

function buildRoutePath(file) {
  var relDir = path.relative(PAGE_DIR, path.dirname(file));
  var dirParts = relDir.split(path.sep).filter(Boolean);
  var pageBase = inferPageBaseName(file);

  return dirParts.concat([pageBase]).join('/');
}

function buildImportAlias(classNameRaw, file) {
  var rel = path.relative(PAGE_DIR, file).replace(/\\/g, '/').replace(/\.ts$/, '');
  var aliasBase = rel
    .split('/')
    .map(function (p) { return normalizeIdent(p); })
    .filter(Boolean)
    .join('_');

  aliasBase = normalizeIdent(aliasBase);
  return aliasBase + '_RouteCmp';
}

function buildEntries() {
  var files = walk(PAGE_DIR);
  var routingDir = path.dirname(ROUTES_OUT);

  return files.map(function (file) {
    var txt = fs.readFileSync(file, 'utf8');
    var m = txt.match(COMPONENT_RE);
    if (!m) return null;

    var selector = m[1];
    var classNameRaw = m[2];

    var relImport = path
      .relative(routingDir, file)
      .replace(/\\/g, '/')
      .replace(/\.ts$/, '');

    if (!relImport.startsWith('.')) {
      relImport = './' + relImport;
    }

    var pageBaseName = inferPageBaseName(file);
    var routePath = buildRoutePath(file);
    var info = extractInfo(txt, file, routePath, pageBaseName);

    return {
      selector: selector,
      classNameRaw: classNameRaw,
      importPath: relImport,
      filePath: file,
      relativeDir: path.relative(PAGE_DIR, path.dirname(file)).replace(/\\/g, '/'),
      dirParts: path.relative(PAGE_DIR, path.dirname(file)).split(path.sep).filter(Boolean),
      pageBaseName: pageBaseName,
      routePath: routePath,
      pageTitle: info.pageTitle,
      description: info.description,
      pubName: info.pubName,
      programa: info.programa,
      scope: info.scope,
      hasBackendConfig: info.hasBackendConfig,
      backendText: info.backendText,
      url: info.url
    };
  }).filter(Boolean);
}

function sortEntries(entries) {
  return entries.sort(function (a, b) {
    var ar = a.routePath.toLowerCase();
    var br = b.routePath.toLowerCase();

    if (ar === 'novedades' && br !== 'novedades') return -1;
    if (ar !== 'novedades' && br === 'novedades') return 1;

    return ar.localeCompare(br, 'es', { sensitivity: 'base' });
  });
}

function pickDefault(entries) {
  var forced = (process.env.API_DOCS_DEFAULT || '').trim().replace(/^\//, '');
  if (forced) return forced;

  var hit = entries.find(function (e) {
    var rp = e.routePath.toLowerCase();
    return rp === 'novedades' || rp.endsWith('/novedades');
  });

  return hit ? hit.routePath : (entries[0] ? entries[0].routePath : '');
}

function generateRouting(entries) {
  var imports = entries
    .map(function (e) {
      return "import { " + e.classNameRaw + " } from '" + e.importPath + "';";
    })
    .join('\n');

  var defaultChild = pickDefault(entries);

  var routesArr = entries.map(function (e) {
    return "  { path: '" + e.routePath + "', component: " + e.classNameRaw + " }";
  });

  if (defaultChild) {
    routesArr.unshift("  { path: '', redirectTo: '" + defaultChild + "', pathMatch: 'full' }");
    routesArr.push("  { path: '**', redirectTo: '" + defaultChild + "' }");
  }

  return `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

${imports}

var routes: Routes = [
${routesArr.join(',\n')}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApiDocsRoutingModule {}
`;
}

function replaceBlock(src, startTag, endTag, newContent) {
  var re = new RegExp('(' + escapeRegExp(startTag) + ')([\\s\\S]*?)(' + escapeRegExp(endTag) + ')', 'm');
  return src.replace(re, '$1\n' + newContent + '\n$3');
}

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateModule(entries) {
  var importLines = entries
    .map(function (e) {
      return "import { " + e.classNameRaw + " } from './api-doc-page/" +
        path.relative(PAGE_DIR, e.filePath).replace(/\\/g, '/').replace(/\.ts$/, '') + "';";
    })
    .join('\n');

  var declLines = entries
    .map(function (e) { return '    ' + e.classNameRaw + ','; })
    .join('\n');

  var exportLines = entries
    .map(function (e) { return '    ' + e.classNameRaw + ','; })
    .join('\n');

  var moduleSrc = fs.readFileSync(MODULE_FILE, 'utf8');

  moduleSrc = replaceBlock(
    moduleSrc,
    '//import Page components',
    '//import End page components',
    importLines
  );

  moduleSrc = replaceBlock(
    moduleSrc,
    '//declarations Page components',
    '//declarations End page components',
    declLines
  );

  moduleSrc = replaceBlock(
    moduleSrc,
    '//exports Page components',
    '//exports End page components',
    exportLines
  );

  fs.writeFileSync(MODULE_FILE, moduleSrc, 'utf8');
}

function buildTree(entries) {
  var tree = {};

  entries.forEach(function (e) {
    var node = tree;

    e.dirParts.forEach(function (part) {
      if (!node[part]) {
        node[part] = { __children: {} };
      }
      node = node[part].__children;
    });

    node[e.pageBaseName] = { __entry: e };
  });

  return tree;
}

function renderSidebar(tree) {
  var lines = [
    `  <div class="sidebar-wrapper" [class.is-hidden]="sidebarHidden">`,
    `    <button class="sidebar-toggle" (click)="toggleSidebar()" aria-label="Ocultar sidebar">`,
    `      <div`,
    `        class="mat-expansion-indicator ng-trigger ng-trigger-indicatorRotate ng-star-inserted"`,
    `        [style.transform]="'rotate(' + (sidebarHidden ? 270 : 90) + 'deg)'"`,
    `      ></div>`,
    `    </button>`,
    `    <div class="sidebar-scroll" #sidebarRoot>`,
    `      <mat-nav-list class="sidebar">`,
    `        <mat-accordion multi="false">`,
    renderSidebarNode(tree, '', 1),
    `        </mat-accordion>`,
    `      </mat-nav-list>`,
    `    </div>`,
    `  </div>`
  ];

  return lines.join('\n');
}

function renderSidebarNode(node, parentPath, level) {
  var items = Object.entries(node).sort(function (a, b) {
    var aKey = a[0];
    var bKey = b[0];
    var aVal = a[1];
    var bVal = b[1];

    if (level === 1) {
      var aIsNov = aKey.toLowerCase() === 'novedades' && !!aVal.__entry;
      var bIsNov = bKey.toLowerCase() === 'novedades' && !!bVal.__entry;
      if (aIsNov && !bIsNov) return -1;
      if (!aIsNov && bIsNov) return 1;
    }

    var aLabel = aVal.__entry ? aVal.__entry.pageTitle : humanLabel(aKey);
    var bLabel = bVal.__entry ? bVal.__entry.pageTitle : humanLabel(bKey);

    return aLabel.localeCompare(bLabel, 'es', { sensitivity: 'base' });
  });

  return items.map(function (pair) {
    var key = pair[0];
    var val = pair[1];

    if (val.__entry) {
      var entry = val.__entry;
      var label = entry.pageTitle || humanLabel(key);
      var link = '/' + entry.routePath;

      if (label.toUpperCase().endsWith('-NUEVO')) {
        var cleanLabel = label.slice(0, -6).trim();
        var nuevoIcon = `<img src="assets/image/nuevo.svg" alt="nuevo" class="nuevo-icon" />`;
        label = cleanLabel + ' ' + nuevoIcon;
      }

      return `    <a mat-list-item routerLink="${link}" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">${label}</a>`;
    }

    var label = humanLabel(key);
    var labelParts = label.split('-').map(function (s) { return s.trim(); });

    if (label.includes('-') && labelParts[1] && labelParts[1].length === 2) {
      label = labelParts[0] + ` <span class="flag" [ngClass]="fi('${labelParts[1]}')" aria-hidden="true"></span>`;
    }

    var nextParentPath = parentPath ? (parentPath + '/' + key) : key;
    var children = renderSidebarNode(val.__children, nextParentPath, level + 1);
    var currentPath = parentPath ? (parentPath + '/' + key) : key;

    return [
      `<mat-expansion-panel data-panel-path="${currentPath}" [expanded]="isExpanded('${currentPath}')">`,
      `    <mat-expansion-panel-header class="sidebar-header-level-${level}">`,
      `      <mat-panel-title>${label}</mat-panel-title>`,
      `    </mat-expansion-panel-header>`,
      `    <mat-nav-list class="sidebar-level-${level}">`,
      `      <mat-accordion multi="false">`,
      children,
      `      </mat-accordion>`,
      `    </mat-nav-list>`,
      `</mat-expansion-panel>`
    ].join('\n');
  }).join('\n');
}

function buildIndex(entries) {
  return {
    pages: entries.map(function (e) {
      var keywords = buildKeywords(e);

      return {
        url: '/' + e.routePath,
        routePath: e.routePath,
        filePath: path.relative(API_DOCS_DIR, e.filePath).replace(/\\/g, '/'),
        pageBaseName: e.pageBaseName,
        pageTitle: e.pageTitle,
        description: e.description,
        pubName: e.pubName,
        programa: e.programa,
        scope: e.scope,
        hasBackendConfig: e.hasBackendConfig,
        backendText: e.backendText,
        keywords: keywords,
        searchText: buildSearchText({
          pageTitle: e.pageTitle,
          description: e.description,
          pubName: e.pubName,
          programa: e.programa,
          scope: e.scope,
          routePath: e.routePath,
          filePath: path.relative(API_DOCS_DIR, e.filePath).replace(/\\/g, '/'),
          pageBaseName: e.pageBaseName,
          keywords: keywords
        })
      };
    })
  };
}

function buildManifest(entries) {
  return entries.map(function (e) {
    var relativeFilePath = path.relative(API_DOCS_DIR, e.filePath).replace(/\\/g, '/');
    return {
      routePath: e.routePath,
      url: '/' + e.routePath,
      importPath: e.importPath,
      classNameRaw: e.classNameRaw,
      pageBaseName: e.pageBaseName,
      filePath: relativeFilePath,
      pageTitle: e.pageTitle,
      description: e.description,
      pubName: e.pubName,
      programa: e.programa,
      scope: e.scope,
      hasBackendConfig: e.hasBackendConfig,
      backendText: e.backendText,
      keywords: buildKeywords({
        pageTitle: e.pageTitle,
        description: e.description,
        pubName: e.pubName,
        programa: e.programa,
        scope: e.scope,
        routePath: e.routePath,
        filePath: relativeFilePath,
        pageBaseName: e.pageBaseName
      })
    };
  });
}

function main() {
  ensureDir(ASSETS_OUT_ROOT);

  var entries = sortEntries(buildEntries());

  fs.writeFileSync(ROUTES_OUT, generateRouting(entries), 'utf8');
  console.log('✅ Rutas generadas en ' + ROUTES_OUT);

  updateModule(entries);
  console.log('✅ api-docs.module.ts actualizado con ' + entries.length + ' componentes.');

  var tree = buildTree(entries);
  fs.writeFileSync(SIDEBAR_OUT, renderSidebar(tree), 'utf8');
  console.log('✅ Sidebar actualizado en ' + SIDEBAR_OUT);

  fs.writeFileSync(INDEX_OUT, JSON.stringify(buildIndex(entries), null, 2), 'utf8');
  console.log('🔍 Índice generado en ' + INDEX_OUT + ' con ' + entries.length + ' páginas.');

  fs.writeFileSync(MANIFEST_OUT, JSON.stringify(buildManifest(entries), null, 2), 'utf8');
  console.log('🧭 Manifest generado en ' + MANIFEST_OUT + '.');
}

main();
