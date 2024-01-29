import { Injectable } from '@angular/core';

import { FormField } from '../../shared/components/form-fields/interface/form-field';

import { FORM_INPUTS } from '../../config/constants';
import { FormComponent } from '../../shared/components/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {
  constructor() {
  }

  // getComponents(): FormField[] {
    // return this.fieldComponents;
  // }
  
  // addComponent(type: string): void {
    // this.fieldComponents.push(FORM_INPUTS[type]);
  // }
}
