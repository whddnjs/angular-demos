import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'repeat' })
export class RepeatPipe implements PipeTransform {
  transform(value: string, count = 1, separator = ''): string {
    if (!value) return '';
    return Array(count).fill(value).join(separator);
  }
}
