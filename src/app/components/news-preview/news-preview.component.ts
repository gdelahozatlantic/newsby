import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  saveElement(value: number){
    this.emitId.emit(value);
  }

}
