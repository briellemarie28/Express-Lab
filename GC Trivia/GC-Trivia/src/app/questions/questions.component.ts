  
import { Component, OnInit } from '@angular/core';
import { IQuestions } from '../iquestions'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: IQuestions []= [
     {"question" : "Whats Javascript",
      "option" :  "A programming language"}
];

  constructor() { }

  ngOnInit() {
  }

}

