import { Component, OnInit } from '@angular/core';
//import * as onoff from 'onoff';

@Component({
  selector: 'app-eventlistener',
  templateUrl: './eventlistener.component.html',
  styleUrls: ['./eventlistener.component.css']
})
export class EventlistenerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //   const Gpio = onoff.Gpio;
    //   const button1 = new Gpio(6, 'in', 'both');
    //   const button2 = new Gpio(13, 'in', 'both');
    //   const button3 = new Gpio(19, 'in', 'both');
    //   button1.watch((err, value) => {
    //     if (err) {
    //       throw err;
    //     }
    //     this.sendKey(1);
    //   });
    //   button2.watch((err, value) => {
    //     if (err) {
    //       throw err;
    //     }
    //     this.sendKey(2);
    //   });
    //   button3.watch((err, value) => {
    //     if (err) {
    //       throw err;
    //     }
    //     this.sendKey(3);
    //   });
  }

  // sendKey(number: any) {
  //   return number;
  // }
}
