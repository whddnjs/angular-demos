import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirmAction]',
})
export class ConfirmActionDirective {
  appConfirmAction = input('정말 실행하시겠습니까?');
  confirmed = output<void>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (window.confirm(this.appConfirmAction())) {
      this.confirmed.emit();
    }
  }
}
