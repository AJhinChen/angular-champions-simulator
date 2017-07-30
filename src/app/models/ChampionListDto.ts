/**
 * Created by Administrator on 2017/7/29.
 */

import { JsonObject, JsonMember } from '../services/typed-json';
import { ChampionDto } from './ChampionDto';

@JsonObject
export class ChampionListDto {

  @JsonMember
  keys: {};

  @JsonMember({ elements: ChampionDto })
  data: ChampionDto[];
  
  @JsonMember
  version: string;
  
  @JsonMember
  type:	string;
  
  @JsonMember
  format:	string;
}
