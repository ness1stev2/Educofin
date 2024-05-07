import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';
import { NgClass, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-retro-act4',
    templateUrl: './retro-act4.component.html',
    styleUrls: ['./retro-act4.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, JsonPipe]
})
export class RetroAct4Component {

  respForm = this.formbuilder.group({
    resp1:  ['', [Validators.required, formM3Validator('presbítero jose guadalupe pineda velasquez')]],
    resp2:  ['', [Validators.required, formM3Validator('ahorro')]],
    resp3:  ['', [Validators.required, formM3Validator('ahorrar')]],
    resp4:  ['', [Validators.required, formM3Validator('credito')]],
    resp5:  ['', [Validators.required, formM3Validator('gobernabilidad')]],
    resp6:  ['', [Validators.required, formM3Validator('normatividad')]],
  })

  onSubmit() {
    console.log(this.respForm.value);
  }

  constructor(private formbuilder: FormBuilder) { }


}
