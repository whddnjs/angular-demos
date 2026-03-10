import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchTerm: string): string {
    if (!value || !searchTerm) return value;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return value.replace(regex, '<mark class="bg-yellow-200 px-0.5 rounded">$1</mark>');
  }
}
