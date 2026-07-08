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

export interface DocExampleTab {
  name: string;
  lang: string;
  code: string;
}

export interface DocExamples {
  invocation: {
    xml: string;
    json: string;
    tabs?: DocExampleTab[];
  };
  response: {
    xml: string;
    json: string;
    tabs?: DocExampleTab[];
  };
}

export interface DocPage {
  slug: string;
  pageTitle: string;
  description: string;
  pubName: string;
  modulo?: string;
  programa: string;
  scope: string;
  method?: string;
  endpoint?: string;
  hasBackendConfig: boolean;
  backendText: string;
  backendData: any[];
  inputCols?: string[];
  inputData: DocTableRow[];
  bodyCols?: string[];
  bodyData?: DocTableRow[];
  headersData?: DocTableRow[];
  headersNote?: string;
  inputNote?: string;
  bodyNote?: string;
  outputNote?: string;
  outputData: DocTableRow[];
  flowDiagram?: string;
  errors: DocTableRow[];
  errorsNote: string;
  examples: DocExamples;
  structuredTypes: DocStructuredType[];
  valuesTable: DocValueTable[];
  valuesBeforeStructuredTypes?: boolean;
}
