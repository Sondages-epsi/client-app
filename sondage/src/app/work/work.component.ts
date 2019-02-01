import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'mt-wizard-work',
  templateUrl: './work.component.html'
  // ,
  // styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title = ' Quel type de sport vous pratiquez ? ';
  workType: string;
  form: any;
  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.workType = this.formDataService.getWork();
    console.log('Work feature loaded');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setWork(this.workType);
    return true;
  }

  individualSport() {
    this.workType = 'sport individuel';
  }

  teamSport() {
    this.workType = 'sport collectif';
  }

  goToPrevious() {
    this.router.navigate(['/personal']);
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the adress page
      this.router.navigate(['/adress']);
    }
  }
}
