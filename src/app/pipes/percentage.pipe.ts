import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentage' })
export class PercentagePipe implements PipeTransform {
  transform(value: number, total: number, decimals = 0): string {
    if (total === 0) return '0%';
    return ((value / total) * 100).toFixed(decimals) + '%';
  }
}
