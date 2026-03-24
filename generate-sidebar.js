const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'src/app/features/api-docs/api-doc-page');

function buildTree(dir, relativePath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  return items
    .filter(item => !item.name.startsWith('.'))
    .map(item => {
      const fullPath = path.join(dir, item.name);
      const newRelativePath = path.join(relativePath, item.name);

      if (item.isDirectory()) {
        return {
          type: 'folder',
          name: item.name,
          children: buildTree(fullPath, newRelativePath)
        };
      } else if (item.isFile() && item.name.endsWith('.ts')) {
        const pageTitle = extractPageTitle(fullPath);
        return {
          type: 'file',
          name: pageTitle || item.name.replace('.ts', ''),
          url: `/api/${newRelativePath.replace(/\.ts$/, '').replace(/\\/g, '/')}`
        };
      }
    })
    .filter(Boolean);
}

function extractPageTitle(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/pageTitle\s*=\s*['"`](.*?)['"`]/);
  return match ? match[1] : null;
}

const sidebarData = buildTree(rootDir);
fs.writeFileSync(
  path.join(__dirname, 'src/assets/sidebar.json'),
  JSON.stringify(sidebarData, null, 2)
);

console.log('✅ Sidebar generado correctamente en src/assets/sidebar.json');
