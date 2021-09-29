import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  highScore: number = 0;
  totalWins: number = 0;

  constructor() { }

  // possibly rewrite an onSubmitFinalScore method that takes in an object instead of just a number

  onSubmitFinalScore(finalScore: object) {
    // if (finalScore === )
  };

  onSubmitBocceScore(finalBocceScore: number) {
    if (finalBocceScore === 16) {
      this.totalWins += 1;
    }
    this.highScore += finalBocceScore;
    console.log('high score: ' + this.highScore);
    console.log('total wins: ' + this.totalWins);
  };

  onSubmitCornholeScore(finalCornholeScore: number) {
    if (finalCornholeScore === 21) {
      this.totalWins += 1;
    }
    this.highScore += finalCornholeScore;
    console.log('high score: ' + this.highScore);
    console.log('total wins: ' + this.totalWins);
  };
}
