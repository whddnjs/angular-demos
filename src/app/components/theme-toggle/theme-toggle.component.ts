import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      (click)="theme.toggle()"
      class="fixed right-6 top-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-lg transition-all hover:scale-110 dark:bg-slate-700"
      [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ theme.isDark() ? '☀️' : '🌙' }}
    </button>
  `,
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);
}
