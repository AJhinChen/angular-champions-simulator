/**
 * Created by Administrator on 2017/7/29.
 */

import { JsonObject, JsonMember } from '../services/typed-json';

@JsonObject
export class ImageDto {

  @JsonMember
  full: string;

  @JsonMember
  group: string;

  @JsonMember
  sprite: string;
}
