import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = {
    question1: {
      question: 'Est ce que vous pratiquer un sport?',
      reponse1: 'oui',
      reponse2: 'non'
    },
    question2: {
      question: 'Quel type de sport?',
      reponse1: 'individuel',
      reponse2: 'collectif'
    },
    question3: {
      question: 'Combien de fois par jours pratiquer vous ce sport ?',
      reponse1: '1 fois par semaine',
      reponse2: ' plusieursfois par semaine'
    }
  };

  qnProgress = 0;

  constructor() {}

  ngOnInit() {}
}
