import { ResourceBase, ResponseInfo } from './base.interfaces';
import { Location } from './location.interfaces';

export interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
}

export interface ListCharacterResponse {
  info: ResponseInfo;
  results: Character[];
}
