import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {
  transform(value: string, visibleCount = 4, maskChar = '*'): string {
    if (!value) return '';
    if (value.length <= visibleCount) return value;

    const masked = maskChar.repeat(value.length - visibleCount);
    return masked + value.slice(-visibleCount);
  }
}
