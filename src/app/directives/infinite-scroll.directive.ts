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
import { debounceTime, filter, fromEvent } from 'rxjs';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnInit {
  private el = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  scrollThreshold = input(100);
  appInfiniteScroll = output<void>();

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'scroll')
      .pipe(
        debounceTime(200),
        filter(() => {
          const { scrollTop, scrollHeight, clientHeight } = this.el.nativeElement;
          return scrollHeight - scrollTop - clientHeight < this.scrollThreshold();
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.appInfiniteScroll.emit());
  }
}
