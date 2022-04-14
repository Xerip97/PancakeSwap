import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //(tipo TS)
import { FarmsContainerComponent } from './pages/farms-container/farms-container.component';
import { TestComponent } from './pages/test/test.component';
import { LeaderboardContainerComponent } from './pages/leaderboard-container/leaderboard-container.component';
import { TeamDetailComponent } from './pages/leaderboard-container/team-container/team-detail/team-detail.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { PoolsContainerComponent } from './pages/pools-container/pools-container.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';

const routes: Routes = [
  { path: 'farms', component: FarmsContainerComponent },
  { path: 'pools', component: PoolsContainerComponent },
  { path: 'test', component: TestComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: 'teams', component: LeaderboardContainerComponent },
  { path: 'design', component: DesignSystemComponent },
  { path: '', component: HomeContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Componenti e Module sono blackbox -> nulla esce se non esplicitato
  exports: [RouterModule],
}) //NGMODULES relativi ad Angular, istruiscono ESMODULE importano porzioni di codes all'interno della codebase (JS/TS)
export class AppRoutingModule {}
