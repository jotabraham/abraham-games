import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-kanjam',
  templateUrl: './kanjam.component.html',
  styleUrls: ['./kanjam.component.css']
})
export class KanjamComponent implements OnInit {
  currentKanjamScore: number = 0;
  finalKanjamScore: number = 0;
  finalScoreSubmitted: boolean = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  submitKanjamScore = (form:NgForm) => {
    this.finalKanjamScore = form.form.value.kanjamScore;
    this.finalScoreSubmitted = !this.finalScoreSubmitted;
    this.gamesService.onSubmitKanjamScore(this.finalKanjamScore);
  };

}
