import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './modulos/usuarios/contactos/usuarios/usuarios.component';
import { ContactosComponent } from './modulos/usuarios/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
