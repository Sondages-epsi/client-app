import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels: string[] = ['0', '1', '+1'];
 public doughnutChartData: number[] = [350, 450, 100];
 public doughnutChartType = 'doughnut';
 public donutColors = [
  {
   backgroundColor: [
   '#FF6384',
   '#36A2EB',
   '#4BC0C0',
   ]
   }
   ];

   public donutColors2 = [
    {
     backgroundColor: [
     '#e67e22',
     '#3498db',
     '#29b765',
     ]
     }
     ];
     public donutColors3 = [
      {
       backgroundColor: [
       '#e74c3c',
       '#4BC0C0',
       '#3498db',
       ]
       }
       ];
  constructor() { }

  ngOnInit() {
  }


    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }

}

