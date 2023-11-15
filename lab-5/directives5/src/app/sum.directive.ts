import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({ selector: '[sum]' })
export class SumDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  private _firstNumber: number = 0;
  private _secondNumber: number = 0;
  private result: number = 0;

  @Input({ required: true }) set sumFrom(value: number) {
    this._firstNumber = this.validateInputedValue(value);
    this.calculateSum();
  }

  @Input({ required: true }) set sumAnd(value: number) {
    this._secondNumber = this.validateInputedValue(value);
    this.calculateSum();
  }

  private validateInputedValue(value: number): number {
    const parsedValue = Number(value);
    if (!parsedValue || isNaN(parsedValue)) {
      return 0;
    }

    return parsedValue;
  }

  private refreshViewWithResultValue() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: this.result,
    });
  }

  ngOnInit() {
    this.refreshViewWithResultValue();
  }

  private addNumbers() {
    return this._firstNumber + this._secondNumber;
  }

  private calculateSum() {
    this.result = this.addNumbers();
    this.refreshViewWithResultValue();
  }
}
