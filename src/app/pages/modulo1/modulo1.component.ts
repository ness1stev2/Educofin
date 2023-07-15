import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.css']
})
export class Modulo1Component {
  public display: string = ""
  public display2: string = ""


  changeStyles(flex:string) {
    // Cambiar los estilos al hacer clic en el botón
    if(flex === 'mostrarCrucigrama'){this.display = 'flex';}

    if(flex === 'mostrarFormulario'){this.display2 = 'flex';}
  }

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
    '12_9': 10
  };



}
