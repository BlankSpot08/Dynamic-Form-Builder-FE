import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { INPUT_MULTIPLE } from '../../config/constants';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  myForm!: FormGroup;

  getMyForm() {
    return this.myForm;
  }
  
  get fields() {
    return this.myForm.controls['fields'] as FormArray;
  }

  getFieldGroup(field: AbstractControl): FormGroup {
    return field as FormGroup;
  }
  
  constructor(
    private fb: FormBuilder, 
    private apiService: ApiService) { 
    const inputGroup = this.fb.group({
      inputTitle: [ '', Validators.required ],
      inputType: [ 'title', Validators.required ],
      inputDescription: [ '', Validators.required ],
    })

    const initFields = this.fb.array([ inputGroup ])

    this.myForm = this.fb.group({
      fields: initFields
    })
  }

  private createFieldGroup(type: string) {
    const formGroup: FormGroup = this.fb.group({
      inputType: [ type, Validators.required ],
      inputLabel: [ '', Validators.required ],
      inputPlaceholder: ['Enter your input here...'],
      inputAnswer: ['']
    })

    if (INPUT_MULTIPLE.includes(type)) {
      formGroup.addControl('choices', this.fb.control([]));
      formGroup.addControl('temp', this.fb.control(''));
    }

    return formGroup 
  }

  addFieldGroup(type: string) {
    this.fields.push(this.createFieldGroup(type))
  }

  onSubmit() {
    this.apiService.createForm(this.myForm.getRawValue())
    
    this.myForm.reset()
  }
}
