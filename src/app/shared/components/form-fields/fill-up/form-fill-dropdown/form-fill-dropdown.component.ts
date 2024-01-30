import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormViewLabelComponent } from '../../../form-parts/show/form-view-label/form-view-label.component';
import { FormFillSelectComponent } from '../../../form-parts/fill/form-fill-select/form-fill-select.component';

@Component({
  selector: 'app-form-fill-dropdown',
  standalone: true,
  imports: [FormViewLabelComponent, FormFillSelectComponent],
  templateUrl: './form-fill-dropdown.component.html',
  styleUrl: './form-fill-dropdown.component.css'
})
export class FormFillDropdownComponent {
  field: any;
  group: FormGroup;

  constructor(@Inject('group') group: FormGroup, @Inject('field') field: any) {
    this.group = group;
    this.field = field;
  }

  ngOnInit() {
  }
}
