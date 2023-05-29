import { Component, Injector } from '@angular/core';
import { news } from 'src/app/data/news.data';
import { INew } from 'src/app/model/New';
import { ToastComponent } from '../toast/toast.component';
import { ToastService } from 'src/app/service/toast.service';

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
  isFirstSlide = true;
  news = news;
  showCardFormat: string = 'NACIONAL';

  constructor(
    public _toastService: ToastService
  ){
    this.internationalNews = news.filter(itemNew => itemNew.isInternationalNote);
    this.nationalNews = news.filter(itemNew => !itemNew.isInternationalNote &&  itemNew.hour < '17:20');
    this.breakingNews = news.filter(itemNew => itemNew.hour > '17:20');
  }

  changeFormatNews(title: string) {
    this.showCardFormat = title;
  }

  addNewList(idNew: number): void {
    console.log(idNew);

    const selectedNew = this.nationalNews.find(itemNew => itemNew.id === idNew) || this.internationalNews.find(itemNew => itemNew.id === idNew);
    if (selectedNew && !this.myNewsList.some(item => item.id === idNew)) {
      this.myNewsList.push(selectedNew);
      this._toastService.showCustomToast('Éxito','Se ha agregado una noticia a tu lista.','alert-success')
    } else {
      this._toastService.showCustomToast('Aviso', 'Esta noticia ya está en tu lista.', 'alert-warning', 'bi-exclamation-circle')
    }
  }

  removeNewList(idNew: number): void {
    this.myNewsList = this.myNewsList.filter(itemNew => itemNew.id !== idNew);
  }

  findNote(title: string) {
    this.matchNews = news.filter(itemNew => itemNew.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }
}
