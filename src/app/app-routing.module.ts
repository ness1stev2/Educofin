import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { Modulo1Component } from './pages/modulo1/modulo1.component';
import { PerfilComponent } from './shared/components/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: MainComponent },
  { path: 'modulo1', component: Modulo1Component },
  { path: 'perfil', component: PerfilComponent },
  /*{ path: 'contact', component: ContactComponent } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
