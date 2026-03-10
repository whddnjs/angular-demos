import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  HighlightDirective,
  UnderlineDirective,
  TooltipDirective,
  ClickOutsideDirective,
  DebounceClickDirective,
  LazyLoadDirective,
  AutoFocusDirective,
  CopyClipboardDirective,
  DraggableDirective,
  InfiniteScrollDirective,
  HasPermissionDirective,
  CharCounterDirective,
  DisableBtnDirective,
  InputTrimDirective,
  ConfirmActionDirective,
} from '../../directives';

@Component({
  selector: 'app-directives-demo',
  imports: [
    RouterLink,
    FormsModule,
    HighlightDirective,
    UnderlineDirective,
    TooltipDirective,
    ClickOutsideDirective,
    DebounceClickDirective,
    LazyLoadDirective,
    AutoFocusDirective,
    CopyClipboardDirective,
    DraggableDirective,
    InfiniteScrollDirective,
    HasPermissionDirective,
    CharCounterDirective,
    DisableBtnDirective,
    InputTrimDirective,
    ConfirmActionDirective,
  ],
  templateUrl: './directives-demo.html',
})
export default class DirectivesDemo {
  readonly dropdownOpen = signal(false);
  readonly debounceCount = signal(0);
  readonly copyText = signal('복사할 텍스트입니다!');
  readonly copyStatus = signal('');
  readonly scrollItems = signal<string[]>(
    Array.from({ length: 20 }, (_, i) => `아이템 ${i + 1}`),
  );
  readonly userPermissions = signal(['read', 'write']);
  readonly isDisabled = signal(false);
  readonly trimValue = signal('');
  readonly confirmMessage = signal('');

  onDebounceClick() {
    this.debounceCount.update(c => c + 1);
  }

  onCopied(success: boolean) {
    this.copyStatus.set(success ? '복사 완료!' : '복사 실패');
    setTimeout(() => this.copyStatus.set(''), 2000);
  }

  loadMore() {
    const current = this.scrollItems();
    const next = Array.from({ length: 10 }, (_, i) => `아이템 ${current.length + i + 1}`);
    this.scrollItems.update(items => [...items, ...next]);
  }

  onConfirmed() {
    this.confirmMessage.set('작업이 실행되었습니다!');
    setTimeout(() => this.confirmMessage.set(''), 2000);
  }
}
