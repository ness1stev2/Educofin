import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';

@Component({
  selector: 'app-retro-act5',
  standalone: true,
  imports: [FormsModule,  ReactiveFormsModule, NgClass, JsonPipe, ],
  templateUrl: './retro-act5.component.html',
  styleUrl: './retro-act5.component.scss'
})
export class RetroAct5Component {

  private fb = inject(FormBuilder)
  respForm = this.fb.group({
    resp1:  ['', [Validators.required, formM3Validator('H')]],
    resp2:  ['', [Validators.required, formM3Validator('A')]],
    resp3:  ['', [Validators.required, formM3Validator('C')]],
    resp4:  ['', [Validators.required, formM3Validator('D')]],
    resp5:  ['', [Validators.required, formM3Validator('B')]],
  })

  onSubmit() {
    console.log(this.respForm.value);
  }
}
