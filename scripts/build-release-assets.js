const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const docsRoot = path.join(projectRoot, 'src', 'assets', 'docs', 'content');
const releasesRoot = path.join(projectRoot, 'src', 'assets', 'releases');

const VERSIONS = ['v2r2', 'v2r3', 'v3r1'];

function normalizeReleaseKey(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/Ã¡|á/g, 'a')
    .replace(/Ã©|é/g, 'e')
    .replace(/Ã­|í/g, 'i')
    .replace(/Ã³|ó/g, 'o')
    .replace(/Ãº|ú/g, 'u')
    .replace(/Ã±|ñ/g, 'n')
    .replace(/Ã|Á/g, 'A')
    .replace(/Ã‰|É/g, 'E')
    .replace(/Ã|Í/g, 'I')
    .replace(/Ã“|Ó/g, 'O')
    .replace(/Ãš|Ú/g, 'U')
    .replace(/Ã‘|Ñ/g, 'N')
    .trim();
}

function getJsonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getJsonFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.json')) {
      files.push(fullPath);
    }
  }

  return files;
}

function buildPubNameSlugEntries(versionId) {
  const entries = [];
  const versionDir = path.join(docsRoot, versionId);
  if (!fs.existsSync(versionDir)) return entries;

  const files = getJsonFiles(versionDir);

  for (const filePath of files) {
    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(raw);
      if (!json.pubName || !json.slug) continue;

      entries.push({
        key: normalizeReleaseKey(json.pubName),
        path: String(json.slug).split('/')
      });
    } catch {
      console.warn(`Skipping invalid JSON: ${filePath}`);
    }
  }

  entries.sort((a, b) => a.key.localeCompare(b.key));
  return entries;
}

function buildUnmatchedList(versionId, pathMap) {
  const releaseListPath = path.join(releasesRoot, `Releases-${versionId}.txt`);
  if (!fs.existsSync(releaseListPath)) return [];

  const raw = fs.readFileSync(releaseListPath, 'utf8');
  const unmatched = [];
  let currentRelease = '';

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^Release\s+/i.test(trimmed)) { currentRelease = trimmed; continue; }

    const normalized = normalizeReleaseKey(trimmed);
    if (!pathMap.has(normalized)) {
      unmatched.push({ release: currentRelease, method: trimmed });
    }
  }

  return unmatched;
}

function main() {
  fs.mkdirSync(releasesRoot, { recursive: true });

  let totalEntries = 0;
  let totalUnmatched = 0;

  for (const version of VERSIONS) {
    const entries = buildPubNameSlugEntries(version);
    const pubnameSlugMapPath = path.join(releasesRoot, `pubname-slugs-${version}.json`);
    fs.writeFileSync(pubnameSlugMapPath, JSON.stringify(entries, null, 2));

    const pathMap = new Map(entries.map(e => [e.key, e.path]));
    const unmatched = buildUnmatchedList(version, pathMap);
    const unmatchedPath = path.join(releasesRoot, `unmatched-release-methods-${version}.json`);
    fs.writeFileSync(unmatchedPath, JSON.stringify(unmatched, null, 2));

    console.log(`[${version}] ${entries.length} entradas pubName→slug | ${unmatched.length} sin match`);
    totalEntries += entries.length;
    totalUnmatched += unmatched.length;
  }

  console.log(`\nTotal: ${totalEntries} entradas | ${totalUnmatched} sin match`);
}

main();
