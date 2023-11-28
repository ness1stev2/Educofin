import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export  function formM3Validator(expectedValue: string): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const inputValue = control.value;
    if(inputValue !== expectedValue){
      return { 'valueMismatch': { expectedValue, inputValue}};
    }
    return null;
  }
}
