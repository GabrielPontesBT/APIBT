import 'prismjs';
import 'prismjs/components/prism-typescript';  // o prism-javascript, prism-scss, etc.
// src/app/shared/prism-highlight.directive.ts
import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
declare var Prism: any;

@Directive({
  selector: '[prism]'
})
export class PrismHighlightDirective implements AfterViewInit {
  @Input() prism!: string;  // opcional: para forzar re-highlight cuando cambie

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    Prism.highlightElement(this.el.nativeElement);
  }
}
