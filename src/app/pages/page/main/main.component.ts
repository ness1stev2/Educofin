import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/page.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'pages-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{


  //Se inyecta el servicio para poder utilizarlo
  constructor(
    private authService: AuthService
  ) { }

  get user(): Usuario | undefined{
    return this.authService.currentUser
  }

}
