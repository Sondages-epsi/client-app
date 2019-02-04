import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'mt-wizard-personal',
  templateUrl: './personnal.component.html'
  // ,
  // styleUrls: ['./personnal.component.css']
})
export class PersonnalComponent implements OnInit {
  title = 'Est ce que vous pratiquez un sport ? ';
  personal: Personal;
  form: any;

  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded ');
  }

  yes() {
    this.personal.lastName = 'yes';
  }

  no() {
    this.personal.lastName = 'no';
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/work']);
    }
  }
}
