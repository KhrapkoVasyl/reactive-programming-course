import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <p valuesize="{{ selectedSize }}" [defaultSize]="'14px'">Hello Angular</p>
    <p>Angular представляє модульну архітектуру додатку</p>
    <p>
      Введіть розмір шрифта:
      <input type="text" placeholder="28px" [(ngModel)]="selectedSize" />
    </p>
    <p [ngStyle]="{ 'font-size': selectedSize, 'font-weight': 'bold' }">
      Розмір шрифта зараз {{ selectedSize }}!
    </p>
  </div>`,
})
export class AppComponent {
  selectedSize = '28px';
}
