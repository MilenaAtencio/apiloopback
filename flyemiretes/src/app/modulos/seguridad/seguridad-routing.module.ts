import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../aeropuertos/create/create.component';
import { EditComponent } from '../aeropuertos/edit/edit.component';
import { GetComponent } from '../aeropuertos/get/get.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "logout",
    component: CerrarSesionComponent,
  },{
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },{
    path: 'get',
    component: GetComponent,
  },{
    path: '',
    redirectTo: 'get'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
