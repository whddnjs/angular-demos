import {
  Directive,
  DestroyRef,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit {
  private el = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  debounceTime = input(300);
  appDebounceClick = output<MouseEvent>();

  ngOnInit() {
    fromEvent<MouseEvent>(this.el.nativeElement, 'click')
      .pipe(debounceTime(this.debounceTime()), takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => this.appDebounceClick.emit(event));
  }
}
