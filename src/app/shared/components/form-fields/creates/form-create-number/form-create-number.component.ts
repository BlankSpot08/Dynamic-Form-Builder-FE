import { Component, Inject } from '@angular/core';

import { FormLabelComponent } from '../../../form-parts/creates/form-label/form-label.component';
import { FormInputComponent } from '../../../form-parts/creates/form-input/form-input.component';

import { FormField } from '../../interface/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-form-number',
  standalone: true,
  imports: [FormLabelComponent, FormInputComponent],
  templateUrl: './form-create-number.component.html',
  styleUrl: './form-create-number.component.css'
})
export class FormCreateNumberComponent implements FormField {
  group: FormGroup;

  constructor(@Inject('group') group: FormGroup) {
    this.group = group
  }
}
