import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../service/pages.service';
import { Usuario } from '../../interfaces/page.interface';

@Component({
  selector: 'pages-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  // Se crea una propiedad usarios de tipo Usuarios[]
  public usuarios: Usuario[] = []

  //Se inyecta el servicio para poder utilizarlo
  constructor(private pagesService: PagesService) { }


  // se implementa para realizar cualquier trabajo de configuración o inicialización necesario
  ngOnInit(): void {
    //traermos al usuario por medio del metodo y nos suscribimos al observable
    this.pagesService.getUser()
    .subscribe( usarios => this.usuarios = usarios );
  }


}
