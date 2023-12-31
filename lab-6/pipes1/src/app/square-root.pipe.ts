import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRoot',
})
export class SquareRootPipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    return Math.sqrt(value);
  }
}
