import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './designsystem/footer/footer.component';
import { FormsContainerComponent } from './designsystem/forms-container/forms-container.component';
import { FormDropdownComponent } from './designsystem/forms-container/form-dropdown/form-dropdown.component';
import { FormTextSearchComponent } from './designsystem/forms-container/form-text-search/form-text-search.component';
import { FormPollComponent } from './designsystem/forms-container/form-poll/form-poll.component';
import { FormSliderComponent } from './designsystem/forms-container/form-slider/form-slider.component';
import { FormTextTradeComponent } from './designsystem/forms-container/form-text-trade/form-text-trade.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
