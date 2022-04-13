import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //(tipo TS)
import { FarmsContainerComponent } from './pages/farms-container/farms-container.component';
import { TestComponent } from './pages/test/test.component';
import { LeaderboardContainerComponent } from './pages/leaderboard-container/leaderboard-container.component';
import { Team1Component } from './pages/leaderboard-container/team-container/team1/team1.component';
import { Team2Component } from './pages/leaderboard-container/team-container/team2/team2.component';
import { Team3Component } from './pages/leaderboard-container/team-container/team3/team3.component';
import { LiquidityContainerComponent } from './pages/liquidity-container/liquidity-container.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { PoolsContainerComponent } from './pages/pools-container/pools-container.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';

const routes: Routes = [
  { path: 'farms', component: FarmsContainerComponent },
  { path: 'pools', component: PoolsContainerComponent },
  { path: 'test', component: TestComponent },
  { path: 'teams', component: LeaderboardContainerComponent },
  { path: 'teams/1', component: Team1Component },
  { path: 'teams/2', component: Team2Component },
  { path: 'teams/3', component: Team3Component },
  {path :'liquidity', component: LiquidityContainerComponent}
  {path:'design', component: DesignSystemComponent},
  {path:'', component: HomeContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Componenti e Module sono blackbox -> nulla esce se non esplicitato
  exports: [RouterModule],
}) //NGMODULES relativi ad Angular, istruiscono ESMODULE importano porzioni di codes all'interno della codebase (JS/TS)
export class AppRoutingModule {}
