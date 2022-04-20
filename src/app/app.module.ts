import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnTrisComponent } from './designsystem/buttons/btn-tris/btn-tris.component';
import { FooterComponent } from './core/layout/footer/footer.component';
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
import { FilterComponent } from './core/layout/filter/filter.component';
import { FarmsTableComponent } from './pages/farms-container/farms-table/farms-table.component';
import { FarmsCardsComponent } from './pages/farms-container/farms-cards/farms-cards.component';
import { FarmsHeaderComponent } from './pages/farms-container/farms-header/farms-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WarningBannerComponent } from './core/warning-banner/warning-banner.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { TeamDetailComponent } from './pages/leaderboard-container/team-container/team-detail/team-detail.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { PoolsTableComponent } from './pages/pools-container/pools-table/pools-table.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
