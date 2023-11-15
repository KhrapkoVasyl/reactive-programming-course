import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <b>Вправа 1. Директива ngIf</b><br /><app-task-ng-if
        [condition]="condition"
      ></app-task-ng-if>
      <button (click)="toggle()">Toggle</button>
      <br />

      <br />
      <b>Вправа 2. Директива ngFor</b><br /><app-task-ng-for></app-task-ng-for>
      <br />

      <br />
      <b>Вправа 3. Директива ngSwitch</b
      ><br /><app-task-ng-switch></app-task-ng-switch>

      <br />
      <b>Вправа 4. Директива while</b><br />
      <app-task-while [condition]="condition"></app-task-while>
    </div>
  `,
})
export class AppComponent {
  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}
