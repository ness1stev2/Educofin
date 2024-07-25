import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'done-module',
  standalone: true,
  imports: [],
  templateUrl: './done-module.component.html',
  styles: ``
})
export class DoneModuleComponent implements OnInit {
  @Input() noModulo: string = "0";
  public contador: number = 10;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.iniciarContador();
  }

  iniciarContador() {
    const interval = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => {
      //en este caso mandamos a llamar la funcion redirigirAotraPagina() para hacerlo
      this.redirigir();
    }, 10000); // 10000 milisegundos = 10 segundos
  }

  redirigir() {
    this.router.navigate(['/']); // Cambia '/otra-pagina' por la ruta de la página a la que deseas redirigir
  }
}
