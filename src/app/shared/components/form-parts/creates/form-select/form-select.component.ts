import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css'
})
export class FormSelectComponent {
  @Input() group!: FormGroup;

  get getChoices() {
    return this.group.get('choices') as FormArray;
  }

  get getTemp() {
    return this.group.get('temp') as FormControl
  }
  
  options: string[] = [];
  choices!: string[];
  
  addNewOption() {
    const choices = this.getChoices.value
    choices.push(this.getTemp.value)

    this.getChoices.setValue(choices)

    this.getTemp.setValue('')
  }

  ngOnInit() {
    this.choices = this.getChoices.value;
  }
}
