import { Component, Input, Type, Injector } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

import { FORM_INPUTS } from '../../../../config/constants';

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
  @Input() field!: any;

  component!: Type<any>;
  toPass!: Injector;

  ngOnInit() {
    const type: string = this.group?.value?.inputType ?? (this.field && this.field.type);

    this.component = FORM_INPUTS[type];

    this.toPass = Injector.create({
      providers: [
        { 
          provide: 'group', 
          useValue: this.group
        },
        {
          provide: 'field',
          useValue: this.field
        }
      ],
      parent: this.injector
    });
  }

   constructor(private injector: Injector) {  }
}
