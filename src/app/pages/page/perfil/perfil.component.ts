import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public name: string | null = localStorage.getItem('nombre')
  public nSocio: string | null = localStorage.getItem('socio')
  public correo: string | null = localStorage.getItem('email')

}
