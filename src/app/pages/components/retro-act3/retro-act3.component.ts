import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';
import { NgClass, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-retro-act3',
    templateUrl: './retro-act3.component.html',
    styleUrls: ['./retro-act3.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, JsonPipe]
})
export class RetroAct3Component {


  respForm = this.formbuilder.group({
    resp1:  ['', [Validators.required, formM3Validator('socios')]],
    resp2:  ['', [Validators.required, formM3Validator('valores y principios cooperativos')]],
    resp3:  ['', [Validators.required, formM3Validator('reglas y normas')]],
    resp4:  ['', [Validators.required, formM3Validator('asamblea general')]],
    resp5:  ['', [Validators.required, formM3Validator('gobierno corporativo')]],
    resp6:  ['', [Validators.required, formM3Validator('ley general de sociedades cooperativas')]],
    resp7:  ['', [Validators.required, formM3Validator('lrascap')]],
    resp8:  ['', [Validators.required, formM3Validator('administracion')]],
    resp9:  ['', [Validators.required, formM3Validator('vigilancia')]],
    resp10: ['', [Validators.required, formM3Validator('director')]],
  })

  onSubmit() {
    console.log(this.respForm.value);
  }

  
  
  constructor(private formbuilder: FormBuilder) { }
}