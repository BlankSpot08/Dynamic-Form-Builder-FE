import { Component, Inject, Input } from '@angular/core';

import { FormLabelComponent } from '../../../form-parts/form-label/form-label.component';
import { FormInputComponent } from '../../../form-parts/form-input/form-input.component';

import { FormField } from '../../interface/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-create-text',
  standalone: true,
  imports: [FormLabelComponent, FormInputComponent],
  templateUrl: './form-create-text.component.html',
  styleUrl: './form-create-text.component.css'
})
export class FormCreateTextComponent implements FormField {
  group: FormGroup;

  constructor(@Inject('group') group: FormGroup) {
    this.group = group
  }
}
