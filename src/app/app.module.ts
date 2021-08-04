import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnboardingFormComponent } from './onboarding-form/onboarding-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
