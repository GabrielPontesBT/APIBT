import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';

import { TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from './app-title.strategy';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MARKED_OPTIONS, MarkedOptions, MarkedRenderer, MarkdownModule } from 'ngx-markdown';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
  renderer.link = ({ href, text }: { href: string; text: string }): string => {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  return { renderer, gfm: true, breaks: true };
}

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        AppRoutingModule,
        FormsModule,
        LayoutModule,
        MarkdownModule.forRoot({
          markedOptions: {
            provide: MARKED_OPTIONS,
            useFactory: markedOptionsFactory
          }
        })
    ], providers: [
        Title, // servicio Title para que la estrategia pueda setearlo
        { provide: TitleStrategy, useClass: AppTitleStrategy }, // ⬅️ estrategia global "API | ..."
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}
