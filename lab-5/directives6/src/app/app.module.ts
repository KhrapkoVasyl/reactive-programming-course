import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OtherIfDirective } from './other-if.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, OtherIfDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
