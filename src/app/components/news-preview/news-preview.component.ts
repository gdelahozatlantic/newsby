import { Component, Input } from '@angular/core';

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
  @Input() idNote = 0;
  @Input() picture = '';

}
