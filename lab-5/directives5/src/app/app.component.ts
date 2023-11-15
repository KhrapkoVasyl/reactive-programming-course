import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>
        <label for="firstNumber">Input first number:</label>
        <input id="firstNumber" [(ngModel)]="firstNumber" type="number" />
      </div>

      <br />

      <div>
        <label for="secondNumber">Input second number:</label>
        <input id="secondNumber" [(ngModel)]="secondNumber" type="number" />
      </div>

      <div>
        <p *sum="let result; from: firstNumber; and: secondNumber">
          Result: {{ result }}
        </p>
      </div>
    </div>
  `,
})
export class AppComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
}
