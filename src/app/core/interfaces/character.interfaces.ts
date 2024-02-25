import { ResourceBase, ResponseInfo } from './base.interfaces';
import { Episode } from './episode.interfaces';
import { Location } from './location.interfaces';

export interface Character extends ResourceBase {
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
}

export interface ListCharacterResponse {
  info: ResponseInfo;
  results: Character[];
}

export enum CharacterStatus {
  Dead = 'Dead',
  Alive = 'Alive',
  Unknown = 'unknown',
}

export enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  Unknown = 'unknown',
}
