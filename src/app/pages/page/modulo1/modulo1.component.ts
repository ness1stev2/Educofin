import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.scss']
})
export class Modulo1Component implements OnInit{
  constructor(private router: Router, private viewportScroller: ViewportScroller, private authService: AuthService) {}



  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

  public display: string = ""
  public display2: string = ""
  public finalizadoP: Boolean = false;
  public contador: number = 10;
  public usuario = this.authService.user

  public receivedValue: boolean = false;

  receiveValue(value: boolean) {
    this.receivedValue = value;
  }
  finalizadoEvent(finalizado: boolean){
    this.finalizadoP = finalizado;
    console.log(this.finalizadoP);
    this.iniciarContador();
  }

  changeStyles(flex:string):void {
    // Cambiar los estilos al hacer clic en el botón
    if(flex === 'mostrarCrucigrama'){this.display = 'flex';}

    if(flex === 'mostrarFormulario'){this.display2 = 'flex';}

  }

  iniciarContador() {
    const interval = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);

    //con esta funcion determinamos un tiempo para realizar una tarea determinada
    setTimeout(() => {
      //en este caso mandamos a llamar la funcion redirigirAotraPagina() para hacerlo
      this.redirigirAotraPagina();
    }, 10000); // 10000 milisegundos = 10 segundos
  }

  redirigirAotraPagina() {
    this.router.navigate(['/']); // Cambia '/otra-pagina' por la ruta de la página a la que deseas redirigir
  }

}
