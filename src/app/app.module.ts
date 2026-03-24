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

// ⬇️ NUEVO: registrar la estrategia de título
import { TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from './app-title.strategy'; // asegúrate de tener este archivo
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
        LayoutModule], providers: [
        Title, // servicio Title para que la estrategia pueda setearlo
        { provide: TitleStrategy, useClass: AppTitleStrategy }, // ⬅️ estrategia global "API | ..."
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule {}
