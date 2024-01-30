import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-fill-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-fill-select.component.html',
  styleUrl: './form-fill-select.component.css'
})
export class FormFillSelectComponent {

  @Input() choices!: string[];
  @Input() group!: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  getFormControl(abs: AbstractControl): FormControl {
    return abs as FormControl
  }
}
