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
  public doughnutChartDataA: number[] = [350, 450, 100];
  public doughnutChartDataB: number[] = [350, 450, 100];
  public doughnutChartDataC: number[] = [350, 450, 100];
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

  ngOnInit() {
    this.formDataService.getAnswers().subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res)));
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
