import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BocceBallComponent } from './bocce-ball/bocce-ball.component';
import { CornHoleComponent } from './corn-hole/corn-hole.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScoreCardComponent } from './score-card/score-card.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'bocceball', component: BocceBallComponent },
  { path: 'cornhole', component: CornHoleComponent },
  { path: 'scorecard', component: ScoreCardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
