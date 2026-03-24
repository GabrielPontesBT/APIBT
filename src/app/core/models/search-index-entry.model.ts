/**
 * search-index-entry.model.ts
 *
 * Define la estructura base de cada entrada del índice de búsqueda de la
 * documentación, incluyendo metadatos visibles y el texto consolidado que
 * permite filtrar resultados desde el frontend.
 */

export interface SearchIndexEntry {
  slug: string;
  pageTitle: string;
  description: string;
  pubName: string;
  programa: string;
  scope: string;
  keywords: string[];
  searchableText: string;
  sourceFile: string;
}
