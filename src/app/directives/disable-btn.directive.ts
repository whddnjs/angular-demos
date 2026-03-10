import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appDisableBtn]',
})
export class DisableBtnDirective {
  private el = inject(ElementRef<HTMLButtonElement>);

  appDisableBtn = input(false);

  constructor() {
    effect(() => {
      const disabled = this.appDisableBtn();
      this.el.nativeElement.disabled = disabled;
      this.el.nativeElement.style.opacity = disabled ? '0.5' : '1';
      this.el.nativeElement.style.cursor = disabled ? 'not-allowed' : 'pointer';
    });
  }
}
