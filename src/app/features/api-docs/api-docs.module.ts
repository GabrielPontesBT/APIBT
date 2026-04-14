/**
 * api-docs.module.ts
 *
 * Declara y agrupa los componentes principales de la documentación de API,
 * incluyendo páginas, buscador y componentes visuales reutilizables,
 * junto con los módulos de Angular Material y Forms necesarios.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MarkdownModule } from 'ngx-markdown';
import { KatexRenderDirective } from './katex-render.directive';
import { PrismHighlightDirective } from './prism-highlight.directive';

import { ApiDocsRoutingModule } from './api-docs-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { DocPageComponent } from './pages/doc-page/doc-page.component';
import { ReleasesPageComponent } from './pages/releases/releases-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { BackendConfigComponent } from './components/backend-config/backend-config.component';
import { ApiTabsComponent } from './components/api-tabs/api-tabs.component';
import { ApiTableComponent } from './components/api-table/api-table.component';
import { ValsDataComponent } from './components/vals-data/vals-data.component';
import { StructuredDataComponent } from './components/structured-data/structured-data.component';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { ChatPopupComponent } from './components/chat-popup/chat-popup.component';
import { FooterSpaceComponent } from './components/footer-space/footer-space.component';

@NgModule({
  declarations: [
    HomeComponent,
    DocPageComponent,
    ReleasesPageComponent,
    SearchBoxComponent,
    PageHeaderComponent,
    InfoCardComponent,
    BackendConfigComponent,
    ApiTabsComponent,
    ApiTableComponent,
    ValsDataComponent,
    StructuredDataComponent,
    CodeExampleComponent,
    ChatPopupComponent,
    FooterSpaceComponent,
    KatexRenderDirective,
    PrismHighlightDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    ApiDocsRoutingModule,
    MarkdownModule
  ],
  exports: [
    SearchBoxComponent
  ]
})
export class ApiDocsModule {}
