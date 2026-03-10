import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit {
  private el = inject(ElementRef<HTMLImageElement>);

  appLazyLoad = input.required<string>();

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.el.nativeElement.src = this.appLazyLoad();
        observer.unobserve(this.el.nativeElement);
      }
    });
    observer.observe(this.el.nativeElement);
  }
}
