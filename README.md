# Documentación Servicios Bantotal

Aplicación Angular para la documentación interna de servicios y APIs.

---

## Requisitos previos

Antes de trabajar con el proyecto, instalar las siguientes herramientas:

| Herramienta | Versión mínima | Descarga |
|---|---|---|
| **Node.js** | 18.19+ (recomendado: 20 o 22 LTS) | [nodejs.org](https://nodejs.org) |
| **npm** | 9+ (viene incluido con Node) | — |
| **Angular CLI** | 21 | `npm install -g @angular/cli` |

Verificar instalación:
```bash
node --version    # v18.x o superior
npm --version     # 9.x o superior
ng version        # Angular CLI 20.x
```

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/GabrielPontesBT/Documentacion-API-Angular.git
cd Documentacion-API-Angular

# 2. Instalar dependencias
npm install
```

---

## Comandos principales

### Desarrollo

```bash
# Levantar servidor local (http://localhost:4200)
ng serve
# o equivalentemente:
npx ng serve
```

### Compilación

```bash
# Build de producción
ng build

# Build de desarrollo (sin optimizaciones, útil para depurar)
ng build --configuration=development
```

Los archivos compilados se generan en la carpeta `dist/`.

### Procesamiento de documentación

Estos comandos procesan los archivos Markdown de `scripts/` y generan los JSONs, la navegación y el índice de búsqueda que consume la aplicación.

```bash
# Procesar contenido V2/V3/BPay (.md → .json en assets)
npm run build:docs-content

# Procesar contenido V4 (.md → .json en assets)
npm run build:docs-content-v4

# Regenerar la navegación lateral (sidebar) para todas las versiones
npm run build:docs-navigation

# Regenerar el índice de búsqueda (search-index.json)
npm run build:docs-search

# Validar que todos los documentos tienen el formato correcto
npm run validate:docs

# Ejecutar todos los comandos anteriores en secuencia (atajo recomendado)
npm run build:docs

# Regenerar assets de releases (ejecutar por separado si se modifican releases)
npm run build:release-assets
```

> **Importante:** Cada vez que se agrega o modifica un archivo `.md`, ejecutar `npm run build:docs` para que los cambios se reflejen en la aplicación (contenido, navegación, búsqueda y validación en un solo paso). Solo `build:release-assets` queda fuera del atajo y debe correrse manualmente cuando se modifican datos de releases.

---

## Estructura del proyecto

```
├── scripts/
│   ├── V2R2/                    # Fuente de documentación — versión 2 release 2
│   ├── V2R3/                    # Fuente de documentación — versión 2 release 3
│   ├── V3R1/                    # Fuente de documentación — versión 3 release 1
│   ├── V4/                      # Fuente de documentación — versión 4
│   ├── BPay/                    # Fuente de documentación — BPay
│   ├── shared/                  # Archivos .md compartidos entre V2R2, V2R3 y V3R1
│   ├── build-docs-content.js    # Script: .md → .json para V2/V3/BPay
│   ├── build-docs-content-v4.js # Script: .md → .json para V4
│   ├── build-docs-navigation.js # Script: genera sidebars para todas las versiones
│   ├── build-docs-search.js     # Script: genera índice de búsqueda (search-index.json)
│   ├── build-release-assets.js  # Script: genera assets de releases
│   └── validate-docs.js         # Script: valida formato de los documentos
│
├── src/
│   ├── app/
│   │   ├── core/                # Modelos e interfaces de datos
│   │   ├── features/api-docs/   # Módulo principal de documentación
│   │   │   ├── components/      # Componentes reutilizables (tabs, tablas, código, etc.)
│   │   │   ├── pages/           # Páginas (doc-page, home)
│   │   │   └── services/        # Servicio de carga de documentos
│   │   ├── layout/              # Navbar, sidebar, layout principal
│   │   └── shared/              # Directivas y utilidades compartidas
│   │
│   ├── assets/
│   │   ├── docs/
│   │   │   ├── content/             # JSONs generados por build:docs-content / build:docs-content-v4
│   │   │   └── search-index.json    # Generado por build:docs-search
│   │   └── navigation/
│   │       ├── sidebar-v2r2.json    # Generados por build:docs-navigation
│   │       ├── sidebar-v2r3.json
│   │       ├── sidebar-v3r1.json
│   │       ├── sidebar-v4.json
│   │       └── sidebar-bpay.json
│   │
│   ├── styles/
│   │   └── _variables.scss      # Variables globales de diseño (colores, espaciados, etc.)
│   └── styles.scss              # Estilos globales
│
├── angular.json                 # Configuración del proyecto Angular
├── package.json                 # Dependencias y scripts npm
└── tsconfig.json                # Configuración de TypeScript
```

---

## Agregar un nuevo documento

1. Crear el archivo `.md` en la carpeta correspondiente:
   - V2/V3/BPay → `scripts/V2R2/`, `scripts/V2R3/`, `scripts/V3R1/` o `scripts/BPay/`
   - V4 → `scripts/V4/`
2. Ejecutar `npm run build:docs` para procesar el archivo (genera contenido, navegación, búsqueda y valida).
3. Verificar en `ng serve` que el documento aparezca en el sidebar y se renderice correctamente.

---

## Agregar un nuevo componente Angular

Si se crea un nuevo componente y se quiere usar en el módulo de documentación:

1. Generar el componente: `ng generate component features/api-docs/components/nombre-componente`
2. Abrir `src/app/features/api-docs/api-docs.module.ts`
3. Agregar el componente en el array `declarations` del `@NgModule`
4. Importarlo si es necesario en los templates que lo usen

---

## Versiones utilizadas

| Tecnología | Versión |
|---|---|
| Angular | 21 |
| Angular Material | 21 |
| TypeScript | 6.0 |
| Node.js (recomendado) | 22 LTS |
| zone.js | 0.16 |
| fuse.js | 7.1+ |
| prismjs | 1.30+ |
| ngx-markdown | 21.2+ |
| katex | 0.16+ |
| gray-matter | 4.0+ |
| flag-icons | 7.5+ |

---

## Dependencias del módulo de chat (ngx-markdown + KaTeX)

El renderizado del chat del Asistente IA utiliza `ngx-markdown` para procesar Markdown y `katex` para fórmulas matemáticas LaTeX. Estas dependencias se instalan junto con `npm install`, pero se documentan aquí por ser incorporadas en una integración posterior.

```bash
npm install katex ngx-markdown --save
```

Los estilos de KaTeX se cargan globalmente desde `angular.json`:
```json
"node_modules/katex/dist/katex.min.css"
```

Los lenguajes adicionales de Prism (TypeScript, Java, LaTeX) se importan en:
`src/app/features/api-docs/prism-highlight.directive.ts`
