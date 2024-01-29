import { Component, Input, Type, Injector } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FormField } from '../interface/form-field';
import { FORM_INPUTS } from '../../../../config/constants';
import { FormService } from '../../../../services/form/form-service.service';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css',
})
export class FormItemComponent {
  @Input() group!: FormGroup;
  @Input() index!: number;

  component!: Type<any>;
  toPass!: Injector;

  ngOnInit() {
    const type = this.group.value['inputType']
    this.component = FORM_INPUTS[type];

    this.toPass = Injector.create({
      providers: [
        { 
          provide: 'group', 
          useValue: this.group
        }
      ],
      parent: this.injector
    });
  }

   constructor(private injector: Injector) {  }
}
