import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { letterValidator } from '../../interfaces/custom-validators';

@Component({
  selector: 'shared-crucigrama',
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.css']
})
export class CrucigramaComponent {
  myForm: FormGroup;

  @Input()
  display: string = '';
  showModal = false;
  showModalfinished = false;


  @Output() mostrarRetro = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      '1_6': ['D', [Validators.required, letterValidator('D')]],
      '2_8': ['M', [Validators.required, letterValidator('M')]],
      '3_11': ['E', [Validators.required, letterValidator('E')]],
      '5_6': ['A', [Validators.required, letterValidator('A')]],
      '6_8': ['C', [Validators.required, letterValidator('C')]],
      '7_14': ['C', [Validators.required, letterValidator('C')]],
      '8_1': ['R', [Validators.required, letterValidator('R')]],
      '9_1': ['A', [Validators.required, letterValidator('A')]],
      '9_10': ['B', [Validators.required, letterValidator('B')]],
      '12_9': ['O', [Validators.required, letterValidator('O')]],

      // Raiffeisen
      '10_1': ['I', [Validators.required, letterValidator('I')]],
      '11_1': ['F', [Validators.required, letterValidator('F')]],
      '12_1': ['F', [Validators.required, letterValidator('F')]],
      '13_1': ['E', [Validators.required, letterValidator('E')]],
      '14_1': ['I', [Validators.required, letterValidator('I')]],
      '15_1': ['S', [Validators.required, letterValidator('S')]],
      '16_1': ['E', [Validators.required, letterValidator('E')]],
      '17_1': ['N', [Validators.required, letterValidator('N')]],
      // lema: ['D', [Validators.required, letterValidator('D')]],ia
      '9_2': ['L', [Validators.required, letterValidator('L')]],
      '9_3': ['E', [Validators.required, letterValidator('E')]],
      '9_4': ['M', [Validators.required, letterValidator('M')]],
      '9_5': ['A', [Validators.required, letterValidator('A')]],
      '9_6': ['N', [Validators.required, letterValidator('N')]],
      '9_7': ['I', [Validators.required, letterValidator('I')]],
      '9_8': ['A', [Validators.required, letterValidator('A')]],
      // Desj: ['D', [Validators.required, letterValidator('D')]],rdins
      '2_6': ['E', [Validators.required, letterValidator('E')]],
      '3_6': ['S', [Validators.required, letterValidator('S')]],
      '4_6': ['J', [Validators.required, letterValidator('J')]],
      '6_6': ['R', [Validators.required, letterValidator('R')]],
      '7_6': ['D', [Validators.required, letterValidator('D')]],
      '8_6': ['I', [Validators.required, letterValidator('I')]],
      '10_6': ['S', [Validators.required, letterValidator('S')]],
      // : ['D', [Validators.required, letterValidator('D')]],
      '5_7': ['C', [Validators.required, letterValidator('C')]],
      '3_8': ['E', [Validators.required, letterValidator('E')]],
      '4_8': ['X', [Validators.required, letterValidator('X')]],
      '5_8': ['I', [Validators.required, letterValidator('I')]],
      '7_8': ['O', [Validators.required, letterValidator('O')]],
      // ola: ['D', [Validators.required, letterValidator('D')]],
      '6_9': ['O', [Validators.required, letterValidator('O')]],
      '6_10': ['L', [Validators.required, letterValidator('L')]],
      '6_11': ['A', [Validators.required, letterValidator('A')]],
      '6_12': ['C', [Validators.required, letterValidator('C')]],
      // elia: ['D', [Validators.required, letterValidator('D')]],calles
      '4_11': ['L', [Validators.required, letterValidator('L')]],
      '5_11': ['I', [Validators.required, letterValidator('I')]],
      '7_11': ['S', [Validators.required, letterValidator('S')]],
      '8_11': ['C', [Validators.required, letterValidator('C')]],
      '10_11': ['L', [Validators.required, letterValidator('L')]],
      '11_11': ['L', [Validators.required, letterValidator('L')]],
      '13_11': ['S', [Validators.required, letterValidator('S')]],
      // babi: ['D', [Validators.required, letterValidator('D')]],onia
      '9_11': ['A', [Validators.required, letterValidator('A')]],
      '9_12': ['B', [Validators.required, letterValidator('B')]],
      '9_13': ['I', [Validators.required, letterValidator('I')]],
      '9_14': ['L', [Validators.required, letterValidator('L')]],
      '9_15': ['O', [Validators.required, letterValidator('O')]],
      '9_16': ['N', [Validators.required, letterValidator('N')]],
      '9_17': ['I', [Validators.required, letterValidator('I')]],
      '9_18': ['A', [Validators.required, letterValidator('A')]],
      // owe: ['D', [Validators.required, letterValidator('D')]],
      '12_10': ['W', [Validators.required, letterValidator('W')]],
      '12_11': ['E', [Validators.required, letterValidator('E')]],
      '12_12': ['N', [Validators.required, letterValidator('N')]],
      // capu: ['D', [Validators.required, letterValidator('D')]],li
      '8_14': ['A', [Validators.required, letterValidator('A')]],
      '10_14': ['P', [Validators.required, letterValidator('P')]],
      '11_14': ['U', [Validators.required, letterValidator('U')]],
      '12_14': ['L', [Validators.required, letterValidator('L')]],
      '13_14': ['L', [Validators.required, letterValidator('L')]],
      '14_14': ['I', [Validators.required, letterValidator('I')]],
    });
  }

  cerrarPopup() {
    this.showModal = false;
    this.showModalfinished = false
  }

  onSave(): void {
    if (this.myForm.valid) {
      // Realiza alguna acción aquí si el formulario es válido
      console.log('Formulario válido. Se puede enviar.');
      this.mostrarRetro.emit(true);
      this.showModalfinished = true
    } else {
      console.log('Formulario inválido. No se puede enviar.');
      this.showModal = true;
    }

    console.log(this.myForm.value)
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


  checkInputValue(event: any) {
    const inputElement = event.target;
    if (!inputElement.value) {
      inputElement.classList.remove('has-value');
    } else {
      inputElement.classList.add('has-value');
    }
  }

}
