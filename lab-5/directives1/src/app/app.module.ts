import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskNgClassComponent } from './task-ng-class/task-ng-class.component';
import { TaskNgStyleComponent } from './task-ng-style/task-ng-style.component';

@NgModule({
  declarations: [AppComponent, TaskNgClassComponent, TaskNgStyleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
