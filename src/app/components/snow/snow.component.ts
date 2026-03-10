import { Component, inject } from '@angular/core';
import { SnowService } from './snow.service';

@Component({
  selector: 'app-snow',
  template: `
    <div class="fixed inset-0 z-50 pointer-events-none">
      @for (flake of snowService.getSnowflakes(); track flake.id) {
        <div
          class="absolute rounded-full bg-white blur-[1px] pointer-events-none"
          [style.left.%]="flake.x"
          [style.top.%]="flake.y"
          [style.width.px]="flake.size"
          [style.height.px]="flake.size"
          [style.opacity]="flake.opacity">
        </div>
      }
    </div>
  `,
})
export class SnowComponent {
  protected readonly snowService = inject(SnowService);
}
