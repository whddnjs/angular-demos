import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
  transform(value: any[], size = 2): any[][] {
    if (!Array.isArray(value)) return [];

    const result: any[][] = [];
    for (let i = 0; i < value.length; i += size) {
      result.push(value.slice(i, i + size));
    }
    return result;
  }
}
