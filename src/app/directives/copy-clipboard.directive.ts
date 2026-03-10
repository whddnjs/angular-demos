import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[appCopyClipboard]',
})
export class CopyClipboardDirective {
  appCopyClipboard = input.required<string>();
  copied = output<boolean>();

  @HostListener('click')
  async onClick() {
    try {
      await navigator.clipboard.writeText(this.appCopyClipboard());
      this.copied.emit(true);
    } catch {
      this.copied.emit(false);
    }
  }
}
