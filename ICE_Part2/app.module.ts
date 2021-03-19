import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopGoalScorersComponent } from './top-goal-scorers/top-goal-scorers.component';
import { LastGameResultComponent } from './last-game-result/last-game-result.component';
import { PointsComponent } from './points/points.component';
import { H2hMatchResRivalComponent } from './h2h-match-res-rival/h2h-match-res-rival.component';
import { LastFiveGameComponent } from './last-five-game/last-five-game.component';
import { AllGameResComponent } from './all-game-res/all-game-res.component';
import { LastGameComponent } from './last-game/last-game.component';
import { PlayerPerfComponent } from './player-perf/player-perf.component';

@NgModule({
  declarations: [
    AppComponent,
    TopGoalScorersComponent,
    LastGameResultComponent,
    PointsComponent,
    H2hMatchResRivalComponent,
    LastFiveGameComponent,
    AllGameResComponent,
    LastGameComponent,
    PlayerPerfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
