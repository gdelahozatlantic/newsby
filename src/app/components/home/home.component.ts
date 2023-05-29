import { Component } from '@angular/core';
import { news } from 'src/app/data/news.data';
import { INew } from 'src/app/model/New';

@Component({
  selector: 'newsby-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isInternationalNote = false;
  nationalNotes: INew[] = [];
  internationalNotes: INew[] = [];
  matchNotes: INew[] = [];
  breakingNews: INew[] = [];
  isFirstSlide = true;
  news = news;
  showCardFormat: string = 'NACIONAL';

  constructor(){
    this.internationalNotes = news.filter(itemNew => itemNew.isInternationalNote);
    this.nationalNotes = news.filter(itemNew => !itemNew.isInternationalNote &&  itemNew.hour < '17:20');
    this.breakingNews = news.filter(itemNew => itemNew.hour > '17:20');
  }

  changeFormatNews(title: string) {
    this.showCardFormat = title;
  }

  removeNoteList(idNote: number): void {
    this.breakingNews = this.breakingNews.filter(item => item.id !== idNote);
  }

  findNote(title: string) {
    this.matchNotes = news.filter(itemNew => itemNew.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }
}
