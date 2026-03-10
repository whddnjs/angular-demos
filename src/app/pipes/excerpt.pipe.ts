import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'excerpt' })
export class ExcerptPipe implements PipeTransform {
  transform(value: string, limit = 100): string {
    if (!value) return '';
    if (value.length <= limit) return value;

    const end = value.lastIndexOf(' ', limit);
    return value.substring(0, end > 0 ? end : limit) + '...';
  }
}
