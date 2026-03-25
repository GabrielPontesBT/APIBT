import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-api-table', templateUrl: './api-table.component.html',
    styleUrls: ['./api-table.component.scss'],
    standalone: false
})

export class ApiTableComponent {
  @Input() columns!: string[];
  @Input() data!: any[];

  constructor(private sanitizer: DomSanitizer) {}

  safeHtml(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value ?? '');
  }
}
