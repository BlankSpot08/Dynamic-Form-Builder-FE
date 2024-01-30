import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../services/config/config.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {
  forms: any;
  
  constructor(private http: HttpClient, private configService: ConfigService) { }

  ngOnInit() {
    const getAllFormRequest = this.http.get(this.configService.getBaseURL() + '/form/get-all')
      .subscribe(data => {
        this.forms = data
        this.forms = this.forms['forms']
      })
  }
}
