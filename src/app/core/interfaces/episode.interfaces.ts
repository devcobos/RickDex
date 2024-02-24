import { ResourceBase, ResponseInfo } from './base.interfaces';

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}

export interface ListEpisodeResponse {
  info: ResponseInfo;
  results: Episode[];
}
