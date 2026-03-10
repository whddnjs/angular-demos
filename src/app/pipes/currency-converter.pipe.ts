import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyConverter' })
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, exchangeRate: number, currencyCode = 'USD'): string {
    if (value == null || isNaN(value)) return '';

    const converted = value * exchangeRate;
    return `${converted.toFixed(2)} ${currencyCode}`;
  }
}
