import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import katex from 'katex';

@Directive({
  selector: '[appRenderKatex]'
})
export class KatexRenderDirective implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      //console.log('🔍 Iniciando renderizado KaTeX...');
      this.renderKatex(this.el.nativeElement);
    }, 100);
  }

  private renderKatex(element: HTMLElement): void {
    const groups = this.getLatexTextGroups(element);

    //console.log('📦 Total de grupos KaTeX detectados:', groups.length);

    groups.forEach((group, idx) => {
      const rawText = group.rawText;
      //console.log(`🧩 Grupo[${idx}] Texto combinado: "${rawText}"`);

      // Regex para detectar expresión KaTeX
      const match = rawText.match(/\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/);

      if (!match) {
        //console.warn(`⚠️ Grupo[${idx}] No se encontró expresión KaTeX válida.`);
        return;
      }

      const expr = match[1] || match[2];
      const displayMode = !!match[1];

      //console.log(`✅ Grupo[${idx}] Expresión detectada: "${expr}", displayMode=${displayMode}`);

      const span = document.createElement('span');
      try {
        katex.render(expr, span, { displayMode, throwOnError: false });
        //console.log(`🎨 Grupo[${idx}] Renderizado KaTeX exitoso.`);
      } catch (err) {
        console.error(`❌ Grupo[${idx}] Error renderizando KaTeX:`, err);
        span.textContent = rawText; // fallback
      }

      const parent = group.nodes[0].parentNode;
      if (!parent) {
        //console.warn(`⚠️ Grupo[${idx}] Nodo padre no encontrado, se omite render.`);
        return;
      }

      // Eliminamos todos los nodos originales del grupo
      group.nodes.forEach(node => parent.removeChild(node));

      // Insertamos nodo renderizado al principio del grupo
      parent.insertBefore(span, parent.childNodes.item(0));
      //console.log(`➕ Grupo[${idx}] Nodo renderizado insertado.`);
    });
  }

  private getLatexTextGroups(element: HTMLElement): { nodes: Text[], rawText: string }[] {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
    const groups: { nodes: Text[], rawText: string }[] = [];
    let currentGroup: Text[] = [];
    let open = false;

    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      const text = node.textContent || '';
      //console.log('getLatexTextGroups currentText', text);

      if (!open) {
        // Abrimos grupo si encontramos inicio de KaTeX
        if (text.includes('\\[') || text.includes('\\(') || text === '[' || text === '(') {
          open = true;
          currentGroup.push(node);
          continue;
        }
      } else {
        currentGroup.push(node);
        // Cerramos grupo si encontramos fin de KaTeX
        if (text.includes('\\]') || text.includes('\\)') || text === ']' || text === ')') {
          const rawText = currentGroup.map(n => (['[', ']', '(', ')'].includes(n.textContent ?? '') ? `\\${n.textContent}` : n.textContent)).join('');
          //console.log('🧩 Grupo detectado rawText:', rawText);
          groups.push({ nodes: [...currentGroup], rawText });
          currentGroup = [];
          open = false;
        }
      }
    }

    //console.log('📦 Total grupos detectados KaTeX:', groups.length);
    return groups;
  }
}
