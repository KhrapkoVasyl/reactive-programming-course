import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-ng-if',
  template: `<p *ngIf="condition">Привіт світ!</p>
    <p *ngIf="!condition">Пока світ!</p>

    <p *ngIf="condition; else unset">Привіт Angular!</p>
    <ng-template #unset>
      <p>Пока Angular!</p>
    </ng-template>

    <div *ngIf="condition; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>Then template</ng-template>
    <ng-template #elseBlock>Else template</ng-template>
    <br />

    <!-- Замість використання зірочки (*) для спрощення використання ngIf
         можна використовувати наступний синтаксис:
    <ng-template [ngIf]="condition">
      <p>Привіт світ</p>
    </ng-template>
    <ng-template [ngIf]="!condition">
      <p>Пока світ</p>
    </ng-template> --> `,
})
export class TaskNgIfComponent {
  @Input() condition!: boolean;
}
