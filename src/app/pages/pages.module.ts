import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Modulo1Component } from './modulo1/modulo1.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    Modulo1Component,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    MainComponent,
  ]
})
export class PagesModule { }
