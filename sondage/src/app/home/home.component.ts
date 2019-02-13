import { Component, OnInit, Input } from '@angular/core';
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
   
  public doughnutChartLabelsQ1 = [];
  public doughnutChartLabelsQ2 = [];
  public doughnutChartLabelsQ3 = [];
  

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


   unique:any;
   trimunique:any;
   unique2:any;
   trimunique2:any;
   unique3:any;
   trimunique3:any;

   selectedQ1:any;
   selectedQ2:any;
   selectedQ3:any;


   allquestions:any;

  ngOnInit() {
    this.formDataService.getAnswers().subscribe(
      res => {

        this.allquestions = res;
        

        this.question1 = res.filter(response =>
          Object.keys(response.answers).includes('0')
        );

        console.log('q1',this.question1);

        this.selectedQ1 = this.question1.map(x => x.answers[0])
        this.unique = [...new Set(this.selectedQ1)];
        this.trimunique = this.unique.map(d => d.trim());


        console.log('this.unique ',this.unique);


for (let index = 0; index <  this.trimunique.length; index++) {

  this.q1r1 = this.question1.filter(
          d => (d.answers[0] || '').trim() === this.trimunique[0]
        ).length;

        this.q1r2 = this.question1.filter(
          d => (d.answers[0] || '').trim() === this.trimunique[1]
        ).length;

        this.q1r3 = this.question1.filter(
          d => (d.answers[0] || '').trim() === this.trimunique[2]
        ).length;
  
}
        

        this.doughnutChartDataA.push(this.q1r1);
        this.doughnutChartDataA.push(this.q1r2);
        this.doughnutChartDataA.push(this.q1r3);

        this.unique.forEach(element => {
          
          this.doughnutChartLabelsQ1.push(element);
          
        });




        // Question 2

        this.question2 = res.filter(response =>
          Object.keys(response.answers).includes('1')
        );


         this.selectedQ2 = this.question2.map(x => x.answers[1])
        this.unique2 = [...new Set(this.selectedQ2)];
        this.trimunique2 = this.unique2.map(d => d.trim());
        

       


for (let index = 0; index <  this.trimunique2.length; index++) {
   this.q2r1 = this.question2.filter(
          de => de.answers[1].trim() === this.trimunique2[0]
        ).length;

        this.q2r2 = this.question2.filter(
          de => de.answers[1].trim() === this.trimunique2[1]
        ).length;

        this.q2r3 = this.question2.filter(
          de => de.answers[1].trim() === this.trimunique2[2]
        ).length;
  
}

        this.doughnutChartDataB.push(this.q2r1);
        this.doughnutChartDataB.push(this.q2r2);
        this.doughnutChartDataB.push(this.q2r3);

         
        

      
        this.unique2.forEach(element => {
          
          this.doughnutChartLabelsQ2.push(element);
          
        });






        // Quesion 3

        this.question3 = res.filter(response =>
          Object.keys(response.answers).includes('2')
        );


          this.selectedQ3 = this.question3.map(x => x.answers[2])
        this.unique3 = [...new Set(this.selectedQ3)];
        this.trimunique3 = this.unique3.map(d => d.trim());


        for (let index = 0; index <  this.trimunique3.length; index++) {
    this.q3r1 = this.question3.filter(
          de => de.answers[2].trim() === this.trimunique3[0]
        ).length;

        this.q3r2 = this.question3.filter(
          de => de.answers[2].trim() === this.trimunique3[1]
        ).length;

        this.q3r3 = this.question3.filter(
          de => de.answers[2].trim() === this.trimunique3[2]
        ).length;
  
}
        
        this.doughnutChartDataC.push(this.q3r1);
        this.doughnutChartDataC.push(this.q3r2);
        this.doughnutChartDataC.push(this.q3r3);

        this.unique3.forEach(element => {
          
          this.doughnutChartLabelsQ3.push(element);
          
        });


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
