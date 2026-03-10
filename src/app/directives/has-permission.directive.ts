import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective {
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);

  appHasPermission = input.required<string>();
  appHasPermissionOf = input<string[]>([]);

  private hasView = false;

  constructor() {
    effect(() => {
      const permission = this.appHasPermission();
      const userPermissions = this.appHasPermissionOf();
      const hasPermission = userPermissions.includes(permission);

      if (hasPermission && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!hasPermission && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }
}
