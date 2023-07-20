import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { Formm1Component } from './components/formm1/formm1.component';
import { CrucigramaComponent } from './components/crucigrama/crucigrama.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PerfilComponent,
    Formm1Component,
    CrucigramaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    Formm1Component,
    CrucigramaComponent
  ]
})
export class SharedModule { }
