import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './page/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { Modulo1Component } from './page/modulo1/modulo1.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { CrucigramaComponent } from './components/crucigrama/crucigrama.component';
import { Formm1Component } from './components/formm1/formm1.component';
import { FormsModule } from '@angular/forms';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';



@NgModule({
  declarations: [
    MainComponent,
    Modulo1Component,
    LayoutPageComponent,
    CrucigramaComponent,
    Formm1Component,
    EditPerfilComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule
  ],
  exports: [
    MainComponent,
  ]
})
export class PagesModule { }
