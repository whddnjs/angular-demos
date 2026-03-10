import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'flatten' })
export class FlattenPipe implements PipeTransform {
  transform(value: any[], depth = Infinity): any[] {
    if (!Array.isArray(value)) return [];
    return value.flat(depth);
  }
}
