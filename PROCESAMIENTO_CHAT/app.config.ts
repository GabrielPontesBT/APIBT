import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MARKED_OPTIONS, type MarkedOptions, MarkedRenderer, provideMarkdown } from 'ngx-markdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApiInterceptor } from './services/api/api.interceptor';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import Prism from 'prismjs';

import 'prismjs/components/prism-json';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-latex';
//import 'prismjs/themes/prism-tomorrow.css';
import { provideNgxFloatUiOptions } from 'ngx-float-ui';

// Function for loading translation files
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const markedOptionsFactory = (): MarkedOptions => {
  const renderer = new MarkedRenderer();

  renderer.link = ({ href, text }: {href:string,text:string}): string => {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: true,
    pedantic: false
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideNgxFloatUiOptions({
      positionFixed: true
    }),
    ...TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!,
    provideMarkdown({ markedOptions: { provide: MARKED_OPTIONS, useFactory: markedOptionsFactory } }),
    provideHttpClient(withInterceptorsFromDi()), // Enables DI-based interceptors
    {  // Register the interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ]
};

// Aplicar Prism.js globalmente
Prism.highlightAll();