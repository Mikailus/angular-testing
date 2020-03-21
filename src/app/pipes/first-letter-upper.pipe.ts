import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpper'
})
export class FirstLetterUpperPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      const firstLetter: string = value.charAt(0).toUpperCase();
      return `${firstLetter}${value.slice(1)}`;
    }

    return null;
  }

}
