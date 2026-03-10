import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeyValuePipe } from '@angular/common';
import {
  CapitalizeFirstPipe,
  ReversePipe,
  TruncatePipe,
  TimeAgoPipe,
  FileSizePipe,
  FilterPipe,
  SortPipe,
  CurrencyConverterPipe,
  HighlightPipe,
  ExcerptPipe,
  SlugifyPipe,
  StripHtmlPipe,
  PercentagePipe,
  OrdinalPipe,
  JoinPipe,
  MaskPipe,
  PluralizePipe,
  InitialsPipe,
  ReplacePipe,
  RepeatPipe,
  DefaultValuePipe,
  SafeHtmlPipe,
  ChunkPipe,
  FlattenPipe,
  UniquePipe,
  GroupByPipe,
  RangePipe,
  TitleCasePipe,
  CamelCasePipe,
  CountdownPipe,
} from '../../pipes';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    RouterLink,
    KeyValuePipe,
    CapitalizeFirstPipe,
    ReversePipe,
    TruncatePipe,
    TimeAgoPipe,
    FileSizePipe,
    FilterPipe,
    SortPipe,
    CurrencyConverterPipe,
    HighlightPipe,
    ExcerptPipe,
    SlugifyPipe,
    StripHtmlPipe,
    PercentagePipe,
    OrdinalPipe,
    JoinPipe,
    MaskPipe,
    PluralizePipe,
    InitialsPipe,
    ReplacePipe,
    RepeatPipe,
    DefaultValuePipe,
    SafeHtmlPipe,
    ChunkPipe,
    FlattenPipe,
    UniquePipe,
    GroupByPipe,
    RangePipe,
    TitleCasePipe,
    CamelCasePipe,
    CountdownPipe,
  ],
  templateUrl: './pipes-demo.html',
})
export default class PipesDemo {
  readonly longText =
    'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.';
  readonly htmlString = '<p>Hello <strong>World</strong></p><script>alert("xss")</script>';
  readonly tags = signal(['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind']);
  readonly nestedArray = [[1, 2], [3, [4, 5]], [6]];
  readonly duplicates = [1, 2, 2, 3, 3, 3, 4, 5, 5];
  readonly cardNumber = '4111111111111234';
  readonly searchTerm = signal('');

  readonly fruits = [
    { name: 'Banana', category: 'tropical' },
    { name: 'Apple', category: 'temperate' },
    { name: 'Mango', category: 'tropical' },
    { name: 'Cherry', category: 'temperate' },
    { name: 'Pineapple', category: 'tropical' },
  ];

  readonly pastDate = new Date(Date.now() - 3 * 3600 * 1000).toISOString();
  readonly futureDate = new Date(Date.now() + 2 * 86400000 + 5 * 3600000).toISOString();

  updateSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }
}
