import { Component, OnInit, Input } from '@angular/core';

import { FormData } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'mt-wizard-result',
  templateUrl: './result.component.html'
  // ,
  // styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  title = "Merci d'avoir participé";
  @Input() formData: FormData;
  isFormValid = false;

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Result feature loaded!');
  }

  submit() {
    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }
}
