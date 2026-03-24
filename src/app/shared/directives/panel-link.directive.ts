// src/app/shared/directives/panel-link.directive.ts
import { Directive, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Directive({
  selector: '[appPanelLink]'
})
export class PanelLinkDirective {
  /** recibirá el mismo id que el atributo del panel */
  @Input('appPanelLink') panelId!: string;

  constructor(public panel: MatExpansionPanel) {}
}
