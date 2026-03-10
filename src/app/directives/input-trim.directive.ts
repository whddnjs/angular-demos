import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[appInputTrim], textarea[appInputTrim]',
})
export class InputTrimDirective {
  private el = inject(ElementRef<HTMLInputElement>);
  private ngControl = inject(NgControl, { optional: true });

  @HostListener('blur')
  onBlur() {
    const trimmed = this.el.nativeElement.value.trim();
    this.el.nativeElement.value = trimmed;
    this.ngControl?.control?.setValue(trimmed);
  }
}
