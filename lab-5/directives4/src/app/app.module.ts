import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskNgIfComponent } from './task-ng-if/task-ng-if.component';
import { TaskNgForComponent } from './task-ng-for/task-ng-for.component';
import { TaskNgSwitchComponent } from './task-ng-switch/task-ng-switch.component';
import { TaskWhileComponent } from './task-while/task-while.component';
import { WhileDirective } from './task-while/while.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskNgIfComponent,
    TaskNgForComponent,
    TaskNgSwitchComponent,
    TaskWhileComponent,
    WhileDirective,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
