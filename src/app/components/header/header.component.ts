import { Component, EventEmitter, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'newsby-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  titleNote: string = '';

  constructor(private _searchService: SearchService){}

  findNote(title: string) {
    this._searchService.searchNewsTitle.emit(title);
  }

}
