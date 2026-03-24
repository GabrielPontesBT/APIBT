# Documentación Servicios Bantotal

## Instalación Previa
Antes de trabajar con la documentación se necesita instalar lo siguiente:
| Herramienta | Versión |
|----------|-------------|
| `Angular CLI` | 16.2.16 |
| `Node` | 18.20.8 |

Hay que tener instalado grey-matter -> npm install gray-matter --save-dev

## Comandos Clave
Comandos útiles para trabajar con la documentación:
| Comando | Descripción |
|----------|-------------|
| `ng serve` o `npx ng serve` | Levanta la documentación en el navegador local |
| `npm run build` | Compila la aplicación e instala todas las extensiones faltantes. Genera el index.json el cual utiliza el buscador|
| `node scripts/md-to-ts.js` | Ejecuta el script md-to-ts.js [(Mas información)](#archivos-auxiliares-js)|
| `node scripts/generate-pages.js` | Ejecuta el script generate-pages.js [(Mas información)](#archivos-auxiliares-js)|

## Consideraciones
Al momento de armar una nueva documentación en el formato (CUAL FORMATO VAMOS A USAR PARA LAS NUEVAS?) hay que tener en cuenta lo siguiente:
1. Si el servicio es de una plaza especifica
2. Si tiene SDTs
3. Simpre poner el backend []
4. bla bla

## Funcionalidad de Carpetas
Las carpetas de la documentación tienen las siguientes funcionalidades:
| Carpeta | Descripción |
|----------|-------------|
| `scripts/archivos_markdown` | En esta se encuentran todos los servicios con sus métodos en formato Markdown(.md) |
| `src/app/core/features/api-docs/api-doc-page` | Es donde se encuentran todos los servicios con sus métodos en formato TypeScript(.ts). Estos archivos son los que consume el comando ng serve|
| `scripts/generated_ts` | Es la carpeta donde se generan los archivos TypeScript(.ts) luego de ejecutar el comando node scripts/md-to-ts.js|

## Archivos auxiliares JS
Los archivos auxiliares que tenemos para trabajar con la documentación son:
| Archivo | Descripción |
|----------|-------------|
| `md-to-ts.js` | Transforma los archivos .md en .ts que es el nuevo formato para la documentación en Angular|
| `generate-pages.js` | Se encarga de genera el index, la sidebar y el enrutamiento de las paginas de los servicios. El mismo se llama automáticamente desde el npm run build|


## Agregar un nuevo componente
En el archiv api-docs.module.ts
si se agrega un nuevo componente hay que importar el modulo (el nombre es el del export class en el .ts) - y agregarlo en la declaración en el @NgModule({ luego del comentario //declarations End page components
