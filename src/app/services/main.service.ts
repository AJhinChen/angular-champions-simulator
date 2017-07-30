import { Injectable } from '@angular/core';

import { ChampionListDto } from '../models/ChampionListDto';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MainService {

  API_KEY = 'RGAPI-ad3f0037-133f-4f76-b38d-01444ecf573f';

  RIOT_SERVER = 'https://na1.api.riotgames.com';

  API_TYPE = '/lol/static-data/v3/champions';

  LOCALE_OPTIONAL = 'locale=zh_CN';

  VERSION_OPTIONAL = 'version=7.15.1';

  TAGS_OPTIONAL = 'tags=image';

  OTHERS_PARAM = 'dataById=false';

  url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=zh_CN&tags=image&dataById=false&api_key=RGAPI-ad3f0037-133f-4f76-b38d-01444ecf573f';

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
      .then(response => response.json().data as any)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
