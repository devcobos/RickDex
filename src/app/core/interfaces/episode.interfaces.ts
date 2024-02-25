import { ResourceBase, ResponseInfo } from './base.interfaces';
import { Character } from './character.interfaces';

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: Character[];
}

export interface ListEpisodeResponse {
  info: ResponseInfo;
  results: Episode[];
}
