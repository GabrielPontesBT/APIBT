// src/app/shared/directives/anchor-scroll.directive.ts
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAnchorScroll]'
})
export class AnchorScrollDirective {
  @Output() anchorClick = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const el = event.target as HTMLElement;
    const href = el.getAttribute('href') ?? '';
    if (el.tagName === 'A' && href.startsWith('#')) {
      event.preventDefault();
      const id = href.slice(1);
      // 1) emitimos el id para que el componente padre lo use
      this.anchorClick.emit(id);
      // 2) scroll suave
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
