/**
 * Created by Administrator on 2017/7/29.
 */


import { JsonObject, JsonMember } from '../services/typed-json';

@JsonObject
export class InfoDto {

  @JsonMember
  difficulty: number;

  @JsonMember
  attack: number;

  @JsonMember
  defense: number;

  @JsonMember
  magic: number;
}
