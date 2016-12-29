import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KalkulatorModule} from './kalkulator-module/kalkulator-module.module';
import { AppComponent } from './app.component';
// import { routing } from './kalkulator-module/models/routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KalkulatorModule,
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
