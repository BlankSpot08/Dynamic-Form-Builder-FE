import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export function absToFormCtrl(abs: AbstractControl): FormControl {
    return abs as FormControl;
}

export function absToGrpCtrl(abs: AbstractControl): FormGroup {
    return abs as FormGroup;
}