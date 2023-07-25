import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-crucigrama',
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.css']
})
export class CrucigramaComponent{

  @Input()
  display: string = '';


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
    '8_1',
    '9_1',
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
    '1_6',
    '2_6',
    '3_6',
    '4_6',
    '5_6',
    '6_6',
    '7_6',
    '8_6',
    '10_6',
    // C de aci
    '5_7',
    // mexico
    '2_8',
    '3_8',
    '4_8',
    '5_8',
    '6_8',
    '7_8',
    // olac
    '6_9',
    '6_10',
    '6_11',
    '6_12',
    // eliascalles
    '3_11',
    '4_11',
    '5_11',
    '7_11',
    '8_11',
    '10_11',
    '11_11',
    '13_11',
    // babilonia
    '9_10',
    '9_11',
    '9_12',
    '9_13',
    '9_14',
    '9_15',
    '9_16',
    '9_17',
    '9_18',
    // owen
    '12_9',
    '12_10',
    '12_11',
    '12_12',
    // capulli
    '7_14',
    '8_14',
    '10_14',
    '11_14',
    '12_14',
    '13_14',
    '14_14',
  ]





}
