import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Aplica el tema antes de que Angular cargue para evitar el flash de tema incorrecto.
// Prioridad: preferencia guardada → preferencia del sistema → claro por defecto.
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
if (isDark) {
  document.documentElement.classList.add('dark-mode');
  document.body.classList.add('dark-mode');
}

platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], })
  .catch(err => console.error(err));
