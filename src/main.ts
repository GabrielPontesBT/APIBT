import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// El inline script de index.html ya aplicó dark-mode al <html> antes del primer render.
// Aquí solo sincronizamos <body> cuando Angular está listo.
if (document.documentElement.classList.contains('dark-mode')) {
  document.body.classList.add('dark-mode');
}

platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], })
  .catch(err => console.error(err));
