import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.css'
})
export class FormLabelComponent {
  @Input() customClass!: string[];
  @Input() customHolder: string = 'Enter the label';
  @Input() inputString: string = 'inputLabel';
  
  @Input() group!: FormGroup;

  ngOnInit() {}
}


