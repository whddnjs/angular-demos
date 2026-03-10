import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
  transform(value: any[], property: string): Map<string, any[]> {
    if (!Array.isArray(value) || !property) return new Map();

    return value.reduce((groups, item) => {
      const key = item[property];
      const group = groups.get(key) ?? [];
      group.push(item);
      groups.set(key, group);
      return groups;
    }, new Map<string, any[]>());
  }
}
