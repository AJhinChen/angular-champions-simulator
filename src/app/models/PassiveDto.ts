/**
 * Created by Administrator on 2017/7/29.
 */


import { JsonObject, JsonMember } from '../services/typed-json';
import { ImageDto } from './ImageDto';

@JsonObject
export class PassiveDto {

  @JsonMember({ elements: ImageDto })
  image:	ImageDto;

}
