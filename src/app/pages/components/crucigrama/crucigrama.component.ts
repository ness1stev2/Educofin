import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { letterValidator } from '../../interfaces/custom-validators';
import { NgStyle, NgFor, NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'shared-crucigrama',
    templateUrl: './crucigrama.component.html',
    styleUrls: ['./crucigrama.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgStyle, NgFor, NgIf, NgClass]
})
export class CrucigramaComponent {

  myForm: FormGroup;
  finalizadoP: boolean = false;
  public submitted: boolean = false;

  @Input()
  display: string = '';
  showModal = false;
  showModalfinished = false;
  respSelec: boolean[] = new Array(60).fill(false);

  @Output() mostrarRetro = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      '1_6': ['', [Validators.required, letterValidator('D')]],
      '2_8': ['', [Validators.required, letterValidator('M')]],
      '3_11': ['', [Validators.required, letterValidator('E')]],
      '5_6': ['', [Validators.required, letterValidator('A')]],
      '6_8': ['', [Validators.required, letterValidator('C')]],
      '7_14': ['', [Validators.required, letterValidator('C')]],
      '8_1': ['', [Validators.required, letterValidator('R')]],
      '9_1': ['', [Validators.required, letterValidator('A')]],
      '9_10': ['', [Validators.required, letterValidator('B')]],
      '12_9': ['', [Validators.required, letterValidator('O')]],

      // Raiffeisen
      '10_1': ['', [Validators.required, letterValidator('I')]],
      '11_1': ['', [Validators.required, letterValidator('F')]],
      '12_1': ['', [Validators.required, letterValidator('F')]],
      '13_1': ['', [Validators.required, letterValidator('E')]],
      '14_1': ['', [Validators.required, letterValidator('I')]],
      '15_1': ['', [Validators.required, letterValidator('S')]],
      '16_1': ['', [Validators.required, letterValidator('E')]],
      '17_1': ['', [Validators.required, letterValidator('N')]],
      // lema: ['', [Validators.required, letterValidator('D')]],ia
      '9_2': ['', [Validators.required, letterValidator('L')]],
      '9_3': ['', [Validators.required, letterValidator('E')]],
      '9_4': ['', [Validators.required, letterValidator('M')]],
      '9_5': ['', [Validators.required, letterValidator('A')]],
      '9_6': ['', [Validators.required, letterValidator('N')]],
      '9_7': ['', [Validators.required, letterValidator('I')]],
      '9_8': ['', [Validators.required, letterValidator('A')]],
      // Desj: ['', [Validators.required, letterValidator('D')]],rdins
      '2_6': ['', [Validators.required, letterValidator('E')]],
      '3_6': ['', [Validators.required, letterValidator('S')]],
      '4_6': ['', [Validators.required, letterValidator('J')]],
      '6_6': ['', [Validators.required, letterValidator('R')]],
      '7_6': ['', [Validators.required, letterValidator('D')]],
      '8_6': ['', [Validators.required, letterValidator('I')]],
      '10_6': ['', [Validators.required, letterValidator('S')]],
      // : ['', [Validators.required, letterValidator('D')]],
      '5_7': ['', [Validators.required, letterValidator('C')]],
      '3_8': ['', [Validators.required, letterValidator('E')]],
      '4_8': ['', [Validators.required, letterValidator('X')]],
      '5_8': ['', [Validators.required, letterValidator('I')]],
      '7_8': ['', [Validators.required, letterValidator('O')]],
      // ola: ['', [Validators.required, letterValidator('D')]],
      '6_9': ['', [Validators.required, letterValidator('O')]],
      '6_10': ['', [Validators.required, letterValidator('L')]],
      '6_11': ['', [Validators.required, letterValidator('A')]],
      '6_12': ['', [Validators.required, letterValidator('C')]],
      // elia: ['', [Validators.required, letterValidator('D')]],calles
      '4_11': ['', [Validators.required, letterValidator('L')]],
      '5_11': ['', [Validators.required, letterValidator('I')]],
      '7_11': ['', [Validators.required, letterValidator('S')]],
      '8_11': ['', [Validators.required, letterValidator('C')]],
      '10_11': ['', [Validators.required, letterValidator('L')]],
      '11_11': ['', [Validators.required, letterValidator('L')]],
      '13_11': ['', [Validators.required, letterValidator('S')]],
      // babi: ['', [Validators.required, letterValidator('D')]],onia
      '9_11': ['', [Validators.required, letterValidator('A')]],
      '9_12': ['', [Validators.required, letterValidator('B')]],
      '9_13': ['', [Validators.required, letterValidator('I')]],
      '9_14': ['', [Validators.required, letterValidator('L')]],
      '9_15': ['', [Validators.required, letterValidator('O')]],
      '9_16': ['', [Validators.required, letterValidator('N')]],
      '9_17': ['', [Validators.required, letterValidator('I')]],
      '9_18': ['', [Validators.required, letterValidator('A')]],
      // owe: ['', [Validators.required, letterValidator('D')]],
      '12_10': ['', [Validators.required, letterValidator('W')]],
      '12_11': ['', [Validators.required, letterValidator('E')]],
      '12_12': ['', [Validators.required, letterValidator('N')]],
      // capu: ['', [Validators.required, letterValidator('D')]],li
      '8_14': ['', [Validators.required, letterValidator('A')]],
      '10_14': ['', [Validators.required, letterValidator('P')]],
      '11_14': ['', [Validators.required, letterValidator('U')]],
      '12_14': ['', [Validators.required, letterValidator('L')]],
      '13_14': ['', [Validators.required, letterValidator('L')]],
      '14_14': ['', [Validators.required, letterValidator('I')]],
    });
  }

  cerrarPopup() {
    this.showModal = false;
    this.showModalfinished = false
  }

  onSave(): void {
    this.submitted = true
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

  @Input() filas!: number[] ;
  @Input() columnas!: number[];
  @Input() placeholders!: { [key: string]: number };
  @Input() enable: string[] = [];


  evaluarRespuesta(input: string): boolean {
    console.log('Valor recibido en evaluarRespuesta:', input);
    if (this.myForm.get(input)?.valid && this.submitted) {
      if (this.myForm.valid) {
        this.finalizadoP = true;
      }
      return true;
    } else if (this.submitted) {
      return false;
    }
    return false; // Cambia undefined por false
}

}
