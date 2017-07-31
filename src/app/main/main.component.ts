import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MainService } from '../services/main.service';
import { ItemDto } from '../models/ItemDto';
import { ChampionDto } from '../models/ChampionDto';
import { TypedJSON } from '../services/typed-json';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  champions: ChampionDto[];

  items: ItemDto[];

  version: string;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService
      .getChampionList()
      .then(jsonData => {
        this.version = jsonData.version;
        var champions = [];
        var data = jsonData.data;
        for (var key in data) {
          let champion = TypedJSON.parse(data[key], ChampionDto);
          champions.push(champion);
          // console.log(item);
        }
        this.champions = champions;
      });
    this.mainService
      .getItemList()
      .then(jsonData => {
        var items = [];
        var data = jsonData.data;
        for (var key in data) {
          let item = TypedJSON.parse(data[key], ItemDto);
          items.push(item);
          console.log(item);
        }
        this.items = items;
      });
  }

}
