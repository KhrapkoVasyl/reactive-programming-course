import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="toggle()">Toggle</button>
    <br />

    <p *appOtherIf="condition">(A) Condition is false.</p>

    <p *appOtherIf="!condition">
      (B) Although the condition is true, this paragraph is displayed.
    </p>
  `,
})
export class AppComponent {
  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}
