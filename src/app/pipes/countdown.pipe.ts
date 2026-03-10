import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'countdown' })
export class CountdownPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';

    const target = new Date(value).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return 'Expired';

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
