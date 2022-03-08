import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './designsystem/footer/footer.component';
import { FormsContainerComponent } from './designsystem/forms-container/forms-container.component';
import { FormDropdownComponent } from './designsystem/forms-container/form-dropdown/form-dropdown.component';
import { FormTextSearchComponent } from './designsystem/forms-container/form-text-search/form-text-search.component';
import { FormPollComponent } from './designsystem/forms-container/form-poll/form-poll.component';
import { FormSliderComponent } from './designsystem/forms-container/form-slider/form-slider.component';
import { FormTextTradeComponent } from './designsystem/forms-container/form-text-trade/form-text-trade.component';
import { NavbarComponent } from './designsystem/navbar/navbar/navbar.component';
import { FarmsContainerComponent } from './pages/farms-container/farms-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormsContainerComponent,
    FormDropdownComponent,
    FormTextSearchComponent,
    FormPollComponent,
    FormSliderComponent,
    FormTextTradeComponent,
    NavbarComponent,
    FarmsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
