/**
 * migrate-to-shared.js
 *
 * Compara los archivos .md de V2R2, V2R3 y V3R1.
 * Los archivos idénticos en todas las versiones donde aparecen se mueven a shared/.
 * Los archivos que difieren quedan en su carpeta de versión (override).
 *
 * Uso: node scripts/migrate-to-shared.js [--dry-run]
 *   --dry-run  Solo muestra el resultado sin mover archivos.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SCRIPTS_DIR = __dirname;
const VERSION_DIRS = ['V2R2', 'V2R3', 'V3R1'];
const SHARED_DIR = path.join(SCRIPTS_DIR, 'shared');

const DRY_RUN = process.argv.includes('--dry-run');

// ── Utilidades ────────────────────────────────────────────────────────────────

function hashFile(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex');
}

function walkMarkdownFiles(dirPath, baseDir) {
  const results = [];
  if (!fs.existsSync(dirPath)) return results;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkMarkdownFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      results.push(path.relative(baseDir, fullPath));
    }
  }
  return results;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// ── Lógica principal ──────────────────────────────────────────────────────────

function main() {
  console.log('='.repeat(60));
  console.log('  migrate-to-shared.js');
  if (DRY_RUN) console.log('  MODO DRY-RUN — no se mueven archivos');
  console.log('='.repeat(60));

  // 1. Recolectar todos los paths relativos por versión
  const filesByVersion = {};
  for (const version of VERSION_DIRS) {
    const versionDir = path.join(SCRIPTS_DIR, version);
    filesByVersion[version] = new Set(walkMarkdownFiles(versionDir, versionDir));
    console.log(`\n${version}: ${filesByVersion[version].size} archivos .md`);
  }

  // 2. Unión de todos los paths
  const allPaths = new Set();
  for (const version of VERSION_DIRS) {
    for (const filePath of filesByVersion[version]) {
      allPaths.add(filePath);
    }
  }
  console.log(`\nTotal paths únicos: ${allPaths.size}`);

  // 3. Clasificar cada path
  let sharedCount = 0;
  let overrideCount = 0;
  let uniqueCount = 0;

  const toMoveToShared = [];   // paths que van a shared/
  const overrides = [];         // paths que difieren entre versiones
  const uniqueToVersion = [];   // paths que solo existen en una versión

  for (const relPath of allPaths) {
    const versionsWithFile = VERSION_DIRS.filter(v => filesByVersion[v].has(relPath));

    if (versionsWithFile.length === 1) {
      // Solo existe en una versión — se queda ahí
      uniqueToVersion.push({ relPath, version: versionsWithFile[0] });
      uniqueCount++;
      continue;
    }

    // Existe en 2 o 3 versiones — comparar hashes
    const hashes = versionsWithFile.map(v => {
      const fullPath = path.join(SCRIPTS_DIR, v, relPath);
      return { version: v, hash: hashFile(fullPath) };
    });

    const uniqueHashes = new Set(hashes.map(h => h.hash));

    if (uniqueHashes.size === 1) {
      // Idéntico en todas las versiones donde existe → shared
      toMoveToShared.push({ relPath, versions: versionsWithFile });
      sharedCount++;
    } else {
      // Difiere en alguna versión → override
      overrides.push({ relPath, versions: versionsWithFile, hashes });
      overrideCount++;
    }
  }

  // 4. Resumen
  console.log('\n' + '─'.repeat(60));
  console.log(`  Archivos para shared/           : ${sharedCount}`);
  console.log(`  Archivos con overrides           : ${overrideCount}`);
  console.log(`  Archivos exclusivos de 1 versión : ${uniqueCount}`);
  console.log('─'.repeat(60));

  if (DRY_RUN) {
    console.log('\n[DRY-RUN] Archivos que irían a shared/ (primeros 20):');
    toMoveToShared.slice(0, 20).forEach(({ relPath, versions }) => {
      console.log(`  [${versions.join(',')}] ${relPath}`);
    });

    console.log('\n[DRY-RUN] Archivos con overrides (primeros 20):');
    overrides.slice(0, 20).forEach(({ relPath, versions }) => {
      console.log(`  [${versions.join(',')}] ${relPath}`);
    });

    console.log('\n[DRY-RUN] Archivos exclusivos de 1 versión (primeros 20):');
    uniqueToVersion.slice(0, 20).forEach(({ relPath, version }) => {
      console.log(`  [${version}] ${relPath}`);
    });

    console.log('\nDRY-RUN completo. Ejecuta sin --dry-run para aplicar cambios.');
    return;
  }

  // 5. Ejecutar migración
  console.log('\nMigrando archivos a shared/...');

  for (const { relPath, versions } of toMoveToShared) {
    const sharedTarget = path.join(SHARED_DIR, relPath);
    ensureDir(path.dirname(sharedTarget));

    // Copiar desde la primera versión que lo tiene
    const sourceVersion = versions[0];
    const sourcePath = path.join(SCRIPTS_DIR, sourceVersion, relPath);
    fs.copyFileSync(sourcePath, sharedTarget);

    // Eliminar de todas las versiones
    for (const v of versions) {
      const vPath = path.join(SCRIPTS_DIR, v, relPath);
      fs.unlinkSync(vPath);
    }
  }

  console.log(`✓ ${sharedCount} archivos movidos a shared/`);

  // 6. Limpiar carpetas vacías en versiones
  console.log('\nLimpiando carpetas vacías...');
  let removedDirs = 0;
  for (const version of VERSION_DIRS) {
    const versionDir = path.join(SCRIPTS_DIR, version);
    removedDirs += removeEmptyDirs(versionDir);
  }
  console.log(`✓ ${removedDirs} carpetas vacías eliminadas`);

  // 7. Resumen final
  const sharedFiles = walkMarkdownFiles(SHARED_DIR, SHARED_DIR).length;
  console.log('\n' + '='.repeat(60));
  console.log('Migración completada');
  console.log(`  shared/  : ${sharedFiles} archivos`);
  for (const version of VERSION_DIRS) {
    const vDir = path.join(SCRIPTS_DIR, version);
    const vFiles = walkMarkdownFiles(vDir, vDir).length;
    console.log(`  ${version}/ : ${vFiles} archivos (solo overrides)`);
  }
  console.log('='.repeat(60));
}

function removeEmptyDirs(dirPath) {
  if (!fs.existsSync(dirPath)) return 0;
  let count = 0;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      count += removeEmptyDirs(path.join(dirPath, entry.name));
    }
  }
  const remaining = fs.readdirSync(dirPath);
  if (remaining.length === 0) {
    fs.rmdirSync(dirPath);
    count++;
  }
  return count;
}

main();
