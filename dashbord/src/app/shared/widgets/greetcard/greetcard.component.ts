
import { Component, OnInit } from '@angular/core';
import { ScorecardService } from '../scorecard.service';

@Component({
  selector: 'app-greetcard',
  templateUrl: './greetcard.component.html',
  styleUrls: ['./greetcard.component.css']
})
export class GreetcardComponent implements OnInit {
  constructor(private scorecardService: ScorecardService) { }
  totalPoints: number;
  date: Date = new Date();
  hour: number = this.date.getHours();
  msg: string;

ngOnInit(): void {
  this.totalPoints = this.scorecardService.totalPoints;
  if(this.hour < 12){
    this.msg = 'Good Morning ' + this.scorecardService.userName;
  } else if(this.hour > 12 && this.hour < 16){
    this.msg = 'Good AfterNoon ' + this.scorecardService.userName;
  }else if(this.hour > 16 && this.hour < 24){
    this.msg = 'Good Evening ' + this.scorecardService.userName;
  }
  }

}
