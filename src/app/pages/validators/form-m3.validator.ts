import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export  function formM3Validator(expectedValue: string): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const inputValue = control.value.toLowerCase(); // Convertir el valor de entrada a minúsculas
    const expectedValueLower = expectedValue.toLowerCase(); // Convertir el valor esperado a minúsculas
    if (inputValue !== expectedValueLower) {
      return { 'valueMismatch': { expectedValue, inputValue }};
    }
    return null;
  }
}
