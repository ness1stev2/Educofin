import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';

@Component({
  selector: 'app-retro-act5',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, JsonPipe, NgIf],
  templateUrl: './retro-act5.component.html',
  styleUrl: './retro-act5.component.scss'
})
export class RetroAct5Component {

  private fb = inject(FormBuilder)
  respForm = this.fb.group({
    resp1: ['', [Validators.required, Validators.maxLength(1), formM3Validator('H')]],
    resp2: ['', [Validators.required, Validators.maxLength(1), formM3Validator('A')]],
    resp3: ['', [Validators.required, Validators.maxLength(1), formM3Validator('C')]],
    resp4: ['', [Validators.required, Validators.maxLength(1), formM3Validator('D')]],
    resp5: ['', [Validators.required, Validators.maxLength(1), formM3Validator('B')]],
  })

  inputSelect(input: string) : boolean | undefined {
    return this.respForm.get(input)?.touched && this.respForm.get(input)?.value.length > 0;
  }

  public submitted: boolean = false;

  /* getClass(input: string): string {
    if (this.respuestaCorrecta(input)) {
      return 'respCor';
    } else if (this.respuestaCorrecta(input) === false) {
      return 'respInc';
    } else if (this.inputSelect(input)) {
      return 'select';
    }
    return '';
  } */

    evaluarRespuesta(input: string): boolean | undefined {
    if (this.respForm.get(input)?.valid && this.submitted) {
      return true
    }else if(this.submitted){
      return false;
    }
    return undefined;
  }
  /* respuestaCorrecta(input: string): string {
    if (this.respForm.get(input)!.valid && this.submitted) {
      return 'respCor';
    }else if(this.submitted){
      return 'respInc';
    }
    return '';
  } */

  onSubmit() {
    this.submitted = true;
    console.log(this.respForm.value);
  }
}
