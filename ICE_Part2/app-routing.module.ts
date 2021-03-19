import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointsComponent } from './points/points.component';
import { PlayerPerfComponent } from './player-perf/player-perf.component';
import { TopGoalScorersComponent } from './top-goal-scorers/top-goal-scorers.component';
import { AllGameResComponent } from './all-game-res/all-game-res.component';
import { H2hMatchResRivalComponent } from './h2h-match-res-rival/h2h-match-res-rival.component';
import { LastFiveGameComponent } from './last-five-game/last-five-game.component';
import { LastGameComponent } from './last-game/last-game.component';
import { LastGameResultComponent } from './last-game-result/last-game-result.component';

const routes: Routes = [
    { path: 'points', component: PointsComponent },
    { path: 'player-perf', component: PlayerPerfComponent },
    { path: 'top-goal-scorers', component: TopGoalScorersComponent },
    { path: 'all-game-res', component: AllGameResComponent },
    { path: 'h2h-match-res-rival', component: H2hMatchResRivalComponent },
    { path: 'last-five-game', component: LastFiveGameComponent },
    { path: 'last-game', component: LastGameComponent },
    { path: 'last-game-result', component: LastGameResultComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
