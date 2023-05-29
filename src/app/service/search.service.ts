import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchNewsTitle = new EventEmitter<string>();

  constructor() { }
}
