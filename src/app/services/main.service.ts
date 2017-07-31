import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

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

  championListUrl = 'https://kr.api.riotgames.com/lol/static-data/v3/champions?locale=zh_CN&tags=image&dataById=false&api_key=RGAPI-5fd923b1-f4dd-43e2-98f3-c8d76f3a1650';

  itemListUrl = 'https://kr.api.riotgames.com/lol/static-data/v3/items?locale=zh_CN&tags=image&dataById=false&api_key=RGAPI-5fd923b1-f4dd-43e2-98f3-c8d76f3a1650';

  runeListUrl = 'https://kr.api.riotgames.com/lol/static-data/v3/runes?locale=zh_CN&tags=image&dataById=false&api_key=RGAPI-5fd923b1-f4dd-43e2-98f3-c8d76f3a1650';

  masteryListUrl = 'https://kr.api.riotgames.com/lol/static-data/v3/masteries?locale=zh_CN&tags=image&dataById=false&api_key=RGAPI-5fd923b1-f4dd-43e2-98f3-c8d76f3a1650';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getChampionList(): Promise<any> {
    return this.http.get(this.championListUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getItemList(): Promise<any> {
    return this.http.get(this.itemListUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getRuneList(): Promise<any> {
    return this.http.get(this.runeListUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getMasteryList(): Promise<any> {
    return this.http.get(this.masteryListUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
}
