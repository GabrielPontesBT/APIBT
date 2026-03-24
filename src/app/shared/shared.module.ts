// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorScrollDirective } from './directives/anchor-scroll.directive';
import { MarkdownLinkPipe } from './pipes/markdown-link.pipe';
import { PanelLinkDirective } from './directives/panel-link.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelLinkDirective,
    AnchorScrollDirective,
    MarkdownLinkPipe
  ],
  exports: [
    PanelLinkDirective,
    AnchorScrollDirective,
    MarkdownLinkPipe
  ],
  imports: [ CommonModule, FormsModule ]
})
export class SharedModule { }
