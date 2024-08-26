import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { letterValidator } from '../../interfaces/custom-validators';
import { NgStyle, NgFor, NgIf, NgClass } from '@angular/common';
import { DoneModuleComponent } from "../done-module/done-module.component";

@Component({
    selector: 'app-crucigrama-act2',
    templateUrl: './crucigrama-act2.component.html',
    styleUrls: ['./crucigrama-act2.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgStyle, NgFor, NgIf, NgClass, DoneModuleComponent]
})
export class CrucigramaAct2Component {
  myForm2: FormGroup;

  @Input()
  display: string = '';

  public finalizadoP: boolean = false;

  showModal = false;
  showModalfinished = false;
  respSelec: boolean[] = new Array(60).fill(false);

  @Output() mostrarRetro = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.myForm2 = this.fb.group({
      '1_3': ['', [Validators.required, letterValidator('D')]],
      '1_9': ['', [Validators.required, letterValidator('A')]],
      '3_3': ['', [Validators.required, letterValidator('S')]],
      '4_6': ['', [Validators.required, letterValidator('S')]],
      '4_8': ['', [Validators.required, letterValidator('C')]],
      '5_1': ['', [Validators.required, letterValidator('S')]],
      '6_8': ['', [Validators.required, letterValidator('S')]],
      '9_3': ['', [Validators.required, letterValidator('I')]],
      '11_4': ['', [Validators.required, letterValidator('P')]],
      '13_5': ['', [Validators.required, letterValidator('V')]],


      '1_4': ['', [Validators.required, letterValidator('E')]],
      '1_5': ['', [Validators.required, letterValidator('M')]],
      '1_6': ['', [Validators.required, letterValidator('O')]],
      '1_7': ['', [Validators.required, letterValidator('C')]],
      '1_8': ['', [Validators.required, letterValidator('R')]],
      '1_10': ['', [Validators.required, letterValidator('C')]],
      '1_11': ['', [Validators.required, letterValidator('I')]],
      '1_12': ['', [Validators.required, letterValidator('A')]],

      '4_9': ['', [Validators.required, letterValidator('O')]],
      '4_10': ['', [Validators.required, letterValidator('O')]],
      '4_11': ['', [Validators.required, letterValidator('P')]],
      '4_12': ['', [Validators.required, letterValidator('E')]],
      '4_13': ['', [Validators.required, letterValidator('R')]],
      '4_14': ['', [Validators.required, letterValidator('A')]],
      '4_15': ['', [Validators.required, letterValidator('T')]],
      '4_16': ['', [Validators.required, letterValidator('I')]],
      '4_17': ['', [Validators.required, letterValidator('V')]],
      '4_18': ['', [Validators.required, letterValidator('A')]],

      '5_2': ['', [Validators.required, letterValidator('O')]],
      '5_3': ['', [Validators.required, letterValidator('F')]],
      '5_4': ['', [Validators.required, letterValidator('I')]],
      '5_5': ['', [Validators.required, letterValidator('P')]],
      '5_6': ['', [Validators.required, letterValidator('O')]],

      '6_9': ['', [Validators.required, letterValidator('O')]],
      '6_10': ['', [Validators.required, letterValidator('C')]],
      '6_11': ['', [Validators.required, letterValidator('A')]],
      '6_12': ['', [Validators.required, letterValidator('P')]],

      '9_4': ['', [Validators.required, letterValidator('G')]],
      '9_5': ['', [Validators.required, letterValidator('U')]],
      '9_6': ['', [Validators.required, letterValidator('A')]],
      '9_7': ['', [Validators.required, letterValidator('L')]],
      '9_8': ['', [Validators.required, letterValidator('D')]],
      '9_9': ['', [Validators.required, letterValidator('A')]],
      '9_10': ['', [Validators.required, letterValidator('D')]],

      '11_5': ['', [Validators.required, letterValidator('R')]],
      '11_6': ['', [Validators.required, letterValidator('I')]],
      '11_7': ['', [Validators.required, letterValidator('N')]],
      '11_8': ['', [Validators.required, letterValidator('C')]],
      '11_9': ['', [Validators.required, letterValidator('I')]],
      '11_10': ['', [Validators.required, letterValidator('P')]],
      '11_11': ['', [Validators.required, letterValidator('I')]],
      '11_12': ['', [Validators.required, letterValidator('O')]],
      '11_13': ['', [Validators.required, letterValidator('S')]],

      '13_6': ['', [Validators.required, letterValidator('A')]],
      '13_7': ['', [Validators.required, letterValidator('L')]],
      '13_8': ['', [Validators.required, letterValidator('O')]],
      '13_9': ['', [Validators.required, letterValidator('R')]],
      '13_10': ['', [Validators.required, letterValidator('E')]],
      '13_11': ['', [Validators.required, letterValidator('S')]],

      '2_9': ['', [Validators.required, letterValidator('U')]],
      '3_9': ['', [Validators.required, letterValidator('T')]],
      '5_9': ['', [Validators.required, letterValidator('N')]],
      '7_9': ['', [Validators.required, letterValidator('M')]],
      '8_9': ['', [Validators.required, letterValidator('I')]],
      '4_3': ['', [Validators.required, letterValidator('O')]],
      '6_3': ['', [Validators.required, letterValidator('O')]],
      '7_3': ['', [Validators.required, letterValidator('M')]],
      '6_6': ['', [Validators.required, letterValidator('L')]],
      '7_6': ['', [Validators.required, letterValidator('I')]],
      '8_6': ['', [Validators.required, letterValidator('D')]],
      '10_6': ['', [Validators.required, letterValidator('R')]],
      '12_6': ['', [Validators.required, letterValidator('D')]],
      '14_6': ['', [Validators.required, letterValidator('D')]],
    });
  }

  cerrarPopup() {
    this.showModal = false;
    this.showModalfinished = false
  }

  onSave(): void {
    if (this.myForm2.valid) {
      // Realiza alguna acción aquí si el formulario es válido
      console.log('Formulario válido. Se puede enviar.');
      this.mostrarRetro.emit(true);
      this.finalizadoP = true;
    } else {
      console.log('Formulario inválido. No se puede enviar.');
      this.showModal = true;
    }

    console.log(this.myForm2.value)
  }

  @Input() filas!: number[] ;
  @Input() columnas!: number[];
  @Input() placeholders!: { [key: string]: number };
  @Input() enable: string[] = [];


  checkInputValue(event: any) {
    const inputElement = event.target;
    if (!inputElement.value) {
      inputElement.classList.remove('has-value');
    } else {
      inputElement.classList.add('has-value');
    }
  }
}
