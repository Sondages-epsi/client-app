import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../data/form-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mt-wizard-work',
  templateUrl: './work.component.html'
  // ,
  // styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  title = ' Quel type de sport vous pratiquez ? ';
  answer1: any;
  answer2: any;
  answer3: any;
  workType: any;
  form: any;
  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    this.workType = this.formDataService.getQuestions().subscribe(
      res => {
        const survey = JSON.parse(JSON.stringify(res));
        this.title = survey.questions['1'].question;
        this.answer1 = survey.questions['1'].answers['1'];
        this.answer2 = survey.questions['1'].answers['2'];
        this.answer3 = survey.questions['1'].answers['3'];
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    console.log('Work feature loaded');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setWork(this.workType);
    return true;
  }

  answer1choice() {
    this.formDataService.postAnswers('1', this.answer1).subscribe(
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
    this.workType = this.answer1;
  }

  answer2choice() {
    this.formDataService.postAnswers('1', this.answer2).subscribe(
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
    this.workType = this.answer2;
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
    this.workType = this.answer3;
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
