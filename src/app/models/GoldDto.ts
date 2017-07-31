/**
 * Created by Administrator on 2017/7/31.
 */


import { JsonObject, JsonMember } from '../services/typed-json';

@JsonObject
export class GoldDto {

  @JsonMember
  sell:	number;

  @JsonMember
  total: number;

  @JsonMember
  base: number;

  @JsonMember
  purchasable: boolean;
}
