import { Component } from '@angular/core';

@Component({
  selector: 'app-task-ng-class',
  templateUrl: './task-ng-class.component.html',
  styles: [
    `
      .verdanaFont {
        font-size: 15px;
        font-family: Verdana;
      }

      .segoePrintFont {
        font-size: 16px;
        font-family: 'Segoe Print';
      }

      .navyColor {
        color: navy;
      }

      .invisible {
        display: none;
      }
    `,
  ],
})
export class TaskNgClassComponent {
  isVerdana = true;
  isSegoe = true;
  isNavy = true;

  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };

  visibility: boolean = true;

  toggle() {
    this.visibility = !this.visibility;
  }
}
