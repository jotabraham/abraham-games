import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BocceBallComponent } from './bocce-ball/bocce-ball.component';
import { KanjamComponent } from './kanjam/kanjam.component';
import { CornHoleComponent } from './corn-hole/corn-hole.component';
import { MarblesComponent } from './marbles/marbles.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BocceBallComponent,
    KanjamComponent,
    CornHoleComponent,
    MarblesComponent,
    ScoreCardComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
