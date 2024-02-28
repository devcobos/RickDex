import { ResourceBase, ResponseInfo } from './base.interfaces';
import { Character } from './character.interfaces';

export interface LocationInterface extends ResourceBase {
  type: string;
  dimension: string;
  residents?: Character[];
}

export interface ListLocationResponse {
  info: ResponseInfo;
  results: LocationInterface[];
}
