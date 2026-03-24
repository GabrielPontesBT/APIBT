import { Component, Input, HostListener } from '@angular/core';

@Component({
    selector: 'app-vals-data',
    templateUrl: './vals-data.component.html',
    styleUrls: ['./vals-data.component.scss'],
    standalone: false
})
export class ValsDataComponent {
  @Input() types: { elementValName: string; listHeader: string; description?: string; fields: any[] }[] = [];

  // Estado de expansión por panel, índice 0 = primer panel
  expandedMap: Record<number, boolean> = {};

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const anchor = (event.target as HTMLElement)
      .closest('a[href^="#valores"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    event.preventDefault();

    const rawId = anchor.getAttribute('href')!.slice(1); // "valores", "valores1", etc.

    // Determinar el índice interno del panel
    let index: number;
    if (rawId === 'valores') {
      index = 0; // primer panel o único
    } else {
      index = parseInt(rawId.replace('valores', ''), 10) - 1; // "valores1" → 0, "valores2" → 1
    }

    // Forzar cierre y re-apertura para disparar animación
    this.expandedMap[index] = false;
    setTimeout(() => {
      this.expandedMap[index] = true;

      // Scroll suave al panel
      document.getElementById(rawId)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }
}
