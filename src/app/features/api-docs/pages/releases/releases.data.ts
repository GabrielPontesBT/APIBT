export interface ReleaseItem {
  label: string;
  path?: string[];
}

export interface ReleaseGroup {
  titulo: string;
  items: ReleaseItem[];
}

export interface Release {
  id: string;
  titulo: string;
  grupos: ReleaseGroup[];
}

export type ReleasePathMap = Record<string, string[]>;

const RELEASE_MODULE_LABELS: Record<string, string> = {
  BTAhorroProgramado: 'Ahorro Programado',
  BTCalendarios: 'Calendarios',
  BTCadenaCierre: 'Cadena de Cierre',
  BTCASHManagement: 'CASH Management',
  BTCash: 'Cash',
  BTCashManagement: 'CASH Management',
  BTClientes: 'Clientes',
  BTConfiguracion: 'Configuración',
  BTConfiguracionBantotal: 'Configuración Bantotal',
  BTContabilidad: 'Contabilidad',
  BTCuentasAhorro: 'Cuentas de Ahorro',
  BTCuentasBolsillo: 'Cuentas Bolsillo',
  BTCuentasCorrientes: 'Cuentas Corrientes',
  BTCuentasVista: 'Cuentas Vista',
  BTCuentasVistas: 'Cuentas Vista',
  BTDepositosAPlazo: 'Depósitos a Plazo',
  BTDescuentoDocumentos: 'Descuento de Documentos',
  BTIndicadores: 'Indicadores',
  BTLimites: 'Límites',
  BTMicrofinanzas: 'Microfinanzas',
  BTModeladorPrestamos: 'Modelador de Préstamos',
  BTPAE: 'PAE',
  BTParametrosBase: 'Parametros Base',
  BTPartner: 'Partner',
  BTPartners: 'Partners',
  BTPersonas: 'Personas',
  BTPrecios: 'Precios',
  BTPrestamos: 'Préstamos',
  BTReglasNegocio: 'Reglas de Negocio',
  BTSegurosVoluntarios: 'Seguros Voluntarios',
  BTSNP: 'SNP',
  BTTarjetaDebito: 'Tarjeta de Débito',
  BTTarjetasDebito: 'Tarjetas de Débito',
  BTTarjetasDeDebito: 'Tarjetas de Débito',
  BTTitulos: 'Títulos',
  BTUsuarios: 'Usuarios',
  BTWorkflow: 'Workflow'
};

export function normalizeReleaseKey(value: string): string {
  return (value || '')
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

function slugifyReleaseTitle(value: string): string {
  return normalizeReleaseKey(value)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function humanizeMethodLabel(value: string): string {
  const normalized = normalizeReleaseKey(value).replace(/\s+/g, ' ').trim();
  if (!normalized) {
    return normalized;
  }

  if (normalized.includes(' ')) {
    return normalized;
  }

  return normalized
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim();
}

function getGroupTitle(moduleName: string): string {
  const normalized = normalizeReleaseKey(moduleName);
  return RELEASE_MODULE_LABELS[normalized] ?? normalized.replace(/^BT/, '');
}

export function parseReleaseList(raw: string, pathMap: ReleasePathMap = {}): Release[] {
  const releases: Release[] = [];
  let currentRelease: Release | null = null;
  let currentGroups = new Map<string, ReleaseGroup>();

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (/^Release\s+/i.test(line)) {
      const titulo = line.replace(/^Release\s+/i, '').trim();
      currentGroups = new Map<string, ReleaseGroup>();
      currentRelease = {
        id: slugifyReleaseTitle(titulo),
        titulo,
        grupos: []
      };
      releases.push(currentRelease);
      continue;
    }

    if (!currentRelease) {
      continue;
    }

    const [moduleName, ...methodParts] = line.split('.');
    const methodName = methodParts.join('.').trim();
    const groupTitle = getGroupTitle(moduleName);

    if (!currentGroups.has(groupTitle)) {
      const group: ReleaseGroup = { titulo: groupTitle, items: [] };
      currentGroups.set(groupTitle, group);
      currentRelease.grupos.push(group);
    }

    const normalizedPubName = normalizeReleaseKey(methodName ? `${moduleName}.${methodName}` : line);

    currentGroups.get(groupTitle)?.items.push({
      label: humanizeMethodLabel(methodName || line),
      path: pathMap[normalizedPubName]
    });
  }

  return releases.reverse();
}

export function mergeReleases(parsed: Release[], curated: Release[]): Release[] {
  const merged = new Map<string, Release>();

  for (const release of parsed) {
    merged.set(release.id, release);
  }

  for (const release of curated) {
    merged.set(release.id, release);
  }

  return Array.from(merged.values()).sort((a, b) => scoreRelease(b.titulo) - scoreRelease(a.titulo));
}

function scoreRelease(titulo: string): number {
  const monthOrder: Record<string, number> = {
    enero: 1,
    febrero: 2,
    marzo: 3,
    abril: 4,
    mayo: 5,
    junio: 6,
    julio: 7,
    agosto: 8,
    septiembre: 9,
    octubre: 10,
    noviembre: 11,
    diciembre: 12
  };

  const normalized = normalizeReleaseKey(titulo).toLowerCase();
  const [month = '', year = '0'] = normalized.split(/\s+/);
  return Number(year) * 100 + (monthOrder[month] ?? 0);
}
