import { Injectable } from '@angular/core';

import { ChampionListDto } from '../models/ChampionListDto';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainService {

  API_KEY = 'RGAPI-5fd923b1-f4dd-43e2-98f3-c8d76f3a1650';

  RIOT_SERVER = 'https://na1.api.riotgames.com';

  API_TYPE = '/lol/static-data/v3/champions';

  LOCALE_OPTIONAL = 'locale=zh_CN';

  VERSION_OPTIONAL = 'version=7.15.1';

  TAGS_OPTIONAL = 'tags=image';

  OTHERS_PARAM = 'dataById=false';

  url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=zh_CN&tags=image&dataById=false&api_key=RGAPI-5fd923b1-f4dd-43e2-98f3-c8d76f3a1650';

  constructor(private http: Http) { }

  getChampions() {
    this.http.get(this.url) // (4)
      .map(res => res.json()) // (5)
      .subscribe(data => {
        console.log(data);
      });
  }

  getChampionList(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
