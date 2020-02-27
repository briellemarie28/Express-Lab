  
import { Component, OnInit } from '@angular/core';
//import { IQuestions } from '../iquestions'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions= [{
    questionId: 1,
    questionText: ' What is HTTP status 418?',
    options: [
      { optionValue: '1', optionText: 'Not Found' },
      { optionValue: '2', optionText: 'Im a teapot'},
      { optionValue: '3', optionText: 'Forbidden' },
      { optionValue: '4', optionText: 'Temporary Redirect' }
    ],
    answer: '2',
    selectedOption: ''},
    {questionId: 2,
    questionText: ' What languages influenced the design of JavaScript? ',
    options: [
      { optionValue: '1', optionText: 'AWK, C, HyperTalk, Java, Lua, Perl, Python, Scheme, and Self' },
      { optionValue: '2', optionText: 'CSS, HTML, Angular'},
      { optionValue: '3', optionText:  'F#,C#,A#'},
      { optionValue: '4', optionText: 'AngelScript, CoffeeScript, Action, Script' }
    ],
    answer: '1',
    selectedOption: ''},
    {questionId: 3,
      questionText: ' Who is the creator of JavaScript? ',
      options: [
        { optionValue: '1', optionText: 'Brendan Eich' },
        { optionValue: '2', optionText: 'Kyle Simpson'},
        { optionValue: '3', optionText:  'Larry Page'},
        { optionValue: '4', optionText: 'Bill Gates' }
      ],
      answer: '1',
      selectedOption: ''}];

      

  constructor() { }


  ngOnInit() {
  }


  isCorrect(option:string): boolean {
    return this.questions.selectedOption && option === this.questions.answer;
  }
 
}

