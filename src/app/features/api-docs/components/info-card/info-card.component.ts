import { Component, Input } from '@angular/core';

@Component({ selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'] })
export class InfoCardComponent {
  @Input() description!: string;
  @Input() pubName!: string;
  @Input() programa!: string;
  @Input() scope!: string;
}
