/**
 * Created by Administrator on 2017/7/31.
 */
// stats	InventoryDataStatsDto
// colloq	string
// maps	Map[string, boolean]
// specialRecipe	int
// description	string
// tags	List[string]
// effect	Map[string, string]
// requiredChampion	string
// from	List[string]
// group	string
// consumeOnFull	boolean
// consumed	boolean
// sanitizedDescription	string
// depth	int
// stacks	int

import { JsonObject, JsonMember } from '../services/typed-json';
import { GoldDto } from './GoldDto';
import { ImageDto } from './ImageDto';

@JsonObject
export class ItemDto {

  @JsonMember({ elements: GoldDto })
  gold:	GoldDto[];

  @JsonMember
  plaintext: string;

  @JsonMember
  hideFromAll: boolean;

  @JsonMember
  inStore: boolean;

  @JsonMember
  into: {};

  @JsonMember
  id: number;

  @JsonMember
  image: ImageDto;

  @JsonMember
  name: string;
}
