
const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src', 'app', 'features', 'api-docs', 'api-doc-page');
const outputPath = path.join(__dirname, 'src', 'assets', 'api-doc-page');
const outputFile = path.join(outputPath, 'index.json');

function findTsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findTsFiles(filePath));
    } else if (filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

function extractBetween(content, start, end) {
  const regex = new RegExp(start + '(.*?)' + end, 's');
  const match = content.match(regex);
  return match ? match[1].trim().replace(/^`|`$/g, '') : '';
}

function extractJson(content, variableName) {
  const regex = new RegExp(`${variableName}\s*=\s*(\[.*?\]|\{.*?\});`, 's');
  const match = content.match(regex);
  return match ? eval('(' + match[1] + ')') : [];
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(basePath, filePath).replace(/\\/g, '/');
  const parts = relativePath.split(path.sep);
  const url = '/api/' + parts.slice(0, -1).join('/') + '/' + path.basename(filePath, '.ts');

  return {
    pageTitle: extractBetween(content, "pageTitle\s*=\s*'", "'"),
    description: extractBetween(content, "description\s*=\s*`", "`"),
    pubName: extractBetween(content, "pubName\s*=\s*'", "'"),
    programa: extractBetween(content, "programa\s*=\s*'", "'"),
    scope: extractBetween(content, "scope\s*=\s*'", "'"),
    backendText: extractBetween(content, "backendText\s*=\s*`", "`"),
    hasBackendConfig: extractBetween(content, "hasBackendConfig\s*=\s*", "\n"),
    backendConfig: extractJson(content, 'backendConfig'),
    inputData: extractJson(content, 'inputData'),
    outputData: extractJson(content, 'outputData'),
    errors: extractJson(content, 'errors'),
    examples: extractJson(content, 'examples'),
    structuredTypes: extractJson(content, 'structuredTypes'),
    url
  };
}

const files = findTsFiles(basePath);
const pages = files.map(processFile);

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify({ pages }, null, 2));
console.log('✅ Archivo index.json generado con éxito.');
