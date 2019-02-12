import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/form-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = ['0', '1', '+1'];

  public doughnutChartDataA = [];
  public doughnutChartDataB = [];
  public doughnutChartDataC = [];

  public doughnutChartType = 'doughnut';
  public donutColors = [
    {
      backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0']
    }
  ];

  public donutColors2 = [
    {
      backgroundColor: ['#e67e22', '#3498db', '#29b765']
    }
  ];
  public donutColors3 = [
    {
      backgroundColor: ['#e74c3c', '#4BC0C0', '#3498db']
    }
  ];
  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  answers: [];
  question3: any;
  question1: any;
  question2: any;

  q1r1: any;
  q1r2: any;
  q1r3: any;

  q2r1: any;
  q2r2: any;
  q2r3: any;

  q3r1: any;
  q3r2: any;
  q3r3: any;

  ngOnInit() {
    this.formDataService.getAnswers().subscribe(
      res => {
        console.log(res);

        this.question1 = res.filter(response =>
          Object.keys(response.answers).includes('2')
        );

        console.log('q1',this.question1);

        this.q1r1 = this.question1.filter(
          d => (d.answers[2] || '').trim() === 'Rock'
        ).length;

        this.q1r2 = this.question1.filter(
          d => (d.answers[2] || '').trim() === 'Electro'
        ).length;

        this.q1r3 = this.question1.filter(
          d => (d.answers[2] || '').trim() === 'Rap'
        ).length;

        this.doughnutChartDataA.push(this.q1r1);
        this.doughnutChartDataA.push(this.q1r2);
        this.doughnutChartDataA.push(this.q1r3);

        // Question 2

        this.question2 = res.filter(response =>
          Object.keys(response.answers).includes('1')
        );
        

        this.q2r1 = this.question2.filter(
          de => de.answers[1].trim() === 'Radio'
        ).length;

        this.q2r2 = this.question2.filter(
          de => de.answers[1].trim() === 'TV'
        ).length;

        this.q2r3 = this.question2.filter(
          de => de.answers[1].trim() === 'Internet'
        ).length;

        this.doughnutChartDataB.push(this.q2r1);
        this.doughnutChartDataB.push(this.q2r2);
        this.doughnutChartDataB.push(this.q2r3);

        // Quesion 3

        this.question3 = res.filter(response =>
          Object.keys(response.answers).includes('0')
        );
        console.log(this.question3);

        this.q3r1 = this.question3.filter(
          de => de.answers[0].trim() === 'Chez vous'
        ).length;

        this.q3r2 = this.question3.filter(
          de => de.answers[0].trim() === 'En voiture '
        ).length;

        this.q3r3 = this.question3.filter(
          de => de.answers[0].trim() === 'Au bureau'
        ).length;

        this.doughnutChartDataC.push(this.q3r1);
        this.doughnutChartDataC.push(this.q3r2);
        this.doughnutChartDataC.push(this.q3r3);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  goToNext(e: any) {
    console.log(' click souriss ' + e);
    this.router.navigate(['/personal']);
  }
}
