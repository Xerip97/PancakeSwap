import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './designsystem/footer/footer.component';
import { BtnTrisComponent } from './btn-tris/btn-tris.component';
=======
import { FooterComponent } from './core/layout/footer/footer.component';
import { FormsContainerComponent } from './designsystem/forms-container/forms-container.component';
import { FormDropdownComponent } from './designsystem/forms-container/form-dropdown/form-dropdown.component';
import { FormTextSearchComponent } from './designsystem/forms-container/form-text-search/form-text-search.component';
import { FormPollComponent } from './designsystem/forms-container/form-poll/form-poll.component';
import { FormSliderComponent } from './designsystem/forms-container/form-slider/form-slider.component';
import { FormTextTradeComponent } from './designsystem/forms-container/form-text-trade/form-text-trade.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
    BtnTrisComponent
  ],
  imports: [
    BrowserModule
=======
    FormsContainerComponent,
    FormDropdownComponent,
    FormTextSearchComponent,
    FormPollComponent,
    FormSliderComponent,
    FormTextTradeComponent,
    NavbarComponent,
>>>>>>> develop
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
