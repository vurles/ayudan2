import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComoAyudarComponent } from './componentes/como-ayudar/como-ayudar.component';
import { RegistroComponent } from './componentes/usuario/registro/registro.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { Error404Component } from './componentes/error404/error404.component';

const routes: Routes = [
  {path:'como-ayudar',component:ComoAyudarComponent},//esta es pag. principal "como home" 
  {path:'Registro',component:RegistroComponent},//la parte donde se registran
  {path:'login',component:LoginComponent},//puerta de entrada
  {path:'perfil',component:PerfilComponent},//perfil del usuario
  {path:'muro',component:ModalComponent},
  {path:'**',component:Error404Component}//esto es para mostrar error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
