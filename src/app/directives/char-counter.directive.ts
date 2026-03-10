import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCharCounter]',
})
export class CharCounterDirective {
  private el = inject(ElementRef<HTMLInputElement | HTMLTextAreaElement>);
  private renderer = inject(Renderer2);
  private counterEl: HTMLElement | null = null;

  appCharCounter = input(100);

  @HostListener('input')
  onInput() {
    this.updateCounter();
  }

  @HostListener('focus')
  onFocus() {
    this.createCounter();
    this.updateCounter();
  }

  @HostListener('blur')
  onBlur() {
    this.removeCounter();
  }

  private createCounter() {
    if (this.counterEl) return;
    this.counterEl = this.renderer.createElement('small');
    this.renderer.setStyle(this.counterEl, 'display', 'block');
    this.renderer.setStyle(this.counterEl, 'textAlign', 'right');
    this.renderer.setStyle(this.counterEl, 'fontSize', '12px');
    this.renderer.setStyle(this.counterEl, 'color', '#888');
    this.renderer.setStyle(this.counterEl, 'marginTop', '4px');
    const parent = this.el.nativeElement.parentNode;
    this.renderer.insertBefore(
      parent,
      this.counterEl,
      this.el.nativeElement.nextSibling
    );
  }

  private updateCounter() {
    if (!this.counterEl) return;
    const current = this.el.nativeElement.value.length;
    const max = this.appCharCounter();
    this.counterEl.textContent = `${current} / ${max}`;
    this.renderer.setStyle(
      this.counterEl,
      'color',
      current > max ? '#e74c3c' : '#888'
    );
  }

  private removeCounter() {
    if (this.counterEl) {
      this.renderer.removeChild(this.counterEl.parentNode, this.counterEl);
      this.counterEl = null;
    }
  }
}
