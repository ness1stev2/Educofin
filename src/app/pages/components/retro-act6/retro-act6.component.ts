import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';

@Component({
  selector: 'app-retro-act6',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, JsonPipe],
  templateUrl: './retro-act6.component.html',
  styleUrl: '../retro-act5/retro-act5.component.scss'
})
export class RetroAct6Component {

  private fb = inject(FormBuilder)
  respForm = this.fb.group({
    resp1: ['', [Validators.required, formM3Validator('3')]],
    resp2: ['', [Validators.required, formM3Validator('2')]],
    resp3: ['', [Validators.required, formM3Validator('5')]],
    resp4: ['', [Validators.required, formM3Validator('6')]],
    resp5: ['', [Validators.required, formM3Validator('4')]],
    resp6: ['', [Validators.required, formM3Validator('1')]],
  })

  submitted = false;

  inputSelect(input: string) : boolean | undefined {
    return this.respForm.get(input)?.touched && this.respForm.get(input)?.value.length > 0;
  }

  evaluarRespuesta(input: string): boolean | undefined {
    if (this.respForm.get(input)?.valid && this.submitted) {
      return true
    }else if(this.submitted){
      return false;
    }
    return undefined;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.respForm.value);
  }

  showModal = false;
  finalizadoP: boolean = false;

  cerrarPopup() {
    this.showModal = false;
    this.finalizadoP = true;
  }

  public contador: number = 10;

  iniciarContador() {
    const interval = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
