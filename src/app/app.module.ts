import { LOCALE_ID, NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

// cambiar el locale de la app -- cambiar idioma en toda la aplición 
// importar idioma
import localeEs from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';

// importar funcion para registrar idioma
import { registerLocaleData } from '@angular/common';

//registrar idioma en la funcion
registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VentasModule
  ],
  providers: [

    // aplicar idioma desde la raiz en la app
    { provide: LOCALE_ID, useValue: 'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
