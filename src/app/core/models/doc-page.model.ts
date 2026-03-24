/**
 * doc-page.model.ts
 *
 * Define la estructura de una página de documentación cargada desde JSON,
 * manteniendo compatibilidad con los componentes visuales históricos del proyecto.
 */

export interface DocTableRow {
  [key: string]: string;
}

export interface DocStructuredType {
  typeName: string;
  fields: DocTableRow[];
}

export interface DocValueTable {
  elementValName: string;
  listHeader: string;
  fields: DocTableRow[];
  description: string;
}

export interface DocExamples {
  invocation: {
    xml: string;
    json: string;
  };
  response: {
    xml: string;
    json: string;
  };
}

export interface DocPage {
  slug: string;
  pageTitle: string;
  description: string;
  pubName: string;
  programa: string;
  scope: string;
  hasBackendConfig: boolean;
  backendText: string;
  backendData: any[];
  inputData: DocTableRow[];
  outputData: DocTableRow[];
  errors: DocTableRow[];
  examples: DocExamples;
  structuredTypes: DocStructuredType[];
  valuesTable: DocValueTable[];
}
