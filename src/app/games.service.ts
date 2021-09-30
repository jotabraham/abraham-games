import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  highScore: number = 0;
  totalWins: number = 0;

  constructor() { }

  // possibly rewrite an onSubmitFinalScore method that takes in an object instead of just a number
  // onSubmitFinalScore(finalScore: object) {
  //   console.log('service final score: ' + finalScore);
  // };

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

  onSubmitKanjamScore(finalKanjamScore: number) {
    if (finalKanjamScore === 21) {
      this.totalWins += 1;
    }
    this.highScore += finalKanjamScore;
    console.log('high score: ' + this.highScore);
    console.log('total wins: ' + this.totalWins);
  };

  onSubmitNumberOfMarbles(numberOfMarbles: number) {
    let finalMarblesScore: number = 0;
    if (numberOfMarbles === 8) {
      finalMarblesScore = 36;
      this.totalWins += 1;
    } else if (numberOfMarbles === 7) {
      finalMarblesScore = 35;
    } else if (numberOfMarbles === 6) {
      finalMarblesScore = 33;
    } else if (numberOfMarbles === 5) {
      finalMarblesScore = 30;
    } else if (numberOfMarbles === 4) {
      finalMarblesScore = 26;
    } else if (numberOfMarbles === 3) {
      finalMarblesScore = 21;
    } else if (numberOfMarbles === 2) {
      finalMarblesScore = 15;
    } else if (numberOfMarbles === 1) {
      finalMarblesScore = 8;
    } else if (numberOfMarbles === 0) {
      finalMarblesScore = 0;
    };
    this.highScore += finalMarblesScore;
    console.log('high score: ' + this.highScore);
    console.log('total wins: ' + this.totalWins);
  };
}
