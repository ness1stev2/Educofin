import { JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';

@Component({
  selector: 'app-retro-act6',
  standalone: true,
  imports: [FormsModule,  ReactiveFormsModule, NgClass, JsonPipe ],
  templateUrl: './retro-act6.component.html',
  styles: ``
})
export class RetroAct6Component {

  private fb = inject(FormBuilder)
  respForm = this.fb.group({
    resp1:  ['', [Validators.required, formM3Validator('3')]],
    resp2:  ['', [Validators.required, formM3Validator('2')]],
    resp3:  ['', [Validators.required, formM3Validator('5')]],
    resp4:  ['', [Validators.required, formM3Validator('6')]],
    resp5:  ['', [Validators.required, formM3Validator('4')]],
    resp6:  ['', [Validators.required, formM3Validator('1')]],
  })

  onSubmit() {
    console.log(this.respForm.value);
  }

}
