
// src/app/shared/pipes/markdown-link.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml }  from '@angular/platform-browser';

@Pipe({ name: 'markdownLink' })
export class MarkdownLinkPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) return '';
    // Regex: [Texto](url)
    const html = value.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_match, text, url) => `<a href="${url}">${text}</a>`
    );
    // Marcar como HTML seguro
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
