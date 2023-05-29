import { Component } from '@angular/core';
import { news } from 'src/app/data/news.data';
import { INew } from 'src/app/model/New';
import { ToastService } from 'src/app/service/toast.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { SearchService } from 'src/app/service/search.service';

declare var $: any;

@Component({
  selector: 'newsby-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toast: any;
  myNewsList : INew[] = [];
  nationalNews: INew[] = [];
  internationalNews: INew[] = [];
  matchNews: INew[] = [];
  breakingNews: INew[] = [];
  titleNew: string = '';
  isFirstSlide = true;
  news = news;
  showCardFormat: string = 'NACIONAL';

  constructor(
    public _toastService: ToastService,
    private _searchService: SearchService,
    private router: Router,
    private scroll: ViewportScroller
  ){
    this.internationalNews = news.filter(itemNew => itemNew.isInternationalNote);
    this.nationalNews = news.filter(itemNew => !itemNew.isInternationalNote &&  itemNew.hour < '17:20');
    this.breakingNews = news.filter(itemNew => itemNew.hour > '17:20');
    this.findNote();
  }

  changeFormatNews(title: string) {
    this.showCardFormat = title;
  }

  addNewList(idNew: number): void {
    console.log(idNew);

    const selectedNew = this.nationalNews.find(itemNew => itemNew.id === idNew) || this.internationalNews.find(itemNew => itemNew.id === idNew);
    if (selectedNew && !this.myNewsList.some(item => item.id === idNew)) {
      this.myNewsList.push(selectedNew);
      this._toastService.showCustomToast('Éxito','Se ha agregado una noticia a tu selección.','alert-success')
    } else {
      this._toastService.showCustomToast('Aviso', 'Esta noticia ya está en tu selección.', 'alert-warning', 'bi-exclamation-circle')
    }
  }

  navigateToNew(id: number){
    this.router.navigate(['/news', id]);
    this.scroll.scrollToPosition([0,0]);
  }

  removeNewList(idNew: number): void {
    this.myNewsList = this.myNewsList.filter(itemNew => itemNew.id !== idNew);
  }

  findNote() {
    this._searchService.searchNewsTitle.subscribe(titleNew => {
      this.titleNew = titleNew;
      this.matchNews = news.filter(itemNew => itemNew.title.toLocaleLowerCase().includes(titleNew.toLocaleLowerCase()));
    });
  }
}
