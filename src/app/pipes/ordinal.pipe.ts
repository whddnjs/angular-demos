import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) return '';

    const suffixes = ['th', 'st', 'nd', 'rd'];
    const mod100 = value % 100;
    const suffix = suffixes[(mod100 - 20) % 10] || suffixes[mod100] || suffixes[0];

    return value + suffix;
  }
}
