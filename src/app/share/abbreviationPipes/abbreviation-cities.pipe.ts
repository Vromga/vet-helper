import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrCityAndStreet'
})
export class AbbrCityAndStreetPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value === 'Город') {
      return 'г.';
    } else if (value === 'Деревня') {
      return 'д.';
    } else if (value === 'Улица') {
      return 'ул.';
    } else if (value === 'Бульвар') {
      return 'б-р';
    } else if (value === 'Проспект') {
      return 'пр.';
    } else if (value === 'Переулок') {
      return 'пер.';
    } else if (value === 'Тупик') {
      return 'туп.';
    } else if (value === 'Набережная') {
      return 'наб.';
    } else if (value === 'Площадь') {
      return 'пл.';
    } else { return value; }
  }

}
