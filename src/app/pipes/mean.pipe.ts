import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mean'
})
export class MeanPipe implements PipeTransform {

  transform(value: number | number[]): number {

    if (!Array.isArray(value)) {
      console.log(value);
      return value;
    }

    if (!value.length) {
      return undefined;
    }

    const sum: number = value.reduce((total, item) => total + item, 0);
    return sum / value.length;
  }
}
