import { Component, inject } from '@angular/core';
import { User } from 'src/app/auth/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  private authService = inject( AuthService );

  public usuario:User = this.authService.user;

  public name: string | null = localStorage.getItem('nombre')
  public nSocio: string | null = localStorage.getItem('socio')
  public correo: string | null = localStorage.getItem('email')

}
