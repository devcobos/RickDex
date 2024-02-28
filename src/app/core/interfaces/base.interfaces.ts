export interface ResourceBase {
  id: number;
  name: string;
  created: string;
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: number;
  prev: number;
}
