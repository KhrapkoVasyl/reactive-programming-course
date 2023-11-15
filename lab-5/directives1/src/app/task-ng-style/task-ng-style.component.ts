import { Component } from '@angular/core';

@Component({
  selector: 'app-task-ng-style',
  templateUrl: './task-ng-style.component.html',
  styles: [
    `
      .verdanaFont {
        font-size: 13px;
        font-family: Verdana;
      }

      .segoePrintFont {
        font-size: 16px;
        font-family: 'Segoe Print';
      }

      .navyColor {
        color: navy;
      }
    `,
  ],
})
export class TaskNgStyleComponent {
  isVerdana = true;
  isSegoe = true;
  isNavy = true;
  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };
}
