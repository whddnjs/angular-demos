import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
})
export class UnderlineDirective {
  private el = inject(ElementRef);

  appUnderline = input<string>('black');

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.textDecorationColor = this.appUnderline();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }
}
