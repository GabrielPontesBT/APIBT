/**
 * navigation-node.model.ts
 *
 * Define la estructura base de cada nodo del sidebar de documentación,
 * permitiendo representar carpetas y archivos con labels visibles,
 * slugs técnicos y nodos hijos.
 */

export interface NavigationNode {
  type: 'folder' | 'file';
  label: string;
  slug: string;
  pageTitle?: string;
  isNew?: boolean;
  children?: NavigationNode[];
}
