import { Component } from '@angular/core';
import { LocalCounterService } from './services/local-counter.service';
import { AppCounterService } from './services/app-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LocalCounterService],
})
export class AppComponent {
  constructor(
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
  ) {}
}
