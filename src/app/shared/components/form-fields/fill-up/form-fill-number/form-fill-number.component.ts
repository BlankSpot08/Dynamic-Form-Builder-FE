import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormViewLabelComponent } from '../../../form-parts/show/form-view-label/form-view-label.component';
import { FormFillInputComponent } from '../../../form-parts/fill/form-input-input/form-fill-input.component';


@Component({
  selector: 'app-form-fill-number',
  standalone: true,
  imports: [FormFillInputComponent, FormViewLabelComponent],
  templateUrl: './form-fill-number.component.html',
  styleUrl: './form-fill-number.component.css'
})
export class FormFillNumberComponent {
  field: any;
  group: FormGroup

  constructor(@Inject('group') group: FormGroup, @Inject('field') field: any) {
    this.group = group;
    this.field = field;
  }
}
