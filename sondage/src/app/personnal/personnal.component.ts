import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../data/form-data.model';
import { FormDataService } from '../data/form-data.service';

import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'mt-wizard-personal',
  templateUrl: './personnal.component.html'
  // ,
  // styleUrls: ['./personnal.component.css']
})
export class PersonnalComponent implements OnInit {
  title: any;
  personal: Personal;
  form: any;
  question: any;
  answer1: any;
  answer2: any;
  answer3: any;
  questio: any;

    

  constructor(
    private router: Router,
    private formDataService: FormDataService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    

    this.personal = this.formDataService.getPersonal();

  this.formDataService.getQuestions().subscribe(
      res => {
        const survey = JSON.parse(JSON.stringify(res));
        this.title = survey.questions['0'].question;
        this.answer1 = survey.questions['0'].answers['1'];
        this.answer2 = survey.questions['0'].answers['2'];
        this.answer3 = survey.questions['0'].answers['3'];
        console.log('le json est ' + this.title);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );


    console.log('Personal feature loaded ');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setPersonal(this.personal);
    return true;
  }


  @HostListener('document:keydown.c')
  answer1choice() {
    this.formDataService.postAnswers('0', this.answer1).subscribe(
      res => {
        console.log('jai choisi le C dans le personal');
        console.log('le json est ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.personal.lastName = this.answer1;
    this.router.navigate(['/work']);
  }

  @HostListener('document:keydown.v')
  answer2choice() {
    this.formDataService.postAnswers('0', this.answer2).subscribe(
      res => {
        console.log('jai choisi le V dans le personal');
        console.log('le json est ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.personal.lastName = this.answer2;
    this.router.navigate(['/work']);
  }

  @HostListener('document:keydown.b')
  answer3choice() {
    this.formDataService.postAnswers('0', this.answer3).subscribe(
      res => {
        console.log('jai choisi le B dans le personal');
        console.log('le json est ' + JSON.stringify(res));
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.personal.lastName = this.answer3;
    this.router.navigate(['/work']);
  }

  
}
