import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';
import { DoneModuleComponent } from '../done-module/done-module.component';

@Component({
  selector: 'app-retro-act5',
  standalone: true,
  imports: [DoneModuleComponent, FormsModule, ReactiveFormsModule, NgClass, JsonPipe, NgIf],
  templateUrl: './retro-act5.component.html',
  styleUrl: './retro-act5.component.scss'
})
export class RetroAct5Component {

  finalizadoP: boolean = false;
  public submitted: boolean = false;

  private fb = inject(FormBuilder)

  respForm = this.fb.group({
    resp1: ['', [Validators.required, Validators.maxLength(1), formM3Validator('H')]],
    resp2: ['', [Validators.required, Validators.maxLength(1), formM3Validator('A')]],
    resp3: ['', [Validators.required, Validators.maxLength(1), formM3Validator('C')]],
    resp4: ['', [Validators.required, Validators.maxLength(1), formM3Validator('D')]],
    resp5: ['', [Validators.required, Validators.maxLength(1), formM3Validator('B')]],
  })

  inputSelect(input: string): boolean | undefined {
    return this.respForm.get(input)?.touched && this.respForm.get(input)?.value.length > 0;
  }

  evaluarRespuesta(input: string): boolean | undefined {
    if (this.respForm.get(input)?.valid && this.submitted) {
      if (this.respForm.valid) {
        this.finalizadoP = true;
      }
      return true
    }else if(this.submitted){
      return false;
    }
    return undefined;
  }

  onSubmit() {
    this.submitted = true;
  }
}
