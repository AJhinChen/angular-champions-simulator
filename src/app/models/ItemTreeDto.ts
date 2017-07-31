/**
 * Created by Administrator on 2017/7/31.
 */

import { JsonObject, JsonMember } from '../services/typed-json';

@JsonObject
export class ItemTreeDto {

  @JsonMember
  header:	string;

  @JsonMember
  tags: any[];
}
