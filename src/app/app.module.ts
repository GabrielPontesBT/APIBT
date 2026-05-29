import { ErrorHandler, NgModule } from '@angular/core';
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
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';

class AppErrorHandler extends ErrorHandler {
  override handleError(error: unknown): void {
    if (error instanceof DOMException && error.name === 'InvalidStateError') return;
    super.handleError(error);
  }
}

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
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        { provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true } },
        { provide: ErrorHandler, useClass: AppErrorHandler }
    ] })
export class AppModule {}
