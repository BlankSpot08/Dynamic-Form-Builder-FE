import { Component, Input, Type, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { FormItemComponent } from '../form-fields/form-item/form-item.component';

import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { FormService } from '../../../services/form/form-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormItemComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  protected myForm!: FormGroup;

  get fields() {
    return this.myForm.controls['fields'] as FormArray;
  }

  constructor(private router: Router, 
    private formService: FormService) {
      router.events.subscribe(val => {
        if (location.pathname !== '/form/create') {
          this.formService.init();
        }
      })
    }

  ngOnInit() {
    this.myForm = this.formService.getMyForm();
  }

  getFieldGroup(field: AbstractControl): FormGroup {
    return field as FormGroup;
  }

  addFieldGroup(type: string) {
    this.formService.addFieldGroup(type);
    this.myForm = this.formService.getMyForm();
  }

  onSubmit() {
    this.formService.onSubmit();

    this.router.navigate(['/'])
  }
}
