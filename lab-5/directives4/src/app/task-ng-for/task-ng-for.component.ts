import { Component } from '@angular/core';

@Component({
  selector: 'app-task-ng-for',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>

    <!-- Еквівалентно наступному:
    <ul> 
    <ng-template ngFor let-item [ngForOf]="items"> 
        <li>{{item}}</li> 
    </ng-template> 
    </ul> -->

    <div>
      <p *ngFor="let item of items; let i = index">{{ i + 1 }}.{{ item }}</p>
    </div>
  `,
})
export class TaskNgForComponent {
  items = ['Tom', 'Bob', 'Sam', 'Bill'];
}
