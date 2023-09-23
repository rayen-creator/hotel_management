import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function Valid(controlName: string, formcontrol: FormGroup) {

    if (formcontrol.controls[controlName].valid && (formcontrol.controls[controlName].dirty || formcontrol.controls[controlName].touched)) {
        return 'border-b  border-table_gray'

    }
    else if (formcontrol.controls[controlName].invalid && (formcontrol.controls[controlName].dirty || formcontrol.controls[controlName].touched)) {
        return 'border-b border-rose-500'
    }
    else {
        return ''
    }
}

export function validateAllFormFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {

        const control = formGroup.get(field);

        if (control instanceof FormControl) {

            control.markAsTouched({ onlySelf: true });

        } else {
            this.validateAllFormFields(control);
        }
    });
}