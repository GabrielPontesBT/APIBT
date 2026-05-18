import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { VersionService } from '../../../../core/services/version.service';

@Component({
    selector: 'app-api-tabs', templateUrl: './api-tabs.component.html',
    styleUrls: ['./api-tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class ApiTabsComponent {
  @Input() inputCols!: string[];
  @Input() inputData!: any[];
  @Input() bodyCols: string[] = [];
  @Input() bodyData: any[] = [];
  @Input() outputCols!: string[];
  @Input() outputData!: any[];
  @Input() errorCols!: string[];
  @Input() errors!: any[];
  @Input() errorsNote: string = '';
  @Input() flowDiagram: string = '';

  @ViewChild('lightboxDialog') lightboxDialog!: ElementRef<HTMLDialogElement>;

  constructor(private versionService: VersionService) {}

  get isV4(): boolean {
    return this.versionService.activeVersion === 'v4';
  }

  openLightbox(): void {
    this.lightboxDialog.nativeElement.showModal();
  }

  closeLightbox(event: MouseEvent): void {
    if (event.target === this.lightboxDialog.nativeElement) {
      this.lightboxDialog.nativeElement.close();
    }
  }
}
