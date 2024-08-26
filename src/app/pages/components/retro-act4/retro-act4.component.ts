import { Component, signal } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formM3Validator } from '../../validators/form-m3.validator';
import { NgClass, JsonPipe } from '@angular/common';
import { DoneModuleComponent } from "../done-module/done-module.component";

@Component({
    selector: 'app-retro-act4',
    templateUrl: './retro-act4.component.html',
    styleUrls: ['./retro-act4.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgClass, JsonPipe, DoneModuleComponent]
})
export class RetroAct4Component {

  finalizado = signal<boolean>(false);

  respForm = this.formbuilder.group({
    resp1:  ['', [Validators.required, formM3Validator('presbítero josé guadalupe pineda velásquez')]],
    resp2:  ['', [Validators.required, formM3Validator('ahorro')]],
    resp3:  ['', [Validators.required, formM3Validator('ahorrar')]],
    resp4:  ['', [Validators.required, formM3Validator('credito')]],
    resp5:  ['', [Validators.required, formM3Validator('gobernabilidad')]],
    resp6:  ['', [Validators.required, formM3Validator('normatividad')]],
  })

  onSubmit() {
    if(this.respForm.valid){
      this.finalizado.set(true);
    }else{
      console.log(this.respForm.value);
      console.log("Formulario invalido")
    }
  }

  constructor(private formbuilder: FormBuilder) { }


}
