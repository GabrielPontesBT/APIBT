import { Component, Input, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { ViewportScroller } from '@angular/common';

interface StructuredType {
  typeName: string;
  fields: any[];
  children?: StructuredType[];
}

@Component({
    selector: 'app-structured-data',
    templateUrl: './structured-data.component.html',
    styleUrls: ['./structured-data.component.scss'] // <- ¿esto está bien escrito?
    ,
    standalone: false
})
export class StructuredDataComponent implements OnChanges {
  @Input() types: StructuredType[] = [];

  /** Guarda qué panel (por id lowercase) está abierto */
  expandedMap: Record<string, boolean> = {};

  constructor(private viewport: ViewportScroller) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['types']) {
      this.expandedMap = {};
    }
  }

  /**
   * Atiende clicks en enlaces <a href="#fragment">:
   *   • Abre ese panel sin cerrar los demás
   *   • Después de la animación (~250ms), hace scroll
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const anchor = (event.target as HTMLElement)
      .closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    // Ignorar el link a #valores
    if (anchor.getAttribute('href') === '#valores') return; 

    event.preventDefault();

    const raw = anchor.getAttribute('href')!.slice(1);
    const fragment = raw.toLowerCase();

    // Sólo abrimos este panel, dejamos los demás como estaban
    this.expandedMap[fragment] = true;

    // Scroll suave justo después de la animación de Material
    setTimeout(() => {
      this.viewport.scrollToAnchor(fragment);
    }, 250);
  }

  /**
   * Sincroniza expandedMap si el usuario abre/cierra manualmente un panel
   * y hace scroll si acaba de abrirlo.
   */
  onExpansionChange(expanded: boolean, typeName: string) {
    const id = typeName.toLowerCase();
    this.expandedMap[id] = expanded;
    if (expanded) {
      setTimeout(() => {
        this.viewport.scrollToAnchor(id);
      }, 250);
    }
  }
}
