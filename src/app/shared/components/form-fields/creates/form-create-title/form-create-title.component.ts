import { Component, Inject, Injector, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormLabelComponent } from '../../../form-parts/creates/form-label/form-label.component';
import { FormInputComponent } from '../../../form-parts/creates/form-input/form-input.component';

import { FormField } from '../../interface/form-field';
import { FormGroup } from '@angular/forms';
import { absToFormCtrl } from '../../../../../helper/converter';
import { FormService } from '../../../../../services/form/form-service.service';

@Component({
  selector: 'app-form-title',
  standalone: true,
  imports: [ReactiveFormsModule, FormLabelComponent, FormInputComponent],
  templateUrl: './form-create-title.component.html',
  styleUrl: './form-create-title.component.css'
})
export class FormCreateTitleComponent implements FormField {
  group!: FormGroup;

  constructor(@Inject('group') group: FormGroup) {
    this.group = group;
  }

  
  getInputTitle() {
    return absToFormCtrl(this.group.controls['inputTitle']);
  }
  
  ngOnInit() {}

  getTitleLabelClass() {
    const classes = ['w-100', 'form-control-lg']

    return classes;
  }

  getTitleHolder() {
    const holder = 'Enter the title here'

    return holder;
  }

  getDescriptionHolder() {
    const holder = 'Enter the description here...'

    return holder
  }
}
