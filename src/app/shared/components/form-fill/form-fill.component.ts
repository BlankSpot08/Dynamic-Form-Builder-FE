import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { absToGrpCtrl } from '../../../helper/converter';

import { FormItemComponent } from '../form-fields/form-item/form-item.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-fill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormItemComponent],
  templateUrl: './form-fill.component.html',
  styleUrl: './form-fill.component.css'
})
export class FormFillComponent {
  @Input() info: any

  fields!: [];
  form!: FormGroup;
  
  get answers(): FormArray {
    return this.form.controls['answers'] as FormArray;
  }

  getFieldGroup(abs: AbstractControl): FormGroup {
    return absToGrpCtrl(abs);
  }

  initForm() {
    this.form = this.fb.group({
      answers: this.fb.array([])
    })
  }
  
  constructor(private fb: FormBuilder, 
    private router: Router,
    private apiService: ApiService) {
    this.initForm()
  }

  createAnswer() {
    const formGroup = this.fb.group({
      answer: ['']
    })

    return formGroup;
  }
    
  ngOnInit() {
    this.init();
  }

  init() {
    this.fields = this.info?.fields ?? undefined

    if (this.fields != null) {
      for (let i = 0; i < this.fields.length; i++) {
        (this.fields[i] as any).type = 'fill'+this.fields[i]['type']

        this.answers.push(this.createAnswer())
      }
    } else {
      setTimeout(() => this.init(), 200)
    }
  }
  
  onSubmit() {
    const flattenedAnswers: string[] = this.form.getRawValue().answers.flatMap((item: { answer: any; }) => item.answer);

    this.apiService.createSubmission(this.info.title, flattenedAnswers)
    this.router.navigate([''])
  }
}
