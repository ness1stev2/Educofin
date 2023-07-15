import { Component } from '@angular/core';
import { PagesService } from '../service/pages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  nombre: string = 'Nombre_de_usuario';
  apellidos: string = 'Apellidos_de_usuario';
  numeroSocio: string = 'Numero_de_socio';
  email: string = 'correo@socio.com';
  contraseña: string = '';

  constructor(private pagesService:PagesService ) { }

  agregarMiembro(): void {
    this.pagesService.addMember(this.nombre, this.apellidos, this.numeroSocio, this.email, this.contraseña);
    // Restablecer los valores de los campos después de agregar el miembro
    this.nombre = '';
    this.apellidos = '';
    this.numeroSocio = '';
    this.email = '';
    this.contraseña = '';
  }
}
