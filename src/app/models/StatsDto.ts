/**
 * Created by Administrator on 2017/7/29.
 */

import { JsonObject, JsonMember } from '../services/typed-json';

@JsonObject
export class StatsDto {

  @JsonMember
  armorperlevel: number;

}
