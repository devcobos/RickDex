import { Location } from './location.interface';

export interface Character {
  id: number;
  name: string;
  url: string;
  created: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
}
