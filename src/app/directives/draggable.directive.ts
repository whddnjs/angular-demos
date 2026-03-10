import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  private dragging = signal(false);
  private startX = 0;
  private startY = 0;
  private offsetX = 0;
  private offsetY = 0;

  constructor() {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.dragging.set(true);
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.dragging()) return;
    this.offsetX = event.clientX - this.startX;
    this.offsetY = event.clientY - this.startY;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `translate(${this.offsetX}px, ${this.offsetY}px)`
    );
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (!this.dragging()) return;
    this.dragging.set(false);
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }
}
