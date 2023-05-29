import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'newsby-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent {
  @Input() title: string = '';
  @Input() section = '';
  @Input() date = '';
  @Input() city = '';
  @Input() idNew = 0;
  @Input() picture = '';
  @Output() emitId: EventEmitter<number> = new EventEmitter();

  constructor(
    private router: Router,
    private scroll: ViewportScroller
  ){}

  saveElement(value: number){
    this.emitId.emit(value);
  }

  navigateToNew(id: number){
    this.router.navigate(['/news', id]);
    this.scroll.scrollToPosition([0,0]);
  }

}
