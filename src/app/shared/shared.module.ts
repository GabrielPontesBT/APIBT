// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorScrollDirective } from './directives/anchor-scroll.directive';
@NgModule({
  declarations: [
    AnchorScrollDirective,
  ],
  exports: [
    AnchorScrollDirective,
  ],
  imports: [ CommonModule ]
})
export class SharedModule { }
