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

Estos comandos procesan los archivos Markdown de `scripts/archivos-markdown/` y generan los JSONs y archivos de navegación que consume la aplicación.

```bash
# Procesar contenido de los documentos (.md → .json en assets)
npm run build:docs-content

# Regenerar la navegación lateral (sidebar)
npm run build:docs-navigation

# Regenerar el índice de búsqueda
npm run build:docs-search

# Validar que todos los documentos tienen el formato correcto
npm run validate:docs

# Ejecutar los 3 primeros pasos en secuencia (contenido + navegación + validación)
npm run build:docs
```

> **Importante:** Cada vez que se agrega o modifica un archivo `.md` en `scripts/archivos-markdown/`, hay que ejecutar `npm run build:docs` para que los cambios se reflejen en la aplicación.

---

## Estructura del proyecto

```
├── scripts/
│   ├── archivos-markdown/       # Fuente de la documentación en formato Markdown
│   ├── build-docs-content.js    # Script: .md → .json (assets)
│   ├── build-docs-navigation.js # Script: genera sidebar y rutas
│   ├── build-docs-search.js     # Script: genera índice de búsqueda
│   ├── validate-docs.js         # Script: valida formato de los documentos
│   └── generate-pages.js        # Script auxiliar de generación
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
│   │   └── docs/
│   │       ├── content/         # JSONs generados por build:docs-content
│   │       ├── navigation.json  # Generado por build:docs-navigation
│   │       └── search-index.json# Generado por build:docs-search
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

1. Crear el archivo `.md` en la carpeta correspondiente dentro de `scripts/archivos-markdown/`.
2. Ejecutar `npm run build:docs` para procesar el archivo.
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
| gray-matter | 4.0+ |
| flag-icons | 7.5+ |
