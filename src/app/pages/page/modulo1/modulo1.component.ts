import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Validacion } from '../../interfaces/crucigrama.interface';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.scss']
})
export class Modulo1Component implements OnInit{

  validacion: Validacion = {
    validaciones: [
      { campo: '1_6', letra: 'D' },
      { campo: '2_8', letra: 'M' },
      { campo: '3_11', letra: 'E' },
      { campo: '5_6', letra: 'A' },
      { campo: '6_8', letra: 'C' },
      { campo: '7_14', letra: 'C' },
      { campo: '8_1', letra: 'R' },
      { campo: '9_1', letra: 'A' },
      { campo: '9_10', letra: 'B' },
      { campo: '12_9', letra: 'O' },
      { campo: '10_1', letra: 'I' },
      { campo: '11_1', letra: 'F' },
      { campo: '12_1', letra: 'F' },
      { campo: '13_1', letra: 'E' },
      { campo: '14_1', letra: 'I' },
      { campo: '15_1', letra: 'S' },
      { campo: '16_1', letra: 'E' },
      { campo: '17_1', letra: 'N' },
      { campo: '9_2', letra: 'L' },
      { campo: '9_3', letra: 'E' },
      { campo: '9_4', letra: 'M' },
      { campo: '9_5', letra: 'A' },
      { campo: '9_6', letra: 'N' },
      { campo: '9_7', letra: 'I' },
      { campo: '9_8', letra: 'A' },
      { campo: '2_6', letra: 'E' },
      { campo: '3_6', letra: 'S' },
      { campo: '4_6', letra: 'J' },
      { campo: '6_6', letra: 'R' },
      { campo: '7_6', letra: 'D' },
      { campo: '8_6', letra: 'I' },
      { campo: '10_6', letra: 'S' },
      { campo: '5_7', letra: 'C' },
      { campo: '3_8', letra: 'O' },
      { campo: '4_8', letra: 'L' },
      { campo: '5_8', letra: 'A' },
      { campo: '7_8', letra: 'C' },
      { campo: '6_9', letra: 'O' },
      { campo: '6_10', letra: 'L' },
      { campo: '6_11', letra: 'A' },
      { campo: '6_12', letra: 'C' },
      { campo: '4_11', letra: 'A' },
      { campo: '5_11', letra: 'L' },
      { campo: '7_11', letra: 'L' },
      { campo: '8_11', letra: 'E' },
      { campo: '10_11', letra: 'S' },
      { campo: '11_11', letra: 'C' },
      { campo: '13_11', letra: 'A' },
      { campo: '9_11', letra: 'B' },
      { campo: '9_12', letra: 'O' },
      { campo: '9_13', letra: 'L' },
      { campo: '9_14', letra: 'I' },
      { campo: '9_15', letra: 'V' },
      { campo: '9_16', letra: 'I' },
      { campo: '9_17', letra: 'A' },
      { campo: '9_18', letra: 'N' },
      { campo: '12_10', letra: 'W' },
      { campo: '12_11', letra: 'E' },
      { campo: '12_12', letra: 'B' },
      { campo: '8_14', letra: 'A' },
      { campo: '10_14', letra: 'P' },
      { campo: '11_14', letra: 'U' },
      { campo: '12_14', letra: 'L' },
      { campo: '13_14', letra: 'L' },
      { campo: '14_14', letra: 'I' },
    ]
  }


  //filas de tipo arreglo de numeros con un
  filas: number[] = Array.from({ length: 17 }, (_, index) => index + 1);

  columnas: number[] = Array.from({ length: 18 }, (_, index) => index + 1);

  placeholders: { [key: string]: number } = {
    '1_6': 1,
    '2_8': 2,
    '3_11': 3,
    '5_6': 4,
    '6_8': 5,
    '7_14': 6,
    '8_1': 7,
    '9_1': 8,
    '9_10': 9,
    '12_9': 10,
  };

  enable: string[] = [
    // Raiffeisen
    '10_1',
    '11_1',
    '12_1',
    '13_1',
    '14_1',
    '15_1',
    '16_1',
    '17_1',
    // lemania
    '9_2',
    '9_3',
    '9_4',
    '9_5',
    '9_6',
    '9_7',
    '9_8',
    // Desjardins
    '2_6',
    '3_6',
    '4_6',
    '6_6',
    '7_6',
    '8_6',
    '10_6',
    // C de aci
    '5_7',
    // mexico
    '3_8',
    '4_8',
    '5_8',
    '7_8',
    // olac
    '6_9',
    '6_10',
    '6_11',
    '6_12',
    // eliascalles
    '4_11',
    '5_11',
    '7_11',
    '8_11',
    '10_11',
    '11_11',
    '13_11',
    // babilonia
    '9_11',
    '9_12',
    '9_13',
    '9_14',
    '9_15',
    '9_16',
    '9_17',
    '9_18',
    // owen
    '12_10',
    '12_11',
    '12_12',
    // capulli
    '8_14',
    '10_14',
    '11_14',
    '12_14',
    '13_14',
    '14_14',
  ]


  constructor(private router: Router,
    private viewportScroller: ViewportScroller,
    private authService: AuthService) {}



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
    /* console.log(this.finalizadoP); */
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
