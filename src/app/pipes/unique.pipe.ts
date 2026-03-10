import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'unique' })
export class UniquePipe implements PipeTransform {
  transform(value: any[], property?: string): any[] {
    if (!Array.isArray(value)) return [];

    if (property) {
      const seen = new Set();
      return value.filter(item => {
        const key = item[property];
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    return [...new Set(value)];
  }
}
