import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Personal } from '../data/form-data.model';

@Component({
  selector: 'mt-wizard-address',
  templateUrl: './address.component.html'
  // ,
  // styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  title = ' Quest ce que je mets à voir avec les autres!!!!!!!!!!!!';
  address: any;
  answer1: any;
  answer2: any;
  answer3: any;
  form: any;
  personal: Personal;

  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();

    this.formDataService.getQuestions().subscribe(
      res => {
        const survey = JSON.parse(JSON.stringify(res));
        this.title = survey.questions['2'].question;
        this.answer1 = survey.questions['2'].answers['1'];
        this.answer2 = survey.questions['2'].answers['2'];
        this.answer3 = survey.questions['2'].answers['3'];
        console.log('le json est ' + this.title);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    console.log('Address feature loaded!');
  }

  answer1choice() {
    this.formDataService.postAnswers('2', this.answer1).subscribe(
      res => {
        console.log('le json est ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.personal.email = this.answer1;
  }

  answer2choice() {
    this.formDataService.postAnswers('2', this.answer2).subscribe(
      res => {
        console.log('le json est ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.personal.email = this.answer2;
  }
  answer3choice() {
    this.formDataService.postAnswers('1', this.answer3).subscribe(
      res => {
        console.log('le json est ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.personal.email = this.answer3;
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setPersonal(this.personal);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/work']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the result page
      this.router.navigate(['/result']);
    }
  }
}
