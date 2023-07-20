import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { Modulo1Component } from './pages/modulo1/modulo1.component';
import { PerfilComponent } from './shared/components/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
  },
  { path: '**', redirectTo: '' },
  /*{ path: 'contact', component: ContactComponent } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
