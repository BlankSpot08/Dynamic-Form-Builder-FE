import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormGroup, FormsModule } from '@angular/forms';

import { FormLabelComponent } from '../../../form-parts/form-label/form-label.component';
import { FormSelectComponent } from '../../../form-parts/form-select/form-select.component';

import { FormField } from '../../interface/form-field';

@Component({
  selector: 'app-form-dropdown',
  standalone: true,
  imports: [CommonModule, FormLabelComponent, FormSelectComponent, FormsModule],
  templateUrl: './form-create-dropdown.component.html',
  styleUrl: './form-create-dropdown.component.css'
})
export class FormCreateDropdownComponent implements FormField {
  group: FormGroup;
  
  constructor(@Inject('group') group: FormGroup) {
    this.group = group
  }
  
}
