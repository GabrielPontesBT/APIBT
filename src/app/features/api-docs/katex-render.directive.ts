import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import katex from 'katex';

@Directive({
  selector: '[appRenderKatex]',
  standalone: false
})
export class KatexRenderDirective implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderKatex(this.el.nativeElement);
    }, 100);
  }

  private renderKatex(element: HTMLElement): void {
    const groups = this.getLatexTextGroups(element);

    groups.forEach((group, idx) => {
      const rawText = group.rawText;

      const match = rawText.match(/\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)/);

      if (!match) return;

      const expr = match[1] || match[2];
      const displayMode = !!match[1];

      const span = document.createElement('span');
      try {
        katex.render(expr, span, { displayMode, throwOnError: false });
      } catch (err) {
        console.error(`Error renderizando KaTeX [grupo ${idx}]:`, err);
        span.textContent = rawText;
      }

      const parent = group.nodes[0].parentNode;
      if (!parent) return;

      group.nodes.forEach(node => parent.removeChild(node));
      parent.insertBefore(span, parent.childNodes.item(0));
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

      if (!open) {
        if (text.includes('\\[') || text.includes('\\(') || text === '[' || text === '(') {
          open = true;
          currentGroup.push(node);
          continue;
        }
      } else {
        currentGroup.push(node);
        if (text.includes('\\]') || text.includes('\\)') || text === ']' || text === ')') {
          const rawText = currentGroup.map(n => (['[', ']', '(', ')'].includes(n.textContent ?? '') ? `\\${n.textContent}` : n.textContent)).join('');
          groups.push({ nodes: [...currentGroup], rawText });
          currentGroup = [];
          open = false;
        }
      }
    }

    return groups;
  }
}
