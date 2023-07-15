import { Component } from '@angular/core';

@Component({
  selector: 'shared-crucigrama',
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.css']
})
export class CrucigramaComponent {

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
 /*
  //PALABRAS VERTICALES
// Arreglo de letras de cada palabra
const palabras: string[][] = [
  //PALABRA 1 VERTICAL (DESJARDINS)
  ["fila1C6"],
  ["fila2C6"],
  ["fila3C6"],
  ["fila4C6"],
  ["fila5C6"],
  ["fila6C6"],
  ["fila7C6"],
  ["fila8C6"],
  ["fila9C6"],
  ["fila10C6"],
  //PALABRA 2 VERTICAL (MEXICO)
  ["fila2C8"],
  ["fila3C8"],
  ["fila4C8"],
  ["fila5C8"],
  ["fila6C8"],
  ["fila7C8"],
  //PALABRA 3 VERTICAL (ELIASCALLES)
  ["fila3C11"],
  ["fila4C11"],
  ["fila5C11"],
  ["fila6C11"],
  ["fila7C11"],
  ["fila8C11"],
  ["fila9C11"],
  ["fila10C11"],
  ["fila11C11"],
  ["fila12C11"],
  ["fila13C11"],
  //PALABRA 6 (CALPULLI)
  ["fila7C14"],
  ["fila8C14"],
  ["fila9C14"],
  ["fila10C14"],
  ["fila11C14"],
  ["fila12C14"],
  ["fila13C14"],
  ["fila14C14"],
  //PALABRA 7 (RAIFFEISEN)
  ["fila8C1"],
  ["fila9C1"],
  ["fila10C1"],
  ["fila11C1"],
  ["fila12C1"],
  ["fila13C1"],
  ["fila14C1"],
  ["fila15C1"],
  ["fila16C1"],
  ["fila17C1"]
];

// Habilitar las casillas necesarias (VERTICALES)
for (let i = 0; i < palabras.length; i++) {
  const letras = palabras[i];
  for (let j = 0; j < letras.length; j++) {
    const letra = document.getElementById(letras[j]);
    if (letra) {
      letra.readOnly = false;
    }
  }
}

//HORIZONTALES
const palabrasH: string[][] = [
  //PALABRA 4 HORIZONTAL (ACI)
  ["fila5C6"],
  ["fila5C7"],
  ["fila5C8"],
  //PALABRA 5 HORIZONTAL (COLAC)
  ["fila6C8"],
  ["fila6C9"],
  ["fila6C10"],
  ["fila6C11"],
  ["fila6C12"],
  //PALABRA 8 HORIZONTAL (ALEMANIA)
  ["fila9C1"],
  ["fila9C2"],
  ["fila9C3"],
  ["fila9C4"],
  ["fila9C5"],
  ["fila9C6"],
  ["fila9C7"],
  ["fila9C8"],
  //PALABRA 9 HORIZONTAL (BABILONIA)
  ["fila9C10"],
  ["fila9C11"],
  ["fila9C12"],
  ["fila9C13"],
  ["fila9C14"],
  ["fila9C15"],
  ["fila9C16"],
  ["fila9C17"],
  ["fila9C18"],
  //PALABRA 10 HORIZONTAL (OWEN)
  ["fila12C9"],
  ["fila12C10"],
  ["fila12C11"],
  ["fila12C12"]
];

//Habilitar las casillas necesarias (Horizontales)
for (let i = 0; i < palabrasH.length; i++) {
  const letras = palabrasH[i];
  for (let j = 0; j < letras.length; j++) {
    const letra = document.getElementById(letras[j]);
    if (letra) {
      letra.readOnly = false;
    }
  }
} */


}
