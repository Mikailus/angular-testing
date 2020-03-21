import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformRouteKindKey'
})
export class TransformRouteKindKeyPipe implements PipeTransform {

  public transform(value: string): string {
    const routeKind: { [key: string]: string } = {
      shortest: 'Najkrótsza',
      fastest: 'Najszybsza',
      eko: 'Eko',
      cheapest: 'Najtańsza',
      user: 'Użytkownika',
    };
    ;
    return routeKind[value];
  }
}
