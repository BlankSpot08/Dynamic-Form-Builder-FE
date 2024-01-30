import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-view-label',
  standalone: true,
  imports: [],
  templateUrl: './form-view-label.component.html',
  styleUrl: './form-view-label.component.css'
})
export class FormViewLabelComponent {
  @Input() label!: string;

  ngOnInit() {
  }
}
