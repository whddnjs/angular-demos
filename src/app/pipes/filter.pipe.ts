import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter', pure: false })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, property: string): any[] {
    if (!items || !searchText || !property) return items;

    return items.filter(item =>
      item[property]?.toString().toLowerCase().includes(searchText.toLowerCase()),
    );
  }
}
