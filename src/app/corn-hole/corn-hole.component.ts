import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-corn-hole',
  templateUrl: './corn-hole.component.html',
  styleUrls: ['./corn-hole.component.css']
})
export class CornHoleComponent implements OnInit {
  currentCornholeScore: number = 0;
  finalCornholeScore: number = 0;
  finalScoreSubmitted: boolean = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  submitCornholeScore = (form:NgForm) => {
    console.log('submit cornhole score called');
    console.log(form.form.value.cornholeScore);
    // this.bocceFinalScore = form.form.value.bocceScore;
    // console.log(this.bocceFinalScore);
    this.finalScoreSubmitted = !this.finalScoreSubmitted;
    this.gamesService.onSubmitCornholeScore(this.finalCornholeScore);
  };

}
