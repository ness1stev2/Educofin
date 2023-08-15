import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function letterValidator(expectedLetter: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      console.log('fallo');
      return { invalidLetter: true }; // Inválido si el valor está vacío
    }

    // Aqui tuve un error de validacion por que el valor esperado tiene que ser exactamente igual al ingresadopor el uuario
    // no se cumplia por que la validacion detecta si son mayusculas o minusculas las letras
    // por eso pasaba a se falso cada vez que se ingresaba un valor
    if (value.toUpperCase() === expectedLetter.toUpperCase()) {
      console.log('es verdadero');
      return null;  // Válido si las letras coinciden (ignorando mayúsculas y minúsculas)
    } else {
      console.log('fallo');
      return { invalidLetter: true }; // Inválido si las letras no coinciden
    }
  };
}
