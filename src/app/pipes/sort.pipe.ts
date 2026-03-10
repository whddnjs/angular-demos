import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort', pure: false })
export class SortPipe implements PipeTransform {
  transform(items: any[], property: string, direction: 'asc' | 'desc' = 'asc'): any[] {
    if (!items || !property) return items;

    return [...items].sort((a, b) => {
      const valA = a[property]?.toString().toLowerCase();
      const valB = b[property]?.toString().toLowerCase();
      if (valA < valB) return direction === 'asc' ? -1 : 1;
      if (valA > valB) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
