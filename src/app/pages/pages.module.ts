import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './page/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Modulo1Component } from './page/modulo1/modulo1.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { CrucigramaComponent } from './components/crucigrama/crucigrama.component';
import { Formm1Component } from './components/formm1/formm1.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';
import { ActividadM1Component } from './components/actividad-m1/actividad-m1.component';
import { Modulo2Component } from './page/modulo2/modulo2.component';



@NgModule({
  declarations: [
    MainComponent,
    Modulo1Component,
    LayoutPageComponent,
    CrucigramaComponent,
    Formm1Component,
    EditPerfilComponent,
    ActividadM1Component,
    Modulo2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent,
  ]
})
export class PagesModule { }
