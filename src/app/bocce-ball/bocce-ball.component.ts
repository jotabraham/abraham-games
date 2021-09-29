import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-bocce-ball',
  templateUrl: './bocce-ball.component.html',
  styleUrls: ['./bocce-ball.component.css']
})
export class BocceBallComponent implements OnInit {
  bocceFinalScore: number = 0;
  win: boolean = false;
  scoreZero = false;
  currentBocceScore: number = 0;
  finalScoreSubmitted: boolean = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  submitBocceScore = (form:NgForm) => {
    this.bocceFinalScore = form.form.value;
    // console.log(this.bocceFinalScore);
    this.finalScoreSubmitted = !this.finalScoreSubmitted;
    this.gamesService.onSubmitBocceScore(this.bocceFinalScore);
  };

  // addOne() {
  //   this.currentBocceScore += 1;
  // };

  // subtractOne() {
  //   this.currentBocceScore -= 1;
  // }

}
