import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from './page/modulo1/modulo1.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { MainComponent } from './page/main/main.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'modulo-uno',
        component: Modulo1Component,
        pathMatch: 'full'
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'edit',
        component: EditPerfilComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class PagesRoutingModule { }
