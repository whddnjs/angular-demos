import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private el = inject(ElementRef);

  appHighlight = input<string>('yellow');

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBackgroundColor(this.appHighlight());
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor('');
  }

  private setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
