import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAyudaComponent } from './componentes/comun/lista-ayuda/lista-ayuda.component';
import { ComoAyudarComponent } from './componentes/como-ayudar/como-ayudar.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';
import { Error404Component } from './componentes/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAyudaComponent,
    ComoAyudarComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
