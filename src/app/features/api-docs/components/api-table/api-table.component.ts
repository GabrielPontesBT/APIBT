import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-api-table', templateUrl: './api-table.component.html',
    styleUrls: ['./api-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})

export class ApiTableComponent {
  @Input() columns!: string[];
  @Input() data!: any[];
  @Input() wideSecondCol: boolean = false;

  private readonly _htmlCache = new Map<string, SafeHtml>();

  constructor(private sanitizer: DomSanitizer) {}

  safeHtml(value: string): SafeHtml {
    const key = value ?? '';
    if (!this._htmlCache.has(key)) {
      this._htmlCache.set(key, this.sanitizer.bypassSecurityTrustHtml(this._addWordBreaks(key)));
    }
    return this._htmlCache.get(key)!;
  }

  private _addWordBreaks(value: string): string {
    // Insert <wbr> only inside text nodes (not inside HTML tags)
    return value.replace(/(?<=>|^)([^<]+)(?=<|$)/g, text =>
      text
        .replace(/([a-z])([A-Z])/g, '$1<wbr>$2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1<wbr>$2')
    );
  }
}
