import { ResourceBase } from './base.interfaces';

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}
