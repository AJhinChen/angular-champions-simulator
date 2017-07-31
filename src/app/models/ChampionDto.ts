/**
 * Created by Administrator on 2017/7/29.
 */

import { JsonObject, JsonMember } from '../services/typed-json';
import { InfoDto } from './InfoDto';
import { StatsDto } from './StatsDto';
import { ImageDto } from './ImageDto';
import { SkinDto } from './SkinDto';
import { PassiveDto } from './PassiveDto';
import { RecommendedDto } from './RecommendedDto';
import { ChampionSpellDto } from './ChampionSpellDto';

@JsonObject
export class ChampionDto {

  @JsonMember({ elements: InfoDto })
  info: InfoDto[];

  @JsonMember
  enemytips: {};

  @JsonMember({ elements: StatsDto })
  stats: StatsDto[];

  @JsonMember
  name:	string;

  @JsonMember
  title:	string;

  @JsonMember
  image:	ImageDto;

  @JsonMember
  tags:	{};

  @JsonMember
  partype:	string;

  @JsonMember({ elements: SkinDto })
  skins:	SkinDto[];

  @JsonMember
  passive: PassiveDto;

  @JsonMember({ elements: RecommendedDto })
  recommended: RecommendedDto[];

  @JsonMember
  allytips:	{};

  @JsonMember
  key:	string;

  @JsonMember
  lore:	string;

  @JsonMember
  id:	number;

  @JsonMember
  blurb:	string;

  @JsonMember({ elements: ChampionSpellDto })
  spells:	ChampionSpellDto[];
}
