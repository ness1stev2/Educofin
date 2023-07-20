import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

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
    '12_9': 10
  };
  enable: string[] = [
    '10_1',
    '11_1',
    '12_1',
    '13_1',
    '14_1',
    '15_1',
    '16_1',
    '17_1',
  ]





}
