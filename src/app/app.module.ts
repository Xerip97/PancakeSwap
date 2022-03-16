import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './designsystem/footer/footer.component';
import { BtnTrisComponent } from './btn-tris/btn-tris.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BtnTrisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
