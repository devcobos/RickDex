export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface ResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
