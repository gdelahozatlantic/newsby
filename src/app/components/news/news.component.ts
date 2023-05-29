import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { news } from 'src/app/data/news.data';
import { INew } from 'src/app/model/New';

@Component({
  selector: 'newsby-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  new: INew = {} as INew;
  newList: INew[] = news;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){
    const idNew: Number = this.route.snapshot.params['id'];
    if (idNew) {
      this.new = this.newList.find(itemNew => itemNew.id == idNew)!;
    }
  }

  navigateBack() {
    this.location.back();
  }

}
