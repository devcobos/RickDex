import { ResourceBase } from './base.interfaces';

export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: string[];
}
