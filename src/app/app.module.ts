import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnTrisComponent } from './designsystem/buttons/btn-tris/btn-tris.component';
import {FooterComponent } from './core/layout/footer/footer.component';
import { FormsContainerComponent } from './designsystem/forms-container/forms-container.component';
import { FormDropdownComponent } from './designsystem/forms-container/form-dropdown/form-dropdown.component';
import { FormTextSearchComponent } from './designsystem/forms-container/form-text-search/form-text-search.component';
import { FormPollComponent } from './designsystem/forms-container/form-poll/form-poll.component';
import { FormSliderComponent } from './designsystem/forms-container/form-slider/form-slider.component';
import { FormTextTradeComponent } from './designsystem/forms-container/form-text-trade/form-text-trade.component';
import { FarmsContainerComponent } from './pages/farms-container/farms-container.component';
import { TestComponent } from './pages/test/test.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { LeaderboardContainerComponent } from './pages/leaderboard-container/leaderboard-container.component';
import { TeamsComponent } from './pages/leaderboard-container/teams/teams.component';
import { TeamContainerComponent } from './pages/leaderboard-container/team-container/team-container.component';
import { EarnUndernavbarDivComponent } from './core/earn-undernavbar-div/earn-undernavbar-div.component';
import { PoolsContainerComponent } from './pages/pools-container/pools-container.component';
import { BountyInfoComponent } from './pages/pools-container/bounty-info/bounty-info.component';
import { BtnDoubleComponent } from './designsystem/buttons/btn-double/btn-double.component';
import {FilterComponent} from './core/layout/filter/filter.component';
import { FarmsTableComponent } from './pages/farms-container/farms-table/farms-table.component';
import { FarmsCardsComponent } from './pages/farms-container/farms-cards/farms-cards.component';
import { FarmsHeaderComponent } from './pages/farms-container/farms-header/farms-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {WarningBannerComponent} from './core/warning-banner/warning-banner.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { TeamDetailComponent } from './pages/leaderboard-container/team-container/team-detail/team-detail.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { PoolsTableComponent } from './pages/pools-container/pools-table/pools-table.component';
import { HomePeopleStatisticContainerComponent } from './pages/home-container/home-people-statistic-container/home-people-statistic-container.component';
import { HomeTradeContainerComponent } from './pages/home-container/home-trade-container/home-trade-container.component';

import { HomeEarnContainerComponent } from './pages/home-container/home-earn-container/home-earn-container.component';
import { HomeEarnAnimationComponent } from './pages/home-container/home-earn-container/home-earn-animation/home-earn-animation.component';
import { HomeEarnDescComponent } from './pages/home-container/home-earn-container/home-earn-desc/home-earn-desc.component';
import { HomeEarnTableComponent } from './pages/home-container/home-earn-container/home-earn-table/home-earn-table.component';
import { HomeWinContainerComponent } from './pages/home-container/home-win-container/home-win-container.component';
import { HomeWinLotteryComponent } from './pages/home-container/home-win-container/home-win-lottery/home-win-lottery.component';
import { HomeWinPredictionComponent } from './pages/home-container/home-win-container/home-win-prediction/home-win-prediction.component';
import { HomeLotteryAnimationComponent } from './pages/home-container/home-win-container/home-lottery-animation/home-lottery-animation.component';
import { HomePredictionAnimationComponent } from './pages/home-container/home-win-container/home-prediction-animation/home-prediction-animation.component';
import {CakeContainerComponent} from './pages/home-container/cake-container/cake-container.component'
import { SmallBarComponent } from './pages/home-container/cake-container/small-bar/small-bar.component';
import { QuickStartComponent } from './pages/home-container/quick-start/quick-start.component';
import { TradeAnimComponent } from './pages/home-container/home-trade-container/trade-anim/trade-anim.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BtnTrisComponent,
    FormsContainerComponent,
    FormDropdownComponent,
    FormTextSearchComponent,
    FormPollComponent,
    FormSliderComponent,
    FormTextTradeComponent,
    NavbarComponent,
    FarmsContainerComponent,
    TestComponent,
    LeaderboardContainerComponent,
    TeamsComponent,
    TeamContainerComponent,
    EarnUndernavbarDivComponent,
    PoolsContainerComponent,
    BountyInfoComponent,
    BtnDoubleComponent,
    FilterComponent,
    FarmsTableComponent,
    FarmsCardsComponent,
    FarmsHeaderComponent,
    WarningBannerComponent,
    DesignSystemComponent,
    TeamDetailComponent,
    HomeContainerComponent,
    PoolsTableComponent,

    HomePeopleStatisticContainerComponent,
    HomeTradeContainerComponent,

    HomeEarnContainerComponent,
    HomeEarnAnimationComponent,
    HomeEarnDescComponent,
    HomeEarnTableComponent,
    HomeWinContainerComponent,
    HomeWinLotteryComponent,
    HomeWinPredictionComponent,
    HomeLotteryAnimationComponent,
    HomePredictionAnimationComponent,
    CakeContainerComponent,
    SmallBarComponent,
      QuickStartComponent,
    TradeAnimComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
