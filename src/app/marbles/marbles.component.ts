import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.css']
})
export class MarblesComponent implements OnInit {
  win: boolean = false;
  scoreZero = false;
  currentNumberOfMarbles: number = 0;
  finalNumberOfMarbles: number = 0;
  finalScoreSubmitted: boolean = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  submitNumberOfMarbles = (form:NgForm) => {
    this.finalNumberOfMarbles = form.form.value.numberOfMarbles;
    this.finalScoreSubmitted = !this.finalScoreSubmitted;
    this.gamesService.onSubmitNumberOfMarbles(this.finalNumberOfMarbles);
  };

}
